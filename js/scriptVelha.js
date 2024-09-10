const board = document.getElementById("board");
let currentPlayer = "X";
let aiPlayer = "O";
 
board.addEventListener("click", (event) => {
    if (event.target.tagName === "TD" && event.target.textContent === "" && currentPlayer === "X") {
        event.target.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
            setTimeout(() => {
                alert(`O jogador ${currentPlayer} ganhou!`);
                RegistroWin();
                resetBoard();
            }, 100);
        } else if (checkDraw()) {
            setTimeout(() => {
                alert("Empate!");
                RegistroEmpate()
                resetBoard();
            }, 100);
        } else {
            setTimeout(() => {
                aiMove();
                if (checkWin(aiPlayer)) {
                    setTimeout(() => {
                        alert(`O jogador ${aiPlayer} ganhou!`);
                        RegistroDerrota();
                        resetBoard();
                    }, 100);
                } else if (checkDraw()) {
                    setTimeout(() => {
                        alert("Empate!");
                       
                        resetBoard();
                    }, 100);
                }
            }, 100);
        }
    }
});
 
function resetBoard() {
    const cells = document.getElementsByTagName("td");
 
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
 
    currentPlayer = "X";
    aiPlayer = "O";
}
 
function checkWin(player) {
    const cells = document.getElementsByTagName("td");
 
    // Check rows
    for (let i = 0; i < 7; i += 3) {
        if (
            cells[i].textContent === player &&
            cells[i + 1].textContent === player &&
            cells[i + 2].textContent === player
        ) {
            return true;
        }
    }
 
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (
            cells[i].textContent === player &&
            cells[i + 3].textContent === player &&
            cells[i + 6].textContent === player
        ) {
            return true;
        }
    }
 
    // Check diagonals
    if (
        cells[0].textContent === player &&
        cells[4].textContent === player &&
        cells[8].textContent === player
    ) {
        return true;
    }
 
    if (
        cells[2].textContent === player &&
        cells[4].textContent === player &&
        cells[6].textContent === player
    ) {
        return true;
    }
 
    return false;
}
 
function checkDraw() {
    const cells = document.getElementsByTagName("td");
    let emptyCells = 0;
 
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            emptyCells++;
        }
    }
 
    return emptyCells === 0;
}
 
function aiMove() {
    const cells = document.getElementsByTagName("td");
 
    // Prefer winning or blocking if possible
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            cells[i].textContent = aiPlayer;
            if (checkWin(aiPlayer)) {
                return;
            }
            cells[i].textContent = "";
        }
    }
 
    // Try to win or block in the next move
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            cells[i].textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                cells[i].textContent = aiPlayer;
                return;
            }
            cells[i].textContent = "";
        }
    }
 
    // Choose a random available cell if no winning or blocking move
    let emptyCells = [];
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            emptyCells.push(cells[i]);
        }
    }
 
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].textContent = aiPlayer;
}