const fs = require("fs")
const winston = require("winston")

/**
 * Creates an instance of winston.Logger
 * @param {Object} config Object containing `dir_path` and `filename` configuration
 */
const logger = (config) => {
    if (!fs.existsSync(config["dir_path"])) {
        fs.mkdirSync(config["dir_path"])
    }

    return new winston.Logger({
        "transports": [
            new winston.transports.File({
                "level": "info",
                "filename": config["filename"],
                "handleExceptions": true,
                "json": false,
                "maxsize": 50 * 1024 * 1024, // 50MB
                "maxFiles": 5,
                "colorize": false
            }),
            new winston.transports.Console({
                "level": "info",
                "handleExceptions": true,
                "json": false,
                "colorize": true
            })
        ]
    })
}

module.exports = logger
