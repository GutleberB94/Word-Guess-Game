// Variables

var wordToGuess = ["nashville", "vanderbilt", "bellevue"];
var numOfGuesses = 15;
var wrongLetters = [];
var correctLetters = [];
var totalWins = 0;


// select random word from array of words

var chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
chosenWord.toLocaleLowerCase();
console.log(chosenWord);

// set number of underscores

var underScores = []
for (var i = 0; i < chosenWord.length; i++) {
    underScores.push(" _ ");
};



// resets clears the arrays and resets lives
function gameReset() {
    numOfGuesses = 15;

    var wrongLetters = [];
    var correctLetters = [];

    var underScores = []
    for (var i = 0; i < chosenWord.length; i++) {
        underScores.push(" _ ");
    }

}


// Captures the key press, converts it to lowercase, and saves it to a variable.


document.onkeyup = function (event) {
        var guessedLetter = event.key.toLowerCase();
        console.log(guessedLetter);

        // put for statements here to handle guessed letter correctly

        if (chosenWord.indexOf(guessedLetter) === -1 && numOfGuesses > 0) {
            wrongLetters.push(guessedLetter);
            numOfGuesses = numOfGuesses - 1;
            console.log(wrongLetters);
        } 

        if (chosenWord.indexOf(guessedLetter) > -1 && numOfGuesses > 0) {
            correctLetters.push(guessedLetter);
            underScores[chosenWord.indexOf(guessedLetter)] = guessedLetter;
            console.log(correctLetters);
            console.log(underScores);
        } 
    }