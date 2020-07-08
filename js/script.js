
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nozyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

//COMP MOVE
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nozyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);

//PLAYER INPUT
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nozyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove =  getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nozyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);

//GAMEplay & OUTCOME
if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('REMIS')
} else if (computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz')
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywa Komputer')
} else if (computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Wygrywa Komputer')
} else if (computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('REMIS')
} else if (computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz')
}else if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz')
} else if (computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Wygrywa Komputer')
} else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('REMIS')
} else if (playerMove != 1 || playerMove != 2 || playerMove != 3 ){
    printMessage('WPROWADZ LICZBE CAŁKOWITĄ W ZAKRESIE 1-3')
}
    

