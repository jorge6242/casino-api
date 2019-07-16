const axios = require("axios");
const { getRamdom } = require("../../helpers");

const slots = {
    reel1: [
        "cherry",
        "lemon",
        "apple",
        "lemon",
        "banana",
        "banana",
        "lemon",
        "lemon"
    ],
    reel2: [
        "lemon",
        "apple",
        "lemon",
        "lemon",
        "cherry",
        "apple",
        "banana",
        "lemon"
    ],
    reel3: [
        "lemon",
        "apple",
        "lemon",
        "apple",
        "cherry",
        "lemon",
        "banana",
        "lemon"
    ]
};

/**
 * Controller to search countries by https://restcountries.eu
 */

const index = async() => {
    try {
        const { status, data } = await axios.get(
            "https://restcountries.eu/rest/v2/all"
        );
        let response = [];
        const countries = [];
        if (status === 200) {
            data.forEach(element => {
                const country = {
                    name: element.name
                };
                countries.push(country);
            });
            response = { status, countries };
        }
        return response;
    } catch (error) {
        return error;
    }
};

const search = async name => {
    try {
        const { status, data } = await axios.get(
            `https://restcountries.eu/rest/v2/name/${name}`
        );
        let response = [];
        const countries = [];
        if (status === 200) {
            data.forEach(element => {
                const country = {
                    name: element.name
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
};

const getSlots = () => [{
    reel1: getRamdom(slots.reel1),
    reel2: getRamdom(slots.reel2),
    reel3: getRamdom(slots.reel3)
}];

module.exports = {
    index,
    search,
    getSlots,
};