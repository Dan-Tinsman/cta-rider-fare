const fare = {
    findPieces: function (gaavoPieces, fareAmount) {
        let answer = [];

        // check to see if we can find the exact Gaavo piece for the fare
        let onePieceAnswer = gaavoPieces.find(piece => piece === fareAmount);
        if (onePieceAnswer !== undefined) {
            answer.push(onePieceAnswer);
            return answer;
        }

        let temp = [];
        let copy = gaavoPieces;
        let tempFare = fareAmount;
        
        gaavoPieces.forEach(piece => {
            if (tempFare < 0) {
                return answer;
            }
            temp.push(piece);
            if ((fareAmount - piece) === 0) {
                answer.push(piece);
                return answer;
            } else {
                this.findPieces(copy, tempFare);
            }
        });
        
    }
}
module.exports = fare