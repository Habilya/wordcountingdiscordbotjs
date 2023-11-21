function getJSONFromHTMLTable(table) {
    // thead (Header adjustment so that fields of JSON objects would appear uniformily)
    const thead = Array.from(table.tHead.rows[0].children).map((el) =>
        el.textContent
        .replace("St dist", "StationDistance")
        .replace("Star system", "StarSystem"));

    let rows = [];

    // creating an array of JSON objects based on HTML rows
    for(const tRow of table.tBodies[0].rows) {
        let row = {};
        for(let j = 0; j < thead.length; j++) {
            const key = `${thead[j].toString()}`;
            row[key] = tRow.cells[j].textContent
                .replaceAll("︎︎", "")
                .replaceAll("︎", "")
                .replaceAll(" Ly︎", "")
                .replaceAll("0 Ly", "0")
                .replaceAll(" Ly", "");
            // TODO: Probably should think of a more elegant way of filtering weird Emojiis and html icons

        }
        rows.push(row);
    }

    return rows;
}

exports.getJSONFromHTMLTable = getJSONFromHTMLTable;
