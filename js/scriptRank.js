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


async function exibirRanking() {
    const rankingTabela = document.getElementById('ranking-tabela');
    try {
        const response = await fetch('http://localhost:5011/api/RegistroDePartida/rankingVitoria');
        const data = await response.json();
        // Limpa a tabela antes de inserir os dados
        rankingTabela.innerHTML = '';
        // Insere o cabeçalho da tabela
        const cabecalho = `
            <tr>
                <th>Posição</th>
                <th>Jogador</th>
                <th>Partida</th>
                <th>Vitórias</th>
                 <th>Derrota</th>
                  <th>Empate</th>
            </tr>`;
        rankingTabela.insertAdjacentHTML('beforeend', cabecalho);
        // Insere os dados dos jogadores
        data.forEach((item, index) => {
            const linha = `
                <tr>
                    <td>${index + 1}</td>
                    <td id="teste">${item.usuario}</td>
                    <td>${item.partidas}</td>
                    <td>${item.vitorias}</td>
                    <td>${item.derrotas}</td>
                    <td>${item.empate}</td>
                </tr>`;
            rankingTabela.insertAdjacentHTML('beforeend', linha);
        });
    } catch (error) {
        console.error('Erro ao buscar dados do ranking:', error);
    }
}
 
// Chama a função para exibir o ranking ao carregar a página
exibirRanking();

const listaNick = document.getElementById("ranking-tabela");
const inputFiltrar = document.getElementById("txtfiltrar");

inputFiltrar.addEventListener("input", () => {
    let filtro = inputFiltrar.value.toLowerCase();
    let linhas = listaNick.getElementsByTagName('tr');

    for (const linha of linhas) {
        // Verifica se a linha contém cabeçalhos (<th>)
        let ths = linha.getElementsByTagName('th');
        if (ths.length > 0) {
            linha.style.display = ""; // Mantém as linhas de cabeçalho visíveis
            continue; // Pula para a próxima iteração do loop
        }

        let nicks = linha.getElementsByTagName('td');
        let mostrarLinha = false;

        for (const nick of nicks) {
            const textoNick = nick.textContent.toLowerCase();

            if (textoNick.includes(filtro)) {
                mostrarLinha = true;
                break;
            }
        }

        if (mostrarLinha) {
            linha.style.display = ""; // Mostra a linha
        } else {
            linha.style.display = "none"; // Esconde a linha
        }
    }
});


function redirecionarLobby() {
    console.log("Teste")
    window.location.href = ("http://127.0.0.1:5500/indexJogo1.html");
}

async function exibirRankingDer() {
    const rankingTabela = document.getElementById('ranking-tabela');
    try {
        const response = await fetch('http://localhost:5011/api/RegistroDePartida/rankingDer');
        const data = await response.json();
        // Limpa a tabela antes de inserir os dados
        rankingTabela.innerHTML = '';
        // Insere o cabeçalho da tabela
        const cabecalho = `
            <tr>
                <th>Posição</th>
                <th>Jogador</th>
                <th>Partida</th>
                <th>Vitórias</th>
                 <th>Derrota</th>
                  <th>Empate</th>
            </tr>`;
        rankingTabela.insertAdjacentHTML('beforeend', cabecalho);
        // Insere os dados dos jogadores
        data.forEach((item, index) => {
            const linha = `
                <tr>
                    <td>${index + 1}</td>
                    <td id="teste">${item.usuario}</td>
                    <td>${item.partidas}</td>
                    <td>${item.vitorias}</td>
                    <td>${item.derrotas}</td>
                    <td>${item.empate}</td>
                </tr>`;
            rankingTabela.insertAdjacentHTML('beforeend', linha);
        });
    } catch (error) {
        console.error('Erro ao buscar dados do ranking:', error);
    }
}
 
async function exibirRankingPart() {
    const rankingTabela = document.getElementById('ranking-tabela');
    try {
        const response = await fetch('http://localhost:5011/api/RegistroDePartida/rankingPart');
        const data = await response.json();
        // Limpa a tabela antes de inserir os dados
        rankingTabela.innerHTML = '';
        // Insere o cabeçalho da tabela
        const cabecalho = `
            <tr>
                <th>Posição</th>
                <th>Jogador</th>
                <th>Partida</th>
                <th>Vitórias</th>
                 <th>Derrota</th>
                  <th>Empate</th>
            </tr>`;
        rankingTabela.insertAdjacentHTML('beforeend', cabecalho);
        // Insere os dados dos jogadores
        data.forEach((item, index) => {
            const linha = `
                <tr>
                    <td>${index + 1}</td>
                    <td id="teste">${item.usuario}</td>
                    <td>${item.partidas}</td>
                    <td>${item.vitorias}</td>
                    <td>${item.derrotas}</td>
                    <td>${item.empate}</td>
                </tr>`;
            rankingTabela.insertAdjacentHTML('beforeend', linha);
        });
    } catch (error) {
        console.error('Erro ao buscar dados do ranking:', error);
    }
}

async function exibirRankingEmpate() {
    const rankingTabela = document.getElementById('ranking-tabela');
    try {
        const response = await fetch('http://localhost:5011/api/RegistroDePartida/rankingEmpate');
        const data = await response.json();
        // Limpa a tabela antes de inserir os dados
        rankingTabela.innerHTML = '';
        // Insere o cabeçalho da tabela
        const cabecalho = `
            <tr>
                <th>Posição</th>
                <th>Jogador</th>
                <th>Partida</th>
                <th>Vitórias</th>
                 <th>Derrota</th>
                  <th>Empate</th>
            </tr>`;
        rankingTabela.insertAdjacentHTML('beforeend', cabecalho);
        // Insere os dados dos jogadores
        data.forEach((item, index) => {
            const linha = `
                <tr>
                    <td>${index + 1}</td>
                    <td id="teste">${item.usuario}</td>
                    <td>${item.partidas}</td>
                    <td>${item.vitorias}</td>
                    <td>${item.derrotas}</td>
                    <td>${item.empate}</td>
                </tr>`;
            rankingTabela.insertAdjacentHTML('beforeend', linha);
        });
    } catch (error) {
        console.error('Erro ao buscar dados do ranking:', error);
    }
}

var select = document.getElementById('rank')
var variavel = '';
select.onchange = function(){
    variavel = this.value;
    console.log(variavel)
    
    if (variavel == 'Vitoria') {
        console.log('Vitoria')
        exibirRanking();
    }else if(variavel == 'Derrota'){
        console.log('Derrota')
        exibirRankingDer();
    } else if(variavel == 'Partida'){
        console.log('Partida')
        exibirRankingPart();
    } else if(variavel == 'Empate'){
        console.log('Empate')
        exibirRankingEmpate();
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
  }x

