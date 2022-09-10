const fare = require('./fare');

describe("CTA Fare Logic Tests", () => {
    test("Exact fare returns an array with the exact Gaavo piece", () => {
        // arrange and act
        var result = fare.findPieces([1, 2, 3, 4, 5], 4)

        // assert
        expect(result).toStrictEqual([4]);
    });

    test("Fare does not exist", () => {
        // arrange and act
        var result = fare.findPieces([1, 2, 3, 4, 5], 99)

        // assert
        expect(result).toStrictEqual([]);
    });

    test("Fare does exist with 2 Gaavo pieces", () => {
        // arrange and act
        var result = fare.findPieces([1, 2, 3, 4, 5], 7)

        // add the result
        let sum = 0;
        result.forEach(piece => {
            sum += piece;
        });

        // assert
        expect(sum).toBe(7);
    });

    test("Fare does exist with 3 Gaavo pieces", () => {
        // arrange and act
        var result = fare.findPieces([1, 2, 3, 4, 5], 12)

        // add the result
        let sum = 0;
        result.forEach(piece => {
            sum += piece;
        });

        // assert
        expect(sum).toBe(12);
    });

    test("Fare does exist with 2 partial Gaavo pieces", () => {
        // arrange and act
        var result = fare.findPieces([1.5, 2.33, 3, 4, 5], 3.83)

        // add the result
        let sum = 0;
        result.forEach(piece => {
            sum += piece;
        });

        // assert
        expect(sum).toBe(3.83);
    });

    test("Fare does exist with multiple pieces matching fare", () => {
        // arrange and act
        var result = fare.findPieces([7,7,7,7,7], 1);
        
        // assert
        expect(result).toStrictEqual([1]);
    });

    test("Fare does exist with distinct numbers", () => {
        // arrange and act
        var result = fare.findPieces([1,2,4], 7);
        
        // assert
        expect(result).toStrictEqual([1,2,4]);
    });

    test("Fare does exist with duplicate numbers", () => {
        // arrange and act
        var result = fare.findPieces([1,1,2,3,8,9], 7);

        // add the result
        let sum = 0;
        result.forEach(piece => {
            sum += piece;
        });
        
        // assert
        expect(sum).toBe(7);
    });

    test("Fare does exist with 3 same numbers", () => {
        // arrange and act
        var result = fare.findPieces([1,1,1,3,8,9], 6);

        // add the result
        let sum = 0;
        result.forEach(piece => {
            sum += piece;
        });
        
        // assert
        expect(sum).toBe(6);
    });
})