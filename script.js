"use strict";

// a random int
let secretNumber = randomInt(1, 20);
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
	document.querySelector(".message").textContent = message;
};

function randomInt(value1, value2) {
	return Math.trunc(Math.random() * value2) + value1;
}

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	// No input
	if (!guess) {
		displayMessage("❌ No number!");

		// Player wins
	} else if (guess === secretNumber) {
		displayMessage("🎉 Correct Number!");

		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".number").textContent = secretNumber;

		if (highscore < score) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// Player loses
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(
				guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
			);
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
	secretNumber = randomInt(1, 20);

	displayMessage("Start guessing...");
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
	document.querySelector(".guess").value = "";
});
