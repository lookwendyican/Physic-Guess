 
  // Creates an array that lists out all of the letters.
  var letters = ["a", "b", "c", "d", "e", "f", "g", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(letters);


  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var winsCount = 0;
  var lossesCount = 0;
  var guessesLeft = 10;
  var guessedSoFar = [];
 
 
 // Create variables that hold references to the places in the HTML where we want to display things.



var  roundNumberDisplay = document.getElementById('round-number');
var  targetLetterDisplay = document.getElementById('target-letter');
var  computerScoreDisplay = document.getElementById('computer-score');
var  humanScoreDisplay = document.getElementById('human-score');
var  humanGuessInput = document.getElementById('human-guess');
var  computerGuessDisplay = document.getElementById('computer-guess');



var  computerWinsDisplay = document.getElementById('computer-wins');

var  guessButton = document.getElementById('guess');
var  nextRoundButton = document.getElementById('next-round')



// To start Game, Prompt use to press letter
//ALLERT

// set up the computer (PSYCHIC)  to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * letters.length);
var computerChoice = letters[randomIndex];

console.log(computerChoice);


//HAVE COMPUTER choose another letter to DISPLAY separately from PSYCHIC letter.



//Log user and computer guesses to the SPACE PROVIDED


//AFTER... display PSYCHIC guess

//Compare  computer and user guesses with PSYCHIC guess


//IF ELSE statements

        //ADD  1++


 //Activate Next round Button and reset guess ???




