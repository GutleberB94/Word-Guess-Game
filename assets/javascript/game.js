// Variables

var wordToGuess = ["Nashville", "Vanderbilt", "Bellevue"];
var numOfGuesses = 15;
var wrongLetters = [];
var correctLetters = [];


// select random word from array of words

var chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
chosenWord.toLocaleLowerCase();

// set number of underscores

var underScores = []
for (var i = 0; i < chosenWord.length; i++) {
    underScores.push(" _ ");
};



// Captures the key press, converts it to lowercase, and saves it to a variable.

//for (var i = 0; i < chosenWord.length; i++) {
    document.onkeyup = function (event) {
        var guessedLetter = event.key.toLowerCase();
        console.log(guessedLetter);


        // put for statements here to handle guessed letter correctly

        if (chosenWord.indexOf(guessedLetter) === -1) {
            wrongLetters.push(String.fromCharCode(guessedLetter));
            numOfGuesses = numOfGuesses - 1;
        } else {
            correctLetters.push(guessedLetter);
        }
        return false;
    }
//}

document.write("Word to guess " + underScores + "<br>");
document.write("Wrong letters guessed " + wrongLetters + "<br>");
document.write("correct letters guessed " + correctLetters + "<br>");
document.write("number of guesses remaining " + numOfGuesses + "<br>");



console.log(wrongLetters);
console.log(correctLetters);
console.log(chosenWord);
console.log(underScores);
