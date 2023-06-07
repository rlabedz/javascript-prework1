function playGame(playerInput){
   clearMessages();

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamien';
        } else if (argMoveId == 2){
            return 'papier'
        } else if (argMoveId == 3){
            return 'nozyce'
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    let argComputerMove = getMoveName(randomNumber);
    console.log(argComputerMove)

    printMessage('Mój ruch to: ' + argComputerMove)


    //let playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nozyce');
    //console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);
    console.log(argPlayerMove);

    printMessage('Twoj ruch to: ' + argPlayerMove);


    function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if(argComputerMove == 'kamien' && argPlayerMove == 'kamien'){
            printMessage('Remis!');
        } else if (argComputerMove == 'kamien' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!')
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
            printMessage('Ja wygrywam!')
        } else if (argPlayerMove == 'nieznany ruch'){
            printMessage('Wybrales nieznany ruch!')
        }
        
        if(argComputerMove == 'papier' && argPlayerMove == 'kamien'){
            printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!')
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage('Ty wygrywasz!')
        }
        
        if(argComputerMove == 'nozyce' && argPlayerMove == 'kamien'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
            printMessage('Ja wygrywam!')
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
            printMessage('Remis!')
        }
    }
    displayResult(argComputerMove, argPlayerMove);
}


document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});