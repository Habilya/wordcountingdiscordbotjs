const axios = require('axios');

module.exports = async(systemName, radius, minRadius = 0) => {

    let minRadiusParam = '';
    if(minRadius > 0) {
        minRadiusParam = `&minRadius=${minRadius}`;
    }

    const URL = `https://www.edsm.net/api-v1/sphere-systems/
        ?systemName=${systemName.replace(' ', '+')}
        &radius=${radius}
        ${minRadiusParam}`;

    const response = await axios.get(URL);

    return response.data;
};
