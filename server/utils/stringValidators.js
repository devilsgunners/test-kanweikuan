const stringValidators = {}

stringValidators.isValidPhone = (input) => {
    //const re = /^60|^65[0-9]*$/
    const re = /([\(\+])?([0-9]{1,3}([\s])?)?([\+|\(|\-|\)|\s])?([0-9]{2,4})([\-|\)|\.|\s]([\s])?)?([0-9]{2,4})?([\.|\-|\s])?([0-9]{4,8})/;
    return re.test(input)
}

stringValidators.isValidEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input)
}

stringValidators.isValidUuid = (input) => {
    return (/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(input))
}

stringValidators.isValidISO8601TimestampString = (input) => {
    if (input.indexOf("Z") !== -1) {
        return /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(input)
    }
    return /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}[+-]\d{2}:\d{2}/.test(input)
}

stringValidators.isValidPhone = (input) => {
    //const re =/^60|^65[0-9]*$/
    const re = /([\(\+])?([0-9]{1,3}([\s])?)?([\+|\(|\-|\)|\s])?([0-9]{2,4})([\-|\)|\.|\s]([\s])?)?([0-9]{2,4})?([\.|\-|\s])?([0-9]{4,8})/;
    return re.test(input)
}

stringValidators.isValidName = (input) => {
    const re = /^[a-zA-Z]{3}/
    return re.test(input)
}

stringValidators.isValidFloat = (input) => {
    const re = /^[+-]?([0-9]+[.])?[0-9]+$/
    return re.test(input)
}

module.exports = stringValidators
