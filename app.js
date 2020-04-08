/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let dice = 0;
	activePlayer = 1;
	scores = [0,0];
	roundScore = 0;

  // Math.random gives you a random number in decimal numbers, but only in the
  // rang from 0 to 1.
  // Math.floor is the function that changes decimal numbers in whole numbers.


 // console.log(dice);// for test only

 // DOM manipulation
	// document.querySelector('#current-' + activePlayer).textContent = dice;
 // hiding the dice
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

// function rollDice() {
// 	dice = Math.floor(Math.random() *6) +1;
// 	console.log(dice);
// }

	document.querySelector('.btn-roll').addEventListener('click', function() {
		
		dice = Math.floor(Math.random() *6) +1;
		console.log(dice);

		var diceRoll = document.querySelector('.dice')
			diceRoll.style.display = 'block';
			diceRoll.src = 'dice-' + dice + '.png';



	});

// // click event
// document.querySelector('.btn-roll').addEventListener('click', function () {
// 	dice = Math.floor(Math.random() *6) +1;
// 	console.log(dice);
// });
