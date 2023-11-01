const nodeHtmlToImage = require('node-html-to-image');

module.exports = async(html) => {
    return await nodeHtmlToImage({
        html: html,
        quality: 100,
        type: 'jpeg',
        puppeteerArgs: {
            args: ['--no-sandbox'],
            executablePath: '/usr/bin/chromium-browser',
        },
        encoding: 'buffer',
    });
};
