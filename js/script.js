/*

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');


let randomFraction = Math.random();
printMessage('Wylosowany ułamek to ' + randomFraction);

let calculation = randomFraction * 3 + 1;
printMessage('Ułamek pomnozony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);
printMessage('Liczba zaokrąglona w dół to: ' + roundNumber);
*/

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){
    computerMove = 'kamien';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nozyce';
}

printMessage('Mój ruch to: ' + computerMove)




let playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nozyce');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == 1){
    playerMove = 'kamien';
} else if (playerInput == 2){
    playerMove = 'papier';
} else if (playerInput == 3){
    playerMove = 'nozyce';
}

printMessage('Twoj ruch to: ' + playerMove);



if( computerMove == 'kamien' && playerMove == 'kamien'){
    printMessage('Remis!');
  } else if (computerMove == 'kamien' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!')
  } else if (computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Ja wygrywam!')
  } else if (playerMove == 'nieznany ruch'){
    printMessage('Wybrales nieznany ruch!')
  }


if( computerMove == 'papier' && playerMove == 'kamien'){
    printMessage('Ja wygrywam!');
  } else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!')
  } else if (computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!')
  }

if( computerMove == 'nozyce' && playerMove == 'kamien'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!')
  } else if (computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis!')
  }