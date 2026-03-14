// Estado da aplicação
const appState = {
    currentQuestion: 0,
    answers: [],
    questions: [],
    candidates: [],
    language: 'pt',
    mode: null,
    theme: 'dark', // 'dark' ou 'light'
    userPosition: { economic: 0, social: 0 },
    candidatesWithDistance: []
};

// Traduções da interface
const translations = {
    pt: {
        title: 'Compasso Político',
        tagline: 'Eleições Presidenciais',
        responses: 'RESPOSTAS ATÉ AGORA',
        subtitle: 'Descubra seu posicionamento político',
        intro1: 'O <strong>Compasso Político Brasil</strong> é uma ferramenta desenvolvida para ajudar você a explorar como suas opiniões se comparam com as dos candidatos à presidência de 2026.',
        chooseMode: 'Escolha o modo:',
        quickMode: 'Modo Rápido',
        quickDesc: '20 perguntas',
        quickBadge: 'Recomendado',
        fullMode: 'Modo Completo',
        fullDesc: '60 perguntas',
        fullBadge: 'Mais preciso',
        feature2: 'Análise em dois eixos: econômico e social',
        feature3: 'Compare com os principais candidatos',
        startButton: 'Começar Agora',
        selectMode: 'Selecione um modo',
        privacy: 'Suas respostas são privadas e não são armazenadas. Este é um projeto educacional e não partidário.',
        resultsTitle: 'Seus Resultados',
        resultsSubtitle: 'Seu posicionamento no espectro político brasileiro',
        compassTitle: 'Seu Posicionamento',
        yourPositionTitle: 'Análise',
        youLabel: 'Você',
        candidatesLabel: 'Candidatos',
        economicAxis: 'Eixo Econômico',
        socialAxis: 'Eixo Social',
        closestCandidatesTitle: 'Afinidade com Candidatos',
        restartButton: 'Refazer Teste',
        shareButton: 'Compartilhar',
        matchLabel: 'Afinidade',
        agreeStrongly: 'Concordo Totalmente',
        agree: 'Concordo',
        neutral: 'Neutro',
        disagree: 'Discordo',
        disagreeStrongly: 'Discordo Totalmente',
        previous: 'Anterior',
        producedBy: 'Produzido por',
        countdownLabel: 'FALTAM PARA O 1º TURNO',
        countdownDays: 'dias',
        countdownHours: 'hrs',
        countdownMinutes: 'min'
    },
    en: {
        title: 'Political Compass',
        tagline: 'Presidential Elections',
        responses: 'RESPONSES SO FAR',
        subtitle: 'Discover your political position',
        intro1: 'The <strong>Brazil Political Compass</strong> is a tool developed to help you explore how your opinions compare with those of the candidates for the 2026 presidency.',
        chooseMode: 'Choose mode:',
        quickMode: 'Quick Mode',
        quickDesc: '20 questions',
        quickBadge: 'Recommended',
        fullMode: 'Complete Mode',
        fullDesc: '60 questions',
        fullBadge: 'More accurate',
        feature2: 'Analysis on two axes: economic and social',
        feature3: 'Compare with the main candidates',
        startButton: 'Start Now',
        selectMode: 'Select a mode',
        privacy: 'Your answers are private and not stored. This is an educational and non-partisan project.',
        resultsTitle: 'Your Results',
        resultsSubtitle: 'Your position in the Brazilian political spectrum',
        compassTitle: 'Your Position',
        yourPositionTitle: 'Analysis',
        youLabel: 'You',
        candidatesLabel: 'Candidates',
        economicAxis: 'Economic Axis',
        socialAxis: 'Social Axis',
        closestCandidatesTitle: 'Candidate Affinity',
        restartButton: 'Retake Test',
        shareButton: 'Share',
        matchLabel: 'Match',
        agreeStrongly: 'Strongly Agree',
        agree: 'Agree',
        neutral: 'Neutral',
        disagree: 'Disagree',
        disagreeStrongly: 'Strongly Disagree',
        previous: 'Previous',
        producedBy: 'Produced by',
        countdownLabel: 'TIME UNTIL 1ST ROUND',
        countdownDays: 'days',
        countdownHours: 'hrs',
        countdownMinutes: 'min'
    },
    es: {
        title: 'Brújula Política',
        tagline: 'Elecciones Presidenciales',
        responses: 'RESPUESTAS HASTA AHORA',
        subtitle: 'Descubre tu posicionamiento político',
        intro1: 'La <strong>Brújula Política Brasil</strong> es una herramienta desarrollada para ayudarte a explorar cómo tus opiniones se comparan con las de los candidatos a la presidencia de 2026.',
        chooseMode: 'Elige el modo:',
        quickMode: 'Modo Rápido',
        quickDesc: '20 preguntas',
        quickBadge: 'Recomendado',
        fullMode: 'Modo Completo',
        fullDesc: '60 preguntas',
        fullBadge: 'Más preciso',
        feature2: 'Análisis en dos ejes: económico y social',
        feature3: 'Compara con los principales candidatos',
        startButton: 'Comenzar Ahora',
        selectMode: 'Selecciona un modo',
        privacy: 'Tus respuestas son privadas y no se almacenan. Este es un proyecto educativo y no partidista.',
        resultsTitle: 'Tus Resultados',
        resultsSubtitle: 'Tu posicionamiento en el espectro político brasileño',
        compassTitle: 'Tu Posicionamiento',
        yourPositionTitle: 'Análisis',
        youLabel: 'Tú',
        candidatesLabel: 'Candidatos',
        economicAxis: 'Eje Económico',
        socialAxis: 'Eje Social',
        closestCandidatesTitle: 'Afinidad con Candidatos',
        restartButton: 'Rehacer Test',
        shareButton: 'Compartir',
        matchLabel: 'Afinidad',
        agreeStrongly: 'Totalmente de Acuerdo',
        agree: 'De Acuerdo',
        neutral: 'Neutral',
        disagree: 'En Desacuerdo',
        disagreeStrongly: 'Totalmente en Desacuerdo',
        previous: 'Anterior',
        producedBy: 'Producido por',
        countdownLabel: 'FALTAN PARA LA 1ª VUELTA',
        countdownDays: 'días',
        countdownHours: 'hrs',
        countdownMinutes: 'min'
    }
};

