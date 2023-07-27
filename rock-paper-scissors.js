let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;


const resetButton = document.querySelector('.js-reset-button');




function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    autoButton.textContent = 'Stop Playing';
    isAutoPlaying = true;
  } else {
    autoButton.textContent = 'Auto Play';
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}



function YesNo() {
  const buttonYes = document.createElement('button');
  buttonYes.textContent = 'Yes';
  buttonYes.classList.add('js-yes-button');

  const buttonNo = document.createElement('button');
  buttonNo.textContent = 'No';
  buttonNo.classList.add('js-no-button');

  document.querySelector('.js-yes-no').innerHTML = `Are you sure you want to reset the score? ${buttonYes.outerHTML} ${buttonNo.outerHTML}`;
  document.querySelector('.js-yes-button').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector('.js-yes-no').innerHTML = '';
  });
  

  document.querySelector('.js-no-button').addEventListener('click', () => {
    document.querySelector('.js-yes-no').innerHTML = '';
  });
  
}

const autoButton = document.querySelector('.js-auto-button');



document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});
document.querySelector('.js-reset-button').addEventListener('click', () => {
  console.log("YesNo");
  YesNo();
});

document.querySelector('.js-auto-button').addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r' || event.key === 'R'){
    playGame('rock');
  } else if (event.key === 'p' || event.key === 'P')
  {
    playGame('paper');
  } else if (event.key === 's' || event.key === 'S') {
    playGame('scissors');
  } else if(event.key === 'a' || event.key === 'A'){
    autoPlay();
  } else if (event.key === 'Backspace') {
    YesNo();
    }
  });

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}


function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber2 = Math.random();

  let computerMove = "";

  if (randomNumber2 >= 0 && randomNumber2 < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber2 >= 1 / 3 && randomNumber2 < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}




