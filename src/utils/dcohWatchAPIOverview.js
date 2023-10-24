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


/*
TODO why u no work!!???
            
        const options = {
            hostname: 'dcoh.watch',
            port: 443,
            path: '/api/v1/Overwatch/OverviewV2',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        https.request(options, (response) => {
            let data = '';

            response.setEncoding('utf8');

            // A chunk of data has been received.
            response.on('data', (chunk) => {
                console.log(chunk);
                data += chunk;
            });

            response.on('end', (interaction) => {
                const filteredSystems = data.filter(x =>
                    x.features.includes("ThargoidControlledReactivationMissions") &&
                    (x.thargoidLevel.level == 20 || x.thargoidLevel.level == 30)
                );

                let replyText = '';

                for(const system of filteredSystems) {
                    replyText += `${system.name}\n`;
                }

                interaction.editReply({
                    content: '```' + replyText + '```',
                });
            });

        });
*/
