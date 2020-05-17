const moment = require("moment");
let dateNow = moment.utc().format("YYYY-MM-DD");

const config = {
    
    "logger": {
        "dir_path": process.env.LOG_DIR_PATH || "logs",
        "filename": process.env.LOG_FILENAME || `logs/test-v1-${dateNow}.log`
    },
    
}

module.exports = config;