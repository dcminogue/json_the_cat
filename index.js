const args = process.argv.slice(2);

const { fetchBreedDescription } = require("./breedFetcher");

const breedName = args[0];

fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
        console.log("Error fetch details:", error);
    } else {
        console.log(desc);
    }
});
