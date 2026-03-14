// ==================== MAPA MUNDIAL ====================

let worldPartiesData = null;

// Carregar dados dos partidos mundiais
async function loadWorldParties() {
    try {
        const response = await fetch('data/world-parties.json');
        worldPartiesData = await response.json();
        console.log('✅ Dados dos partidos mundiais carregados');
    } catch (error) {
        console.error('❌ Erro ao carregar partidos mundiais:', error);
    }
}

// Calcular afinidade com partido
function calculatePartyMatch(userPosition, partyPosition) {
    // 1. Normalizar a escala do utilizador (de -70/+70 para -7/+7)
    // 2. Multiplicar o eixo económico por -1 para corrigir a inversão das perguntas do mundo
    const normalizedUserEcon = (userPosition.economic / 10) * -1; 
    const normalizedUserSoc = (userPosition.social / 10);

    // Calcular a diferença entre o utilizador e o partido
    const economicDiff = Math.abs(normalizedUserEcon - partyPosition.economic);
    const socialDiff = Math.abs(normalizedUserSoc - partyPosition.social);
    
    const totalDiff = economicDiff + socialDiff;
    
    // maxDiff = 20 (diferença máxima possível de 10 em cada eixo)
    const maxDiff = 20; 
    
    const similarity = 100 - (totalDiff / maxDiff) * 100;
    return Math.max(0, Math.min(100, similarity));
}

// Coordenadas dos países no mapa (x, y em %)
const countryPositions = {
  usa: { x: 15, y: 25 },
  canada: { x: 18, y: 18 },
  mexico: { x: 15, y: 35 },
  uk: { x: 48, y: 22 },
  france: { x: 50, y: 28 },
  germany: { x: 52, y: 24 },
  italy: { x: 53, y: 32 },
  portugal: { x: 46, y: 32 },
  argentina: { x: 30, y: 70 },
  chile: { x: 28, y: 68 },
  uruguay: { x: 32, y: 68 },
  australia: { x: 82, y: 68 },
  newzealand: { x: 88, y: 75 },
  japan: { x: 85, y: 32 },
  southkorea: { x: 83, y: 30 }
};

// URLs das bandeiras
const countryFlags = {
  usa: 'https://flagcdn.com/w80/us.png',
  canada: 'https://flagcdn.com/w80/ca.png',
  mexico: 'https://flagcdn.com/w80/mx.png',
  uk: 'https://flagcdn.com/w80/gb.png',
  france: 'https://flagcdn.com/w80/fr.png',
  germany: 'https://flagcdn.com/w80/de.png',
  italy: 'https://flagcdn.com/w80/it.png',
  portugal: 'https://flagcdn.com/w80/pt.png',
  argentina: 'https://flagcdn.com/w80/ar.png',
  chile: 'https://flagcdn.com/w80/cl.png',
  uruguay: 'https://flagcdn.com/w80/uy.png',
  australia: 'https://flagcdn.com/w80/au.png',
  newzealand: 'https://flagcdn.com/w80/nz.png',
  japan: 'https://flagcdn.com/w80/jp.png',
  southkorea: 'https://flagcdn.com/w80/kr.png'
};

