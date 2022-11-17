const express = require('express');
const app = express();
app.use(express.json());
const db = require('./Connector/db');
app.use(require("./Routes/index"));

db();

app.listen(4000, () => {
    console.log("server is running at 4000")
})