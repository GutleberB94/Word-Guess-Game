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
            wrongLetters.push(guessedLetter);
            numOfGuesses = numOfGuesses - 1;
        } 
        else if(!chosenWord.indexOf(guessedLetter) === -1) {
            correctLetters.push(guessedLetter);
        } 
    }



console.log(wrongLetters);
console.log(correctLetters);
console.log(chosenWord);
console.log(underScores);

/*
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
    */