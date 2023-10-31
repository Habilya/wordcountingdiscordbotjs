const getLocalCommands = require('../../utils/getLocalCommands');
const logger = require('../../logger/logger');

module.exports = async (discordBot, interaction) => {

    if(!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);

        if(!commandObject) return;

        if(commandObject.permissionsRequired?.length) {
            for(const permission of commandObject.permissionsRequired) {
                if(!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: "You don't have permissions to run that command.",
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        if(commandObject.botPermissions?.length) {
            for(const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;

                if(!bot.permissions.has(permission)) {
                    interaction.reply({
                        content: "I don't have enough permissions.",
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        await commandObject.callback(discordBot, interaction);
    } catch(error) {
        discordBot.getLogger().error(`Unhandled exception while running command: ${interaction.commandName} - ${error}\n${error.stack}`);
    }
};
