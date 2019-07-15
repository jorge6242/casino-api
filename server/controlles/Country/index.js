const axios = require('axios');

/**
 * Controller to search countries by https://restcountries.eu
 */

const index = async() => {
    try {
        const { status, data } = await axios.get('https://restcountries.eu/rest/v2/all');
        let response = [];
        const countries = [];
        if (status === 200) {
            data.forEach(element => {
                const country = {
                    name: element.name,
                };
                countries.push(country);
            });
            response = { status, countries };
        }
        return response;
    } catch (error) {
        return error;
    }
}

const search = async name => {
    try {
        const { status, data } = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
        let response = [];
        const countries = [];
        if (status === 200) {
            data.forEach(element => {
                const country = {
                    name: element.name,
                };
                countries.push(country);
            });
            response = { status, countries };
        } else {
            countries.push([]);
        }
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    index,
    search,
}