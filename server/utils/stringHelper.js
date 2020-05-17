var stringHelper = {}

stringHelper.toUpperCaseFields = (object, fields = []) => {
    fields.forEach(field => {
        if(object[field]) object[field] = object[field].toUpperCase()
    });
    return object
}

module.exports = stringHelper