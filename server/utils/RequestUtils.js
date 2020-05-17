/*
 * RequestUtils.js
 * services/dhome/utils
 *
 * Created by Li Theen Kok on 11 Oct 2017.
 * Copyright (C) 2017 Apptivity Lab. All Rights Reserved.
 */

const {
    RequestError
} = require("../errors")

class RequestUtils {

    static requirePayload(payload, fields) {
        if (!payload) {
            throw new RequestError(RequestError.errorCodes().missingPayload)
        }

        const missingProperties = []
        fields.forEach((key) => {
            if (!payload.hasOwnProperty(key) || !payload[key] || ((payload[key] instanceof String) && payload[key].trim().length === 0)) {
                missingProperties.push(key)
            }
        })
        if (missingProperties.length > 0) {
            throw new RequestError(RequestError.errorCodes(`Missing fields in payload: ${missingProperties.join(", ")}`.trim()).missingFields)
        }
    }

    static requireQuery(query, keys) {
        const missingQueryParams = []
        keys.forEach((key) => {
            if (!query.hasOwnProperty(key) || !query[key] || query[key].trim().length === 0) {
                missingQueryParams.push(key)
            }
        })
        if (missingQueryParams.length > 0) {
            throw new RequestError(RequestError.errorCodes(`Missing parameters: ${missingQueryParams.join(", ")}`.trim()).missingFields)
        }
    }

    static requireValidFormat(value, validatorFunction, message = null) {
        if (!validatorFunction(value)) {
            throw new RequestError(RequestError.errorCodes(message).invalidDataFormat)
        }
    }

    static requirePayloadMiddleware(fields) {
        return (req, res, next) => {
            try {
                RequestUtils.requirePayload(req.body, fields)
                next()
            } catch (requestError) {
                return res.status(400).json({
                    "error": requestError.json
                })
            }
        }
    }

    static requireQueryMiddleware(keys) {
        return (req, res, next) => {
            try {
                RequestUtils.requireQuery(req.query, keys)
                next()
            } catch (requestError) {
                return res.status(400).json({
                    "error": requestError.json
                })
            }
        }
    }
}

module.exports = RequestUtils