// Mudar tema
function toggleTheme() {
    appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', appState.theme);
    localStorage.setItem('theme', appState.theme);
    
    // Atualizar ícone do botão
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = appState.theme === 'dark' ? '☀️' : '🌙';
    }
}

// Função para mudar idioma
function changeLanguage(lang) {
    appState.language = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Re-renderizar pergunta atual se estiver na tela de perguntas
    if (screens.questions.classList.contains('active')) {
        renderQuestion();
    }
    
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US';
}

// Elementos do DOM
const screens = {
    welcome: document.getElementById('welcome-screen'),
    questions: document.getElementById('questions-screen'),
    results: document.getElementById('results-screen'),
    'world-map-screen': document.getElementById('world-map-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    prevBtn: document.getElementById('prev-btn'),
    restartBtn: document.getElementById('restart-btn'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    questionText: document.getElementById('question-text'),
    categoryTag: document.getElementById('category-tag'),
    answerButtons: document.querySelectorAll('.answer-btn-modern')
};

// Navegação entre telas
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Carregar dados
async function loadData() {
    try {
        const questionsResponse = await fetch('data/questions.json');
        if (questionsResponse.ok) {
            const allQuestions = await questionsResponse.json();
            
            if (appState.mode === 'quick') {
                appState.questions = allQuestions.filter(q => q.quick === true);
            } else {
                appState.questions = allQuestions;
            }
            
            console.log(`${appState.questions.length} perguntas carregadas (modo: ${appState.mode})`);
        } else {
            console.warn('Arquivo questions.json não encontrado');
            appState.questions = [];
        }

        const candidatesResponse = await fetch('data/candidates.json');
        if (candidatesResponse.ok) {
            appState.candidates = await candidatesResponse.json();
            console.log(`${appState.candidates.length} candidatos carregados`);
        } else {
            console.warn('Arquivo candidates.json não encontrado');
            appState.candidates = [];
        }

        return true;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return false;
    }
}

// Selecionar modo
function selectMode(mode) {
    appState.mode = mode;
    
    document.querySelectorAll('.mode-card').forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.mode === mode) {
            card.classList.add('selected');
        }
    });
    
    elements.startBtn.disabled = false;
    const lang = appState.language;
    elements.startBtn.textContent = translations[lang].startButton;
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

