
{
function playGame(playerInput){
    clearMessages();
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
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);

    function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if(argComputerMove ==  argPlayerMove){
            printMessage('REMIS');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage('Ty wygrywasz');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Wygrywa Komputer');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
            printMessage('Wygrywa Komputer');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz');
        }else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
            printMessage('Wygrywa Komputer');
        } else if (argPlayerMove != 1 || argPlayerMove != 2 || argPlayerMove != 3 ){
            printMessage('WPROWADZ LICZBE CAŁKOWITĄ W ZAKRESIE 1-3');
        }
    }
 


//PLAYER INPUT
    console.log('Gracz wpisał: ' + playerInput);
    const argPlayerMove =  getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);
    console.log('argComputerMove = ' + argComputerMove, 'argPlayerMove = ' + argPlayerMove)

//GAMEplay & OUTCOME

    displayResult(argComputerMove, argPlayerMove); //NIE RUSZAC

}
//LISTENER

document.getElementById('play-rock').addEventListener('click', function(){
   playGame(1);
 });
 document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}


