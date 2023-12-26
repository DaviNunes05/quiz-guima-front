let questions = [
    {
        numb: 1,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "Em que momento se faz a verificação dos equipamentos de segurança (checklist)?",
        answer: "Antes da saída da base",
        options: [
            "No dia anterior",
            "Antes da saída da base",
            "Depois da saída da base",
            "Durante as atividades em campo",
            "Esperar ser inspecionado",
        ],
    },
    {
        numb: 2,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "Para trocar seu material, para quem deve solicitar a abertura do pedido?",
        answer: "Supervisor",
        options: [
            "Almoxarife",
            "Supervisor",
            "Coordenador",
            "QTR",
            "Não precisa abrir o pedido",
        ],
    },
    {
        numb: 3,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "Qual a meta mínima de TOI assinado?",
        answer: "50%",
        options: [
            "15%",
            "50%",
            "60%",
            "40%",
            "Nenhuma das alternativas",
        ],
    },
    {
        numb: 4,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "A ponteira do multímetro pode ser utilizada no ADR 2000?",
        answer: "Não",
        options: [
            "Sim",
            "Não",
            "Para alguns medidores pode",
            "ADR 2000 não precisa de ponteira",
            "Com a autorização do supervisor",
        ],
    },
    {
        numb: 5,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "Qual a meta do indicador de TOI APTO para Cálculo?",
        answer: "100%",
        options: [
            "95%",
            "90%",
            "100%",
            "30%",
            "Nenhuma das respostas",
        ],
    },
    {
       numb: 6,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "Qual é a principal função da CIPA?",
        answer: "Comissão Interna de Prevenção de Acidentes",
        options: [
            "Comissão de Incentivo à Produção Artística",
            "Conselho Internacional de Proteção Ambiental",
            "Comissão Interna de Prevenção de Acidentes",
            "Comitê de Inspeção de Produtos Agrícolas",
            "Nenhuma das respostas",
        ],
    },
    {
        numb: 7,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Quantos pares de luva de vaqueta são fornecidos pela guima por eletricista?",
        answer: "2",
        options: [
            "1",
            "2",
            "3",
            "4",
            "Nenhuma das respostas",
        ],
    },
    {
        numb: 8,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Quantos micros furos na luva isolante de borracha são permitidos?",
        answer: "0",
        options: [
            "0",
            "2",
            "1",
            "1,5",
            "Nenhuma das respostas",
        ],
    },
    {
        numb: 9,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Qual classe de luva é fornecida pela guima para trabalhos na BT?",
        answer: "0",
        options: [
            "0",
            "2",
            "1",
            "00",
            "Nenhuma das respostas",
        ],
    },
    {
        numb: 10,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Em qual degrau devemos realizar a amarração da escada?",
        answer: "Quinto",
        options: [
            "Primeiro",
            "Terceiro",
            "Quinto",
            "Base",
            "Nenhuma das respostas",
        ],
    },
];

const questionsLimpa = questions.map(({ question, answer, options }) => ({
    question,
    answer,
    options,
}));

function embaralhador(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function embaralhandoOpcoes(question) {
    question.options = embaralhador([...question.options]);
    return question;
}

const perguntasEmbaralhadas = embaralhador([...questionsLimpa]);

const perguntasOpcoesEmbaralhadas = perguntasEmbaralhadas.map(embaralhandoOpcoes);

export {perguntasOpcoesEmbaralhadas}
