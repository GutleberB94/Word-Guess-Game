// Variables

var wins = 0;
var wordToGuess = ["Nashville", "Vanderbilt", "Bellevue"];
var numOfGuesses = 15;
var wrongLetters = [];
var correctLetters = [];
//var guessedLetter;

// select random word from array of words

var chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
chosenWord.toLocaleLowerCase();

// set number of underscores

var underScores = []
for (var i = 0; i < chosenWord.length; i++) {
    underScores.push(" _ ");
};



// Captures the key press, converts it to lowercase, and saves it to a variable.

document.onkeyup = function (event) {
    var guessedLetter;
    guessedLetter = event.key.toLowerCase();
    console.log(guessedLetter);

    // put for statements here to handle guessed letter correctly

    if (chosenWord.indexOf(guessedLetter) === -1) {
        wrongLetters.push(guessedLetter)
    } else {
        correctLetters.push(guessedLetter)
    }
}

document.write(underScores);



console.log(wrongLetters);
console.log(correctLetters);
console.log(chosenWord);
console.log(underScores);
