const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

/*
RETURN example :
[
    {
        Station: 'Burn Landing Abandoned',
        StarSystem: 'HIP 38235',
        Economy: 'Military',
        Government: 'Corporate',
        Allegiance: 'Independent',
        StationDistance: '265 Ls',
        Dist: '194.32'
    },
    {
        Station: 'Sasaki Military Expedition Abandoned',
        StarSystem: 'HIP 38235',
        Economy: 'Military',
        Government: 'Corporate',
        Allegiance: 'Independent',
        StationDistance: '266 Ls',
        Dist: '194.32'
    }
]
*/

module.exports = async(systemName) => {

    const URL = `https://inara.cz/elite/nearest-stations/?formbrief=1&ps1=${systemName.replace(/\s+/g, '+')}&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B%5D=3&ps3=&pi24=0`;

    const response = await axios.get(URL);

    const dom = new JSDOM(response.data);

    const parsedJSON = getJSON(dom.window.document.querySelector('table.tablesortercollapsed'));

    return parsedJSON;
};


function getJSON(table) {
    // thead
    const thead = Array.from(table.tHead.rows[0].children).map((el) =>
        el.textContent
        .replace("St dist", "StationDistance")
        .replace("Star system", "StarSystem"));

    let rows = [];

    for(const tRow of table.tBodies[0].rows) {
        var row = {};
        for(var j = 0; j < thead.length; j++) {
            const key = `${thead[j].toString()}`;
            row[key] = tRow.cells[j].textContent
                .replace("︎︎", "")
                .replace(" Ly︎", "");
        }
        rows.push(row);
    }

    return rows;
}
