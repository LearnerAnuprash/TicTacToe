let boxes = document.querySelectorAll(".clickme");
let resetBtn = document.querySelector(".res");
let newBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".win");
let msg = document.querySelector(".winText");

let p1 = document.querySelector("#player1");
let p2 = document.querySelector("#player2");

let turnO = true;
let gameOver = false;

const winningCondition = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

let playerNames = {
    O: "Player O",
    X: "Player X"
};

const updatePlayerNames = () => {
    if (p1.value.trim() !== "") {
        playerNames["O"] = p1.value.trim();
    }
    if (p2.value.trim() !== "") {
        playerNames["X"] = p2.value.trim();
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is: ${playerNames[winner]}`;
    msgContainer.classList.remove("hide");
    gameOver = true;
};

const checkWinner = () => {
    for (let element of winningCondition) {
        let pos1val = boxes[element[0]].innerText;
        let pos2val = boxes[element[1]].innerText;
        let pos3val = boxes[element[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                break;
            }
        }
    }
};

boxes.forEach((clickme) => {
    clickme.addEventListener("click", () => {
        if (clickme.innerText === "" && !gameOver) {
            if (turnO) {
                clickme.innerText = "O";
                clickme.style.color = "rgb(199, 3, 78)";
                turnO = false;
            } else {
                clickme.innerText = "X";
                clickme.style.color = "rgb(82, 7, 255)";
                turnO = true;
            }
            checkWinner();
        }
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.color = "";
    });
    turnO = true;
    gameOver = false;
    msgContainer.classList.add("hide");
});

newBtn.addEventListener("click", () => {
    updatePlayerNames();
    resetBtn.click(); // Optional: auto-reset board on new game
});
