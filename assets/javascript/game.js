var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();

	var computerGuess = options[Math.floor(Math.random() * options.length)];

		if (userGuess == computerGuess) {
			wins++;
			guessesLeft = 9;
			guesses = [];
		
		} else if (guessesLeft > 1) {
			guessesLeft--;
			guesses.push(userGuess);
		
		} else {
			losses++;
			guessesLeft = 9;
			guesses = [];
		}

		var html = "<h1>Psychic Game</h1>" +
			"<p>Guess what letter I'm thinking of</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses so far: " + guesses + "</p>";

		document.querySelector("#game").innerHTML = html;

	}