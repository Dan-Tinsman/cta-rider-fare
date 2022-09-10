const helpers = require('./helpers');

describe("Helper Tests", () => {
    test("Slice array with matching element", () => {
        // arrange and act
        var result = helpers.sliceArr([1, 2, 3, 4, 5], 4)

        // assert
        expect(result).toStrictEqual([1,2,3,4]);
    });
})
