let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "Paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#616161";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "scissors" && compChoice === "Paper") ||
            (userChoice === "Paper" && compChoice === "rock")
        ) {
            userWin = true;
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

// For Dark mode toggle
const toggleBtn = document.querySelector("#toggle-mode");

// Check local storage for theme
const currentMode = localStorage.getItem("theme") || "dark-mode";
document.body.classList.add(currentMode);
toggleBtn.innerText = currentMode === "dark-mode" ? "🌙 Dark Mode" : "☀️ Light Mode";

// Toggle Mode on button click
toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");

    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Update button text
    toggleBtn.innerText = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";

    // Save preference
    const newMode = isDark ? "light-mode" : "dark-mode";
    localStorage.setItem("theme", newMode);
});

//Restart Game 
const restartBtn = document.querySelector("#restart-btn");

restartBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#031b31";
});



