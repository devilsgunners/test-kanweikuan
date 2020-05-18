const express = require("express");
const app = express()
app.locals.config = require("./config")
app.locals.logger = require("./utils/logger")(app.locals.config["logger"])
process.on("uncaughtException", (error) => {
    app.locals.logger.debug(`Uncaught Error: ${JSON.stringify({...error})}`)
})

const multer = require("multer");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const http = require('http').Server(app); // use http server for socket.io instead of express app
var fs = require("fs");

// connection configurations
app.use(morgan("combined", {
    "stream": {
        "write": (message) => {
            app.locals.logger.info(message)
        }
    }
}))
app.use(cors(app.locals.config.cors))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}))


import Card from "./controllers/Card/index";

app.use("/card", 
    Card.router()
)

app.get('/ping', function (req, res, next) {
    return res.status(200).json("ok");
});

http.listen(9000, () => {
    console.log("Service listening on port 9000")
})