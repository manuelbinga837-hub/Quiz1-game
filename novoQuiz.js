let pergunta = document.getElementById("pergunta");
let opcoes = document.getElementById("opcoes");
let mensagem = document.getElementById("mensagem");

let btnProxima = document.getElementById("proxima");

let progresso = document.getElementById("progresso");
let resultado = document.getElementById("resultado");
let pontosTela = document.getElementById("pontos");
let respondeu = false;

let perguntas = [

{
    pergunta: "O que significa HTML?",
    opcoes: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Home Tool Markup Language"
    ],
    resposta: "Hyper Text Markup Language"
},


{
    pergunta: "Qual é a função principal do CSS?",
    opcoes: [
        "Criar banco de dados",
        "Estilizar páginas web",
        "Criar sistemas operacionais"
    ],
    resposta: "Estilizar páginas web"
},


{
    pergunta: "Qual linguagem é conhecida por ser usada para criar interatividade em páginas web?",
    opcoes: [
        "JavaScript",
        "HTML",
        "SQL"
    ],
    resposta: "JavaScript"
},


{
    pergunta: "O que é um algoritmo?",
    opcoes: [
        "Uma sequência de passos para resolver um problema",
        "Um tipo de computador",
        "Um programa de edição"
    ],
    resposta: "Uma sequência de passos para resolver um problema"
},


{
    pergunta: "Qual linguagem é muito usada para desenvolvimento de sistemas e inteligência artificial?",
    opcoes: [
        "Python",
        "HTML",
        "CSS"
    ],
    resposta: "Python"
},


{
    pergunta: "O que significa CPU?",
    opcoes: [
        "Central Processing Unit",
        "Computer Program User",
        "Control Program Unit"
    ],
    resposta: "Central Processing Unit"
},


{
    pergunta: "O que é uma variável na programação?",
    opcoes: [
        "Um espaço para guardar informações",
        "Um tipo de teclado",
        "Um programa antivírus"
    ],
    resposta: "Um espaço para guardar informações"
},


{
    pergunta: "Qual linguagem é usada para criar consultas em bancos de dados?",
    opcoes: [
        "SQL",
        "CSS",
        "HTML"
    ],
    resposta: "SQL"
},


{
    pergunta: "O que significa IDE na programação?",
    opcoes: [
        "Integrated Development Environment",
        "Internet Data Engine",
        "Internal Design Element"
    ],
    resposta: "Integrated Development Environment"
},


{
    pergunta: "O que é uma função na programação?",
    opcoes: [
        "Um bloco de código que executa uma tarefa",
        "Uma peça do computador",
        "Um arquivo de imagem"
    ],
    resposta: "Um bloco de código que executa uma tarefa"
}

];

let perguntaAtual = 0;

let pontos = 0;

const verificarResposta = (escolhida)=>{

    if(respondeu){
        return;
    }

    respondeu = true;

    const perguntaAtualObj = perguntas[perguntaAtual];

    if(escolhida === perguntaAtualObj.resposta){

        pontos++;

        pontosTela.textContent = pontos;

        mensagem.textContent = "✅ Resposta correta!";
        mensagem.style.color = "#00ff88";

    }else{

        mensagem.textContent =
        "❌ Resposta errada! A resposta correta é: " + perguntaAtualObj.resposta;

        mensagem.style.color = "#ff4d4d";

    }

}


const mostrar = ()=>{

    respondeu = false;
    mensagem.textContent = "...";

    let perguntaAtualObj = perguntas[perguntaAtual];

    progresso.textContent =
    "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

    pergunta.textContent = perguntaAtualObj.pergunta;

    opcoes.innerHTML = "";

    perguntaAtualObj.opcoes.forEach((opcao)=>{

        let botao = document.createElement("button");

        botao.classList.add("opcao");

        botao.textContent = opcao;

        botao.addEventListener("click", ()=>{

            verificarResposta(opcao);

        });

        opcoes.appendChild(botao);

    });

}

const proximaPergunta = ()=>{

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        mostrar();

    }else{

        pergunta.style.display = "none";
        opcoes.style.display = "none";
        btnProxima.style.display = "none";
        progresso.style.display = "none";

        resultado.innerHTML = `
            <h2>🏆 Quiz Finalizado!</h2>
            <h3>Pontuação: ${pontos}/${perguntas.length}</h3>

            <button id="reiniciar">Jogar Novamente</button>
        `;

        let reiniciar = document.getElementById("reiniciar");

        reiniciar.addEventListener("click", ()=>{

            perguntaAtual = 0;

            pontos = 0;

            respondeu = false;

            pontosTela.textContent = pontos;

            resultado.innerHTML = "";

            pergunta.style.display = "block";
            opcoes.style.display = "block";
            btnProxima.style.display = "block";
            progresso.style.display = "block";

            mostrar();

        });

    }

}

btnProxima.addEventListener("click", ()=>{

    proximaPergunta();

});
mostrar();
