const request = require("request");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const url = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function (breed, callback) {
    request(`${url}${breed}`, (error, response, body) => {
        const data = JSON.parse(body);
        if (response.statusCode !== 200) {
            const errMsg = `Error: Status Code ${response.statusCode}`;
            callback(errMsg, null);
        } else if (data.length < 1) {
            callback("Breed Not Found", null);
        } else {
            callback(null, data[0]["description"]);
        }
    });
    rl.close();
};

module.exports = { fetchBreedDescription };
