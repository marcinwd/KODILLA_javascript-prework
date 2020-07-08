
let randomNumber = Math.floor(Math.random() * 3 + 1);

//printMessage('Wylosowana liczba to: ' + randomNumber);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nozyce';
}

printMessage('Mój ruch to: ' + computerMove);
