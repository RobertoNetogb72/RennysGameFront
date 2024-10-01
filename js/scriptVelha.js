function redirecionarLobby() {
    console.log("Teste")
    window.location.href = ("http://127.0.0.1:5500/indexJogo1.html");
}


async function RegistroPart() {
    
    try {
        //const cadastroId = "1"
        const cadastroId = localStorage.getItem('cadastroId');
        console.log(cadastroId)
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`);
        const data = await response.json();
        console.log(data)
        console.log(response)

        const id = data.id;
       //const cadastroId = data[0].cadastroId;
        const qntVitoria = data.qntVitoria;
        const qntPartida = data.qntPartida;
        const qntDerrota = data.qntDerrota;
        const qntEmpate = data.qntEmpate;

        

        AddPart(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate)

    } catch (error) {

    }
}


async function AddPart(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate) {
    try {
        const qntPartida1 = qntPartida + 1;
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`, {
          
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                cadastroId: cadastroId,
                qntPartida: qntPartida1,
                qntVitoria: qntVitoria,
                qntDerrota: qntDerrota,
                qntEmpate: qntEmpate
            })

        })
        //.then(response => {

            if (response.status === 200) {
                return setTimeout(() => alert('Vitoria/Partida/Derrota/Empate, Concedida'), 100);
            }
       //})
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
    }
}


async function RegistroWin() {
    
    try {
        //const cadastroId = "1"
        const cadastroId = localStorage.getItem('cadastroId');
        console.log(cadastroId)
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`);
        const data = await response.json();
        console.log(data)
        console.log(response)

        const id = data.id;
       //const cadastroId = data[0].cadastroId;
        const qntVitoria = data.qntVitoria;
        const qntPartida = data.qntPartida;
        const qntDerrota = data.qntDerrota;
        const qntEmpate = data.qntEmpate;

        

        AddWin(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate)

    } catch (error) {

    }
}


async function AddWin(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate) {
    try {
        const qntVitoria1 = qntVitoria + 1;
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`, {
          
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                cadastroId: cadastroId,
                qntPartida: qntPartida,
                qntVitoria: qntVitoria1,
                qntDerrota: qntDerrota,
                qntEmpate: qntEmpate
            })

        })
        //.then(response => {

            if (response.status === 200) {
                return RegistroPart();
            }
       //})
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
    }
}


async function RegistroDerrota() {
    
    try {
        //const cadastroId = "1"
        const cadastroId = localStorage.getItem('cadastroId');
        console.log(cadastroId)
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`);
        const data = await response.json();
        console.log(data)
        console.log(response)

        const id = data.id;
       //const cadastroId = data[0].cadastroId;
        const qntVitoria = data.qntVitoria;
        const qntPartida = data.qntPartida;
        const qntDerrota = data.qntDerrota;
        const qntEmpate = data.qntEmpate;

        

        AddDerrota(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate)

    } catch (error) {

    }
}


async function AddDerrota(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate) {
    try {
        const qntDerrota1 = qntDerrota + 1;
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`, {
          
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                cadastroId: cadastroId,
                qntPartida: qntPartida,
                qntVitoria: qntVitoria,
                qntDerrota: qntDerrota1,
                qntEmpate: qntEmpate
            })

        })
        //.then(response => {

            if (response.status === 200) {
                return RegistroPart();
            }
       //})
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
    }
}

async function RegistroEmpate() {
    
    try {
        //const cadastroId = "1"
        const cadastroId = localStorage.getItem('cadastroId');
        console.log(cadastroId)
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`);
        const data = await response.json();
        console.log(data)
        console.log(response)

        const id = data.id;
       //const cadastroId = data[0].cadastroId;
        const qntVitoria = data.qntVitoria;
        const qntPartida = data.qntPartida;
        const qntDerrota = data.qntDerrota;
        const qntEmpate = data.qntEmpate;

        

        AddEmpate(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate)

    } catch (error) {

    }
}

async function AddEmpate(id, cadastroId, qntPartida, qntVitoria, qntDerrota, qntEmpate) {
    try {
        const qntEmpate1 = qntEmpate + 1;
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`, {
          
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                cadastroId: cadastroId,
                qntPartida: qntPartida,
                qntVitoria: qntVitoria,
                qntDerrota: qntDerrota,
                qntEmpate: qntEmpate1
            })

        })
        //.then(response => {

            if (response.status === 200) {
                return RegistroPart();
            }
       //})
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
    }
}

async function MostrarDados() {
    try {
        //const cadastroId = "1"
        //const html = document.getElementById('html123')
        const cadastroId = localStorage.getItem('cadastroId');
        console.log(cadastroId)
        const response = await fetch(`http://localhost:5011/api/RegistroDePartida/${cadastroId}`);
        const data = await response.json();
        console.log(data)
        console.log(response)

        alert(`Seu Registro de Partida: \n\nPartidas Jogadas: ${data.qntPartida} \nPartidas Vencidas: ${data.qntVitoria} \nPartidas Perdidas: ${data.qntDerrota} \nPartidas Empatadas: ${data.qntEmpate}`)

       //const cadastroId = data[0].cadastroId;
        //html.innerHTML = `
        //<p>${data.qntPartida}</p>
      //  `
    } catch (error) {

    }
}


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
                        RegistroEmpate();
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