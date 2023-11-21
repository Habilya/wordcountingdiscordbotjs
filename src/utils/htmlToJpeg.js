const nodeHtmlToImage = require('node-html-to-image');

let chromiumBrowserExecutablePath;

function initChromiumBrowserExecutablePath(path) {
    chromiumBrowserExecutablePath = path;
}

async function transformHTMLToJPEG(html) {
    if(!chromiumBrowserExecutablePath) {
        return;
    }

    return await nodeHtmlToImage({
        html: html,
        quality: 100,
        type: 'jpeg',
        puppeteerArgs: {
            args: ['--no-sandbox'],
            executablePath: chromiumBrowserExecutablePath,
        },
        encoding: 'buffer',
    });
}

exports.initChromiumBrowserExecutablePath = initChromiumBrowserExecutablePath;
exports.transformHTMLToJPEG = transformHTMLToJPEG;