// Renderizar pergunta
function renderQuestion() {
    if (appState.questions.length === 0) {
        elements.questionText.textContent = 'Nenhuma pergunta disponível';
        elements.answerButtons.forEach(btn => btn.disabled = true);
        return;
    }

    const question = appState.questions[appState.currentQuestion];
    const lang = appState.language;
    
    // Texto da pergunta traduzido
    elements.questionText.textContent = question.text[lang] || question.text.pt || 'Pergunta não encontrada';
    
    // Categoria traduzida
    if (elements.categoryTag && question.category) {
        const categoryText = question.category[lang] || question.category.pt || question.category;
        elements.categoryTag.querySelector('span').textContent = categoryText;
        elements.categoryTag.style.display = 'inline-block';
    } else if (elements.categoryTag) {
        elements.categoryTag.style.display = 'none';
    }
    
    // Atualizar textos dos botões de resposta
    const answerLabels = [
        translations[lang].agreeStrongly,
        translations[lang].agree,
        translations[lang].neutral,
        translations[lang].disagree,
        translations[lang].disagreeStrongly
    ];
    
    elements.answerButtons.forEach((btn, index) => {
        btn.textContent = answerLabels[index];
        btn.classList.remove('selected');
        btn.disabled = false;
    });
    
    // Marcar resposta já dada
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

// Atualizar botões de navegação
function updateNavigationButtons() {
    elements.prevBtn.disabled = appState.currentQuestion === 0;
    elements.prevBtn.textContent = '← ' + translations[appState.language].previous;
}

// Registrar resposta e avançar automaticamente
function registerAnswer(value) {
    appState.answers[appState.currentQuestion] = value;
    
    elements.answerButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.value) === value) {
            btn.classList.add('selected');
        }
    });
    
    // Aguardar um momento e avançar automaticamente
    setTimeout(() => {
        nextQuestion();
    }, 300);
}

// Próxima pergunta
function nextQuestion() {
    if (appState.currentQuestion < appState.questions.length - 1) {
        appState.currentQuestion++;
        renderQuestion();
    } else {
        calculateResults();
        showScreen('results');
    }
}

// Pergunta anterior
function previousQuestion() {
    if (appState.currentQuestion > 0) {
        appState.currentQuestion--;
        renderQuestion();
    }
}

// Calcular resultados
function calculateResults() {
    let economicSum = 0, socialSum = 0;
    let economicCount = 0, socialCount = 0;
    
    appState.questions.forEach((question, index) => {
        const answer = appState.answers[index];
        if (answer !== null) {
            const value = answer * question.weight;
            
            if (question.axis === 'economic') {
                economicSum += value;
                economicCount++;
            } else if (question.axis === 'social') {
                socialSum += value;
                socialCount++;
            }
        }
    });
    
    const economicScore = economicCount > 0 ? (economicSum / economicCount) * 50 : 0;
    const socialScore = socialCount > 0 ? (socialSum / socialCount) * 50 : 0;
    
    appState.userPosition = {
        economic: Math.round(economicScore),
        social: Math.round(socialScore)
    };
    
    // Calcular distância para candidatos
    appState.candidatesWithDistance = appState.candidates.map(candidate => {
        const economicDiff = appState.userPosition.economic - candidate.economic;
        const socialDiff = appState.userPosition.social - candidate.social;
        const distance = Math.sqrt(economicDiff ** 2 + socialDiff ** 2);
        
        const maxDistance = Math.sqrt(200 ** 2 + 200 ** 2);
        const affinity = Math.max(0, Math.round((1 - distance / maxDistance) * 100));
        
        return { ...candidate, distance, affinity };
    }).sort((a, b) => a.distance - b.distance);
    
    renderResults();
}