// Renderizar mapa mundial
function renderWorldMap() {
    console.log('🗺️ Renderizando mapa mundial...');
    
    if (!worldPartiesData) return;
    
    const mapContainer = document.querySelector('.world-map-container');
    if (!mapContainer) return;
    
    // Limpar container
    mapContainer.innerHTML = '';
    
    // Criar div de mapa ao invés de SVG
    const mapDiv = document.createElement('div');
    mapDiv.className = 'world-map';
    mapDiv.style.cssText = `
        position: relative;
        width: 100%;
        height: 500px;
        background: var(--bg-secondary);
        border-radius: 12px;
        overflow: hidden;
    `;
    
    const userPosition = appState.userPosition;
    
    worldPartiesData.countries.forEach(country => {
        const position = countryPositions[country.id];
        if (!position) return;
        
        // Calcular afinidade com cada partido
        const partiesWithMatch = country.parties.map(party => ({
            ...party,
            match: calculatePartyMatch(userPosition, party.position)
        }));
        
        // Ordenar por afinidade
        partiesWithMatch.sort((a, b) => b.match - a.match);
        const topParty = partiesWithMatch[0];
        
        // Criar marker do país
        const marker = document.createElement('div');
        marker.className = 'country-marker';
        marker.style.cssText = `
            position: absolute;
            left: ${position.x}%;
            top: ${position.y}%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        marker.innerHTML = `
            <div class="country-marker-content">
                <img src="${countryFlags[country.id]}" alt="${country.name.pt}" class="country-marker-flag">
                <div class="country-marker-info">
                    <div class="country-marker-party">${topParty.name}</div>
                    <div class="country-marker-match">${Math.round(topParty.match)}%</div>
                </div>
            </div>
        `;
        
        // Adicionar evento de clique
        marker.addEventListener('click', () => showCountryModal(country, partiesWithMatch));
        
        mapDiv.appendChild(marker);
    });
    
    mapContainer.appendChild(mapDiv);
    console.log('✅ Mapa renderizado!');
}

// Renderizar grid de países
function renderCountriesGrid() {
    console.log('🌍 renderCountriesGrid chamado!');
    console.log('worldPartiesData:', worldPartiesData);
    console.log('appState.userPosition:', appState.userPosition);
    
    if (!worldPartiesData) {
        console.error('❌ worldPartiesData é null!');
        return;
    }
    
    // Renderizar mapa primeiro
    renderWorldMap();
    
    const grid = document.getElementById('countries-grid');
    console.log('Grid element:', grid);
    
    if (!grid) {
        console.error('❌ Elemento countries-grid não encontrado!');
        return;
    }
    
    grid.innerHTML = '';
    
    const userPosition = appState.userPosition;
    console.log('User position:', userPosition);
    
    worldPartiesData.countries.forEach(country => {
        console.log('Processando país:', country.name.pt);
        
        // Calcular afinidade com cada partido
        const partiesWithMatch = country.parties.map(party => ({
            ...party,
            match: calculatePartyMatch(userPosition, party.position)
        }));
        
        // Ordenar por afinidade
        partiesWithMatch.sort((a, b) => b.match - a.match);
        const topParty = partiesWithMatch[0];
        
        console.log('Top party:', topParty.name, topParty.match);
        
        // Criar card do país
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <div class="country-card-flag">
                <img src="${countryFlags[country.id]}" alt="${country.name[appState.language]}" class="country-flag-img">
            </div>
            <div class="country-card-name">${country.name[appState.language]}</div>
            <div class="country-card-top-party">
                <div class="country-card-top-party-name">${topParty.name}</div>
                <div class="country-card-top-party-percent">${Math.round(topParty.match)}%</div>
            </div>
        `;
        
        // Adicionar evento de clique
        card.addEventListener('click', () => showCountryModal(country, partiesWithMatch));
        
        grid.appendChild(card);
    });
    
    console.log('✅ Grid renderizado com', worldPartiesData.countries.length, 'países');
}

// Mostrar modal com ranking do país
function showCountryModal(country, partiesWithMatch) {
    const modal = document.getElementById('country-modal');
    const flag = document.getElementById('country-flag');
    const name = document.getElementById('country-name');
    const ranking = document.getElementById('country-ranking');
    
    // Preencher conteúdo
    flag.textContent = country.flag;
    name.textContent = country.name[appState.language];
    
    // Renderizar ranking
    ranking.innerHTML = '';
    partiesWithMatch.forEach((party, index) => {
        const item = document.createElement('div');
        item.className = 'party-rank-item';
        item.style.borderLeftColor = party.color || '#00c781';
        
        item.innerHTML = `
            <div class="party-rank-position">${index + 1}º</div>
            <div class="party-rank-info">
                <div class="party-rank-name">${party.name}</div>
                <div class="party-rank-position-text">
                    Econ: ${party.position.economic > 0 ? '+' : ''}${party.position.economic} | 
                    Social: ${party.position.social > 0 ? '+' : ''}${party.position.social}
                </div>
            </div>
            <div class="party-rank-percent">${Math.round(party.match)}%</div>
        `;
        
        ranking.appendChild(item);
    });
    
    // Mostrar modal
    modal.classList.add('active');
}

// Fechar modal
function closeCountryModal() {
    const modal = document.getElementById('country-modal');
    modal.classList.remove('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Carregar dados
    loadWorldParties();
    
    // Botão para abrir mapa mundial
    const worldMapBtn = document.getElementById('world-map-btn');
    if (worldMapBtn) {
        worldMapBtn.addEventListener('click', () => {
            showScreen('world-map-screen');
            renderCountriesGrid();
        });
    }
    
    // Botão voltar
    const backBtn = document.getElementById('back-to-results');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            showScreen('results-screen');
        });
    }
    
    // Fechar modal ao clicar no X
    const closeBtn = document.querySelector('.country-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCountryModal);
    }
    
    // Fechar modal ao clicar fora
    const modal = document.getElementById('country-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCountryModal();
            }
        });
    }
});