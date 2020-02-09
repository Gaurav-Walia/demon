const express = require('express');
const app = express();
require('dotenv').config();
var result = require('./solution');
var expensive = new result();
var fs = require('fs');

// Convert output from solution.js to JSON object
var jsonObject = JSON.stringify(expensive);

// Writing output to resultset.json file
fs.writeFile('./resultset.json', jsonObject, "utf8", (error) => {
    if(error) {
        return console.log(error);
    }
    console.log('Writing to file >> resultset.json');
})

app.listen((process.env.PORT || 3000), () => {
    console.log(`Server is up and running at port ${process.env.PORT}`);
})