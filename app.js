var LANGS = ["pt", "en", "es"];

var UI_COPY = {
    pt: {
        page_title: "Seção Eleitoral",
        nav_compasso: "Compasso Político",
        nav_eleicoes: "Eleições",
        nav_apoie: "Apoie o Projeto",
        qr_titulo: "Apoie o Projeto",
        qr_sub: "Escaneie o QR Code para contribuir via Pix",
        qr_fechar: "Fechar",
        home_badge: "Eleições Presidenciais 2026",
        home_titulo: "Descubra seu",
        home_titulo_grad: "posicionamento político",
        home_desc: "Compare suas opiniões com os candidatos à presidência do Brasil ou descubra com qual partido você mais se alinha em 33 países ao redor do mundo.",
        home_chip1: "Modo rápido com 30 perguntas",
        home_chip2: "Modo completo com 80 perguntas",
        home_chip3: "Mapa interativo em 33 países",
        home_btn_brasil: "Modo Brasil",
        home_btn_world: "Modo Mundo",
        mundo_badge: "Resultados Mundiais",
        mundo_titulo: "Seus Partidos no Mundo",
        mundo_sub: "Clique em um país para ver o ranking completo",
        home_stats_questions: "Perguntas no Brasil",
        home_stats_world_questions: "Perguntas no Mundo",
        home_stats_countries: "Países comparados",
        const_title: "Modo Brasil em Construção",
        const_sub: "A base de dados oficial para as Eleições 2026 está sendo preparada. Estará disponível em breve!",
        const_btn: "Entendi",
        countdown_title: "1º Turno",
        countdown_done: "Em andamento",
        quiz_exit: "Sair",
        quiz_prev: "Anterior",
        quiz_next: "Próxima",
        quiz_results: "Ver resultado",
        quiz_loading: "Carregando...",
        quiz_question_of: "Questão {current} de {total}",
        answers: ["Concordo totalmente", "Concordo", "Neutro", "Discordo", "Discordo totalmente"],
        mode: {
            title: "Escolha o Modo",
            subtitleBrazil: "Selecione quantas perguntas você quer responder",
            subtitleWorld: "Selecione quantas perguntas você quer responder no comparativo mundial",
            quick: "Modo Rápido",
            full: "Modo Completo",
            quickMetaBrazil: "30 perguntas",
            fullMetaBrazil: "80 perguntas",
            quickMetaWorld: "15 perguntas",
            fullMetaWorld: "30 perguntas",
            cancel: "Cancelar"
        },
        result: {
            econ: "Economia",
            social: "Sociedade",
            candidatesTitle: "Candidatos mais próximos",
            worldHint: "Toque em um país para abrir o ranking completo.",
            econLeft: "Mais Estado",
            econRight: "Mais mercado",
            econCenter: "Centro econômico",
            socialDown: "Mais linha dura",
            socialUp: "Mais progressista",
            socialCenter: "Centro social",
            profiles: {
                center: "Seu resultado ficou próximo do centro, com mistura de pragmatismo econômico e social.",
                authLeft: "Seu perfil combina intervenção econômica com maior ênfase em ordem, autoridade e controle social.",
                authRight: "Seu perfil combina economia mais pró-mercado com postura mais dura em ordem, segurança e costumes.",
                libLeft: "Seu perfil tende à esquerda progressista, com mais Estado na economia e maior abertura em costumes.",
                libRight: "Seu perfil tende ao liberalismo, com mais mercado na economia e maior abertura em costumes."
            }
        },
        compare: {
            introTitle: "Leitura ideológica",
            introBody: "{name} aparece aqui como {label}.",
            descriptionTitle: "Resumo",
            positionsTitle: "Posição no gráfico",
            matchTitle: "Afinidade geral",
            axisEconomic: "Eixo Econômico",
            axisSocial: "Eixo Civil/Social",
            axisClose: "Bem próximo",
            axisFar: "Distância relevante",
            you: "Você",
            candidate: "Candidato",
            points: "Economia {econ} · Sociedade {social}"
        },
        world: {
            topCountry: "Maior afinidade",
            topParty: "Partido mais alinhado",
            countryRanking: "Ranking de afinidade política"
        },
        compass: {
            axisTop: "Progressista / libertário",
            axisBottom: "Autoritário / linha dura",
            axisLeft: "Mais Estado",
            axisRight: "Mais mercado",
            quadAuthLeft: "Autoritário estatista",
            quadAuthRight: "Direita dura",
            quadLibLeft: "Esquerda progressista",
            quadLibRight: "Liberal progressista",
            hint: "Toque ou passe o mouse nos pontos para ver o rótulo ideológico.",
            you: "Você",
            coords: "Economia {econ} · Sociedade {social}"
        },
        axisBuckets: {
            economic: [
                { max: -60, label: "estatista" },
                { max: -20, label: "centro-esquerda econômica" },
                { max: 20, label: "centro econômico" },
                { max: 60, label: "centro-direita econômica" },
                { max: Infinity, label: "pró-mercado" }
            ],
            social: [
                { max: -60, label: "linha dura" },
                { max: -20, label: "conservador/autoritário" },
                { max: 20, label: "centro social" },
                { max: 60, label: "liberal-progressista" },
                { max: Infinity, label: "libertário/progressista" }
            ]
        }
    },
    en: {
        page_title: "Electoral Section",
        nav_compasso: "Political Compass",
        nav_eleicoes: "Elections",
        nav_apoie: "Support the Project",
        qr_titulo: "Support the Project",
        qr_sub: "Scan the QR code to contribute via Pix",
        qr_fechar: "Close",
        home_badge: "2026 Presidential Election",
        home_titulo: "Discover your",
        home_titulo_grad: "political position",
        home_desc: "Compare your views with Brazil's presidential candidates or discover which party you align with most across 33 countries.",
        home_chip1: "Quick mode with 30 questions",
        home_chip2: "Full mode with 80 questions",
        home_chip3: "Interactive map across 33 countries",
        home_btn_brasil: "Brazil Mode",
        home_btn_world: "World Mode",
        mundo_badge: "World Results",
        mundo_titulo: "Your Parties Around the World",
        mundo_sub: "Tap a country to view the full ranking",
        home_stats_questions: "Brazil questions",
        home_stats_world_questions: "World questions",
        home_stats_countries: "Countries compared",
        const_title: "Brazil Mode Under Construction",
        const_sub: "The official database for the 2026 Elections is being prepared. It will be available soon!",
        const_btn: "Understood",
        countdown_title: "Round 1",
        countdown_done: "Live now",
        quiz_exit: "Exit",
        quiz_prev: "Previous",
        quiz_next: "Next",
        quiz_results: "See result",
        quiz_loading: "Loading...",
        quiz_question_of: "Question {current} of {total}",
        answers: ["Strongly agree", "Agree", "Neutral", "Disagree", "Strongly disagree"],
        mode: {
            title: "Choose the Mode",
            subtitleBrazil: "Select how many questions you want to answer",
            subtitleWorld: "Select how many questions you want to answer for the world comparison",
            quick: "Quick Mode",
            full: "Full Mode",
            quickMetaBrazil: "30 questions",
            fullMetaBrazil: "80 questions",
            quickMetaWorld: "15 questions",
            fullMetaWorld: "30 questions",
            cancel: "Cancel"
        },
        result: {
            econ: "Economy",
            social: "Society",
            candidatesTitle: "Closest candidates",
            worldHint: "Tap a country to open the full ranking.",
            econLeft: "More State",
            econRight: "More market",
            econCenter: "Economic center",
            socialDown: "More hardline",
            socialUp: "More progressive",
            socialCenter: "Social center"
        },
        compare: {
            introTitle: "Ideological reading",
            introBody: "{name} appears here as {label}.",
            descriptionTitle: "Summary",
            positionsTitle: "Chart position",
            matchTitle: "Overall match",
            axisEconomic: "Economic Axis",
            axisSocial: "Civil/Social Axis",
            axisClose: "Very close",
            axisFar: "Meaningful gap",
            you: "You",
            candidate: "Candidate",
            points: "Economy {econ} · Society {social}"
        },
        world: {
            topCountry: "Best match",
            topParty: "Closest party",
            countryRanking: "Political affinity ranking"
        },
        compass: {
            axisTop: "Progressive / libertarian",
            axisBottom: "Authoritarian / hardline",
            axisLeft: "More State",
            axisRight: "More market",
            quadAuthLeft: "Authoritarian left",
            quadAuthRight: "Hard right",
            quadLibLeft: "Progressive left",
            quadLibRight: "Liberal right",
            hint: "Tap or hover over points to see the ideological label.",
            you: "You",
            coords: "Economy {econ} · Society {social}"
        },
        axisBuckets: {
            economic: [
                { max: -60, label: "statist" },
                { max: -20, label: "center-left economically" },
                { max: 20, label: "economic center" },
                { max: 60, label: "center-right economically" },
                { max: Infinity, label: "pro-market" }
            ],
            social: [
                { max: -60, label: "hardline" },
                { max: -20, label: "conservative/authoritarian" },
                { max: 20, label: "social center" },
                { max: 60, label: "liberal-progressive" },
                { max: Infinity, label: "libertarian/progressive" }
            ]
        }
    },
    es: {
        page_title: "Sección Electoral",
        nav_compasso: "Compás Político",
        nav_eleicoes: "Elecciones",
        nav_apoie: "Apoya el Proyecto",
        qr_titulo: "Apoya el Proyecto",
        qr_sub: "Escanea el código QR para contribuir vía Pix",
        qr_fechar: "Cerrar",
        home_badge: "Elección Presidencial 2026",
        home_titulo: "Descubre tu",
        home_titulo_grad: "posición política",
        home_desc: "Compara tus opiniones con los candidatos a la presidencia de Brasil o descubre con qué partido te alineas más en 33 países.",
        home_chip1: "Modo rápido con 30 preguntas",
        home_chip2: "Modo completo con 80 preguntas",
        home_chip3: "Mapa interactivo en 33 países",
        home_btn_brasil: "Modo Brasil",
        home_btn_world: "Modo Mundo",
        mundo_badge: "Resultados Mundiales",
        mundo_titulo: "Tus Partidos en el Mundo",
        mundo_sub: "Pulsa un país para ver el ranking completo",
        home_stats_questions: "Preguntas de Brasil",
        home_stats_world_questions: "Preguntas del Mundo",
        home_stats_countries: "Países comparados",
        const_title: "Modo Brasil en Construcción",
        const_sub: "La base de datos oficial para las Elecciones 2026 se está preparando. ¡Estará disponible pronto!",
        const_btn: "Entendido",
        countdown_title: "1ª Vuelta",
        countdown_done: "En curso",
        quiz_exit: "Salir",
        quiz_prev: "Anterior",
        quiz_next: "Siguiente",
        quiz_results: "Ver resultado",
        quiz_loading: "Cargando...",
        quiz_question_of: "Pregunta {current} de {total}",
        answers: ["Totalmente de acuerdo", "De acuerdo", "Neutro", "En desacuerdo", "Totalmente en desacuerdo"]
    }
};

var STATIC_DATA_MAP = {
    "questions.json": "questions",
    "world-questions.json": "worldQuestions",
    "candidates.json": "candidates",
    "world-parties.json": "worldParties"
};

var QUIZ_CONFIG = {
    brazil: {
        emojiHtml: '<img src="brazil-flag.png" class="m-emoji-flag modo-flag" alt="Brazil flag">'
    },
    world: {
        emojiHtml: '<span class="m-emoji-world" aria-hidden="true">🌎</span>'
    }
};

var ISO_MAP = {
    usa:"us", uk:"gb", canada:"ca", mexico:"mx", argentina:"ar", chile:"cl", uruguay:"uy",
    germany:"de", italy:"it", france:"fr", portugal:"pt", australia:"au", newzealand:"nz",
    japan:"jp", southkorea:"kr", netherlands:"nl", spain:"es", sweden:"se", israel:"il", india:"in",
    brazil:"br", colombia:"co", paraguay:"py", bolivia:"bo", ecuador:"ec", peru:"pe",
    norway:"no", denmark:"dk", finland:"fi", iceland:"is", ireland:"ie", poland:"pl", greece:"gr"
};

var SVG_ID_MAP = {
    usa: "USA",
    uk: "Royaume Uni",
    canada: "Canada",
    mexico: "Mexique",
    argentina: "Argentine",
    chile: "Chili",
    uruguay: "Uruguay",
    germany: "Allemagne",
    italy: "Italie",
    france: "France",
    portugal: "Portugal",
    australia: "Australie",
    newzealand: "Nouvelle-zelande",
    japan: "Japon",
    southkorea: "Coree de Sud",
    netherlands: "Pays-Bas",
    spain: "Espagne",
    sweden: "Suede",
    israel: "Israel",
    india: "Inde",
    brazil: "Bresil",
    colombia: "Colombie",
    paraguay: "Paraguay",
    bolivia: "Bolivie",
    ecuador: "Equateur",
    peru: "Perou",
    norway: "Norvege",
    denmark: "Danemark",
    finland: "Finlande",
    iceland: "Islande",
    ireland: "Irlande",
    poland: "Pologne",
    greece: "Grece"
};

var THEME_VARS = {
    dark: {
        "--bg": "#0d1117",
        "--bg2": "#010409",
        "--card": "#161b22",
        "--txt": "#ffffff",
        "--txt2": "#8b949e",
        "--green": "#00c781",
        "--green2": "#0a9960",
        "--border": "rgba(48,54,61,0.5)"
    },
    light: {
        "--bg": "#eef3f8",
        "--bg2": "#ffffff",
        "--card": "#ffffff",
        "--txt": "#101828",
        "--txt2": "#667085",
        "--green": "#00a36c",
        "--green2": "#0b8c5b",
        "--border": "rgba(15,23,42,0.12)"
    }
};