// Renderizar resultados
function renderResults() {
    drawCompass();
    displayPositionDescription();
    displayCandidatesRanking();
}

// Desenhar gráfico do Political Compass
function drawCompass() {
    const canvas = document.getElementById('compass-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const size = 600;
    const center = size / 2;
    const scale = 2.5;
    
    // Cores adaptativas ao tema (modo claro MUITO contrastado)
    const isDark = appState.theme === 'dark';
    const bgColor = isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(230, 230, 230, 1)';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.35)';
    const axisColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.8)';
    const textColor = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 1)';
    
    // Limpar canvas
    ctx.clearRect(0, 0, size, size);
    
    // Fundo
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);
    
    // Quadrantes coloridos (mais visíveis no modo claro)
    const quadrants = [
        { x: 0, y: 0, color: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.08)' },
        { x: center, y: 0, color: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.08)' },
        { x: 0, y: center, color: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.08)' },
        { x: center, y: center, color: isDark ? 'rgba(234, 179, 8, 0.1)' : 'rgba(234, 179, 8, 0.08)' }
    ];
    
    quadrants.forEach(q => {
        ctx.fillStyle = q.color;
        ctx.fillRect(q.x, q.y, center, center);
    });
    
    // Grade
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = isDark ? 1 : 1.5;
    
    for (let i = -100; i <= 100; i += 25) {
        const pos = center + (i * scale);
        
        ctx.beginPath();
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, size);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, pos);
        ctx.lineTo(size, pos);
        ctx.stroke();
    }
    
    // Eixos principais
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = isDark ? 2 : 3;
    
    ctx.beginPath();
    ctx.moveTo(center, 0);
    ctx.lineTo(center, size);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, center);
    ctx.lineTo(size, center);
    ctx.stroke();
    
    // Labels dos eixos
    ctx.fillStyle = textColor;
    ctx.font = isDark ? 'bold 14px sans-serif' : 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    
    ctx.fillText('Esquerda', 60, center - 10);
    ctx.fillText('Direita', size - 60, center - 10);
    
    ctx.save();
    ctx.translate(center + 10, 60);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Libertário', 0, 0);
    ctx.restore();
    
    ctx.save();
    ctx.translate(center + 10, size - 60);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Autoritário', 0, 0);
    ctx.restore();
    
    // Plotar candidatos com FOTOS (circulares)
    appState.candidates.forEach(candidate => {
        const x = center + (candidate.economic * scale);
        const y = center - (candidate.social * scale);
        
        // Tentar carregar foto do candidato
        const img = new Image();
        img.src = `candidates/${candidate.id}.jpg`;
        
        img.onload = function() {
            // Salvar contexto
            ctx.save();
            
            // Criar clipping circular
            ctx.beginPath();
            ctx.arc(x, y, 16, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            
            // Desenhar imagem dentro do círculo
            ctx.drawImage(img, x - 16, y - 16, 32, 32);
            
            // Restaurar contexto
            ctx.restore();
            
            // Borda ao redor da foto
            ctx.strokeStyle = isDark ? '#1e40af' : '#2563eb';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(x, y, 16, 0, Math.PI * 2);
            ctx.stroke();
        };
        
        // Fallback: se foto não carregar, desenhar círculo azul
        img.onerror = function() {
            ctx.fillStyle = '#3b82f6';
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.strokeStyle = isDark ? '#1e40af' : '#2563eb';
            ctx.lineWidth = 2;
            ctx.stroke();
        };
    });
    
    // Plotar usuário (por último para ficar em cima)
    const userX = center + (appState.userPosition.economic * scale);
    const userY = center - (appState.userPosition.social * scale);
    
    // Círculo maior VOCÊ
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(userX, userY, 12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Label "VOCÊ"
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    
    // Fundo para o texto (melhor legibilidade)
    const textWidth = ctx.measureText('VOCÊ').width;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(userX - textWidth/2 - 4, userY - 30, textWidth + 8, 18);
    
    ctx.fillStyle = '#ffffff';
    ctx.fillText('VOCÊ', userX, userY - 17);
}

// Exibir descrição
function displayPositionDescription() {
    const { economic, social } = appState.userPosition;
    
    let economicLabel = '';
    if (economic < -50) economicLabel = 'extrema-esquerda';
    else if (economic < -20) economicLabel = 'esquerda';
    else if (economic < 20) economicLabel = 'centro';
    else if (economic < 50) economicLabel = 'direita';
    else economicLabel = 'extrema-direita';
    
    let socialLabel = '';
    if (social < -50) socialLabel = 'fortemente autoritário';
    else if (social < -20) socialLabel = 'autoritário';
    else if (social < 20) socialLabel = 'moderado';
    else if (social < 50) socialLabel = 'libertário';
    else socialLabel = 'fortemente libertário';
    
    const description = `Você está posicionado como <strong>${economicLabel}</strong> no eixo econômico e <strong>${socialLabel}</strong> no eixo social.`;
    
    document.getElementById('position-main').innerHTML = description;
    document.getElementById('economic-value').textContent = economic > 0 ? `+${economic}` : economic;
    document.getElementById('social-value').textContent = social > 0 ? `+${social}` : social;
}

// Exibir ranking - TODOS OS 9 CANDIDATOS
function displayCandidatesRanking() {
    const container = document.getElementById('candidates-ranking');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Mostrar TODOS os candidatos
    appState.candidatesWithDistance.forEach((candidate, index) => {
        const item = document.createElement('div');
        item.className = 'candidate-item';
        
        item.innerHTML = `
            <div class="candidate-rank">${index + 1}º</div>
            <div class="candidate-photo">
                <img src="candidates/${candidate.id}.jpg" alt="${candidate.name}" onerror="this.src='candidates/placeholder.jpg'">
            </div>
            <div class="candidate-info">
                <div class="candidate-name">${candidate.name}</div>
                <div class="candidate-party">${candidate.party}</div>
            </div>
            <div class="candidate-match">
                <div class="match-percentage">${candidate.affinity}%</div>
                <div class="match-label">${translations[appState.language].matchLabel}</div>
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Reiniciar
function restartTest() {
    appState.currentQuestion = 0;
    appState.mode = null;
    initializeAnswers();
    showScreen('welcome');
}

// Iniciar teste
async function startTest() {
    // Só verifica modo se for quiz do Brasil
    if (appState.selectedQuiz === 'brazil' && !appState.mode) {
        alert('Por favor, selecione um modo antes de começar!');
        return;
    }
    
    // Se for quiz mundial, carregar perguntas mundiais
    if (appState.selectedQuiz === 'world') {
        await loadWorldQuestions();
        return; // loadWorldQuestions já inicia o quiz
    }
    
    // Quiz do Brasil (fluxo normal)
    const dataLoaded = await loadData();
    
    if (!dataLoaded || appState.questions.length === 0) {
        alert('Não foi possível carregar as perguntas.');
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
elements.restartBtn.addEventListener('click', restartTest);

elements.answerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = parseInt(btn.dataset.value);
        registerAnswer(value);
    });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});

document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
        selectMode(card.dataset.mode);
    });
});

// Botão de tema
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Botão de compartilhar
const shareBtn = document.getElementById('share-btn');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        const text = `Meu resultado no Compasso Político Brasil 2026:\nEconômico: ${appState.userPosition.economic}\nSocial: ${appState.userPosition.social}`;
        
        if (navigator.share) {
            navigator.share({ title: 'Compasso Político Brasil 2026', text }).catch(err => console.log(err));
        } else {
            navigator.clipboard.writeText(text).then(() => alert('Resultado copiado!'));
        }
    });
}

// Modal do PIX
const pixModal = document.getElementById('pix-modal');
const pixBtn = document.getElementById('pix-btn');
const pixBtnResults = document.getElementById('pix-btn-results');
const pixClose = document.querySelector('.pix-close');

function openPixModal() {
    pixModal.classList.add('active');
}

function closePixModal() {
    pixModal.classList.remove('active');
}

if (pixBtn) {
    pixBtn.addEventListener('click', openPixModal);
}

if (pixBtnResults) {
    pixBtnResults.addEventListener('click', openPixModal);
}

if (pixClose) {
    pixClose.addEventListener('click', closePixModal);
}

if (pixModal) {
    pixModal.addEventListener('click', (e) => {
        if (e.target === pixModal) {
            closePixModal();
        }
    });
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pixModal.classList.contains('active')) {
        closePixModal();
    }
});

// Inicialização
const savedTheme = localStorage.getItem('theme') || 'dark';
appState.theme = savedTheme;
document.documentElement.setAttribute('data-theme', savedTheme);
if (themeToggle) {
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Contagem Regressiva para 1º turno 2026 (04/10/2026)
function updateCountdown() {
    const electionDate = new Date('2026-10-04T08:00:00-03:00'); // 04/10/2026 8h (horário de Brasília)
    const now = new Date();
    const diff = electionDate - now;
    
    if (diff <= 0) {
        // Eleição já aconteceu
        const daysEl = document.getElementById('countdown-days');
        const hoursEl = document.getElementById('countdown-hours');
        const minutesEl = document.getElementById('countdown-minutes');
        if (daysEl) daysEl.textContent = '000';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    
    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
}

// Atualizar contagem a cada minuto
updateCountdown();
setInterval(updateCountdown, 60000);

console.log('Compasso Político Brasil 2026 - Aplicação iniciada');

// ==================== LÓGICA PARA SELETOR DE QUIZ ====================

// Estado do quiz selecionado
appState.selectedQuiz = null; // Começa sem seleção

// Seleção de quiz
document.querySelectorAll('.quiz-card').forEach(card => {
    card.addEventListener('click', function() {
        const quizOptions = document.querySelector('.quiz-options');
        
        // Remover active de todos
        document.querySelectorAll('.quiz-card').forEach(c => c.classList.remove('active'));
        
        // Adicionar active no clicado
        this.classList.add('active');
        
        // Adicionar classe shrink para animação
        quizOptions.classList.add('shrink');
        
        // Guardar seleção
        const quizType = this.dataset.quiz;
        appState.selectedQuiz = quizType;
        
        // Mostrar/esconder seletor de modo
        const modeSelector = document.getElementById('mode-selector-brazil');
        const featureBrazil = document.querySelector('.feature-brazil');
        const featureWorld = document.querySelector('.feature-world');
        const startBtn = document.getElementById('start-btn');
        
        if (quizType === 'brazil') {
            modeSelector.style.display = 'block';
            if (featureBrazil) featureBrazil.style.display = 'flex';
            if (featureWorld) featureWorld.style.display = 'none';
            
            // Resetar seleção de modo
            document.querySelectorAll('.mode-card').forEach(m => m.classList.remove('active'));
            startBtn.disabled = true;
            startBtn.textContent = translations[appState.language].selectMode || 'Selecione um modo';
        } else {
            modeSelector.style.display = 'none';
            if (featureBrazil) featureBrazil.style.display = 'none';
            if (featureWorld) featureWorld.style.display = 'flex';
            
            // Para quiz mundial, não precisa selecionar modo
            startBtn.disabled = false;
            startBtn.textContent = translations[appState.language].startWorldQuiz || 'Começar Quiz Mundial';
        }
    });
});

// Carregar perguntas mundiais
async function loadWorldQuestions() {
    try {
        const response = await fetch('data/world-questions.json');
        const worldQuestions = await response.json();
        
        // Manter perguntas no formato original (não traduzir ainda)
        appState.questions = worldQuestions;
        
        appState.currentQuestion = 0;
        appState.answers = [];
        
        // Iniciar quiz
        showScreen('questions');
        renderQuestion();
        
    } catch (error) {
        console.error('Erro ao carregar perguntas mundiais:', error);
        alert('Erro ao carregar quiz mundial. Tente novamente.');
    }
}

// Modificar calculateResults para mostrar resultados diferentes
const originalCalculateResults = calculateResults;
calculateResults = function() {
    if (appState.selectedQuiz === 'world') {
        calculateWorldResults();
    } else {
        originalCalculateResults();
    }
};

// Calcular resultados do quiz mundial
function calculateWorldResults() {
    console.log('🌍 Calculando resultados mundiais...');
    console.log('Respostas:', appState.answers);
    console.log('Perguntas:', appState.questions);
    
    let economicScore = 0;
    let socialScore = 0;
    
    appState.answers.forEach((answer, index) => {
        const question = appState.questions[index];
        const value = answer * question.weight;
        
        if (question.category === 'economic') {
            economicScore += value;
        } else {
            socialScore += value;
        }
    });
    
    console.log('Economic score:', economicScore);
    console.log('Social score:', socialScore);
    
    // Normalizar scores
    const economicQuestions = appState.questions.filter(q => q.category === 'economic').length;
    const socialQuestions = appState.questions.filter(q => q.category === 'social').length;
    
    console.log('Economic questions:', economicQuestions);
    console.log('Social questions:', socialQuestions);
    
    appState.userPosition = {
        economic: (economicScore / (economicQuestions * 2)) * 10,
        social: (socialScore / (socialQuestions * 2)) * 10
    };
    
    console.log('User position:', appState.userPosition);
    
    // Mostrar tela de resultados mundiais
    showWorldResults();
}

// Mostrar resultados mundiais
async function showWorldResults() {
    console.log('🌍 Mostrando resultados mundiais...');
    console.log('loadWorldParties existe?', typeof loadWorldParties);
    console.log('renderCountriesGrid existe?', typeof renderCountriesGrid);
    
    // Carregar dados se ainda não foram carregados
    if (typeof loadWorldParties === 'function') {
        console.log('Carregando dados dos partidos...');
        await loadWorldParties();
        console.log('Dados carregados:', worldPartiesData ? 'SIM' : 'NÃO');
    } else {
        console.error('❌ loadWorldParties não existe!');
    }
    
    console.log('Mostrando tela world-map-screen...');
    showScreen('world-map-screen');
    
    // Dar um pequeno delay para garantir que a tela foi mostrada
    setTimeout(() => {
        console.log('Renderizando grid de países...');
        if (typeof renderCountriesGrid === 'function') {
            renderCountriesGrid();
            console.log('✅ Grid renderizado!');
        } else {
            console.error('❌ renderCountriesGrid não está disponível');
        }
    }, 100);
}

// Adicionar traduções para novo conteúdo
translations.pt.chooseQuiz = 'Escolha o quiz:';
translations.pt.brazilQuiz = 'Presidenciais Brasil 2026';
translations.pt.brazilDesc = 'Compare com candidatos brasileiros';
translations.pt.worldQuiz = 'Partidos do Mundo';
translations.pt.worldDesc = 'Descubra seu partido em 15 países';
translations.pt.feature4 = 'Veja partidos em 15 países diferentes';

translations.en.chooseQuiz = 'Choose the quiz:';
translations.en.brazilQuiz = 'Brazil Presidential 2026';
translations.en.brazilDesc = 'Compare with Brazilian candidates';
translations.en.worldQuiz = 'World Parties';
translations.en.worldDesc = 'Discover parties in 15 countries';
translations.en.feature4 = 'See parties in 15 different countries';

translations.es.chooseQuiz = 'Elige el quiz:';
translations.es.brazilQuiz = 'Presidenciales Brasil 2026';
translations.es.brazilDesc = 'Compara con candidatos brasileños';
translations.es.worldQuiz = 'Partidos en el Mundo';
translations.es.worldDesc = 'Descubre partidos en 15 países';
translations.es.feature4 = 'Ver partidos en 15 países diferentes';

// Traduções para botões de quiz
translations.pt.selectQuiz = 'Selecione um quiz';
translations.pt.selectMode = 'Selecione um modo';
translations.pt.startWorldQuiz = 'Começar Quiz Mundial';
translations.pt.startBrazilQuiz = 'Começar Agora';

translations.en.selectQuiz = 'Select a quiz';
translations.en.selectMode = 'Select a mode';
translations.en.startWorldQuiz = 'Start World Quiz';
translations.en.startBrazilQuiz = 'Start Now';

translations.es.selectQuiz = 'Seleccione un quiz';
translations.es.selectMode = 'Seleccione un modo';
translations.es.startWorldQuiz = 'Comenzar Quiz Mundial';
translations.es.startBrazilQuiz = 'Comenzar Ahora';
