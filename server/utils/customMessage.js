const customMessage = (code,message) => {
    return (req, res, next) => {
        res.status(400).json({
            "error":{
                "code":code,
                "message": message
            }
        })
    }
}

module.exports = customMessage
