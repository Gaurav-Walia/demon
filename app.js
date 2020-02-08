const express = require('express');
const app = express();
require('dotenv').config();
var result = require('./solution');
var expensive = new result();

console.log(`RESULT: ${JSON.stringify(expensive)}`);

app.listen((process.env.PORT || 3000), () => {
    console.log(`Server is up and running at port ${process.env.PORT}`);
})