import { perguntasOpcoesEmbaralhadas } from "./perguntas.js";

const caixa_registro = document.getElementById("caixa_registro");
const caixa_info = document.getElementById("info-box");
const caixa_pergunta = document.getElementById("perguntaDiv");
const caixa_score = document.getElementById("caixa_score");
const caixa_rank = document.getElementById("caixa_rank");
const tabelaElement = document.getElementById("tabela");
const podiumElement = document.getElementById("podium");
const perguntaElement = document.getElementById("pergunta");
const opcoesElement = document.getElementById("opcoes");
const temporizadorElement = document.getElementById("temporizador");
const percentualElement = document.getElementById("percentual");
const respostasCorretasElement = document.getElementById("respostas_corretas");
const qtdPerguntasElement = document.getElementById("qtd_perguntas");
const tempoElement = document.getElementById("tempo");
const proximoBtn = document.getElementById("proximo");
const registrarBtn = document.getElementById("botao_registrar");
const sairQuizBtn = document.getElementById("sair");
const iniciarBtn = document.getElementById("iniciar");

let resultado = {};
let perguntaAtual = 0;
let temporizador;
let respostaSelecionada = false;

function formatarData() {
	const dataAtual = new Date();

	const dia = String(dataAtual.getDate()).padStart(2, "0");
	const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Lembrando que os meses começam do zero
	const ano = String(dataAtual.getFullYear()).slice(-2);

	const dataFormatada = `${dia}${mes}${ano}`;

	return dataFormatada;
}

function iniciarTemporizador() {
	let tempoRestante = 15;

	temporizador = setInterval(() => {
		tempoRestante--;

		temporizadorElement.style.width = (tempoRestante / 15) * 100 + "%";

		if (tempoRestante <= 0) {
			clearInterval(temporizador);
			perguntaAtual++;
			if (perguntaAtual < perguntasOpcoesEmbaralhadas.length) {
				renderizarPergunta();
			} else {
				fim(resultado);
			}
		}
	}, 1000);
}

function resetarTemporizador() {
	clearInterval(temporizador);
	temporizadorElement.style.width = "100%";
	iniciarTemporizador();
}

function renderizarPergunta() {
	const pergunta = perguntasOpcoesEmbaralhadas[perguntaAtual];
	document.getElementById("temporizador").style.display = "block";
	perguntaElement.textContent = pergunta.question;
	opcoesElement.innerHTML = "";

	pergunta.options.forEach((opcao, index) => {
		const li = document.createElement("li");
		li.textContent = opcao;
		li.addEventListener("click", () => {
			verificarResposta(index);
			resetarTemporizador();
		});
		opcoesElement.appendChild(li);
	});

	resetarTemporizador();
}

function verificarResposta(index) {
	const pergunta = perguntasOpcoesEmbaralhadas[perguntaAtual];
	const opcoes = document.querySelectorAll("#opcoes li");

	if (respostaSelecionada) {
		return;
	}

	opcoes.forEach((opcao, i) => {
		if (i === index) {
			respostaSelecionada = true;
			if (pergunta.options[index] === pergunta.answer) {
				opcao.classList.add("resposta-correta");
				resultado.pontuacao = resultado.pontuacao + 10;
			} else {
				opcao.classList.add("resposta-incorreta");
				opcoes.forEach((op, j) => {
					if (j === pergunta.options.indexOf(pergunta.answer)) {
						op.classList.add("resposta-correta");
					}
				});
			}
		}
	});

	setTimeout(() => {
		opcoes.forEach((opcao, i) => {
			opcao.classList.remove("resposta-correta", "resposta-incorreta");
		});

		respostaSelecionada = false;

		perguntaAtual++;

		if (perguntaAtual < perguntasOpcoesEmbaralhadas.length) {
			renderizarPergunta();
		} else {
			fim(resultado);
		}
	}, 1000);
}

proximoBtn.addEventListener("click", () => {
	if (perguntaAtual < perguntasOpcoesEmbaralhadas.length) {
		renderizarPergunta();
	}
});

function iniciarQuiz() {
	caixa_info.style.display = "none";
	caixa_pergunta.style.display = "block";
	renderizarPergunta();
	resultado.tempo = Date.now();
}

