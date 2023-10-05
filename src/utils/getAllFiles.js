const fs = require("fs");
const path = require("path");

module.exports = (directory, foldersOnly = false) => {
    let fileNames = [];

    const files = fs.readdirSync(directory, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(directory, file.name);

        if (foldersOnly && file.isDirectory()) {
            fileNames.push(filePath);
        }

        if (!foldersOnly && file.isFile()) {
            fileNames.push(filePath);
        }
    }

    return fileNames;
};
