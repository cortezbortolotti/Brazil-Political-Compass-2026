// Estado da aplicação
const appState = {
    currentQuestion: 0,
    answers: [],
    questions: [],
    candidates: []
};

// Elementos do DOM
const screens = {
    welcome: document.getElementById('welcome-screen'),
    questions: document.getElementById('questions-screen'),
    results: document.getElementById('results-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    restartBtn: document.getElementById('restart-btn'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    questionText: document.getElementById('question-text'),
    answerButtons: document.querySelectorAll('.answer-btn')
};

// Funções de Navegação entre Telas
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Carregar dados dos JSONs
async function loadData() {
    try {
        // Carregar perguntas
        const questionsResponse = await fetch('data/questions.json');
        if (questionsResponse.ok) {
            appState.questions = await questionsResponse.json();
            console.log(`${appState.questions.length} perguntas carregadas`);
        } else {
            console.warn('Arquivo questions.json não encontrado, usando array vazio');
            appState.questions = [];
        }

        // Carregar candidatos
        const candidatesResponse = await fetch('data/candidates.json');
        if (candidatesResponse.ok) {
            appState.candidates = await candidatesResponse.json();
            console.log(`${appState.candidates.length} candidatos carregados`);
        } else {
            console.warn('Arquivo candidates.json não encontrado, usando array vazio');
            appState.candidates = [];
        }

        return true;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return false;
    }
}

// Inicializar respostas
function initializeAnswers() {
    appState.answers = new Array(appState.questions.length).fill(null);
}

// Atualizar progresso
function updateProgress() {
    const total = appState.questions.length || 60;
    const current = appState.currentQuestion + 1;
    const percentage = (current / total) * 100;
    
    elements.progressFill.style.width = `${percentage}%`;
    elements.progressText.textContent = `${current} / ${total}`;
}

// Renderizar pergunta atual
function renderQuestion() {
    if (appState.questions.length === 0) {
        elements.questionText.textContent = 'Nenhuma pergunta disponível. Adicione perguntas ao arquivo data/questions.json';
        elements.answerButtons.forEach(btn => btn.disabled = true);
        return;
    }

    const question = appState.questions[appState.currentQuestion];
    elements.questionText.textContent = question.text || question.question || 'Pergunta não encontrada';
    
    // Remover seleção anterior
    elements.answerButtons.forEach(btn => {
        btn.classList.remove('selected');
        btn.disabled = false;
    });
    
    // Marcar resposta já dada (se houver)
    const currentAnswer = appState.answers[appState.currentQuestion];
    if (currentAnswer !== null) {
        const selectedBtn = Array.from(elements.answerButtons).find(
            btn => parseInt(btn.dataset.value) === currentAnswer
        );
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        }
    }
    
    updateProgress();
    updateNavigationButtons();
}

// Atualizar estado dos botões de navegação
function updateNavigationButtons() {
    elements.prevBtn.disabled = appState.currentQuestion === 0;
    
    const hasAnswer = appState.answers[appState.currentQuestion] !== null;
    const isLastQuestion = appState.currentQuestion === appState.questions.length - 1;
    
    if (isLastQuestion && hasAnswer) {
        elements.nextBtn.textContent = 'Ver Resultados →';
        elements.nextBtn.disabled = false;
    } else {
        elements.nextBtn.textContent = 'Próxima →';
        elements.nextBtn.disabled = !hasAnswer;
    }
}

// Registrar resposta
function registerAnswer(value) {
    appState.answers[appState.currentQuestion] = value;
    
    // Marcar botão selecionado
    elements.answerButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.value) === value) {
            btn.classList.add('selected');
        }
    });
    
    updateNavigationButtons();
}

// Ir para próxima pergunta
function nextQuestion() {
    if (appState.currentQuestion < appState.questions.length - 1) {
        appState.currentQuestion++;
        renderQuestion();
    } else {
        // Última pergunta - ir para resultados
        calculateResults();
        showScreen('results');
    }
}

// Ir para pergunta anterior
function previousQuestion() {
    if (appState.currentQuestion > 0) {
        appState.currentQuestion--;
        renderQuestion();
    }
}

// Calcular resultados (placeholder)
function calculateResults() {
    console.log('Calculando resultados...');
    console.log('Respostas:', appState.answers);
    
    // TODO: Implementar cálculo do Political Compass
    // TODO: Implementar matching com candidatos
}

// Reiniciar teste
function restartTest() {
    appState.currentQuestion = 0;
    initializeAnswers();
    showScreen('welcome');
}

// Iniciar teste
async function startTest() {
    const dataLoaded = await loadData();
    
    if (!dataLoaded || appState.questions.length === 0) {
        alert('Não foi possível carregar as perguntas. Por favor, verifique se o arquivo data/questions.json existe.');
        return;
    }
    
    initializeAnswers();
    appState.currentQuestion = 0;
    showScreen('questions');
    renderQuestion();
}

// Event Listeners
elements.startBtn.addEventListener('click', startTest);
elements.prevBtn.addEventListener('click', previousQuestion);
elements.nextBtn.addEventListener('click', nextQuestion);
elements.restartBtn.addEventListener('click', restartTest);

elements.answerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = parseInt(btn.dataset.value);
        registerAnswer(value);
    });
});

// Inicialização
console.log('Political Compass Brasil 2026 - Aplicação iniciada');
console.log('Pronto para carregar dados e começar o teste');