var IMAGE_CACHE = {};
var ANSWER_VALUES = [2, 1, 0, -1, -2];
var currentLang = localStorage.getItem("lang") || "pt";
var dark = localStorage.getItem("theme") !== "light";
var electionMapInstance = null;
window.randomizeDevPos = function() {
    S.pos.economic = Math.floor(Math.random() * 201) - 100;
    S.pos.social = Math.floor(Math.random() * 201) - 100;
};

var S = {
    quiz: null,
    mode: null,
    perguntas: [],
    respostas: [],
    atual: 0,
    pos: { economic: 0, social: 0 },
    candidatos: [],
    worldData: null,
    autoNextTimer: null
};

if (LANGS.indexOf(currentLang) === -1) currentLang = "pt";

function group(name) {
    return (UI_COPY[currentLang] && UI_COPY[currentLang][name]) || UI_COPY.pt[name] || {};
}

function t(key) {
    return (UI_COPY[currentLang] && UI_COPY[currentLang][key]) || UI_COPY.pt[key] || key;
}

function replaceTokens(text, tokens) {
    return String(text).replace(/\{(\w+)\}/g, function(_, key) {
        return tokens[key] != null ? tokens[key] : "";
    });
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function formatSigned(value) {
    var rounded = Math.round(value);
    return rounded > 0 ? "+" + rounded : String(rounded);
}

function getLangValue(value) {
    if (value && typeof value === "object") {
        return value[currentLang] || value.pt || value.en || value.es || "";
    }
    return value || "";
}

function getInitials(name) {
    return String(name || "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(function(part) { return part.charAt(0).toUpperCase(); })
        .join("");
}

function cloneData(data) {
    return JSON.parse(JSON.stringify(data));
}

function readStaticData(fileName) {
    var key = STATIC_DATA_MAP[fileName];
    if (!key || !window.APP_STATIC_DATA || !window.APP_STATIC_DATA[key]) return null;
    var payload = window.APP_STATIC_DATA[key];
    return cloneData(payload.value || payload);
}

async function carregar(fileName) {
    var staticData = readStaticData(fileName);
    if (window.location.protocol === "file:" && staticData) return staticData;
    try {
        var response = await fetch("data/" + fileName, { cache: "no-store" });
        if (!response.ok) throw new Error("Falha ao carregar " + fileName);
        return await response.json();
    } catch (error) {
        if (staticData) return staticData;
        throw error;
    }
}

function updateNavState(activeId) {
    document.querySelectorAll(".nav-link").forEach(function(link) {
        var key = link.getAttribute("data-i18n");
        if (key === "nav_compasso") link.classList.toggle("ativo", activeId !== "t-eleicoes");
        if (key === "nav_eleicoes") link.classList.toggle("ativo", activeId === "t-eleicoes");
    });
}

function scrollCurrentScreenTop(id) {
    var screen = document.getElementById(id);
    if (screen) screen.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0 });
}

function ir(id, push) {
    if (push === void 0) push = true;
    var target = document.getElementById(id);
    if (!target) return;
    if (id === "t-rmsp") {
        var rmspFrame = document.getElementById("rmsp-iframe");
        if (rmspFrame && !rmspFrame.getAttribute("src") && typeof RMSP_URL !== "undefined") {
            rmspFrame.setAttribute("src", RMSP_URL);
        }
    }
    document.querySelectorAll(".tela").forEach(function(screen) {
        screen.classList.toggle("ativa", screen.id === id);
    });
    updateNavState(id);
    scrollCurrentScreenTop(id);
    var hash = "#" + id;
    if (push) history.pushState({ screen: id }, "", hash);
    else history.replaceState({ screen: id }, "", hash);
}

function abrirModal(id) {
    var modal = document.getElementById(id);
    if (modal) modal.classList.add("aberto");
}

function fecharModal(id) {
    var modal = document.getElementById(id);
    if (modal) modal.classList.remove("aberto");
}

function abrirQR() {
    var overlay = document.getElementById("qr-overlay");
    if (overlay) overlay.classList.add("aberto");
}

function fecharQR(event) {
    var overlay = document.getElementById("qr-overlay");
    if (!overlay) return;
    if (!event || event.target === overlay) overlay.classList.remove("aberto");
}

function applyI18n() {
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : currentLang;
    document.title = t("page_title");

    document.querySelectorAll("[data-i18n]").forEach(function(node) {
        var key = node.getAttribute("data-i18n");
        if (node.tagName === "IMG") node.alt = t(key);
        else node.textContent = t(key);
    });

    document.querySelectorAll(".btn-lang").forEach(function(btn) {
        btn.classList.toggle("ativo", btn.textContent.trim().toLowerCase() === currentLang);
    });

    var btnBrasil = document.getElementById("btn-brasil");
    if (btnBrasil) {
        btnBrasil.innerHTML = '<img src="brazil-flag.png" class="btn-flag" alt="' + escapeHtml(t("home_btn_brasil")) + '"> ' + escapeHtml(t("home_btn_brasil"));
    }

    var btnMundo = document.getElementById("btn-mundo");
    if (btnMundo) {
        btnMundo.innerHTML = '<span aria-hidden="true">🌎</span> ' + escapeHtml(t("home_btn_world"));
    }

    var btnSair = document.getElementById("btn-sair");
    if (btnSair) btnSair.textContent = "← " + t("quiz_exit");

    var btnAnt = document.getElementById("btn-ant");
    if (btnAnt) btnAnt.textContent = "← " + t("quiz_prev");

    var btnProx = document.getElementById("btn-prox");
    if (btnProx) {
        btnProx.textContent = (S.atual === S.perguntas.length - 1 && S.perguntas.length) ? t("quiz_results") + " →" : t("quiz_next") + " →";
    }

    var btnRefazer = document.getElementById("btn-refazer");
    if (btnRefazer) btnRefazer.textContent = "↻ " + (currentLang === "en" ? "Redo" : currentLang === "es" ? "Rehacer" : "Refazer");

    var btnRefazerMundo = document.getElementById("btn-refazer-mundo");
    if (btnRefazerMundo) btnRefazerMundo.textContent = "↻ " + (currentLang === "en" ? "Redo" : currentLang === "es" ? "Rehacer" : "Refazer");

    var titleNode = document.getElementById("cd-title");
    if (titleNode) titleNode.textContent = "⏱ " + t("countdown_title");

    var staticCopy = currentLang === "en"
        ? {
            logoAlt: "Electoral Section",
            logoTitle: "Back to home",
            photoAlt: "Palacio do Planalto",
            footerPrivacy: "Your answers are not stored.",
            electionsTitle: "Election Maps",
            electionsCardType: "President and Vice President",
            electionsBack: "← Back",
            electionsPrefix: "Elections",
            rmspTitle: "São Paulo Metropolitan Region",
            rmspDesc: "Elections 1994–2004 · President, Governor, Senator and Mayors",
            el1955Title: "1955 Brazilian Elections",
            pleb1993Title: "1993 Plebiscite",
            pleb1993Desc: "Form and System of Government",
            pleb1993Counter: "1993 Plebiscite",
            pleb1993Back: "← Back",
            pleb1993Forma: "Form of Government · Monarchy × Republic",
            pleb1993Sistema: "System of Government · Presidentialism × Parliamentarism",
            el1955BtnPres: "President",
            el1955BtnVice: "Vice President",
            pleb1993Loading: "Loading map...",
            creditsPleb: "Credits: data organized by @opotiguar based on TRE information",
            creditsRmsp: "Credits: CEM USP",
            credits1955: "Credits: Chamber of Deputies of Brazil"
        }
        : currentLang === "es"
            ? {
                logoAlt: "Sección Electoral",
                logoTitle: "Volver al inicio",
                photoAlt: "Palacio do Planalto",
                footerPrivacy: "Tus respuestas no se almacenan.",
                electionsTitle: "Mapas Electorales",
                electionsCardType: "Presidente y Vicepresidente",
                electionsBack: "← Volver",
                electionsPrefix: "Elecciones",
                rmspTitle: "Región Metropolitana de SP",
                rmspDesc: "Elecciones 1994–2004 · Presidente, Gobernador, Senador y Alcaldes",
                el1955Title: "Elecciones Brasileñas de 1955",
                pleb1993Title: "Plebiscito de 1993",
                pleb1993Desc: "Forma y Sistema de Gobierno",
                pleb1993Counter: "Plebiscito 1993",
                pleb1993Back: "← Volver",
                pleb1993Forma: "Forma de Gobierno · Monarquía × República",
                pleb1993Sistema: "Sistema de Gobierno · Presidencialismo × Parlamentarismo",
                el1955BtnPres: "Presidente",
                el1955BtnVice: "Vicepresidente",
                pleb1993Loading: "Cargando mapa...",
                creditsPleb: "Créditos: datos organizados por @opotiguar a partir de información de los TREs",
                creditsRmsp: "Créditos: CEM USP",
                credits1955: "Créditos: Cámara de Diputados de Brasil"
            }
            : {
                logoAlt: "Seção Eleitoral",
                logoTitle: "Voltar ao início",
                photoAlt: "Palácio do Planalto",
                footerPrivacy: "Suas respostas não são armazenadas.",
                electionsTitle: "Mapas Eleitorais",
                electionsCardType: "Presidente e Vice-Presidente",
                electionsBack: "← Voltar",
                electionsPrefix: "Eleições",
                rmspTitle: "Região Metropolitana de SP",
                rmspDesc: "Eleições 1994–2004 · Presidente, Governador, Senador e Prefeitos",
                el1955Title: "Eleições Brasileiras de 1955",
                pleb1993Title: "Plebiscito de 1993",
                pleb1993Desc: "Forma e Sistema de Governo",
                pleb1993Counter: "Plebiscito 1993",
                pleb1993Back: "← Voltar",
                pleb1993Forma: "Forma de Governo · Monarquia × República",
                pleb1993Sistema: "Sistema de Governo · Presidencialismo × Parlamentarismo",
                el1955BtnPres: "Presidente",
                el1955BtnVice: "Vice-Presidente",
                pleb1993Loading: "Carregando mapa...",
                creditsPleb: "Créditos: organização dos dados por @opotiguar a partir de informações dos TREs",
                creditsRmsp: "Créditos: CEM USP",
                credits1955: "Créditos: Câmara dos Deputados do Brasil"
            };

    document.querySelectorAll(".logo").forEach(function(logo) {
        logo.alt = staticCopy.logoAlt;
        logo.title = staticCopy.logoTitle;
    });

    var heroPhoto = document.querySelector(".hero-photo");
    if (heroPhoto) heroPhoto.alt = staticCopy.photoAlt;

    var footerLines = document.querySelectorAll(".footer p");
    if (footerLines[1]) footerLines[1].textContent = staticCopy.footerPrivacy;

    var electionsTitle = document.querySelector("#t-eleicoes .world-header h2");
    if (electionsTitle) electionsTitle.textContent = staticCopy.electionsTitle;
    
    document.querySelectorAll("#t-eleicoes [data-i18n-election-type]").forEach(function(node) {
        node.textContent = staticCopy.electionsCardType;
    });
    document.querySelectorAll("[data-i18n-rmsp-title]").forEach(function(node) {
        node.textContent = staticCopy.rmspTitle;
    });
    document.querySelectorAll("[data-i18n-rmsp-desc]").forEach(function(node) {
        node.textContent = staticCopy.rmspDesc;
    });
    document.querySelectorAll("[data-i18n-1955-title]").forEach(function(node) {
        node.textContent = staticCopy.el1955Title;
    });
    document.querySelectorAll("[data-i18n-1955-btn-pres]").forEach(function(n) { n.textContent = staticCopy.el1955BtnPres; });
    document.querySelectorAll("[data-i18n-1955-btn-vice]").forEach(function(n) { n.textContent = staticCopy.el1955BtnVice; });
    document.querySelectorAll("[data-i18n-pleb1993-title]").forEach(function(n) { n.textContent = staticCopy.pleb1993Title; });
    document.querySelectorAll("[data-i18n-pleb1993-desc]").forEach(function(n) { n.textContent = staticCopy.pleb1993Desc; });
    document.querySelectorAll("[data-i18n-pleb1993-counter]").forEach(function(n) { n.textContent = staticCopy.pleb1993Counter; });
    document.querySelectorAll("[data-i18n-pleb1993-back]").forEach(function(n) { n.textContent = staticCopy.pleb1993Back; });
    document.querySelectorAll("[data-i18n-pleb1993-forma]").forEach(function(n) { n.textContent = staticCopy.pleb1993Forma; });
    document.querySelectorAll("[data-i18n-pleb1993-sistema]").forEach(function(n) { n.textContent = staticCopy.pleb1993Sistema; });
    document.querySelectorAll("[data-i18n-pleb1993-loading]").forEach(function(n) { n.textContent = staticCopy.pleb1993Loading; });
    document.querySelectorAll("[data-i18n-credits-pleb]").forEach(function(n) { n.textContent = staticCopy.creditsPleb; });
    document.querySelectorAll("[data-i18n-credits-rmsp]").forEach(function(n) { n.textContent = staticCopy.creditsRmsp; });
    document.querySelectorAll("[data-i18n-credits-1955]").forEach(function(n) { n.textContent = staticCopy.credits1955; });

    var btnBackMap = document.getElementById("btn-back-map");
    if (btnBackMap) btnBackMap.textContent = staticCopy.electionsBack;

    var mapaTitulo = document.getElementById("mapa-titulo");
    if (mapaTitulo && window._lastElectionYear) {
        mapaTitulo.textContent = staticCopy.electionsPrefix + " " + window._lastElectionYear;
    }

    if (document.getElementById("modal-modo")) configurarModalModo(S.quiz || "brazil");
    if (S.perguntas.length && document.getElementById("t-quiz").classList.contains("ativa")) renderQ();
}

