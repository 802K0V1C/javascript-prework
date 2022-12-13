//Computer moves
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  	computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'nożyce';
}
else if(randomNumber == 3){
	computerMove = 'papier';
}

printMessage('Mój ruch to: ' + computerMove);

//Player moves
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  	playerMove = 'kamień';
}
else if(playerInput =='2'){
	playerMove = 'nożyce';
}
else if(playerInput =='3'){
	playerMove = 'papier';
}
printMessage('Twój ruch to: ' + playerMove);

//Results
if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
}
else if(computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Mamy remis')
}
else if(computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Komputer wygrywa')
}
