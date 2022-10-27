"use strict";

// a random int
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	// No input
	if (!guess) {
		document.querySelector(".message").textContent = "❌ No number!";

		// Player wins
	} else if (guess === secretNumber) {
		document.querySelector(".message").textContent = "🎉 Correct Number!";

		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".number").textContent = secretNumber;

		if (highscore < score) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// Player guesses too high
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "📈 Too high!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".score").textContent = 0;
			document.querySelector(".message").textContent = "☠ You lose!";
		}

		// Player guesses too low
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "📉 Too low!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".score").textContent = 0;
			document.querySelector(".message").textContent = "☠ You lose!";
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
	document.querySelector(".guess").value = "";
});
