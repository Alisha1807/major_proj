let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You picked\n";
    msg.innerText += ` You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    document.getElementById("paper1").src = `${userImage}.png`;
    document.getElementById("compImage1").src = `${compImage}.png`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    let compImage = document.createElement("img");
    compImage.src = `${compChoice}.png`;
    compImage.alt = compChoice;
    let userImage = document.createElement("img");
    userImage.src = `${userChoice}.png`;
    msg.innerText = "YOU PICKED\n";
    msg.appendChild(compImage);
    msg.innerHTML += `YOU LOST AGAINST PC`;
    // msg.innerHTML += `${compChoice} beats your ${userChoice} `;
    msg.appendChild(userImage);
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      // userWin = compChoice === "paper" ? false : true;
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//Rules section
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const rulesContainer = document.getElementById("rules-container");
  const closeBtn = document.getElementById("close-btn");

  toggleBtn.addEventListener("click", function () {
    rulesContainer.classList.toggle("show");
  });

  closeBtn.addEventListener("click", function () {
    rulesContainer.classList.remove("show");
  });
});

function displayText() {
  let text = document.querySelector(".samp");
  text.style.display = "flex";
}
