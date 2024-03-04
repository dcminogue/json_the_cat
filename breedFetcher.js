const request = require("request");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const name = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

const breedFetcher = function () {
    request(url, (error, response, body) => {
        const data = JSON.parse(body);
        if (error) {
            console.error("REQUEST FAILED:", error);
            rl.close();
            return;
        }

        if (response.statusCode !== 200) {
            console.error(
                "Error: Code other than 200 detected.",
                response.statusCode
            );
            rl.close;
            return;
        } else if (!data[0]) {
            console.log("Breed Not Found.");
            return;
        } else {
            console.log(data[0].description);
        }
    });
};
breedFetcher();
