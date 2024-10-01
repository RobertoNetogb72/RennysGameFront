//http://127.0.0.1:5500/indexCad.html --- link cadastro

var imagemClaro = "../img/claro.png"
var imagemEscuro = "../img/escuro.png"

function trocar() {

    document.getElementById("modo").src = imagemClaro;
    let aux = imagemEscuro;
    imagemEscuro = imagemClaro;
    imagemClaro = aux;
    mudarCorDeFundo()

}
function mudarCorDeFundo() {

    // Verifica a cor atual da div e alterna entre azul e vermelho

    if (minhaDiv.style.backgroundColor === "black") {

        minhaDiv.style.transition = "background-color 1s";

        minhaDiv.style.backgroundColor = "white";

    } else {

        minhaDiv.style.transition = "background-color 1s";

        minhaDiv.style.backgroundColor = "black";

    }

}


//function trocaCor() {
// const collorButton = document.getElementById('modo')
//  var body = document.body
// const cores = ['black', 'white']
// collorButton.addEventListener('click', function(){
//  if (cores == black) {
//     body.style.background = "white"
//  }else{
//  body.style.background = "black"
//}

//})

//}

async function AdicionarCadastro() {
    const nomeCadastro = document.getElementById('nomeCadastro').value;
    const nickname = document.getElementById('nickname').value;
    const emailCadastro = document.getElementById('emailCadastro').value;
    const senhaCadastro = document.getElementById('senhaCadastro').value;
    const telCadastro = document.getElementById('telCadastro').value;


    if (nomeCadastro === '' || nickname === '' || emailCadastro === '' || senhaCadastro === '' || telCadastro === '') {
        alert("Coloque todas as suas informações")
    } else {
        try {
            fetch('http://localhost:5011/api/Cadastro/Cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nomeCadastro: nomeCadastro,
                    nickname: nickname,
                    emailCadastro: emailCadastro,
                    senhaCadastro: senhaCadastro,
                    telCadastro: telCadastro
                })
            }).then(response => {

                if (response.status === 401) {
                    alert("Email ou Nickname ja existe");

                } else if (response.status === 201) {
                    CriarRegistro(nickname);
                    // redirecionarJogo();
                }
            })
        } catch (error) {

            console.error('Erro ao cadastrar:', error);
        }

    }
}

function redirecionarCad() {
    console.log("Teste")
    window.location.href = ("http://127.0.0.1:5500/indexCad.html");
}
function redirecionarJogo() {
    alert("Logado com sucesso!!, Aproveite nossos jogos!!")
    console.log("Teste")
    window.location.href = ("http://127.0.0.1:5500/indexJogo1.html");
}
function redirecionarLobby() {
    console.log("Teste")
    window.location.href = ("http://127.0.0.1:5500/indexJogo1.html");
}
function redirecionarJogoSlid() {
    window.location.href = ("http://127.0.0.1:5500/Sliding.html");
}
function redirecionarJogoCobra() {
    window.location.href = ("http://127.0.0.1:5500/cobra.html");
}
function redirecionarLogin() {
    console.log("teste")
    window.location.href = ("http://127.0.0.1:5500/index.html");
}
function redirecionarJogoVelha() {
    window.location.href = ("http://127.0.0.1:5500/JogoDaVelha.html");
}

async function EntrarCadastro() {

    const nickname = document.getElementById('nickname').value;
    const nomeCadastro = ""
    const senhaCadastro = document.getElementById('senhaCadastro').value;
    const emailCadastro = "";
    const telCadastro = "";

    try {

        const response = await fetch('http://localhost:5011/api/Autenticacao/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeCadastro: nomeCadastro,
                nickname: nickname,
                emailCadastro: emailCadastro,
                senhaCadastro: senhaCadastro,
                telCadastro: telCadastro
            })


        });
        // .then(response => {

        if (response.status === 200) {
            //localStorage.setItem('idNomeCadastro')
            const response = await fetch(`http://localhost:5011/api/Cadastro/Cadastro/BuscarPorNick?nick=${nickname}`);
            const data = await response.json();
            const cadastroId = data[0].id;
            //const novoNick = await response.json();
            // const cadastroId = novoNick.id;

            // Armazenar o ID do usuário no localStorage
            localStorage.setItem('cadastroId', cadastroId.toString());
            console.log(cadastroId)
            return redirecionarJogo();
        }
        //})
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
    }
}

async function CriarRegistro(nickname) {

    try {
        const response = await fetch(`http://localhost:5011/api/Cadastro/Cadastro/BuscarPorNick?nick=${nickname}`);
        const data = await response.json();
        const cadastroId = data[0].id;

        //document.cookie = data[0].id;
        //console.log(document.cookie)

        console.log(data)
        console.log(response)

        const qntVitoria = "0";
        const qntPartida = "0";
        const qntDerrota = "0";
        const qntEmpate = "0";

        try {

            fetch('http://localhost:5011/api/RegistroDePartida', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cadastroId: cadastroId,
                    qntVitoria: qntVitoria,
                    qntPartida: qntPartida,
                    qntDerrota: qntDerrota,
                    qntEmpate: qntEmpate
                })

            }).then(response => {

                if (response.status === 201) {
                    return redirecionarLogin();
                }
            })
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }


    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
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

