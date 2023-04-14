const express = require('express');
const app = express();
const cookieParser = require("cookie-Parser");
app.use(cookieParser());
app.use(express.json());
const db = require('./Connector/db');
app.use(require("./Routes/index"));

db().then(
    () => {
        app.listen(4000, () => {
            console.log("server is running at 4000");
        });
    }
);

