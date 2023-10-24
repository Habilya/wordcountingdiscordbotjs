const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const https = require('https');
const { AsciiTable3, AlignmentEnum } = require('ascii-table3');

module.exports = {
    name: "findaxreactivationmissions",
    description: "This command will find systems that offer AX reactivation missions.",
    isDeleted: false,

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async(discordBot, interaction) => {

        try {
            // have to use deferred reply, because the processing time is long...
            await interaction.deferReply();

            https.get(`https://dcoh.watch/api/v1/Overwatch/OverviewV2`, resp => {
                let data = "";

                // A chunk of data has been recieved.
                resp.on("data", chunk => {
                    data += chunk;
                });

                // The whole response has been received. Printout the result.
                resp.on("end", () => {

                    const overview = JSON.parse(data);

                    const filteredSystems = overview.systems.filter(x =>
                        x.features.includes("ThargoidControlledReactivationMissions") &&
                        (x.thargoidLevel.level == 20 || x.thargoidLevel.level == 30)
                    );

                    var table = new AsciiTable3('AX Reactivation missions')
                        .setHeading('System Name', 'Thargoid State', 'Titan')
                        .setAlign(3, AlignmentEnum.CENTER)
                        .setStyle('unicode-double');

                    for(const system of filteredSystems) {
                        table.addRow(system.name, system.thargoidLevel.name, system.maelstrom.name);
                    }

                    interaction.editReply({
                        content: '```' + table.toString() + '```',
                    });
                });
            });



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
        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Reactivation Missions) while calling API: ${error}\n${error.stack}`);
        }
    },
};
