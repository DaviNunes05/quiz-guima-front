let questions = [
    {
        numb: 1,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "O que significa a sigla NR?",
        answer: "Norma Regulamentadora",
        options: [
            "Normas de Resolução",
            "Norma Racionalizada",
            "Norma de Regulamentação",
            "Norma Regulamentadora",
        ],
    },
    {
        numb: 2,
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
        ],
    },
    {
        numb: 3,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "O que é DDS?",
        answer: "Diálogo Diário de Segurança",
        options: [
            "Documento de Desempenho e Saúde",
            "Dicionário de Diretrizes de Segurança",
            "Diálogo Diário de Segurança",
            "Desenvolvimento de Documentação de Segurança",
        ],
    },
    {
        numb: 4,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "Qual é o objetivo da SIPAT?",
        answer: "Semana Interna de Prevenção de Acidentes de Trabalho",
        options: [
            "Seminário Internacional de Produção Agropecuária",
            "Semana de Incentivo à Produção Artística e Tecnológica",
            "Semana Interna de Prevenção de Acidentes de Trabalho",
            "Simpósio de Inspeção de Produtos Alimentícios e Tecnológicos",
        ],
    },
    {
        numb: 5,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "O que é EPI?",
        answer: "Equipamento de Proteção Individual",
        options: [
            "Elemento de Proteção Industrial",
            "Equipamento para Produção Integrada",
            "Elemento de Prevenção de Incidentes",
            "Equipamento de Proteção Individual",
        ],
    },
    {
        numb: 6,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "fácil",
        question: "Qual é a principal causa de acidentes de trabalho no Brasil?",
        answer: "Falta de atenção e descuido",
        options: [
            "Uso inadequado de EPIs",
            "Má condição de equipamentos",
            "Falta de atenção e descuido",
            "Falta de treinamento adequado",
        ],
    },
    {
        numb: 7,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "O que é PPRA?",
        answer: "Programa de Prevenção de Riscos Ambientais",
        options: [
            "Plano de Prevenção de Riscos no Ambiente",
            "Programa de Proteção e Redução de Acidentes",
            "Plano de Prevenção e Resposta a Acidentes",
            "Programa de Prevenção de Riscos Ambientais",
        ],
    },
    {
        numb: 8,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Qual é o objetivo do PCMSO?",
        answer: "Programa de Controle Médico de Saúde Ocupacional",
        options: [
            "Plano de Controle de Materiais e Substâncias Ocupacionais",
            "Programa de Controle e Monitoramento de Segurança Ocupacional",
            "Plano de Contenção de Materiais e Substâncias Ocupacionais",
            "Programa de Controle Médico de Saúde Ocupacional",
        ],
    },
    {
        numb: 9,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "O que é AVCB?",
        answer: "Auto de Vistoria do Corpo de Bombeiros",
        options: [
            "Avaliação de Vazamento de Combustíveis e Baterias",
            "Auto de Vistoria e Controle de Bombeiros",
            "Avaliação de Viabilidade de Controle de Bombeiros",
            "Auto de Vistoria do Corpo de Bombeiros",
        ],
    },
    {
        numb: 10,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "O que é CEST?",
        answer: "Código Especificador da Substituição Tributária",
        options: [
            "Código Específico de Segurança no Trabalho",
            "Controle de EPIs e Segurança no Trabalho",
            "Cadastro de Empresas de Segurança no Trabalho",
            "Código Especificador da Substituição Tributária",
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