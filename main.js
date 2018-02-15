
console.log("test");
var Word = require("./Word");
var inquirer = require("inquirer");
//words to guess array
var wordsToGuess=["apples", "oranges", "tomatoes", "bananas", "strawberry", "lemon", "lime"];
//randomize index to choose from
var randomIndex=Math.floor(Math.random()*wordsToGuess.length);
//pick random word
var randomWord=wordsToGuess[randomIndex];
//split the word into seperate letters
var randomWordSplit=randomWord.split("");

var splitLength=randomWordSplit.length;
//picking a new random word
var myWord=new Word(randomWord);
//number of tries
var maxGuesses = 10;

//Guess constructor
function Guess(){
	console.log(myWord.toString());
	if (myWord.guessed.length >= maxGuesses) {
		console.log('You have no more guesses. TRY AGAIN!.');
	return;
	}
	inquirer.prompt([{
		name: 'keyinput',
		type: 'text',
		message: 'Enter a letter:',
		}]).then(function(letterInput) {
				var keyPress = letterInput.keyinput;
				myWord.findLetter(keyPress);
					if(myWord.isComplete()){
					console.log('YOU WIN! It was ' + myWord.toString() + '!');
					return;
        } else {
          console.log('-------------------\n');
          console.log('You have ' + (maxGuesses - myWord.guessed.length) + ' guesses left.')
          Guess();
        }
				}
  );
}
Guess();
