const fare = {
    findPieces: function (gaavoPieces, fareAmount) {
        let answer = [];

        // check to see if we can find the exact Gaavo piece for the fare
        let onePieceAnswer = gaavoPieces.find(piece => piece === fareAmount);
        if (onePieceAnswer !== undefined) {
            answer.push(onePieceAnswer);
        }

        return answer;
    }
}
module.exports = fare