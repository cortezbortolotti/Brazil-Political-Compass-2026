# Political Compass Brasil 2026

Um questionário interativo para descobrir seu posicionamento político e comparar com candidatos das eleições de 2026.

## 📁 Estrutura do Projeto

```
political-compass-brasil-2026/
├── index.html           # Página principal com 3 telas (inicial, perguntas, resultados)
├── styles.css           # Estilos responsivos e modernos
├── app.js              # Lógica da aplicação
└── data/
    ├── questions.json   # Perguntas do questionário (a ser populado)
    └── candidates.json  # Dados dos candidatos (a ser populado)
```

## 🚀 Funcionalidades Implementadas

### ✅ Tela Inicial
- Layout clean e informativo
- Descrição do propósito do projeto
- Cards informativos (60 questões, posicionamento, candidatos)
- Botão "Começar" para iniciar o teste

### ✅ Tela de Perguntas
- Barra de progresso visual (X / 60)
- Sistema de navegação (Anterior/Próxima)
- 5 opções de resposta:
  - Concordo Totalmente (+2)
  - Concordo (+1)
  - Neutro (0)
  - Discordo (-1)
  - Discordo Totalmente (-2)
- Validação de resposta antes de avançar
- Navegação entre perguntas já respondidas

### ✅ Tela de Resultados
- Placeholder "Em construção"
- Botão para refazer o teste

### ✅ Funcionalidades Técnicas
- Carregamento assíncrono dos JSONs via Fetch API
- Gerenciamento de estado centralizado
- Sistema de navegação entre telas
- Armazenamento de todas as respostas
- Design responsivo (mobile, tablet, desktop)

## 📋 Próximas Etapas

### 🔜 A Implementar
1. **Dados**
   - [ ] Adicionar 60 perguntas ao `questions.json`
   - [ ] Adicionar candidatos ao `candidates.json`

2. **Cálculo do Political Compass**
   - [ ] Implementar cálculo do eixo econômico (esquerda-direita)
   - [ ] Implementar cálculo do eixo social (autoritário-libertário)
   - [ ] Normalizar valores para escala do gráfico

3. **Visualização**
   - [ ] Criar gráfico do Political Compass
   - [ ] Plotar posição do usuário
   - [ ] Plotar posições dos candidatos
   - [ ] Adicionar labels e legendas

4. **Matching de Candidatos**
   - [ ] Calcular distância entre usuário e candidatos
   - [ ] Rankear candidatos por proximidade
   - [ ] Exibir top 5 candidatos mais alinhados

## 🎨 Design

- **Paleta de Cores**: Azul profissional (#2563eb) com tons neutros
- **Tipografia**: System fonts para melhor performance
- **Responsividade**: Mobile-first, adaptável a todos os tamanhos de tela
- **Acessibilidade**: Alto contraste, tamanhos de fonte legíveis

## 🔧 Como Usar

1. Abra o `index.html` em um navegador
2. Clique em "Começar"
3. Responda às perguntas (quando adicionadas ao JSON)
4. Veja seus resultados

## 📊 Formato dos Dados

### questions.json
```json
[
  {
    "id": 1,
    "text": "Texto da pergunta",
    "axis": "economic" ou "social",
    "weight": 1
  }
]
```

### candidates.json
```json
[
  {
    "id": 1,
    "name": "Nome do Candidato",
    "party": "Partido",
    "economic": -5 a 5,
    "social": -5 a 5,
    "photo": "url_da_foto"
  }
]
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript ES6+ (Async/Await, Fetch API, Modules)
- Sem dependências externas

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

**Versão**: 0.1.0 (Estrutura inicial)  
**Status**: Em desenvolvimento
