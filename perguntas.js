let questions = [
    {
        numb: 1,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Qual a função do segundo eletricista enquanto o primeiro acessa o SEP (Sistema Elétrico de Potência) de acordo com a NR 10?",
        answer: "Resguardar o primeiro eletricista e auxiliar quando necessário.",
        options: [
            "Preencher os documentos e interagir com o cliente.",
            "Auxiliar com a entrega dos ferramentais quando solicitado e separar materiais quando necessário.",
            "Resguardar o primeiro eletricista e auxiliar quando necessário.",
            "Todas as alternativas.",
            "Nenhuma das alternativas",
        ],
    },
    {
        numb: 2,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Qual a tensão máxima da luva isolante classe o.",
        answer: "1000V",
        options: [
            "1000V",
            "500V",
            "1.100V",
            "1.500V",
            "Nenhuma das alternativas",
        ],
    },
    {
        numb: 3,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Qual norma aborda o tema 'trabalho em altura'.",
        answer: "NR 35",
        options: [
            "NR 12",
            "NR 33",
            "NR 10",
            "NR 35",
            "Nenhuma das alternativas",
        ],
    },
    {
        numb: 4,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Os Principais fatores que contribuem para os altos índices de acidente com eletricidade são: I – Manutenção por pessoa com competência inadequadas; II – Processos de Contenção dos riscos inadequados; III – Não cumprimento das normas e padrões; IV – Arquivos Técnicos desatualizados ou inexistentes; Estão corretos os itens:",
        answer: "Todas estão Corretas.",
        options: [
            "I, II e IV",
            "II, III e IV",
            "I , II e III",
            "Todas estão Corretas.",
            "Nenhuma das alternativas",
        ],
    },
    {
        numb: 5,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Considera-se trabalho em altura toda a atividade executada acima de _____ do nível inferior onde haja risco de queda.",
        answer: "2 mts",
        options: [
            "2,10 mts",
            "2 mts",
            "1 mt",
            "1,50 mts",
            "Nenhuma das alternativas",
        ],
    },
    {
        numb: 6,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Ao chegar em uma residência constatei que no local o cliente possui uma medição trifásica, na inspeção foi verificado que o cliente com um neutro por fora da medição, nesse caso qual seria a irregularidade?",
        answer: "Nenhuma das alternativas acima.",
        options: [
            "Neutro Isolado.",
            "Desvio de Neutro.",
            "Desvio no ramal de Ligação.",
            "Nenhuma das alternativas acima.",
            "Medidor danificado",
        ],
    },
    {
        numb: 7,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Ao chegar em uma residência e constatei que no local não possui medidor, porém no sistema foi verificado que possui medidor. Qual o laudo correto para preenchimento do TOI?",
        answer: "Ligação direta.",
        options: [
            "Desvio no ramal de entrada.",
            "Desvio no ramal de Ligação.",
            "Neutro Isolado.",
            "Ligação direta.",
            "Nenhuma das alternativas",
        ],
    },
    {
        numb: 8,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "médio",
        question: "Qual o vencimento do teste dielétrico do lençol de BT:",
        answer: "6 meses",
        options: [
            "3 meses",
            "6 meses",
            "5 meses",
            "4 meses",
            "12 meses",
        ],
    },
    {
        numb: 9,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "difícil",
        question: "Qual o prazo máximo que um medidor precisa ser instalado ?",
        answer: "30 dias após o recebimento na empresa",
        options: [
            "90 dias após o recebimento na empresa",
            "30 dias após o recebimento na empresa",
            "30 dias após o recebimento pela equipe",
            "60 dias após o recebimento pela equipe",
            "Nenhuma das alternativas acima",
        ],
    },
    {
        numb: 10,
        category: "Segurança do Trabalho",
        type: "multiple",
        difficulty: "difícil",
        question: "Qual o único processo que realizamos que é regulado pela ANEEL podendo gerar multas que o pagamento tanto pode ser para o consumidor como para o governo federal ?",
        answer: "Anexo IV",
        options: [
            "REN",
            "Clandestino",
            "Perdas Administrativas",
            "Anexo IV",
            "Obsoleto",
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
