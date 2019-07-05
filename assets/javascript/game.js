 
  // Creates an array that lists out all of the letters.
  var letters = ["a", "b", "c", "d", "e", "f", "g", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(letters);


  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var roundCount = 0;
  var computerCount = 0;
  var userCount = 0;
 
 
 // Create variables that hold references to the places in the HTML where we want to display things.



var  roundNumberDisplay = document.getElementById('round-number');
var  targetLetterDisplay = document.getElementById('target-letter');
var  computerGuessDisplay = document.getElementById('computer-guess');
var  computerScoreDisplay = document.getElementById('computer-score');
var  userGuessDisplay = document.getElementById('user-guess');
var  userScoreDisplay = document.getElementById('user-score');
var  winnerDisplay = document.getElementById('winner-display');
var  nextRoundButton = document.getElementById('next-round')



// To start Game, Prompt use to press letter
//ALLERT

document.onkeyup = function (event) {
    
var userChoice = event.key;
  // make sure the user selects a value a-z
  var regexp = /[a-z]/gi;
        if (!regexp.test(userChoice)) {
          alert("Please enter a letter from A to Z!");
        }  else {
          console.log(userChoice);
        }
}
// set up the computer (PSYCHIC)  to pick a random indexed value from array

var randomIndexPsychic = Math.floor(Math.random() * letters.length);
var targetLetterDisplay = letters[randomIndexPsychic];
console.log(targetLetterDisplay);



//HAVE COMPUTER choose another letter to DISPLAY separately from PSYCHIC letter.

var randomIndexCompGuess = Math.floor(Math.random() * letters.length);
var computerGuessDisplay = letters[randomIndexCompGuess];
console.log(computerGuessDisplay);

//Log user and computer guesses to the SPACE PROVIDED





//AFTER... display PSYCHIC guess

//Compare  computer and user guesses with PSYCHIC guess


//IF ELSE statements

        //ADD  1++


 //Activate Next round Button and reset guess ???