function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    currentLang = lang;
    localStorage.setItem("lang", currentLang);
    applyI18n();
    carregarResumoHome();

    if (window._lastBrazilResult && document.getElementById("t-resultado").classList.contains("ativa")) resultadoBrasil(false);
    if (window._lastWorldData && document.getElementById("t-mundo").classList.contains("ativa")) resultadoMundo(false);
    if (document.getElementById("modal-pais").classList.contains("aberto") && window._lastCountryId) abrirPaisPorId(window._lastCountryId);
    if (document.getElementById("modal-comparacao").classList.contains("show") && window._lastComparisonId != null) abrirComparacao(window._lastComparisonId, true);
}

function syncThemeButtons() {
    var icon = dark ? "🌙" : "☀️";
    document.querySelectorAll(".btn-theme").forEach(function(btn) {
        btn.textContent = icon;
    });
}

function aplicarTema() {
    window.dark = dark;
    localStorage.setItem("theme", dark ? "dark" : "light");
    var vars = dark ? THEME_VARS.dark : THEME_VARS.light;
    Object.keys(vars).forEach(function(name) {
        document.body.style.setProperty(name, vars[name]);
    });
    document.body.classList.toggle("dark-mode", dark);
    syncThemeButtons();
    document.querySelectorAll(".logo").forEach(function(logo) {
        logo.src = dark ? "logo.png" : "logo-light.png";
    });
    if (window._lastBrazilResult && document.getElementById("t-resultado").classList.contains("ativa")) resultadoBrasil(false);
    if (window._lastWorldData && document.getElementById("t-mundo").classList.contains("ativa")) resultadoMundo(false);
    
    if (window.electionMapInstance) {
        var tileUrl = dark ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
        window.electionMapInstance.eachLayer(function(layer) {
            if (layer._url && layer._url.indexOf('cartocdn.com') > -1) {
                window.electionMapInstance.removeLayer(layer);
            }
        });
        L.tileLayer(tileUrl, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(window.electionMapInstance);
        document.getElementById('mapEleicao').style.background = dark ? '#0e0e0e' : '#e5e5e5';
    }

    if (window.plebiscitoMapInstance) {
        var plebTileUrl = dark ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
        window.plebiscitoMapInstance.eachLayer(function(layer) {
            if (layer._url && layer._url.indexOf('cartocdn.com') > -1) {
                window.plebiscitoMapInstance.removeLayer(layer);
            }
        });
        L.tileLayer(plebTileUrl, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(window.plebiscitoMapInstance);
        document.getElementById('mapPlebiscito').style.background = dark ? '#0e0e0e' : '#e5e5e5';
    }
}

function startCountdown() {
    var timerNode = document.getElementById("cd-timer");
    if (!timerNode) return;
    var target = new Date("2026-10-04T08:00:00-03:00").getTime();

    function tick() {
        var diff = target - Date.now();
        if (diff <= 0) {
            timerNode.textContent = t("countdown_done");
            return;
        }
        var totalSeconds = Math.floor(diff / 1000);
        var days = Math.floor(totalSeconds / 86400);
        var hours = Math.floor((totalSeconds % 86400) / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;
        timerNode.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }

    tick();
    window.clearInterval(window._countdownTimer);
    window._countdownTimer = window.setInterval(tick, 1000);
}
function renderStatCard(value, label) {
    return '<div class="stat-card"><div class="stat-value">' + escapeHtml(value) + '</div><div class="stat-label">' + escapeHtml(label) + "</div></div>";
}

async function carregarResumoHome() {
    var statsWrap = document.querySelector(".hero-stats");
    if (!statsWrap) return;
    try {
        var loaded = await Promise.all([carregar("questions.json"), carregar("world-questions.json"), carregar("world-parties.json")]);
        statsWrap.innerHTML = [
            renderStatCard(String(loaded[0].length), t("home_stats_questions")),
            renderStatCard(String(loaded[1].length), t("home_stats_world_questions")),
            renderStatCard(String(loaded[2].countries.length), t("home_stats_countries"))
        ].join("");
    } catch (error) {
        statsWrap.innerHTML = "";
    }
}

function configurarModalModo(quiz) {
    var cfg = QUIZ_CONFIG[quiz] || QUIZ_CONFIG.brazil;
    var mode = group("mode");
    var modal = document.getElementById("modal-modo");
    if (!modal) return;

    S.quiz = quiz;
    document.getElementById("modo-emoji").innerHTML = cfg.emojiHtml;
    document.getElementById("modo-titulo").textContent = mode.title;
    document.getElementById("modo-sub").textContent = quiz === "world" ? mode.subtitleWorld : mode.subtitleBrazil;
    document.getElementById("modo-rapido-titulo").textContent = mode.quick;
    document.getElementById("modo-completo-titulo").textContent = mode.full;
    document.getElementById("modo-rapido-meta").textContent = quiz === "world" ? mode.quickMetaWorld : mode.quickMetaBrazil;
    document.getElementById("modo-completo-meta").textContent = quiz === "world" ? mode.fullMetaWorld : mode.fullMetaBrazil;
    document.getElementById("opt-cancelar").textContent = mode.cancel;
    var quickIcon = document.querySelector("#opt-rapido .m-opt-icon");
    var fullIcon = document.querySelector("#opt-completo .m-opt-icon");
    if (quickIcon) quickIcon.textContent = "⚡";
    if (fullIcon) fullIcon.textContent = "📋";
    modal.querySelector(".modal-box").classList.toggle("modo-world", quiz === "world");
}

function abrirModalModo(quiz) {
    configurarModalModo(quiz);
    abrirModal("modal-modo");
}

function clearAutoNext() {
    if (S.autoNextTimer) {
        window.clearTimeout(S.autoNextTimer);
        S.autoNextTimer = null;
    }
}

function prog() {
    var bar = document.getElementById("progress");
    if (!bar) return;
    if (!S.perguntas.length) {
        bar.style.width = "0%";
        return;
    }
    var answered = S.respostas.filter(function(value) { return value != null; }).length;
    bar.style.width = (answered / S.perguntas.length) * 100 + "%";
}

async function iniciarQuiz(quiz, mode) {
    clearAutoNext();
    S.quiz = quiz;
    S.mode = mode;
    S.atual = 0;
    S.pos = { economic: 0, social: 0 };
    S.respostas = [];
    window._lastBrazilResult = null;
    window._lastWorldData = null;
    window._lastWorldRankings = null;
    window._lastCountryId = null;
    window._lastComparisonId = null;

    var fileName = quiz === "world" ? "world-questions.json" : "questions.json";
    var allQuestions = await carregar(fileName);
    S.perguntas = mode === "quick" ? allQuestions.filter(function(question) { return question.quick === true; }) : allQuestions.slice();

    if (quiz === "brazil") S.candidatos = await carregar("candidates.json");
    else S.worldData = await carregar("world-parties.json");

    S.respostas = new Array(S.perguntas.length).fill(null);
    ir("t-quiz");
    renderQ();
    prog();
}

function atualizaBtns() {
    var prev = document.getElementById("btn-ant");
    var next = document.getElementById("btn-prox");
    if (!prev || !next) return;
    prev.disabled = S.atual === 0;
    next.disabled = S.respostas[S.atual] == null;
    next.textContent = (S.atual === S.perguntas.length - 1 && S.perguntas.length) ? t("quiz_results") + " →" : t("quiz_next") + " →";
}

function preencherQuestaoAtual() {
    if (!S.perguntas.length) return;
    var question = S.perguntas[S.atual];
    var answerLabels = UI_COPY[currentLang].answers || UI_COPY.pt.answers;
    document.getElementById("counter").textContent = replaceTokens(t("quiz_question_of"), { current: S.atual + 1, total: S.perguntas.length });
    document.getElementById("q-txt").textContent = getLangValue(question.text) || t("quiz_loading");

    document.querySelectorAll("#opts .opt").forEach(function(button, index) {
        button.textContent = answerLabels[index];
        button.classList.toggle("sel", Number(button.dataset.v) === S.respostas[S.atual]);
    });

    atualizaBtns();
    prog();
}

function renderQ(direction) {
    if (!S.perguntas.length) return;
    clearAutoNext();

    var card = document.querySelector(".q-card");
    if (!card || !direction) {
        preencherQuestaoAtual();
        return;
    }

    if (card.dataset.animating === "1") {
        preencherQuestaoAtual();
        return;
    }

    var outClass = direction === "prev" ? "q-card-out-prev" : "q-card-out-next";
    var inClass = direction === "prev" ? "q-card-in-prev" : "q-card-in-next";
    card.dataset.animating = "1";
    card.classList.remove("q-card-out-prev", "q-card-out-next", "q-card-in-prev", "q-card-in-next");
    void card.offsetWidth;
    card.classList.add(outClass);

    card.addEventListener("animationend", function handleOut(event) {
        if (event.target !== card) return;
        card.removeEventListener("animationend", handleOut);
        card.classList.remove(outClass);
        preencherQuestaoAtual();
        void card.offsetWidth;
        card.classList.add(inClass);

        card.addEventListener("animationend", function handleIn(innerEvent) {
            if (innerEvent.target !== card) return;
            card.removeEventListener("animationend", handleIn);
            card.classList.remove(inClass);
            delete card.dataset.animating;
        });
    });
}

function selecionarResposta(value) {
    if (!S.perguntas.length) return;
    S.respostas[S.atual] = value;
    renderQ();
    clearAutoNext();

    var currentQuestion = S.atual;
    S.autoNextTimer = window.setTimeout(function() {
        if (S.atual !== currentQuestion || S.respostas[currentQuestion] == null) return;
        if (currentQuestion < S.perguntas.length - 1) {
            S.atual += 1;
            renderQ("next");
        } else {
            finalizarQuiz();
        }
    }, 140);
}

function calcularPosicao() {
    var economic = 0;
    var social = 0;
    var maxEconomic = 0;
    var maxSocial = 0;

    S.perguntas.forEach(function(question, index) {
        var answer = S.respostas[index];
        if (answer == null) return;
        var weight = Number(question.weight || 1);
        var contribution = Number(answer) * weight;
        if (question.axis === "economic") {
            economic += contribution;
            maxEconomic += Math.abs(weight) * 2;
        } else {
            social += contribution;
            maxSocial += Math.abs(weight) * 2;
        }
    });

    return {
        economic: maxEconomic ? clamp((economic / maxEconomic) * 100, -100, 100) : 0,
        social: maxSocial ? clamp((social / maxSocial) * 100, -100, 100) : 0
    };
}

async function finalizarQuiz() {
    clearAutoNext();
    S.pos = calcularPosicao();
    if (S.quiz === "world") await resultadoMundo();
    else await resultadoBrasil();
}

function axisDescriptor(axis, value) {
    var result = group("result");
    if (axis === "economic") {
        if (value <= -15) return result.econLeft;
        if (value >= 15) return result.econRight;
        return result.econCenter;
    }
    if (value <= -15) return result.socialDown;
    if (value >= 15) return result.socialUp;
    return result.socialCenter;
}

function getQuadrantExplanation(pos) {
    var profiles = group("result").profiles || UI_COPY.pt.result.profiles;
    if (Math.abs(pos.economic) < 18 && Math.abs(pos.social) < 18) return profiles.center;
    if (pos.economic <= 0 && pos.social <= 0) return profiles.authLeft;
    if (pos.economic > 0 && pos.social <= 0) return profiles.authRight;
    if (pos.economic <= 0 && pos.social > 0) return profiles.libLeft;
    return profiles.libRight;
}

function matchCor(match) {
    if (match >= 70) return "var(--green)";
    if (match >= 45) return "#f59e0b";
    return "#ef4444";
}

function scoreCard(label, value, description) {
    return '<div class="sc"><div class="sc-label">' + escapeHtml(label) + '</div><div class="sc-val">' + escapeHtml(value) + '</div><div class="sc-desc">' + escapeHtml(description) + "</div></div>";
}

function renderAvatar(candidate) {
    return '<div class="cand-avatar">' +
        '<div class="cand-avatar-fallback">' + escapeHtml(getInitials(candidate.name)) + '</div>' +
        '<img class="cand-avatar-img" src="' + escapeHtml(candidate.photo || "") + '" alt="' + escapeHtml(candidate.name) + '" onerror="this.style.display=\'none\'">' +
    '</div>';
}

async function resultadoBrasil(push) {
    if (push === void 0) push = true;
    var pos = S.pos;
    if (!S.candidatos || !S.candidatos.length) S.candidatos = await carregar("candidates.json");

    var userEconomic = pos.economic / 100;
    var userSocial = pos.social / 100;
    var maxDist = Math.sqrt(8);
    var matches = S.candidatos.map(function(candidate) {
        var dist = Math.hypot(userEconomic - (candidate.economic / 100), userSocial - (candidate.social / 100));
        return Object.assign({}, candidate, {
            match: clamp(Math.round((1 - (dist / maxDist)) * 100), 0, 100)
        });
    }).sort(function(a, b) {
        return b.match - a.match;
    });

    window._lastBrazilResult = { pos: pos, matches: matches };
    window._lastUsuPos = pos;

    var wrap = document.getElementById("res-wrap");
    if (!wrap) return;
    wrap.innerHTML = [
        '<div class="compass-wrap">',
            '<div class="compass-canvas-wrap"><canvas id="compass-canvas" width="600" height="600"></canvas><div id="compass-grid-overlay" class="compass-grid-overlay"></div></div>',
        '</div>',
        '<div class="scores">',
            scoreCard(group("result").econ, formatSigned(pos.economic), axisDescriptor("economic", pos.economic)),
            scoreCard(group("result").social, formatSigned(pos.social), axisDescriptor("social", pos.social)),
        '</div>',
        '<div class="res-explicacao">' + escapeHtml(getQuadrantExplanation(pos)) + '</div>',
        '<h3 class="sec-title">' + escapeHtml(group("result").candidatesTitle) + '</h3>',
        matches.map(function(candidate) {
            return '<div class="cand-row" onclick="abrirComparacao(' + candidate.id + ')">' +
                '<div class="cand-left">' +
                    renderAvatar(candidate) +
                    '<div class="cand-info">' +
                        '<div class="cand-nome">' + escapeHtml(candidate.name) + '</div>' +
                        '<p class="cand-partido">' + escapeHtml(candidate.party) + '</p>' +
                    '</div>' +
                '</div>' +
                '<div class="cand-pct" style="color:' + matchCor(candidate.match) + '">' + candidate.match + '%</div>' +
            '</div>';
        }).join("")
    ].join("");

    ir("t-resultado", push);
    desenharBussola(pos, matches);
}

function axisBucket(axis, value) {
    var buckets = (group("axisBuckets")[axis]) || UI_COPY.pt.axisBuckets[axis];
    for (var i = 0; i < buckets.length; i += 1) {
        if (value <= buckets[i].max) return buckets[i].label;
    }
    return buckets[buckets.length - 1].label;
}

function getComparisonNarratives() {
    if (currentLang === "en") {
        return {
            distanceLabel: "pts apart",
            badges: {
                strong: "STRONG ALIGNMENT",
                partial: "PARTIAL PROXIMITY",
                far: "RELEVANT DIVERGENCE",
                opposite: "TOTAL OPPOSITION"
            },
            economic: {
                strong: "Your macroeconomic views are almost identical, with very close instincts on taxation, regulation, private property and free markets.",
                partial: "There is noticeable economic proximity here. You differ more in intensity than in direction on taxation, regulation and the role of the State.",
                far: "The economic gap is significant. You disagree in meaningful ways about taxes, regulation, public spending and the size of the State in the economy.",
                opposite: "The economic clash is profound. You defend nearly opposite models on property, taxation, redistribution and market freedom."
            },
            social: {
                strong: "On the civil/social axis, you share very similar instincts about customs, public security, moral authority and individual freedoms.",
                partial: "There is some social proximity, though with visible differences on customs, punishment, public order and personal autonomy.",
                far: "The civil/social differences are substantial. You are clearly apart on customs, security, authority and the role of the State over the individual.",
                opposite: "Complete antagonism. You represent irreconcilable worldviews on moral authority, punitive security and State control over the individual."
            }
        };
    }
    if (currentLang === "es") {
        return {
            distanceLabel: "pts de dist.",
            badges: {
                strong: "ALINEACIÓN FUERTE",
                partial: "PROXIMIDAD PARCIAL",
                far: "DIVERGENCIA RELEVANTE",
                opposite: "OPOSICIÓN TOTAL"
            },
            economic: {
                strong: "Sus visiones macroeconómicas son casi idénticas, con coincidencia muy cercana en impuestos, regulación, propiedad privada y libre mercado.",
                partial: "Hay bastante proximidad económica. Las diferencias están más en la intensidad que en la dirección sobre impuestos, regulación y papel del Estado.",
                far: "La distancia económica es significativa. Ustedes discrepan de forma importante sobre impuestos, regulación, gasto público y tamaño del Estado en la economía.",
                opposite: "El choque económico es profundo. Defienden modelos casi opuestos sobre propiedad, tributación, redistribución y libertad de mercado."
            },
            social: {
                strong: "En el eje civil/social comparten valores muy cercanos sobre costumbres, seguridad pública, autoridad moral y libertades individuales.",
                partial: "Existe cierta proximidad civil/social, aunque con diferencias visibles sobre costumbres, castigo, orden público y autonomía individual.",
                far: "Las divergencias civiles y sociales son marcadas. Ustedes se alejan con claridad en costumbres, seguridad, autoridad y control estatal sobre el individuo.",
                opposite: "Antagonismo completo. Representan visiones de mundo inconciliables sobre la autoridad moral, la seguridad punitiva y el control del Estado sobre el individuo."
            }
        };
    }
    return {
        distanceLabel: "pts de dist.",
        badges: {
            strong: "ALINHAMENTO FORTE",
            partial: "PROXIMIDADE PARCIAL",
            far: "DIVERGÊNCIA RELEVANTE",
            opposite: "OPOSIÇÃO TOTAL"
        },
        economic: {
            strong: "Vocês possuem uma visão macroeconômica quase idêntica, concordando intimamente sobre tributação, regulação, propriedade privada e livre mercado.",
            partial: "Há bastante proximidade econômica entre vocês. A diferença aparece mais na intensidade do que na direção sobre impostos, regulação e papel do Estado.",
            far: "As diferenças econômicas são claras. Vocês divergem em grau importante sobre impostos, regulação, gasto público e peso do Estado na economia.",
            opposite: "O choque econômico é profundo. Vocês defendem modelos quase opostos sobre propriedade, tributação, redistribuição e liberdade de mercado."
        },
        social: {
            strong: "No eixo civil/social, vocês compartilham valores muito próximos sobre costumes, segurança pública, autoridade moral e liberdades individuais.",
            partial: "Existe relativa proximidade no eixo civil/social, embora com diferenças perceptíveis sobre costumes, punição, ordem e autonomia individual.",
            far: "As divergências civis e sociais são significativas. Vocês se afastam bastante em temas como costumes, segurança, autoridade e papel do Estado sobre o indivíduo.",
            opposite: "Antagonismo completo. Vocês representam visões de mundo inconciliáveis sobre o papel da autoridade moral, segurança punitiva e controle do Estado sobre o indivíduo."
        }
    };
}

function getDifferenceTier(diff) {
    if (diff <= 18) return "strong";
    if (diff <= 40) return "partial";
    if (diff <= 75) return "far";
    return "opposite";
}

function describeDifference(axis, userValue, candidateValue) {
    var compare = group("compare");
    var diff = Math.abs(userValue - candidateValue);
    var copy = getComparisonNarratives();
    var tier = getDifferenceTier(diff);
    var axisName = axis === "economic" ? compare.axisEconomic : compare.axisSocial;
    var axisCopy = axis === "economic" ? copy.economic : copy.social;
    var badgeClass = tier === "strong" ? "badge-sim" : (tier === "opposite" ? "badge-dif" : "badge-med");
    var title = axisName + " (" + diff.toFixed(1) + " " + copy.distanceLabel + "):";

    return '<div class="comp-row">' +
        '<span class="' + badgeClass + '">' + escapeHtml(copy.badges[tier]) + '</span>' +
        '<div class="comp-copy"><strong>' + escapeHtml(title) + '</strong> ' + escapeHtml(axisCopy[tier]) + '</div>' +
    '</div>';
}

function abrirComparacao(id, keepOpen) {
    if (keepOpen === void 0) keepOpen = false;
    var candidate = (S.candidatos || []).find(function(item) { return item.id === id; });
    var resultData = window._lastBrazilResult;
    var userPos = (resultData && resultData.pos) || window._lastUsuPos || S.pos;
    if (!candidate || !userPos) return;

    window._lastComparisonId = id;

    document.getElementById("mc-header").innerHTML = '<div class="mc-head">' +
        renderAvatar(candidate) +
        '<div><div style="font-size:1.25rem;font-weight:900;margin-bottom:0.15rem;">' + escapeHtml(candidate.name) + '</div><div style="color:var(--txt2);font-size:0.92rem;">' + escapeHtml(candidate.party) + '</div></div>' +
    '</div>';

    if (currentLang === "pt") {
        var eDiff = Math.abs(userPos.economic - candidate.economic);
        var sDiff = Math.abs(userPos.social - candidate.social);
        var items = [];

        function adc(diff, eixoInfo, txt1, txt2, txt3, txt4, txt5) {
            var str;
            var badge;
            var bdgStyle = "";
            if (diff <= 20) {
                str = txt1;
                badge = "ALINHAMENTO FORTE";
                bdgStyle = 'class="badge-sim"';
            } else if (diff <= 40) {
                str = txt2;
                badge = "ALINHAMENTO PARCIAL";
                bdgStyle = 'class="badge-sim" style="background:#0284c7; color:#ffffff;"';
            } else if (diff <= 60) {
                str = txt3;
                badge = "DIVERGÊNCIA MODERADA";
                bdgStyle = 'class="badge-dif" style="background:#ca8a04; color:#ffffff;"';
            } else if (diff <= 80) {
                str = txt4;
                badge = "DIVERGÊNCIA FORTE";
                bdgStyle = 'class="badge-dif"';
            } else {
                str = txt5;
                badge = "OPOSIÇÃO TOTAL";
                bdgStyle = 'class="badge-dif" style="background:#7f1d1d; color:#ffffff;"';
            }

            items.push('<div class="comp-row"><div ' + bdgStyle + '>' + badge + '</div><div style="font-size:0.95rem; line-height:1.4"><b>' + eixoInfo + ' (' + diff.toFixed(1) + ' pts de dist.):</b> ' + str + '</div></div>');
        }

        adc(
            eDiff,
            "Eixo Econômico",
            "Vocês possuem uma visão macroeconômica quase idêntica, concordando intimamente no nível ideal de propriedade privada, impostos e livre mercado.",
            "Vocês concordam na maior parte da pauta econômica, com apenas pequenas variações sobre o grau exato de regulação e tamanho do Estado.",
            "Há divergências razoáveis a respeito da eficiência do mercado livre; vocês discordam parcialmente no uso das estatais ou impostos na economia civil.",
            "Discordância profunda na economia: suas visões sobre o papel do empresariado vs. intervencionismo do Estado são conflitantes na maioria dos temas.",
            "Posições diametralmente opostas. Um de vocês defende o planejamento estatal estrutural enquanto o outro exige um mercado absolutamente livre."
        );

        adc(
            sDiff,
            "Eixo Civil/Social",
            "Ambos compartilham a exata mesma sintonia cívica, concordando profundamente no limite de atuação do Estado na vida privada, segurança e costumes.",
            "Visões bastante alinhadas quanto às liberdades individuais e punitivismo, diferindo apenas em detalhes de políticas públicas ou foco moral.",
            "Divergem de forma moderada na pauta teórica da ordem pública, segurança ou costumes em relação à escala de tolerância estatal no aspecto individual.",
            "Ruptura severa no âmbito civil: enquanto um foca na expansão de liberdades individuais, o outro demanda controle estatal, costumes rígidos e ordem punitivista.",
            "Antagonismo completo. Vocês representam visões de mundo inconciliáveis sobre o papel da autoridade moral, segurança punitiva e controle do Estado sobre o indivíduo."
        );

        document.getElementById("mc-body").innerHTML = items.join("");
    } else {
        document.getElementById("mc-body").innerHTML = [
            describeDifference("economic", userPos.economic, candidate.economic),
            describeDifference("social", userPos.social, candidate.social)
        ].join("");
    }

    document.getElementById("modal-comparacao").classList.add("show");
}

function fecharModalCand() {
    document.getElementById("modal-comparacao").classList.remove("show");
}
function ensureImageEntry(src, redraw) {
    if (!src) return null;
    if (!IMAGE_CACHE[src]) {
        var image = new Image();
        IMAGE_CACHE[src] = { img: image, loaded: false, error: false };
        image.onload = function() {
            IMAGE_CACHE[src].loaded = true;
            redraw();
        };
        image.onerror = function() {
            IMAGE_CACHE[src].error = true;
            redraw();
        };
        image.src = src;
    }
    return IMAGE_CACHE[src];
}

function ensureCompassTooltip(canvas) {
    var wrap = canvas.parentElement;
    if (!wrap) return null;
    var tooltip = wrap.querySelector(".compass-tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.className = "compass-tooltip";
        tooltip.style.position = "absolute";
        tooltip.style.zIndex = "4";
        tooltip.style.pointerEvents = "none";
        tooltip.style.minWidth = "160px";
        tooltip.style.maxWidth = "220px";
        tooltip.style.padding = "0.75rem 0.85rem";
        tooltip.style.borderRadius = "12px";
        tooltip.style.border = "1px solid rgba(255,255,255,0.1)";
        tooltip.style.boxShadow = "0 18px 40px rgba(0,0,0,0.22)";
        tooltip.style.font = "500 13px/1.45 Inter, sans-serif";
        tooltip.style.opacity = "0";
        tooltip.style.transform = "translateY(6px)";
        tooltip.style.transition = "opacity 0.16s ease, transform 0.16s ease";
        wrap.appendChild(tooltip);
    }
    tooltip.style.background = dark ? "rgba(1,4,9,0.94)" : "rgba(255,255,255,0.96)";
    tooltip.style.color = dark ? "#ffffff" : "#101828";
    return tooltip;
}

function drawAvatarPoint(ctx, canvas, person, point, redraw) {
    var radius = 16;
    var entry = ensureImageEntry(person.photo, redraw);

    ctx.save();
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.clip();

    if (entry && entry.loaded && !entry.error) {
        ctx.drawImage(entry.img, point.x - radius, point.y - radius, radius * 2, radius * 2);
    } else {
        ctx.fillStyle = dark ? "#1f2937" : "#d9e2ec";
        ctx.fillRect(point.x - radius, point.y - radius, radius * 2, radius * 2);
        ctx.fillStyle = dark ? "#ffffff" : "#101828";
        ctx.font = "700 12px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(getInitials(person.name), point.x, point.y + 0.5);
    }
    ctx.restore();

    canvas._candidatePoints.push({
        id: person.id,
        name: person.name,
        ideologyLabel: person.ideologyLabel || person.description || "",
        economic: person.economic,
        social: person.social,
        x: point.x,
        y: point.y,
        radius: radius + 6
    });
}

function _buildGridOverlay() {
    var overlay = document.getElementById("compass-grid-overlay");
    if (!overlay) return;
    overlay.innerHTML = "";

    var pad = 44, size = 600, gSize = size - pad * 2;
    var padPct = (pad / size) * 100;
    var gPct = (gSize / size) * 100;
    var isDark = document.body.classList.contains("dark-mode");

    for (var xVal = -100; xVal <= 100; xVal += 10) {
        for (var yVal = -100; yVal <= 100; yVal += 10) {
            var xPct = padPct + ((xVal + 100) / 200) * gPct;
            var yPct = padPct + ((yVal + 100) / 200) * gPct;

            var isOrigin = (xVal === 0 && yVal === 0);
            var isMajor = (xVal % 50 === 0 && yVal % 50 === 0);
            var isMid = (xVal % 25 === 0 && yVal % 25 === 0);

            var span = document.createElement("span");
            span.className = "grid-coord";
            span.textContent = xVal + "," + (-yVal);
            span.style.left = xPct + "%";
            span.style.top = yPct + "%";

            if (isOrigin) {
                span.style.fontWeight = "700";
                span.style.fontSize = "8px";
                span.style.opacity = isDark ? "0.6" : "0.55";
            } else if (isMajor) {
                span.style.fontWeight = "600";
                span.style.fontSize = "7px";
                span.style.opacity = isDark ? "0.35" : "0.4";
            } else if (isMid) {
                span.style.fontWeight = "500";
                span.style.fontSize = "6px";
                span.style.opacity = isDark ? "0.25" : "0.3";
            } else {
                span.style.fontWeight = "400";
                span.style.fontSize = "5.5px";
                span.style.opacity = isDark ? "0.18" : "0.22";
            }

            overlay.appendChild(span);
        }
    }
}

function desenharBussola(pos, matches) {
    var canvas = document.getElementById("compass-canvas");
    if (!canvas) return;
    window._lastBussolaData = { pos: pos, matches: matches };

    var legacyTooltip = canvas.parentElement && canvas.parentElement.querySelector(".compass-tooltip");
    if (legacyTooltip) legacyTooltip.remove();

    var dpr = window.devicePixelRatio || 1;
    var size = 600;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas._canvasSize = size;
    canvas._candidatePoints = [];

    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var pad = 44;
    var gSize = size - pad * 2;
    var cx = size / 2;
    var cy = size / 2;
    var half = gSize / 2;
    var isDark = document.body.classList.contains("dark-mode");
    var RANGE = 100;

    ctx.fillStyle = isDark ? "#0d1117" : "#ffffff";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = isDark ? "#5c1717" : "#ef4444";
    ctx.fillRect(pad, pad, half, half);
    ctx.fillStyle = isDark ? "#163666" : "#3b82f6";
    ctx.fillRect(pad + half, pad, half, half);
    ctx.fillStyle = isDark ? "#064e3b" : "#10b981";
    ctx.fillRect(pad, pad + half, half, half);
    ctx.fillStyle = isDark ? "#3b226e" : "#8b5cf6";
    ctx.fillRect(pad + half, pad + half, half, half);

    ctx.strokeStyle = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.10)";
    ctx.lineWidth = 0.5;
    for (var i = 1; i < 10; i += 1) {
        if (i === 5) continue;
        var g = pad + (gSize / 10) * i;
        ctx.beginPath();
        ctx.moveTo(g, pad);
        ctx.lineTo(g, pad + gSize);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pad, g);
        ctx.lineTo(pad + gSize, g);
        ctx.stroke();
    }

    ctx.strokeStyle = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, pad);
    ctx.lineTo(cx, pad + gSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pad, cy);
    ctx.lineTo(pad + gSize, cy);
    ctx.stroke();

    ctx.strokeStyle = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(pad, pad, gSize, gSize);

    var compassLabels = group("compass") || UI_COPY.pt.compass;
    var lblTop    = compassLabels.axisBottom || "Autoritário";
    var lblBottom = compassLabels.axisTop    || "Progressista";
    var lblLeft   = compassLabels.axisLeft   || "Mais Estado";
    var lblRight  = compassLabels.axisRight  || "Mais mercado";

    ctx.font = "700 11px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)";
    ctx.fillText(lblTop,    cx, pad - 10);
    ctx.fillText(lblBottom, cx, pad + gSize + 20);
    ctx.save();
    ctx.translate(pad - 14, cy);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(lblLeft, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.translate(pad + gSize + 14, cy);
    ctx.rotate(Math.PI / 2);
    ctx.fillText(lblRight, 0, 0);
    ctx.restore();

    ctx.font = "700 9px system-ui, sans-serif";
    ctx.globalAlpha = isDark ? 0.35 : 0.5;
    ctx.fillStyle = "#ef4444";
    ctx.fillText("Auth-Left", pad + half / 2, pad + 18);
    ctx.fillStyle = "#3b82f6";
    ctx.fillText("Auth-Right", pad + half + half / 2, pad + 18);
    ctx.fillStyle = "#10b981";
    ctx.fillText("Lib-Left", pad + half / 2, pad + gSize - 8);
    ctx.fillStyle = "#8b5cf6";
    ctx.fillText("Lib-Right", pad + half + half / 2, pad + gSize - 8);
    ctx.globalAlpha = 1;

    ctx.globalAlpha = 1;

    // Grid de coordenadas via HTML (permite zoom legível)
    // _buildGridOverlay();

    function toPixel(econ, soc) {
        var px = cx + (econ / RANGE) * half;
        var py = cy + (soc / RANGE) * half;
        px = Math.max(pad + 4, Math.min(pad + gSize - 4, px));
        py = Math.max(pad + 4, Math.min(pad + gSize - 4, py));
        return [px, py];
    }

    window._bussolaImgCache = window._bussolaImgCache || {};

    matches.forEach(function(candidate) {
        var pt = toPixel(candidate.economic, candidate.social);
        var radius = 11;
        var imgObj = window._bussolaImgCache[candidate.id];

        if (!imgObj) {
            imgObj = new Image();
            imgObj.src = candidate.photo;
            window._bussolaImgCache[candidate.id] = imgObj;
            imgObj.onload = function() {
                if (window._lastBussolaData) {
                    desenharBussola(window._lastBussolaData.pos, window._lastBussolaData.matches);
                }
            };
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(pt[0], pt[1], radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        if (imgObj.complete && imgObj.naturalWidth > 0) {
            var dim = Math.min(imgObj.naturalWidth, imgObj.naturalHeight);
            var sx = (imgObj.naturalWidth - dim) / 2;
            var sy = (imgObj.naturalHeight - dim) / 2;
            ctx.drawImage(imgObj, sx, sy, dim, dim, pt[0] - radius, pt[1] - radius, radius * 2, radius * 2);
        } else {
            ctx.fillStyle = isDark ? "rgba(200,200,200,0.8)" : "rgba(80,80,80,0.75)";
            ctx.fill();
        }
        ctx.restore();

        ctx.strokeStyle = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pt[0], pt[1], radius, 0, Math.PI * 2);
        ctx.stroke();
    });

    var uPt = toPixel(pos.economic, pos.social);
    ctx.shadowColor = "#10b981";
    ctx.shadowBlur = 14;
    ctx.fillStyle = "#10b981";
    ctx.beginPath();
    ctx.arc(uPt[0], uPt[1], 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = isDark ? "#ffffff" : "#000000";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(uPt[0], uPt[1], 9, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = isDark ? "#ffffff" : "#000000";
    ctx.font = "800 12px system-ui, sans-serif";
    ctx.textAlign = "center";
    var compassYou = (group("compass") || UI_COPY.pt.compass).you || "Você";
    ctx.fillText(compassYou, uPt[0], uPt[1] - 16);

    var candPositions = matches.map(function(candidate) {
        var pt = toPixel(candidate.economic, candidate.social);
        return { x: pt[0], y: pt[1], name: candidate.name, party: candidate.party };
    });
    window._bussolaCandPositions = candPositions;

    if (!canvas._hoverInit) {
        canvas._hoverInit = true;
        var tip = document.createElement("div");
        tip.id = "compass-tooltip";
        tip.style.cssText = "position:absolute;background:rgba(13,17,23,0.92);color:#e6edf3;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;pointer-events:none;opacity:0;transition:opacity 0.15s;z-index:10;white-space:nowrap;border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(6px);font-family:Inter,system-ui,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.3);";
        canvas.parentElement.appendChild(tip);

        canvas.addEventListener("mousemove", function(event) {
            var rect = canvas.getBoundingClientRect();
            var scaleRatio = 600 / rect.width;
            var mx = (event.clientX - rect.left) * scaleRatio;
            var my = (event.clientY - rect.top) * scaleRatio;
            var found = null;
            var pts = window._bussolaCandPositions || [];

            for (var j = 0; j < pts.length; j += 1) {
                var dx = mx - pts[j].x;
                var dy = my - pts[j].y;
                if (Math.sqrt(dx * dx + dy * dy) < 18) {
                    found = pts[j];
                    break;
                }
            }

            var tooltip = document.getElementById("compass-tooltip");
            if (!tooltip) return;

            if (found) {
                tooltip.textContent = found.name + " (" + found.party + ")";
                var tipX = found.x / scaleRatio + 16;
                var tipY = found.y / scaleRatio - 14;
                if (tipX + 140 > rect.width) tipX = found.x / scaleRatio - 16 - tooltip.offsetWidth;
                tooltip.style.left = tipX + "px";
                tooltip.style.top = tipY + "px";
                tooltip.style.opacity = "1";
                canvas.style.cursor = "pointer";
            } else {
                tooltip.style.opacity = "0";
                canvas.style.cursor = "default";
            }
        });

        canvas.addEventListener("mouseleave", function() {
            var tooltip = document.getElementById("compass-tooltip");
            if (tooltip) tooltip.style.opacity = "0";
            canvas.style.cursor = "default";
        });
    }
}

function bindCompassInteractions(canvas) {
    var tooltip = ensureCompassTooltip(canvas);
    if (!tooltip) return;

    function findCandidateAt(clientX, clientY, rect) {
        var size = canvas._canvasSize || 600;
        var x = ((clientX - rect.left) / rect.width) * size;
        var y = ((clientY - rect.top) / rect.height) * size;
        var found = null;
        (canvas._candidatePoints || []).forEach(function(point) {
            if (Math.hypot(point.x - x, point.y - y) <= point.radius) found = point;
        });
        return found;
    }

    function hideTooltip(forceUnlock) {
        if (forceUnlock) canvas._tooltipLocked = false;
        tooltip.style.opacity = "0";
        tooltip.style.transform = "translateY(6px)";
    }

    function showTooltip(point, rect, lock) {
        canvas._tooltipLocked = !!lock;
        var coords = group("compass").coords || UI_COPY.pt.compass.coords;
        tooltip.innerHTML =
            '<div style="font-weight:800;margin-bottom:0.15rem;">' + escapeHtml(point.name) + '</div>' +
            '<div style="color:' + (dark ? 'rgba(255,255,255,0.72)' : 'rgba(16,24,40,0.72)') + ';margin-bottom:0.35rem;">' + escapeHtml(point.ideologyLabel) + '</div>' +
            '<div style="font-size:12px;color:' + (dark ? 'rgba(255,255,255,0.65)' : 'rgba(16,24,40,0.65)') + ';">' +
                escapeHtml(replaceTokens(coords, { econ: formatSigned(point.economic), social: formatSigned(point.social) })) +
            '</div>';

        var wrap = canvas.parentElement;
        var wrapRect = wrap.getBoundingClientRect();
        var scale = rect.width / (canvas._canvasSize || 600);
        var left = (point.x * scale) + 18;
        var top = (point.y * scale) - 12;
        tooltip.style.left = Math.max(8, Math.min(left, wrapRect.width - 200)) + 'px';
        tooltip.style.top = Math.max(8, Math.min(top, wrapRect.height - 90)) + 'px';
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
    }

    canvas.onmousemove = function(event) {
        if (canvas._tooltipLocked) return;
        var rect = canvas.getBoundingClientRect();
        var point = findCandidateAt(event.clientX, event.clientY, rect);
        if (point) showTooltip(point, rect, false);
        else hideTooltip(false);
    };

    canvas.onmouseleave = function() {
        if (!canvas._tooltipLocked) hideTooltip(false);
    };

    canvas.onclick = function(event) {
        if (canvas._lastTouchAt && Date.now() - canvas._lastTouchAt < 500) return;
        var rect = canvas.getBoundingClientRect();
        var point = findCandidateAt(event.clientX, event.clientY, rect);
        if (!point) {
            hideTooltip(true);
            return;
        }
        showTooltip(point, rect, true);
    };

    canvas.ontouchend = function(event) {
        if (!event.changedTouches || event.changedTouches.length !== 1) return;
        var touch = event.changedTouches[0];
        var rect = canvas.getBoundingClientRect();
        var point = findCandidateAt(touch.clientX, touch.clientY, rect);
        canvas._lastTouchAt = Date.now();
        if (!point) {
            hideTooltip(true);
            return;
        }
        event.preventDefault();
        showTooltip(point, rect, true);
    };

    if (!window._compassTooltipListenerBound) {
        document.addEventListener("pointerdown", function(event) {
            var activeCanvas = window._activeCompassCanvas;
            if (!activeCanvas || !activeCanvas._tooltipLocked) return;
            if (activeCanvas.parentElement && activeCanvas.parentElement.contains(event.target)) return;
            var activeTooltip = activeCanvas.parentElement && activeCanvas.parentElement.querySelector(".compass-tooltip");
            if (activeTooltip) {
                activeCanvas._tooltipLocked = false;
                activeTooltip.style.opacity = "0";
                activeTooltip.style.transform = "translateY(6px)";
            }
        });
        window._compassTooltipListenerBound = true;
    }
}
function normalizeWorldPartyPosition(value) {
    return clamp(value / 8, -1, 1);
}

function rankCountry(country, userPos) {
    var userEconomic = clamp(userPos.economic / 100, -1, 1);
    var userSocial = clamp(userPos.social / 100, -1, 1);
    var maxDist = Math.sqrt(8);

    return country.parties.map(function(party) {
        var economic = normalizeWorldPartyPosition(party.position.economic);
        var social = normalizeWorldPartyPosition(party.position.social);
        var dist = Math.hypot(userEconomic - economic, userSocial - social);
        return Object.assign({}, party, {
            match: clamp(Math.round((1 - (dist / maxDist)) * 100), 0, 100)
        });
    }).sort(function(a, b) {
        return b.match - a.match;
    });
}

async function resultadoMundo(push) {
    if (push === void 0) push = true;
    var pos = S.pos;
    var worldData = S.worldData || await carregar("world-parties.json");
    S.worldData = worldData;

    var rankings = worldData.countries.map(function(country) {
        return { id: country.id, country: country, ranked: rankCountry(country, pos) };
    }).sort(function(a, b) {
        return b.ranked[0].match - a.ranked[0].match;
    });

    window._lastWorldData = worldData;
    window._lastWorldRankings = rankings;

    document.getElementById("world-scores").innerHTML = [
        scoreCard(group("result").econ, formatSigned(pos.economic), axisDescriptor("economic", pos.economic)),
        scoreCard(group("result").social, formatSigned(pos.social), axisDescriptor("social", pos.social))
    ].join("");

    document.getElementById("world-grid").innerHTML = rankings.map(function(item) {
        var best = item.ranked[0];
        var others = item.ranked.slice(1, 3).map(function(party) {
            return '<span>' + escapeHtml(party.name + ' · ' + party.match + '%') + '</span>';
        }).join('');
        var iso = ISO_MAP[item.id] || "un";
        var flagSrc = "https://flagcdn.com/w40/" + iso + ".png";
        return '<div class="cc" onclick="abrirPaisPorId(\'' + item.id + '\')">' +
            '<div class="cc-top">' +
                '<img src="' + flagSrc + '" class="cc-flag-img" alt="' + item.id + '">' +
                '<div class="cc-info">' +
                    '<div class="cc-pais">' + escapeHtml(getLangValue(item.country.name)) + '</div>' +
                    '<div class="cc-partido">' + escapeHtml(best.name) + '</div>' +
                '</div>' +
                '<div class="cc-pct" style="color:' + matchCor(best.match) + '">' + best.match + '%</div>' +
            '</div>' +
            '<div class="cc-bar-wrap"><div class="cc-bar" style="width:' + best.match + '%;background:' + escapeHtml(best.color) + ';"></div></div>' +
            '<div class="cc-outros">' + others + '</div>' +
        '</div>';
    }).join("");

    ir("t-mundo", push);
    construirMapa(worldData, rankings);
}

function getMapElement(svg, id) {
    var nodes = svg.querySelectorAll("[id]");
    for (var i = 0; i < nodes.length; i += 1) {
        if (nodes[i].id === id) return nodes[i];
    }
    return null;
}

function paintMapCountry(target, color) {
    var nodes = target.matches("path, polygon, rect") ? [target] : Array.from(target.querySelectorAll("path, polygon, rect"));
    if (!nodes.length) nodes = [target];
    nodes.forEach(function(node) {
        node.style.fill = color;
        node.style.stroke = dark ? "rgba(255,255,255,0.18)" : "rgba(16,24,40,0.16)";
        node.style.strokeWidth = "0.65";
        node.style.cursor = "pointer";
        node.style.transition = "opacity 0.18s ease";
    });
}

function addMapMarker(svg, bbox, item) {
    var best = item.ranked[0];
    if (!best || !best.logo) return;
    var ns = "http://www.w3.org/2000/svg";
    var groupNode = document.createElementNS(ns, "g");
    var x = bbox.x + bbox.width / 2;
    var y = bbox.y + bbox.height / 2;
    
    var w = bbox.width * 0.55;
    var h = bbox.height * 0.55;

    // Limites de teto para não explodir
    if (w > 32) w = 32;
    if (h > 18) h = 18;
    
    // Limite de piso (para o Chile não desaparecer)
    if (w < 14) w = 14;
    if (h < 14) h = 14;
    
    // Corrigir centros distorcidos por territórios distantes ou sobreposições apertadas
    if (item.id === "usa") {
        x += 40;
        y += 15;
    } else if (item.id === "canada") {
        x -= 25;
        y += 10;
    } else if (item.id === "brazil") {
        x += 14; 
        y += 3;
    } else if (item.id === "uk") {
        x += 6; 
    } else if (item.id === "ireland") {
        x -= 6; 
    } else if (item.id === "portugal") {
        x -= 4;
        w = Math.min(w, 10);
        h = Math.min(h, 10);
    } else if (item.id === "netherlands") {
        w = Math.min(w, 10);
        h = Math.min(h, 10);
    } else if (item.id === "norway") {
        y += 18;
        x -= 24;
        w = Math.min(w, 8);
        h = Math.min(h, 8);
    } else if (item.id === "denmark") {
        w = Math.min(w, 10);
        h = Math.min(h, 10);
    }

    groupNode.setAttribute("class", "marker-g");
    groupNode.setAttribute("transform", "translate(" + x + " " + y + ")");
    groupNode.style.cursor = "pointer";
    groupNode.style.filter = "drop-shadow(0px 1px 3px rgba(0,0,0,0.65))";

    var img = document.createElementNS(ns, "image");
    img.setAttribute("href", best.logo);
    img.setAttribute("x", -w / 2);
    img.setAttribute("y", -h / 2);
    img.setAttribute("width", w);
    img.setAttribute("height", h);
    img.setAttribute("preserveAspectRatio", "xMidYMid meet");
    groupNode.appendChild(img);

    var title = document.createElementNS(ns, "title");
    title.textContent = getLangValue(item.country.name) + " · " + best.name + " · " + best.match + "%";
    groupNode.appendChild(title);

    groupNode.addEventListener("click", function(event) {
        event.stopPropagation();
        abrirPaisPorId(item.id);
    });

    svg.appendChild(groupNode);
}

function createMapControls() {
    var controls = document.createElement("div");
    controls.className = "mapa-controls";
    controls.innerHTML = [
        '<button class="mapa-btn" type="button" data-map-zoom="in" aria-label="Zoom in">+</button>',
        '<button class="mapa-btn" type="button" data-map-zoom="out" aria-label="Zoom out">−</button>',
        '<button class="mapa-btn" type="button" data-map-zoom="reset" aria-label="Reset zoom">↺</button>'
    ].join("");
    return controls;
}

function construirMapa(worldData, rankings) {
    var mount = document.getElementById("world-map-svg");
    var template = document.getElementById("svg-mapa-template");
    if (!mount || !template) return;

    if (mount._zoomCleanup) {
        mount._zoomCleanup();
        mount._zoomCleanup = null;
    }
    mount.innerHTML = "";
    var wrap = document.createElement("div");
    wrap.className = "mapa-wrap";

    var svg = template.cloneNode(true);
    svg.removeAttribute("id");
    svg.removeAttribute("style");
    svg.setAttribute("aria-label", "World political affinity map");

    rankings.forEach(function(item) {
        var svgId = SVG_ID_MAP[item.id];
        if (!svgId) return;
        var target = getMapElement(svg, svgId);
        if (!target) return;

        paintMapCountry(target, item.ranked[0].color);
        target.addEventListener("mouseenter", function() { target.style.opacity = "0.82"; });
        target.addEventListener("mouseleave", function() { target.style.opacity = "1"; });
        target.addEventListener("click", function(event) {
            event.stopPropagation();
            abrirPaisPorId(item.id);
        });
    });

    wrap.appendChild(svg);
    wrap.appendChild(createMapControls());
    mount.appendChild(wrap);

    /* Add markers AFTER SVG is in the DOM so getBBox() works */
    rankings.forEach(function(item) {
        var svgId = SVG_ID_MAP[item.id];
        if (!svgId) return;
        var target = getMapElement(svg, svgId);
        if (!target) return;
        try {
            addMapMarker(svg, target.getBBox(), item);
        } catch (error) {
            /* ignore bbox errors */
        }
    });

    var legend = document.createElement("div");
    legend.className = "mapa-legenda";
    legend.innerHTML = '<div class="leg-item"><span class="leg-dot" style="background:var(--green)"></span><span>' + escapeHtml(group("result").worldHint || UI_COPY.pt.result.worldHint) + '</span></div>';
    mount.appendChild(legend);

    mount._zoomCleanup = iniciarZoomMapa(wrap, svg);
}

function iniciarZoomMapa(wrap, svg) {
    svg.style.transformOrigin = "0 0";
    var scale = 1;
    var panX = 0;
    var panY = 0;
    var minScale = 1;
    var maxScale = 8;
    var dragThreshold = 8;
    var state = {
        dragReady: false,
        dragging: false,
        startX: 0,
        startY: 0,
        startPanX: 0,
        startPanY: 0,
        pinchDistance: 0,
        pinchScale: 1
    };

    function clampPan() {
        if (scale <= 1) {
            panX = 0;
            panY = 0;
            return;
        }
        var minPanX = wrap.clientWidth * (1 - scale);
        var minPanY = wrap.clientHeight * (1 - scale);
        panX = clamp(panX, minPanX, 0);
        panY = clamp(panY, minPanY, 0);
    }

    // Promover SVG para GPU durante interação, remover após parar
    var gpuTimer = null;
    function gpuOn() {
        svg.style.willChange = "transform";
        clearTimeout(gpuTimer);
        gpuTimer = setTimeout(function() {
            svg.style.willChange = "auto";
            gpuTimer = null;
        }, 200);
    }

    function applyTransform(smooth) {
        clampPan();
        svg.style.transition = smooth ? "transform 0.15s ease-out" : "none";
        svg.style.transform = "translate(" + panX + "px, " + panY + "px) scale(" + scale + ")";
        gpuOn();
    }

    function zoomBy(factor, clientX, clientY, smooth) {
        var rect = wrap.getBoundingClientRect();
        var cx = (clientX !== undefined) ? (clientX - rect.left) : (rect.width / 2);
        var cy = (clientY !== undefined) ? (clientY - rect.top) : (rect.height / 2);

        var newScale = clamp(scale * factor, minScale, maxScale);
        var actualFactor = newScale / scale;

        if (actualFactor !== 1) {
            panX = cx - (cx - panX) * actualFactor;
            panY = cy - (cy - panY) * actualFactor;
            scale = newScale;
            applyTransform(smooth !== false);
        }
    }

    wrap.querySelectorAll("[data-map-zoom]").forEach(function(btn) {
        btn.addEventListener("click", function() {
            var action = btn.getAttribute("data-map-zoom");
            if (action === "in") zoomBy(1.2);
            if (action === "out") zoomBy(1 / 1.2);
            if (action === "reset") {
                scale = 1;
                panX = 0;
                panY = 0;
                applyTransform(true);
            }
        });
    });

    var wheelTimeout = null;
    wrap.addEventListener("wheel", function(event) {
        event.preventDefault();
        if (wheelTimeout) return;
        wheelTimeout = requestAnimationFrame(function() {
            zoomBy(event.deltaY < 0 ? 1.12 : 1 / 1.12, event.clientX, event.clientY, false);
            wheelTimeout = null;
        });
    }, { passive: false });

    wrap.addEventListener("mousedown", function(event) {
        if (scale <= 1) return;
        state.dragReady = true;
        state.dragging = false;
        state.startX = event.clientX;
        state.startY = event.clientY;
        state.startPanX = panX;
        state.startPanY = panY;
    });

    function onMouseMove(event) {
        if (!state.dragReady) return;
        var dx = event.clientX - state.startX;
        var dy = event.clientY - state.startY;
        if (!state.dragging && Math.hypot(dx, dy) > dragThreshold) state.dragging = true;
        if (!state.dragging) return;
        panX = state.startPanX + dx;
        panY = state.startPanY + dy;
        applyTransform(false);
    }

    function onMouseUp() {
        state.dragReady = false;
        state.dragging = false;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    wrap.addEventListener("touchstart", function(event) {
        if (event.touches.length === 2) {
            state.pinchDistance = Math.hypot(
                event.touches[0].clientX - event.touches[1].clientX,
                event.touches[0].clientY - event.touches[1].clientY
            );
            state.pinchScale = scale;
            state.pinchCx = (event.touches[0].clientX + event.touches[1].clientX) / 2;
            state.pinchCy = (event.touches[0].clientY + event.touches[1].clientY) / 2;
            state.pinchPanX = panX;
            state.pinchPanY = panY;
            return;
        }

        if (event.touches.length !== 1 || scale <= 1) {
            state.dragReady = false;
            return;
        }

        state.dragReady = true;
        state.dragging = false;
        state.startX = event.touches[0].clientX;
        state.startY = event.touches[0].clientY;
        state.startPanX = panX;
        state.startPanY = panY;
    }, { passive: true });

    wrap.addEventListener("touchmove", function(event) {
        if (event.touches.length === 2) {
            event.preventDefault();
            var distance = Math.hypot(
                event.touches[0].clientX - event.touches[1].clientX,
                event.touches[0].clientY - event.touches[1].clientY
            );
            if (!state.pinchDistance) {
                state.pinchDistance = distance;
                state.pinchScale = scale;
                state.pinchCx = (event.touches[0].clientX + event.touches[1].clientX) / 2;
                state.pinchCy = (event.touches[0].clientY + event.touches[1].clientY) / 2;
                state.pinchPanX = panX;
                state.pinchPanY = panY;
            }
            var newScale = clamp(state.pinchScale * (distance / state.pinchDistance), minScale, maxScale);
            var actualFactor = newScale / state.pinchScale;
            var rect = wrap.getBoundingClientRect();
            var rcx = state.pinchCx - rect.left;
            var rcy = state.pinchCy - rect.top;
            
            panX = rcx - (rcx - state.pinchPanX) * actualFactor;
            panY = rcy - (rcy - state.pinchPanY) * actualFactor;
            
            // Permitir que o pan mude baseado no movimento dos dedos durante o pinch (pan + zoom combo)
            var currentCx = (event.touches[0].clientX + event.touches[1].clientX) / 2;
            var currentCy = (event.touches[0].clientY + event.touches[1].clientY) / 2;
            panX += (currentCx - state.pinchCx);
            panY += (currentCy - state.pinchCy);
            
            scale = newScale;
            applyTransform(false);
            return;
        }

        if (!state.dragReady || event.touches.length !== 1) return;
        var dx = event.touches[0].clientX - state.startX;
        var dy = event.touches[0].clientY - state.startY;
        if (!state.dragging && Math.hypot(dx, dy) > dragThreshold) state.dragging = true;
        if (!state.dragging) return;
        event.preventDefault();
        panX = state.startPanX + dx;
        panY = state.startPanY + dy;
        applyTransform(false);
    }, { passive: false });

    function endTouch() {
        state.dragReady = false;
        state.dragging = false;
        state.pinchDistance = 0;
    }

    wrap.addEventListener("touchend", endTouch);
    wrap.addEventListener("touchcancel", endTouch);
    wrap.addEventListener("dblclick", function() { zoomBy(1.35); });

    return function cleanupZoom() {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };
}

function abrirPaisPorId(countryId) {
    if (!window._lastWorldData || !window._lastWorldRankings) return;
    var country = window._lastWorldData.countries.find(function(item) { return item.id === countryId; });
    var rankedItem = window._lastWorldRankings.find(function(item) { return item.id === countryId; });
    if (!country || !rankedItem) return;
    abrirPais(country, rankedItem.ranked);
}

function abrirPais(country, ranked) {
    window._lastCountryId = country.id;
    var top = ranked[0];

    var iso = ISO_MAP[country.id] || "un";
    var flagElem = document.getElementById("pais-flag");
    flagElem.innerHTML = '<img src="https://flagcdn.com/w80/' + iso + '.png" class="pais-flag-img" alt="' + country.id + '">';

    document.getElementById("pais-nome").textContent = getLangValue(country.name);
    document.querySelector(".pais-sub-txt").textContent = group("world").countryRanking || UI_COPY.pt.world.countryRanking;
    document.querySelector(".pais-top-label").textContent = group("world").topParty || UI_COPY.pt.world.topParty;
    document.getElementById("pais-top-partido").textContent = top.name;
    document.getElementById("pais-top-pct").textContent = top.match + "%";
    document.getElementById("pais-lista").innerHTML = ranked.map(function(party, index) {
        return '<div class="p-row">' +
            '<div class="p-num">' + (index + 1) + '</div>' +
            '<div class="p-dot" style="background:' + escapeHtml(party.color) + '"></div>' +
            '<div class="p-info"><div class="p-nome">' + escapeHtml(party.name) + '</div><div class="p-bar-wrap"><div class="p-bar" style="width:' + party.match + '%;background:' + escapeHtml(party.color) + ';"></div></div></div>' +
            '<div class="p-pct">' + party.match + '%</div>' +
        '</div>';
    }).join('');
    abrirModal("modal-pais");
}
function reiniciar() {
    clearAutoNext();
    S.quiz = null;
    S.mode = null;
    S.perguntas = [];
    S.respostas = [];
    S.atual = 0;
    S.pos = { economic: 0, social: 0 };
    window._lastBrazilResult = null;
    window._lastWorldData = null;
    window._lastWorldRankings = null;
    window._lastCountryId = null;
    window._lastComparisonId = null;

    var progress = document.getElementById("progress");
    if (progress) progress.style.width = "0%";

    fecharModal("modal-modo");
    fecharModal("modal-pais");
    fecharQR();
    fecharModalCand();
    ir("t-home");
}

function abrirMapaEleicao(ano) {
    if (ano !== "1955") return;
    window._lastElectionYear = ano;
    window._1955cargo = "presidente";
    document.querySelectorAll("[data-cargo]").forEach(function(btn) {
        btn.classList.toggle("ativo", btn.dataset.cargo === "presidente");
    });
    ir("t-mapa-eleicao");
    
    setTimeout(function() {
        if (!electionMapInstance) {
            electionMapInstance = L.map("mapEleicao").setView([-14.235, -51.925], 4);
            var tileUrl = dark ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
            L.tileLayer(tileUrl, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(electionMapInstance);
            if (dark) document.getElementById('mapEleicao').style.background = '#0e0e0e';
        } else {
            electionMapInstance.invalidateSize();
        }
        
        carregarDadosEleicao(ano, window._1955cargo || "presidente");
    }, 200);
}

function set1955Cargo(cargo) {
    window._1955cargo = cargo;
    document.querySelectorAll("[data-cargo]").forEach(function(btn) {
        btn.classList.toggle("ativo", btn.dataset.cargo === cargo);
    });
    if (electionMapInstance) carregarDadosEleicao("1955", cargo);
}

function fecharMapaEleicao() {
    ir("t-eleicoes");
}

var plebiscitoMapInstance = null;
var _plebiscitoQuestion = "forma";
var _plebiscitoCache = {}; // cache dos GeoJSONs para não re-fazer fetch

function abrirPlebiscito1993() {
    ir("t-plebiscito-1993");
    setTimeout(function() {
        if (!plebiscitoMapInstance) {
            plebiscitoMapInstance = L.map("mapPlebiscito").setView([-14.235, -51.925], 4);
            var tileUrl = dark ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
            L.tileLayer(tileUrl, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(plebiscitoMapInstance);
            if (dark) document.getElementById('mapPlebiscito').style.background = '#0e0e0e';
        } else {
            plebiscitoMapInstance.invalidateSize();
        }
        carregarPlebiscito(_plebiscitoQuestion);
    }, 200);
}

function fecharPlebiscito1993() {
    ir("t-eleicoes");
}

function setPlebiscito(questao) {
    _plebiscitoQuestion = questao;
    document.querySelectorAll(".plebiscito-chip").forEach(function(chip) {
        chip.classList.toggle("ativo", chip.dataset.pleb === questao);
    });
    if (plebiscitoMapInstance) carregarPlebiscito(questao);
}

async function carregarPlebiscito(questao) {
    var overlay = document.getElementById("plebiscito-loading");
    if (overlay) overlay.style.display = "flex";

    // Remove camadas geojson anteriores (coleta antes de remover para evitar bug de iteração)
    var layersToRemove = [];
    plebiscitoMapInstance.eachLayer(function(layer) {
        if (layer instanceof L.GeoJSON) layersToRemove.push(layer);
    });
    layersToRemove.forEach(function(l) { plebiscitoMapInstance.removeLayer(l); });

    try {
        // Usar cache se disponível; senão buscar
        var keyBr = "br-" + questao;
        var keyMundo = "mundo-" + questao;

        if (!_plebiscitoCache[keyBr]) {
            var rBr = await fetch("1993-" + questao + ".geojson");
            if (!rBr.ok) throw new Error("arquivo não encontrado: 1993-" + questao + ".geojson");
            _plebiscitoCache[keyBr] = await rBr.json();
        }
        var geojsonData = _plebiscitoCache[keyBr];

        if (!_plebiscitoCache[keyMundo]) {
            try {
                var rMundo = await fetch("1993-" + questao + "-mundo.geojson");
                _plebiscitoCache[keyMundo] = rMundo.ok ? await rMundo.json() : null;
            } catch (e) {
                _plebiscitoCache[keyMundo] = null;
            }
        }
        var geojsonMundo = _plebiscitoCache[keyMundo];

        function getColorPleb(vencedor, pctValue) {
            if (!vencedor || vencedor === "NADA") return "#747474";
            if (vencedor === "EMPATE") return "#e8e8e8";

            // Decil: arredonda para o múltiplo de 10 mais próximo (mín 20)
            var pct = Math.max(0, Math.min(100, pctValue || 50));
            var decil = Math.max(20, Math.floor(pct / 10) * 10);

            // Verde (#77d36f → #173e13) — República / Presidencialismo
            var verde = {
                20: "#77d36f", 30: "#6bc064", 40: "#5fae58",
                50: "#539b4d", 60: "#478941", 70: "#3b7636",
                80: "#2f632a", 90: "#23511f"
            };
            // Amarelo (#f0db75 → #73620c) — Monarquia / Parlamentarismo
            var amarelo = {
                20: "#f0db75", 30: "#e0cc68", 40: "#d1bd5b",
                50: "#c1ae4e", 60: "#b29f41", 70: "#a28f33",
                80: "#928026", 90: "#837119"
            };

            if (vencedor === "REPÚBLICA" || vencedor === "PRESIDENCIALISMO")
                return verde[decil] || verde[90];
            if (vencedor === "MONARQUIA" || vencedor === "PARLAMENTARISMO")
                return amarelo[decil] || amarelo[90];
            return "#747474";
        }

        var geojsonLayer = L.geoJSON(geojsonData, {
            style: function(feature) {
                var props = feature.properties || {};
                var vencedor = props.vencedor || "";
                var pct = (vencedor === "REPÚBLICA" ? props.rep_pct : vencedor === "MONARQUIA" ? props.mon_pct : vencedor === "PRESIDENCIALISMO" ? props.pres_pct : vencedor === "PARLAMENTARISMO" ? props.parl_pct : null) || 50;
                return {
                    fillColor: getColorPleb(vencedor, pct),
                    weight: 0.3,
                    opacity: 1,
                    color: '#ffffff',
                    fillOpacity: 1,
                    lineCap: 'round',
                    lineJoin: 'round'
                };
            },
            onEachFeature: function(feature, layer) {
                var props = feature.properties || {};
                var nome = props.nome || props.NOME || props.name || "";
                var vencedor = props.vencedor || "";
                var total = props.total || 0;

                // Determinar qual questão (Forma vs Sistema) e construir tooltip accordingly
                var isSistema = props.pres_pct !== undefined;

                var tooltipHtml = "<div class='kepler-tooltip'>" +
                    "<div class='kt-row'><span class='kt-label'>Município</span><span class='kt-val'>" + nome + "</span></div>";

                if (isSistema) {
                    // Sistema: Presidencialismo vs Parlamentarismo
                    var pres = props.presidencialismo || 0;
                    var parl = props.parlamentarismo || 0;
                    var presPct = (props.pres_pct || 0).toFixed(2);
                    var parlPct = (props.parl_pct || 0).toFixed(2);

                    tooltipHtml +=
                        "<div class='kt-row'><span class='kt-label'>Presidencialismo %</span><span class='kt-val'>" + presPct + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Parlamentarismo %</span><span class='kt-val'>" + parlPct + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Presidencialismo</span><span class='kt-val'>" + pres + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Parlamentarismo</span><span class='kt-val'>" + parl + "</span></div>";
                } else {
                    // Forma: República vs Monarquia
                    var rep = props.republica || 0;
                    var mon = props.monarquia || 0;
                    var repPct = (props.rep_pct || 0).toFixed(2);
                    var monPct = (props.mon_pct || 0).toFixed(2);

                    tooltipHtml +=
                        "<div class='kt-row'><span class='kt-label'>República %</span><span class='kt-val'>" + repPct + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Monarquia %</span><span class='kt-val'>" + monPct + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>República</span><span class='kt-val'>" + rep + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Monarquia</span><span class='kt-val'>" + mon + "</span></div>";
                }

                tooltipHtml +=
                    "<div class='kt-row'><span class='kt-label'>Votos Totais</span><span class='kt-val'>" + total + "</span></div>" +
                    "<div class='kt-row'><span class='kt-label'>Vencedor</span><span class='kt-val'><strong>" + vencedor + "</strong></span></div>" +
                    "</div>";

                layer.bindTooltip(tooltipHtml, {
                    sticky: true,
                    className: "kepler-tooltip-container",
                    direction: "auto",
                    offset: [0, -10]
                });

                // Hover effects (igual a 1955)
                layer.on({
                    mouseover: function(e) {
                        var l = e.target;
                        l.setStyle({
                            weight: 2,
                            color: '#fff',
                            opacity: 1
                        });
                        l.bringToFront();
                    },
                    mouseout: function(e) {
                        geojsonLayer.resetStyle(e.target);
                    }
                });
            }
        }).addTo(plebiscitoMapInstance);

        // Layer de países estrangeiros (por cima do Brasil)
        if (geojsonMundo) {
            var isSistemaMundo = questao === "sistema";
            L.geoJSON(geojsonMundo, {
                filter: function(feature) {
                    // Excluir o polígono do Brasil — os municípios já cobrem o território
                    var nome = (feature.properties || {}).nome || "";
                    return nome !== "Brazil";
                },
                style: function(feature) {
                    var props = feature.properties || {};
                    var vencedor = props.vencedor || "";
                    var pct = (vencedor === "REPÚBLICA" ? props.rep_pct : vencedor === "MONARQUIA" ? props.mon_pct : vencedor === "PRESIDENCIALISMO" ? props.pres_pct : vencedor === "PARLAMENTARISMO" ? props.parl_pct : null) || 50;
                    var semDado = vencedor === "NADA";
                    return {
                        fillColor: getColorPleb(vencedor, pct),
                        weight: semDado ? 0 : 0.3,
                        opacity: semDado ? 0 : 1,
                        color: '#ffffff',
                        fillOpacity: semDado ? 0 : 1,
                        interactive: !semDado,
                        lineCap: 'round',
                        lineJoin: 'round'
                    };
                },
                onEachFeature: function(feature, layer) {
                    var props = feature.properties || {};
                    var nome = props.nome_pt || props.nome || "";
                    var vencedor = props.vencedor || "";
                    if (vencedor === "NADA") return;
                    var total = props.total || 0;
                    var tooltipHtml = "<div class='kepler-tooltip'>" +
                        "<div class='kt-row'><span class='kt-label'>País</span><span class='kt-val'>" + nome + "</span></div>";
                    if (isSistemaMundo) {
                        tooltipHtml +=
                            "<div class='kt-row'><span class='kt-label'>Presidencialismo %</span><span class='kt-val'>" + (props.pres_pct || 0).toFixed(2) + "</span></div>" +
                            "<div class='kt-row'><span class='kt-label'>Parlamentarismo %</span><span class='kt-val'>" + (props.parl_pct || 0).toFixed(2) + "</span></div>";
                    } else {
                        tooltipHtml +=
                            "<div class='kt-row'><span class='kt-label'>República %</span><span class='kt-val'>" + (props.rep_pct || 0).toFixed(2) + "</span></div>" +
                            "<div class='kt-row'><span class='kt-label'>Monarquia %</span><span class='kt-val'>" + (props.mon_pct || 0).toFixed(2) + "</span></div>";
                    }
                    tooltipHtml +=
                        "<div class='kt-row'><span class='kt-label'>Votos Totais</span><span class='kt-val'>" + total + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Vencedor</span><span class='kt-val'><strong>" + vencedor + "</strong></span></div>" +
                        "</div>";
                    layer.bindTooltip(tooltipHtml, { sticky: true, className: "kepler-tooltip-container", direction: "auto", offset: [0, -10] });
                }
            }).addTo(plebiscitoMapInstance);
        }
    } catch (e) {
        console.warn("[Plebiscito 1993] dados indisponíveis:", e.message);
        if (overlay) {
            var p = overlay.querySelector("p");
            if (p) p.textContent = (typeof currentLang !== "undefined" && currentLang === "en")
                ? "Data being prepared. Come back soon!"
                : (typeof currentLang !== "undefined" && currentLang === "es")
                    ? "Datos en preparación. ¡Vuelve pronto!"
                    : "Dados em preparação. Volte em breve!";
            overlay.style.display = "flex";
            return;
        }
    }

    if (overlay) overlay.style.display = "none";
}

var RMSP_URL = "rmsp/";
function abrirRMSP() {
    var iframe = document.getElementById("rmsp-iframe");
    if (iframe && !iframe.getAttribute("src")) {
        iframe.setAttribute("src", RMSP_URL);
    }
    ir("t-rmsp");
}
function fecharRMSP() {
    ir("t-eleicoes");
}

var _el1955cache = {};

async function carregarDadosEleicao(ano, cargo) {
    cargo = cargo || "presidente";
    var overlay = document.getElementById("map-loading");
    if (overlay) overlay.style.display = "flex";

    try {
        var isVice = (ano === "1955" && cargo === "vice");
        var cacheKey = ano + "-" + cargo;
        var url = isVice ? "1955-vice.geojson"
                : (ano === "1955" ? "1955 brasil presidente.geojson"
                                  : "data/" + ano + ".geojson");

        if (!_el1955cache[cacheKey]) {
            var response = await fetch(url);
            _el1955cache[cacheKey] = await response.json();
        }
        var geojsonData = _el1955cache[cacheKey];

        // Remove camadas GeoJSON anteriores
        var toRemove = [];
        electionMapInstance.eachLayer(function(layer) {
            if (layer instanceof L.GeoJSON) toRemove.push(layer);
        });
        toRemove.forEach(function(l) { electionMapInstance.removeLayer(l); });

        function getColorKepler(vencedor) {
            if (!vencedor || vencedor === "NADA") return "#747474";
            if (vencedor === "EMPATE") return "#e8e8e8";
            var colors = {
                // Presidente — PSD (azul-ciano)
                "PSD 20": "#4ed4ff", "PSD 30": "#2eccff", "PSD 40": "#0fc5ff",
                "PSD 50": "#00b6f0", "PSD 60": "#009fd1", "PSD 70": "#0083ad",
                "PSD 80": "#00678a", "PSD 90": "#004c66",
                // Presidente — UDN (azul-escuro)
                "UDN 30": "#5b6dc8", "UDN 40": "#4055bf", "UDN 50": "#384ba8",
                "UDN 60": "#304091", "UDN 70": "#29367a", "UDN 80": "#222d63",
                "UDN 90": "#1a224c",
                // Presidente — PSP (marrom-rosado)
                "PSP 20": "#b6969a", "PSP 30": "#a1787d", "PSP 40": "#876569",
                "PSP 50": "#6e5255", "PSP 60": "#533e40", "PSP 70": "#3b2c2d",
                // Presidente — PRP (verde)
                "PRP 20": "#77d36f", "PRP 30": "#5fcc55", "PRP 40": "#47c33c",
                "PRP 50": "#3ba432", "PRP 70": "#287a20",
                // Vice — PTB/Goulart (vermelho)
                "PTB 20": "#ff9090", "PTB 30": "#f06060", "PTB 40": "#de3a3a",
                "PTB 50": "#c42020", "PTB 60": "#a81010", "PTB 70": "#8b0606",
                "PTB 80": "#6e0303", "PTB 90": "#500101"
            };
            return colors[vencedor] || "#888888";
        }

        var geojsonLayer = L.geoJSON(geojsonData, {
            style: function(feature) {
                return {
                    color: "#ffffff",
                    weight: 0.3,
                    opacity: 1,
                    fillOpacity: 1,
                    fillColor: getColorKepler(feature.properties.VENCEDOR || "")
                };
            },
            onEachFeature: function(feature, layer) {
                var props = feature.properties;
                var tooltipHtml = "<div class='kepler-tooltip'>" +
                    "<div class='kt-row'><span class='kt-label'>Cidade</span><span class='kt-val'>" + (props.nome || "") + "</span></div>";

                if (isVice) {
                    tooltipHtml +=
                        "<div class='kt-row'><span class='kt-label'>João Goulart (PTB)</span><span class='kt-val'>" + (props.PTB || "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Milton Campos (UDN)</span><span class='kt-val'>" + (props.UDN || "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Danton Coelho (PSP)</span><span class='kt-val'>" + (props.PSP || "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>PTB %</span><span class='kt-val'>" + (props.PTB_pct !== null ? props.PTB_pct : "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>UDN %</span><span class='kt-val'>" + (props.UDN_pct !== null ? props.UDN_pct : "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>PSP %</span><span class='kt-val'>" + (props.PSP_pct !== null ? props.PSP_pct : "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Votos Nominais</span><span class='kt-val'>" + (props.total || "") + "</span></div>";
                } else {
                    tooltipHtml +=
                        "<div class='kt-row'><span class='kt-label'>PSD %</span><span class='kt-val'>" + (props["PSD porcen"] !== null ? props["PSD porcen"] : "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>UDN %</span><span class='kt-val'>" + (props["UDN porcen"] !== null ? props["UDN porcen"] : "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>PSP %</span><span class='kt-val'>" + (props["PSP porcen"] !== null ? props["PSP porcen"] : "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>PRP %</span><span class='kt-val'>" + (props["PRP porcen"] !== null ? props["PRP porcen"] : "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Juscelino Kubitschek</span><span class='kt-val'>" + (props["Banco de Dados - 1955 Presidente & Vice_PSD"] || "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Juarez Távora</span><span class='kt-val'>" + (props["Banco de Dados - 1955 Presidente & Vice_UDN"] || "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Adhemar de Barros</span><span class='kt-val'>" + (props["Banco de Dados - 1955 Presidente & Vice_PSP"] || "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Plínio Salgado</span><span class='kt-val'>" + (props["Banco de Dados - 1955 Presidente & Vice_PRP"] || "") + "</span></div>" +
                        "<div class='kt-row'><span class='kt-label'>Votos Nominais</span><span class='kt-val'>" + (props["Banco de Dados - 1955 Presidente & Vice_Votos Nominais"] || "") + "</span></div>";
                }

                tooltipHtml += "</div>";
                layer.bindTooltip(tooltipHtml, { sticky: true, className: "kepler-tooltip-container", direction: "auto", offset: [0, -10] });

                layer.on({
                    mouseover: function(e) {
                        var l = e.target;
                        l.setStyle({ fillOpacity: 1, weight: 2, color: "#fff", opacity: 1 });
                        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) l.bringToFront();
                    },
                    mouseout: function(e) { geojsonLayer.resetStyle(e.target); }
                });
            }
        }).addTo(electionMapInstance);

        electionMapInstance.fitBounds(geojsonLayer.getBounds());
    } catch (e) {
        console.error("Erro ao carregar mapa " + ano, e);
        alert("Erro ao carregar os dados do mapa.");
    } finally {
        if (overlay) overlay.style.display = "none";
    }
}

function bindEvents() {
    var btnTheme = document.getElementById("btn-theme");
    if (btnTheme) {
        btnTheme.addEventListener("click", function() {
            dark = !dark;
            aplicarTema();
        });
    }

    document.getElementById("btn-brasil").addEventListener("click", function() { abrirModal("modal-construcao"); });
    document.getElementById("btn-mundo").addEventListener("click", function() { abrirModalModo("world"); });
    document.getElementById("opt-rapido").addEventListener("click", function() { fecharModal("modal-modo"); iniciarQuiz(S.quiz, "quick"); });
    document.getElementById("opt-completo").addEventListener("click", function() { fecharModal("modal-modo"); iniciarQuiz(S.quiz, "full"); });
    document.getElementById("opt-cancelar").addEventListener("click", function() { fecharModal("modal-modo"); });

    document.getElementById("opts").addEventListener("click", function(event) {
        var button = event.target.closest(".opt");
        if (!button) return;
        selecionarResposta(Number(button.dataset.v));
    });

    document.getElementById("btn-ant").addEventListener("click", function() {
        if (S.atual <= 0) return;
        S.atual -= 1;
        renderQ("prev");
    });

    document.getElementById("btn-prox").addEventListener("click", function() {
        if (S.respostas[S.atual] == null) return;
        if (S.atual < S.perguntas.length - 1) {
            S.atual += 1;
            renderQ("next");
        } else {
            finalizarQuiz();
        }
    });

    document.getElementById("btn-sair").addEventListener("click", reiniciar);
    document.getElementById("btn-refazer").addEventListener("click", reiniciar);
    document.getElementById("btn-refazer-mundo").addEventListener("click", reiniciar);
    document.getElementById("pais-fechar").addEventListener("click", function() { fecharModal("modal-pais"); });

    document.getElementById("modal-modo").addEventListener("click", function(event) {
        if (event.target.id === "modal-modo") fecharModal("modal-modo");
    });

    document.getElementById("btn-fechar-construcao").addEventListener("click", function() { fecharModal("modal-construcao"); });
    document.getElementById("modal-construcao").addEventListener("click", function(event) {
        if (event.target.id === "modal-construcao") fecharModal("modal-construcao");
    });

    document.getElementById("modal-pais").addEventListener("click", function(event) {
        if (event.target.id === "modal-pais") fecharModal("modal-pais");
    });

    document.getElementById("modal-comparacao").addEventListener("click", function(event) {
        if (event.target.id === "modal-comparacao") fecharModalCand();
    });

    window.addEventListener("popstate", function() {
        var hash = window.location.hash.replace(/^#/, "") || "t-eleicoes";
        ir(hash, false);
    });

    document.addEventListener("keydown", function(event) {
        if (event.key !== "Escape") return;
        fecharModal("modal-modo");
        fecharModal("modal-construcao");
        fecharModal("modal-pais");
        fecharQR();
        fecharModalCand();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    bindEvents();
    applyI18n();
    aplicarTema();
    startCountdown();
    carregarResumoHome();
    var hash = window.location.hash.replace(/^#/, "") || "t-eleicoes";
    ir(hash, false);
});