// Jogo Sliding
document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    let size = 3;
    let tiles = [];

   
    function createTiles() {
        let numbers = [...Array(size * size).keys()];
        do {
            shuffle(numbers);
        } while (!isSolvable(numbers));

        numbers.forEach(number => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            if (number === 0) {
                tile.classList.add('empty');
            } else {
                tile.textContent = number;
                tile.addEventListener('click', () => moveTile(number));
            }
            tiles.push(tile);
            puzzleContainer.appendChild(tile);
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

 
    function isSolvable(numbers) {
        let inversions = 0;
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] && numbers[j] && numbers[i] > numbers[j]) {
                    inversions++;
                }
            }
        }
        const emptyRow = Math.floor(numbers.indexOf(0) / size);
        return (size % 2 === 1 && inversions % 2 === 0) ||
            (size % 2 === 0 && ((emptyRow % 2 === 0) === (inversions % 2 !== 0)));
    }

    function moveTile(number) {
        const index = tiles.findIndex(tile => tile.textContent == number);
        const emptyIndex = tiles.findIndex(tile => tile.classList.contains('empty'));

        const [tileRow, tileCol] = [Math.floor(index / size), index % size];
        const [emptyRow, emptyCol] = [Math.floor(emptyIndex / size), emptyIndex % size];

        if ((tileRow === emptyRow && Math.abs(tileCol - emptyCol) === 1) ||
            (tileCol === emptyCol && Math.abs(tileRow - emptyRow) === 1)) {
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            updateTiles();
            if (isSolved()) {
                setTimeout(() => alert('Congratulations! You solved the puzzle!'), 100);
                RegistroWin();
                
            }
        }
    }


    function updateTiles() {
        puzzleContainer.innerHTML = '';
        tiles.forEach(tile => puzzleContainer.appendChild(tile));
    }

  
    function isSolved() {
        return tiles.every((tile, index) => {
            if (index === tiles.length - 1) return tile.classList.contains('empty');
            return tile.textContent == index + 1;
        });
    }

    createTiles();
});

//Jogo Da Cobra

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restartButton");

const box = 20;
const canvasSize = 20;

canvas.width = box * canvasSize;
canvas.height = box * canvasSize;

let snake, food, direction, gameOver, score, game;

function initializeGame() {
    snake = [];
    snake[0] = { x: 10 * box, y: 10 * box };
    snake[1] = { x: 9 * box, y: 10 * box }; // Primeiro segmento do corpo

    food = {
        x: Math.floor(Math.random() * canvasSize) * box,
        y: Math.floor(Math.random() * canvasSize) * box
    };

    direction = null; // Nenhuma direção definida inicialmente
    gameOver = false;
    score = 0;
    scoreDisplay.innerText = "Maçãs: " + score;

    if (game) clearInterval(game);
    game = setInterval(draw, 100);
}

document.addEventListener("keydown", setDirection);
restartButton.addEventListener("click", initializeGame);

function setDirection(event) {
    if (event.keyCode === 37 && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.keyCode === 38 && direction !== "DOWN") {
        direction = "UP";
    } else if (event.keyCode === 39 && direction !== "LEFT") {
        direction = "RIGHT";
    } else if (event.keyCode === 40 && direction !== "UP") {
        direction = "DOWN";
    }
}

function collision(newHead, snake) {
    for (let i = 1; i < snake.length; i++) { // Começa de 1 para evitar colisão com a cabeça
        if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function drawGrid() {
    ctx.strokeStyle = "#ddd";
    for (let i = 0; i < canvas.width; i += box) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
}

function draw() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    for (let i = 0; i < snake.length; i++) {
        // Desenhar corpo da cobra com preenchimento e borda
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "darkgreen"; // Cor da borda
        ctx.lineWidth = 2; // Largura da borda
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction) {
        if (direction === "LEFT") snakeX -= box;
        if (direction === "UP") snakeY -= box;
        if (direction === "RIGHT") snakeX += box;
        if (direction === "DOWN") snakeY += box;

        let newHead = { x: snakeX, y: snakeY };

        if (snakeX === food.x && snakeY === food.y) {
            score++;
            scoreDisplay.innerText = "Maçãs: " + score;
            food = {
                x: Math.floor(Math.random() * canvasSize) * box,
                y: Math.floor(Math.random() * canvasSize) * box
            };
        } else {
            snake.pop();
        }

        if (
            snakeX < 0 || snakeY < 0 || 
            snakeX >= canvas.width || snakeY >= canvas.height || 
            collision(newHead, snake)
        ) {
            gameOver = true;
            setTimeout(() => {
                alert("Game Over");
            }, 100);
            RegistroDerrota()
            clearInterval(game); // Parar o jogo
            return;
        }

        snake.unshift(newHead);
    }
}

// Inicializa o jogo ao carregar a página
initializeGame();


//Jogo Da Velha


