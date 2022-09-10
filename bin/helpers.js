const helpers = {
    sliceArr: function (gaavoPieces, fareAmount) {
        const spliceCondition = (fare) => fare > fareAmount;
        let sliceIndex = gaavoPieces.findIndex(spliceCondition);
        return gaavoPieces.slice(0, sliceIndex);
    },

    convertArrToSortedNumberArr: function (stringArr) {
        var numberArr = [];
        length = stringArr.length;

        for (var i = 0; i < length; i++) {

            // Check if string is not a number
            if (isNaN(stringArr[i])) {
                throw 'Please only enter numbers!';
            }

            let number = Number(stringArr[i]);

            // Check if string is negagive or 0
            if (Math.sign(number) === -1 || Math.sign(number) === 0) {
                throw 'Please only enter positive numbers!';
            }

            numberArr.push(number);
        }
        let sortedArr = numberArr.sort();
        return sortedArr;
    }
}
module.exports = helpers