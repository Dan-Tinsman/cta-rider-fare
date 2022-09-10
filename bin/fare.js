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

        // if not, we'll have to search for a combination that matches
        function search(index, gaavoPieces, fareAmount, tempArr) {

            // if our search finds a a result where fareAmount - gaavoPieces[i] is 0, we have an answer.
            if (fareAmount === 0) {
                answer = tempArr.slice();
                return answer;
            }

            // iterate the rest of the Gaavo pieces past our index
            // to see if subtracting from fareAmount will reach 0
            for (let i = index; i < gaavoPieces.length; i++) {
                tempArr.push(gaavoPieces[i]);
                search(i + 1, gaavoPieces, fareAmount - gaavoPieces[i], tempArr);
                tempArr.pop();
            }
        }

        // start the search at the first Gaavo piece
        search(0, gaavoPieces, fareAmount, temp);
        return answer;
    }
}
module.exports = fare