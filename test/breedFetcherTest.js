// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
    it("returns a string description for a valid breed, via callback", done => {
        fetchBreedDescription("Siberian", (err, desc) => {
            // we expect no error for this scenario
            assert.equal(err, null);

            const expectedDesc =
                "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

            // compare returned description
            assert.equal(expectedDesc, desc.trim());

            done();
        });
    });
    it("returns a string description for a valid breed with partial name passed, via callback", done => {
        fetchBreedDescription("Beng", (err, desc) => {
            // we expect no error for this scenario
            assert.equal(err, null);

            const expectedDesc =
                "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.";

            // compare returned description
            assert.equal(expectedDesc, desc.trim());

            done();
        });
    });
    it("Empty input returns an errror string of 'Breed Not Found', via callback", done => {
        fetchBreedDescription("", (err, desc) => {
            const expectedError = "Breed Not Found";

            // compare returned description
            assert.equal(expectedError, err);

            done();
        });
    });
    it("returns an errror string of 'Breed Not Found', via callback", done => {
        fetchBreedDescription("Calico", (err, desc) => {
            const expectedError = "Breed Not Found";

            // compare returned description
            assert.equal(expectedError, err);

            done();
        });
    });
});