function sair() {
	caixa_info.style.display = "none";
	caixa_registro.style.display = "block";
	document.getElementById("nome").value = "";
	document.getElementById("matricula").value = "";
}

function registrar() {
	resultado.nome = document.getElementById("nome").value.toUpperCase();
	resultado.re = document.getElementById("matricula").value;
	resultado.pontuacao = 0;

	if (resultado.nome == "ADMIN") {
		caixa_registro.style.display = "none";
		caixa_rank.style.display = "block";
		rank(resultado);
	} else {
		if (resultado.nome && resultado.re) {
			caixa_registro.style.display = "none";
			caixa_info.style.display = "block";
		} else {
			alert("Preencha todos os Campos.");
		}
	}
}

function fim(resultado) {
	clearInterval(temporizador);

	resultado.tempo = (Date.now() - resultado.tempo) / 1000;

	percentualElement.textContent =
		(resultado.pontuacao / perguntasOpcoesEmbaralhadas.length) * 10;
	respostasCorretasElement.textContent = resultado.pontuacao / 10;
	qtdPerguntasElement.textContent = perguntasOpcoesEmbaralhadas.length;
	tempoElement.textContent = resultado.tempo;
	caixa_pergunta.style.display = "none";
	caixa_score.style.display = "block";

	axios
		.post(
			`https://quizz-guima.onrender.com/${formatarData()}/resultado`,
			resultado
		)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error("Erro ao enviar dados:", error);
		});
}

async function rank(resultado) {
	const bd = async () => {
		try {
			const response = await axios.get(
				`https://quizz-guima.onrender.com/${resultado.re}`
			);
			return response.data;
		} catch (error) {
			console.error("Erro na solicitação:", error.message);
			throw error;
		}
	};

	try {
		const resultados = await bd();

		if (resultados === null) {
			console.log("Aguardando resultados");
			setTimeout(() => rank(resultado), 5000);
		} else {
			const resultadosOrdenados = resultados.resultados.sort((a, b) => {
				if (b.pontuacao !== a.pontuacao) {
					return b.pontuacao - a.pontuacao;
				} else {
					return a.tempo - b.tempo;
				}
			});
			//============================I===================================
			resultadosOrdenados.slice(0, 3).forEach((resultado, index) => {
				const ranks = ["gold", "silver", "bronze"];
				document.querySelector(
					`#div_suprema > div > div.podium.${ranks[index]} > div.class-information > div.podium_player > div.re`
				).textContent = `R.E.: ${resultado.re}`;
				document.querySelector(
					`#div_suprema > div > div.podium.${ranks[index]} > div.class-information > div.podium_player > div.title`
				).textContent = `${resultado.nome}`;
				document.querySelector(
					`#div_suprema > div > div.podium.${ranks[index]} > div.class-information > div.podium_info > div.steps`
				).textContent = `Pontos: ${resultado.pontuacao}`;
				document.querySelector(
					`#div_suprema > div > div.podium.${ranks[index]} > div.class-information > div.podium_info > div.time`
				).textContent = `Tempo: ${resultado.tempo} Seg.`;
			});
			//============================F===================================
			const table = document.createElement("table");
			table.innerHTML = `
    <thead>
        <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
            <th>Tempo</th>
        </tr>
    </thead>
    <tbody>
			`;
			resultadosOrdenados.slice(3).forEach((resultado, index) => {
				const row = document.createElement("tr");
				row.innerHTML = `
            <td>${index + 4}</td>
            <td class="nome">${resultado.re} - ${resultado.nome}</td>
            <td>${resultado.pontuacao}</td>
            <td>${resultado.tempo}</td>
        `;
				table.querySelector("tbody").appendChild(row);
			});
			table.innerHTML += `</tbody>`;
			table.id = "tabelaResultados";
			const tabelaAnterior = document.getElementById("tabelaResultados");
			if (tabelaAnterior) {
				tabelaAnterior.remove();
			}

			document.getElementById("tabela").appendChild(table);
			setTimeout(() => rank(resultado), 5000);
		}
	} catch (error) {
		console.error("Erro", error.message);
		setTimeout(() => rank(resultado), 5000);
	}

}

registrarBtn.addEventListener("click", registrar);
sairQuizBtn.addEventListener("click", sair);
iniciarBtn.addEventListener("click", iniciarQuiz);
