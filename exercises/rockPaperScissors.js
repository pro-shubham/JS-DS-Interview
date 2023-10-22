// with 2 player
function playRPS(player1Choice, player2Choice) {
  const choices = ["rock", "paper", "scissors"];

  if (!choices.includes(player1Choice) || !choices.includes(player2Choice)) {
    return "Invalid choices. Please choose from rock, paper, or scissors.";
  }

  if (player1Choice === player2Choice) {
    return "It's a tie!";
  }

  const results = {
    rock: { scissors: "Player 1 wins!", paper: "Player 2 wins!" },
    paper: { rock: "Player 1 wins!", scissors: "Player 2 wins!" },
    scissors: { paper: "Player 1 wins!", rock: "Player 2 wins!" },
  };

  return results[player1Choice][player2Choice];
}

// With Computer
function playRPS(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const results = {
    rock: {
      scissors: "You win!",
      paper: "Computer wins!",
      rock: "It's a tie!",
    },
    paper: {
      rock: "You win!",
      scissors: "Computer wins!",
      paper: "It's a tie!",
    },
    scissors: {
      paper: "You win!",
      rock: "Computer wins!",
      scissors: "It's a tie!",
    },
  };

  const result = results[playerChoice][computerChoice];

  return `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
}

module.exports = playRPS;
