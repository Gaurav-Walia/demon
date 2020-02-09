const chai = require('chai');
const expect = require('chai').expect;
const fs = require('fs');

describe ("Before running npm start", function() {
    var tests;
    it("clicks.json should be present", () => {
        expect(fs.existsSync('clicks.json')).to.be.true
    });

    it("clicks.json file should be non empty", () => {
        fs.readFile('./clicks.json', 'utf8', (error, data) => {
            if (error) {
                return false
            } else {
                tests = JSON.parse(data);
                expect(tests.length > 0);
            }
        }); 
    });
});

describe("On running npm start", function() {
    var tests;
    it("should create a file named resultset.json", () => {
        expect(fs.existsSync('resultset.json')).to.be.true
    });
    
    it("resultset.json file should be non empty", () => {
        fs.readFile('./resultset.json', 'utf8', (error, data) => {
            if (error) {
                return false;
            } else {
                tests = JSON.parse(data);
                expect(tests.length > 0);
            }
        }); 
    });
});
