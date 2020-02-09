var tempResult = large = groupByIp = {};
var result = ipReject = ipAllow = [];
var temp = 0;
var _ = require("underscore");
let clicksData = require('./clicks.json');

module.exports = function () {
    groupByIp = _.groupBy(clicksData, f => {return f.ip});

    // Finding more than 10 clicks in the overall array of clicks
    for (var key in groupByIp) {
        if (groupByIp[key].length > 10) {
            ipReject = groupByIp[key];
        }
    }

    // Remove ipReject from clicksData
    ipAllow = clicksData.filter(x => !ipReject.includes(x));
    // console.log(`IP Allow: ${JSON.stringify(ipAllow)}`);

    // Add hour element in clicksData JSON
    for (var i = 0; i < ipAllow.length - 1; i++) {
        ipAllow[i].hour = ipAllow[i].timestamp.split(" ")[1].split(":")[0];
    }

    // Find most expensive click among clicks list
    tempResult = ipAllow[0];
    for (var j = 0; j < ipAllow.length-1; j++) {
        if (ipAllow[j].hour == ipAllow[j+1].hour) {
            if (tempResult.amount < ipAllow[j+1].amount) {
                tempResult = ipAllow[j+1];
                large = tempResult; temp = 1;
            }
        } else {
            tempResult = ipAllow[j];
            if (temp == 0) {
                if (ipAllow[j].hour != ipAllow[j+1].hour) {
                    result.push(tempResult);
                    console.log(JSON.stringify(result));
                } 
            } else {
                result.push(large);
                temp = 0;
                console.log(JSON.stringify(result));
            }
        }
    }  
    return result;  
}

