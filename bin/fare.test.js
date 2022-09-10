const fare = require('./fare');

describe("CTA Fare Logic Tests", () => {
    test("Exact fare returns an array with the exact Gaavo piece", () => {
        // arrange and act
        var result = fare.findPieces([1, 2, 3, 4, 5], 4)

        // assert
        expect(result).toStrictEqual([4]);
    });
})