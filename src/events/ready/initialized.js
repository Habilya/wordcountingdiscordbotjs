module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity({
        name: process.env.STATUS_ACTIVITY_NAME
    });
};
