$(document).ready(function() {
	//an array of alphabetLetters
	var alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	// console.log(alphabetLetters.length);

	//var for wins
	var wins = 0;
	var winsDOM = document.getElementById('wins');

	//var for losses
	var losses = 0;
	var lossesDOM = document.getElementById('losses');

	//how many gueses the user can have
	var guessesLeft = 11;
	var guessesLeftDOM = document.getElementById('guessesLeft');

	//varuable to store our user's guess
	var userGuess = null;
	var guessesSoFar = "";
	var guessesSoFarDOM = document.getElementById('guessesSoFar');

	// = assignment operator

	//get a random letter out of this array and have it be the computers choice
	var randomNumber = Math.floor(Math.random() * 26);
		// console.log(alphabetLetters[randomNumber]);

		var computersChoice = alphabetLetters[randomNumber]
		console.log(computersChoice, "this is our computers choice");

	//the user presses a key
	document.addEventListener("keyup", function (event) {
		//find out what key was pressed
		console.log(event.key);
		//store key that was pressed to userGuess
		var userGuess = event.key;
		guessesSoFar += userGuess;
		guessesSoFarDOM.innerHTML = guessesSoFar + userGuess;
	});
		// console.log("hi" === "hi"); //true
		// console.log(24 > 15);
		if (userGuess === computersChoice); {
			console.log("you win"); 
		}
		//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

		// wins = wins + 1;
		// console.log(wins);

		console.log(wins);
		winsDOM.innerHTML = wins++;

		console.log(lossesDOM);
		lossesDOM.innerHTML = losses++;
		
		if (guessesLeft > 0);	{
			console.log("try again");

			//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
			//show them the letters they got wrong hint: put in an a arry and google .push
		}
});