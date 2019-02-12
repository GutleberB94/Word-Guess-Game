// Variables

var wordToGuess = ["nashville", "vanderbilt", "bellevue"];
var numOfGuesses = 15;
var wrongLetters = [];
var correctLetters = [];
var totalWins = 0;


// select random word from array of words

var chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
chosenWord.toLowerCase();
console.log(chosenWord);

// set number of underscores

var underScores = []
for (var i = 0; i < chosenWord.length; i++) {
    underScores.push(" _ ");

};


// resets clears the arrays and resets lives
function gameReset() {

    chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
    numOfGuesses = 15;

    wrongLetters = [];
    correctLetters = [];

    underScores = [];
    for (var i = 0; i < chosenWord.length; i++) {
        underScores.push(" _ ");
    }

    document.getElementById("guessedLetters").innerHTML = wrongLetters;
    document.getElementById("remainingGuesses").innerHTML = numOfGuesses;
    document.getElementById("currentWord").innerHTML = underScores;
    document.getElementById("totalWins").innerHTML = totalWins;

}


function checkWin() {
    console.log(underScores.join(""), chosenWord);
    if (underScores.join("") == chosenWord) {
        console.log(underScores);
        console.log(chosenWord);
        totalWins++;
        alert("you win!!");
        gameReset();
    }

    if (numOfGuesses < 1) {
        alert("you lose");
        gameReset();
    }

}



// Captures the key press, converts it to lowercase, and saves it to a variable.

document.onkeyup = function (event) {
    var guessedLetter = event.key.toLowerCase();
    console.log(guessedLetter);

    // for statements to handle guessed letter correctly

    //for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord.indexOf(guessedLetter) === -1 && numOfGuesses > 0) {
            wrongLetters.push(guessedLetter);
            numOfGuesses--;

            console.log(wrongLetters);
            console.log(numOfGuesses);

            document.getElementById("guessedLetters").innerHTML = wrongLetters;
            document.getElementById("remainingGuesses").innerHTML = numOfGuesses;
            checkWin();
        }
    
    else  {
        correctLetters.push(guessedLetter);
        underScores[chosenWord.indexOf(guessedLetter)] = guessedLetter;

        console.log(correctLetters);
        console.log(underScores);

        document.getElementById("currentWord").innerHTML = underScores;
        checkWin();
    }
    

}