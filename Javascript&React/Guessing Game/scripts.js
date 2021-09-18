
//setup with variables
const wordToGuess = "oranges" ;

const wordState = [];

let guessesLeft = 10;

const prevGuesses = [];

function displayWordState(state){
 let output = '';

 for (let i = 0; i < state.length; i++){
	const char = state[i];
	output = output + char;
	output = output + " ";
}

const wordStateContainer = document.getElementById('word');
wordStateContainer.innerHTML = output;
}


function displayGuessesLeft (num) {
document.getElementById('guesses-left').innerHTML = num;
}


function displayPreviousGuesses(guessesArray) {

	const list = document.getElementById('past-guesses');
	// clear list before adding guesses
	list.innerHTML = '';

	// for each games, append a li child
	for (let i = 0; i < guessesArray.length; i++){
		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess);
	}
}

// takes in word to guess, the current state of the word and the new character to guess
function guess (wordToGuess, wordState, currGuess){
	// for each character in the word to be guessed
 for (let i = 0; i < wordToGuess.length ; i++){
 	// if the character mactes the current guess,
 	// update word state at the position
 	if(wordToGuess[i] == currGuess){
 		wordState[i] = currGuess;
 		}
 	}
 	displayWordState(wordState);
 }


function checkWon(wordState){
	let hasBlanks = false;
	for(let i = 0; i < wordState.length; i++){
		if(wordState[i] == '_'){
			hasBlanks = true;
		}
	}

	return !hasBlanks;
}

function setup () {
for (let i = 0; i < wordToGuess.length; i++) {
	wordState.push('_')
	}


//initial
displayGuessesLeft(guessesLeft);
displayWordState(wordState);
displayPreviousGuesses(prevGuesses);
}


function setupForm(){

//add form submit handler
const form = document.getElementById('player-input');
const input = document.getElementById('player-guess');

form.onsubmit = function (event){
	event.preventDefault();


	// get current guess
	const currentInput = input.value.toLowerCase();

	//check if input is valid
	if (!validateInput(currentInput, prevGuesses)){
		window.alert('Please enter a character from a to z that has not been guessed before.')
		
		return;	
	}
	// clear input field
	input.value = '';

	//add guess to previous guesses
	prevGuesses.push(currentInput);

	// update guesses left
	guessesLeft = guessesLeft - 1;
	displayGuessesLeft(guessesLeft);

	//makes guess
	guess(wordToGuess, wordState, currentInput);


 	// check if user has won
 	const won = checkWon(wordState);
 	if (won){
 		window.alert('You won!')
 	}

 	//check if user as lost
 	else if (guessesLeft == 0){
 		window.alert('You lost!')
 	}

	//update previous guess
	displayPreviousGuesses(prevGuesses)
	}
}

// if guess is a valid choice, then return true, else return
function validateInput(guess){
	// check that guess is one character
	// user has not guessed this before and character is not in previous guesses

	if(guess.length == 1 && prevGuesses.indexOf(guess) == -1){
	return true;
	}

	return false;
}

setup();
setupForm();





