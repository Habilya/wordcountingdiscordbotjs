const https = require('https');

module.exports = (apiResponseJSONDataCallBack) => {
    https.get(`https://dcoh.watch/api/v1/Overwatch/OverviewV2`, resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
            data += chunk;
        });

        // The whole response has been received.
        resp.on("end", () => {
            const overview = JSON.parse(data);
            apiResponseJSONDataCallBack(overview);
        });
    });
};
