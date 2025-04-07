const botoes = document.querySelectorAll(".botao");
//cria botoes e busca classe botao html

const textos = document.querySelectorAll(".aba-conteudo");
// cria texto e busca pela classe aba-conteudo
for (let i = 0; i < botoes.length; i++) {
    //para variavel i menor que a lista de botoes; passe para o proximo botao
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
            //remove a classe ativa do botao ao clicar
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
        //adiciona a classe ativa do botao ao clicar
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-06-05T00:00:00");
const tempoObjetivo2 = new Date("2025-12-20T00:00:00");
const tempoObjetivo3 = new Date("2025-07-05T00:00:00");
const tempoObjetivo4 = new Date("2025-12-01T00:00:00");
//cria tempo de objetivo na classe contadores

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
//lista de tempo e objetivo

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date(); //pegar o tempo atual quando nao estabelecemos
    let tempoFinal = tempoObjetivo - tempoAtual; //diferenca dos temposs
    let segundos = Math.floor(tempoFinal / 1000);
    //funcao matematica para contar os segundos
    let minutos = Math.floor(segundos / 60);
    //para calcular os minutos
    let horas = Math.floor(minutos / 60);
    //para calcular as hora
    let dias = Math.floor(horas / 24);
    //para calcular os dias

    segundos %= 60; //divisao exata sem decimais
    minutos %= 60;//divisao exata sem decimais
    horas %= 24;//divisao exata sem decimais
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
    //se o tempo final for maior que zero, mostre o cronometro
    //senao, mostre todos com valor zerado
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
        //para atualizar o cronometro pegue os IDS dias, horas, minutos, e segundos
        //e coloque um texto apartir da funcao calculaTempo
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
//use a funcao setInteravel para atualizar o cronometro de 1 em 1 segundo

comecaCronometro();
//executa funcao para iniciar o cronometro