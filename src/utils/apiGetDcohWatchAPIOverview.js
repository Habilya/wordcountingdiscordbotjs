const axios = require('axios');

module.exports = async() => {

    const response = await axios.get(`https://dcoh.watch/api/v1/Overwatch/OverviewV2`);

    return response.data;
};
