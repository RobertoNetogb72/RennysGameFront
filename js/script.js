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
 
    let score = document.getElementById("score");
    let gamecontainer = document.getElementById("gamecontainer");
    let gameCanvas = document.getElementById("gameCanvas");
 
    // Verifica a cor atual da div e alterna entre azul e vermelho
 
    if (minhaDiv.style.backgroundColor === "black") {
 
        minhaDiv.style.transition = "background-color 1s";
 
        minhaDiv.style.backgroundColor = "white";
 
        score.style.transition = "color 1s";
 
        score.style.color = "black";
 
        gamecontainer.style.transition = "background-color 1s";
 
        gamecontainer.style.backgroundColor = "black";
 
        gameCanvas.style.transition = "background-color 1s";
 
        gameCanvas.style.backgroundColor = "black";
 
    } else {
 
        minhaDiv.style.transition = "background-color 1s";
 
        minhaDiv.style.backgroundColor = "black";
 
        score.style.transition = "color 1s";
 
        score.style.color = "white";
 
        gamecontainer.style.transition = "background-color 1s";
 
        gamecontainer.style.backgroundColor = "white";
 
        gameCanvas.style.transition = "background-color 1s";
 
        gameCanvas.style.backgroundColor = "white";
 
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
        const email = document.getElementById('emailCadastro').value;     
        if (!email.includes('@')) {      
             alert('coloca @ no email.');       
             e.preventDefault();
        }else{
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
function redirecionarRanking() {
    console.log("teste")
    window.location.href = ("http://127.0.0.1:5500/ranking.html");
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
        }else{
            alert('Dados Inválidos')
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
            //return console.log('Partida Contabilizada!')
            if (response.status === 200) {
                return console.log('Partida Contabilizada!')
            }
       //})
    } catch (error) {
        setTimeout(() => alert('Erro ao contabilizar está partida, consulte um suporte no email:"suporteRennys@gmail.com"'), 100);
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

        showAlert(`
            <strong>Seu Registro de Partida:</strong><br><br>
            Partidas Jogadas: ${data.qntPartida}<br>
            Partidas Vencidas: ${data.qntVitoria}<br>
            Partidas Perdidas: ${data.qntDerrota}<br>
            Partidas Empatadas: ${data.qntEmpate}
          `);
       //const cadastroId = data[0].cadastroId;
        //html.innerHTML = `
        //<p>${data.qntPartida}</p>
      //  `
    } catch (error) {

    }
}

function showAlert(message) {
    document.getElementById('alertContent').innerHTML = message;
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('customAlertOverlay').style.display = 'block';
  }
 
  // Função para fechar o modal
  function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('customAlertOverlay').style.display = 'none';
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
                document.getElementById('gameOverScreen').style.display = "flex";
                // setTimeout(() => alert('Parabéns! você resolveu o puzzle!'), 100);
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

    function resetGame() {
        tiles = [];
        puzzleContainer.innerHTML = '';
        createTiles();
        document.getElementById('gameOverScreen').style.display = "none";
    }

    document.getElementById('restartButton1').addEventListener('click', resetGame);

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
 
let particles = [];
 
function createParticles(x, y) {
    for (let i = 0; i < 10; i++) { // Gera 10 partículas
        particles.push({
            x: x,
            y: y,
            size: Math.random() * 5 + 2, // Tamanho aleatório
            speedX: Math.random() * 2 - 1, // Velocidade aleatória em x
            speedY: Math.random() * 2 - 1, // Velocidade aleatória em y
            life: 100 // Vida da partícula
        });
    }
}
 
// Função para atualizar e desenhar partículas
function drawParticles() {
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.fillStyle = "red"; // Cor da partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
 
        // Atualiza a posição e a vida da partícula
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;
 
        // Remove partículas que já morreram
        if (p.life <= 0) {
            particles.splice(i, 1);
            i--; // Decrementa o índice para compensar a remoção
        }
    }
}
 
function initializeGame() {
    document.getElementById('gameOverScreen').style.display = "none";
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
 
    if (event.keyCode === 65 && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.keyCode === 87 && direction !== "DOWN") {
        direction = "UP";
    } else if (event.keyCode === 68 && direction !== "LEFT") {
        direction = "RIGHT";
    } else if (event.keyCode === 83 && direction !== "UP") {
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
 
const colorOptions = document.querySelectorAll('.color-option');
const snakeCanvas = document.getElementById('gameCanvas').getContext('2d'); // Get the 2d drawing context of the canvas
 
let snakeColor = 'green'; // Set the initial snake color
 
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    snakeColor = option.style.backgroundColor; // Update snake color based on clicked option's background color
  });
});
 
const colorMap = {
    red: "darkred",
    green: "darkgreen",
    blue: "darkblue",
    // Adicione mais cores aqui se necessário
};
 
function draw() {
    if (gameOver) return;
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawParticles(); // Chama a função de partículas
 
    for (let i = 0; i < snake.length; i++) {
        // Desenhar corpo da cobra com preenchimento e borda
        ctx.shadowBlur = 10;
        ctx.shadowColor = colorMap[snakeColor] || "black";        snake.forEach(function(snakePart) {
        ctx.fillStyle = snakeColor;
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        });
        ctx.shadowBlur = 0;
 
        ctx.strokeStyle = colorMap[snakeColor]; // Cor da borda
        ctx.lineWidth = 2; // Largura da borda
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
 
    function darkenColor(color) {
         // Prefixo para escurecer a cor (ajuste conforme necessário)
    const darkenPrefix = 'dark';
 
    // Verifica se a cor já possui o prefixo "dark"
    if (color.startsWith(darkenPrefix)) {
        return color; // Se já estiver escura, retorna a mesma cor
    }
 
    // Adiciona o prefixo "dark" para escurecer a cor
    return darkenPrefix + color;
    }
 
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ff0000";
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);
    ctx.shadowBlur = 0;
 
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    const snakeWidth = box; // Assuming snake width is the same as box size
    let snakeHeight = box; // Set snake height equal to box size
 
    snakeCanvas.fillStyle = snakeColor;  // Set the fill style of the snake to the current snakeColor
    snakeCanvas.fillRect(snakeX, snakeY, snakeWidth, box); // Use box directly for height
 
    if (direction) {
        if (direction === "LEFT") snakeX -= box;
        if (direction === "UP") snakeY -= box;
        if (direction === "RIGHT") snakeX += box;
        if (direction === "DOWN") snakeY += box;
 
        let newHead = { x: snakeX, y: snakeY };
 
        if (snakeX === food.x && snakeY === food.y) {
            score++;
            scoreDisplay.innerText = "Maçãs: " + score;
            createParticles(food.x + box / 2, food.y + box / 2); // Cria partículas na posição da maçã
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
            clearInterval(game); // Parar o jogo
 
            // Exibe a tela de Game Over
            document.getElementById('gameOverScreen').style.display = "flex";
            document.getElementById('finalScore').textContent = score;
        }
 
        snake.unshift(newHead);
    }
}
 
// Inicializa o jogo ao carregar a página
initializeGame();