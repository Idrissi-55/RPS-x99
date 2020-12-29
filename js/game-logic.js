// All code should be written in this file.

let playerOneMoveOneType, 
 playerOneMoveOneValue,
 playerOneMoveTwoType, 
 playerOneMoveTwoValue,
 playerOneMoveThreeType, 
 playerOneMoveThreeValue,
 playerTwoMoveOneType, 
 playerTwoMoveOneValue,
 playerTwoMoveTwoType, 
 playerTwoMoveTwoValue,
 playerTwoMoveThreeType,
 playerTwoMoveThreeValue,
 playerOneWins,
 playerTwoWins;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if(!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue ) {
        return;
    }  

    if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }

    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }
    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}
// create a helper function isValidMoveType()
function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}
//create a helper function isValidVMoveValue()
function isValidMoveValue(moveValue) {
   return (moveValue >= 1) && (moveValue <= 99);
}
// create a funciton getRoundWinner
function getRoundWinner(roundNumber) {
    switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
    
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null;
    }
}
//create a function getMoveWinner
function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }

    if (playerOneMoveType === 'rock') {
        if (playerTwoMoveType === 'scissors') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else if (playerOneMoveType === 'paper') {
        if (playerTwoMoveType === 'rock') {
            return 'Player One';
        } else  {
            return 'Player Two';
        }   
    } else if (playerOneMoveType === 'scissors') {
        if (playerTwoMoveType === 'rock') {
            return 'Player Two';
        } else {
            return 'Player One';
        }
    }
} 

function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveTwoType || !playerOneMoveTwoValue ||
        !playerOneMoveThreeType ||!playerOneMoveThreeValue ||!playerTwoMoveOneType ||!playerTwoMoveOneValue 
        ||!playerTwoMoveTwoType ||  !playerTwoMoveTwoValue || !playerTwoMoveThreeType ||!playerTwoMoveThreeValue ) {
       return null; 
    }

    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);

    if (playerOneWins > playerTwoWins) {
        return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return 'Tie';
    }

 }
function addWin(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1 ) || 1;
    } 
}

function setComputerMoves() {
    const Array = ['rock', 'paper', 'scissors'];

    playerTwoMoveOneType = Array[Math.floor(Math.random()*Array.length)];
    playerTwoMoveTwoType = Array[Math.floor(Math.random()*Array.length)];
    playerTwoMoveThreeType = Array[Math.floor(Math.random()*Array.length)];

    playerTwoMoveOneValue = Math.floor(Math.random()*96) + 1; 
    playerTwoMoveTwoValue = Math.floor(Math.random()*(97 - playerTwoMoveOneValue)) + 1; 
    playerTwoMoveThreeValue = 99 - playerTwoMoveTwoValue - playerTwoMoveOneValue;
}
// git remote add origin https://github.com/Idrissi-55/RPS-x99.git
// git branch -M main
// git push -u origin main