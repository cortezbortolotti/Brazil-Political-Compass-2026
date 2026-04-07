# Political Compass Brasil 2026

Aplicacao estatica para descobrir seu posicionamento politico e comparar seu perfil com candidatos do Brasil e partidos de 20 paises.

## Estado atual

- Home com acesso a `Modo Brasil`, `Modo Mundo` e uma pagina provisoria de `Eleicoes`
- Quiz Brasil com `modo rapido` (25 perguntas) e `modo completo` (70 perguntas)
- Quiz Mundo com 30 perguntas
- Resultado Brasil com ranking de afinidade entre candidatos e bussola politica
- Resultado Mundo com grid por pais, mapa interativo e modal com ranking completo
- Tema claro/escuro
- Fallback de dados embutidos para abrir o `index.html` mesmo fora de servidor local

## Estrutura principal

- `index.html`
  Estrutura da interface e marcacao das telas
- `styles.css`
  Estilos extraidos do HTML principal
- `app.js`
  Logica da aplicacao, i18n, quiz, resultados, mapa e navegacao
- `data/questions.json`
  Perguntas do modo Brasil
- `data/world-questions.json`
  Perguntas do modo Mundo
- `data/candidates.json`
  Candidatos do modo Brasil
- `data/world-parties.json`
  Partidos e posicoes do modo Mundo
- `data/data-embed.js`
  Bundle de fallback usado quando o projeto e aberto direto no navegador
- `scripts/build-data-embed.ps1`
  Regenera o fallback local a partir dos JSONs em `data/`

## Como abrir

### Opcao 1

Abra `index.html` diretamente no navegador.

### Opcao 2

Sirva a pasta com um servidor estatico local:

```bash
python -m http.server 8000
```

ou

```bash
npx serve .
```

## Manutencao do fallback offline

Sempre que `questions.json`, `world-questions.json`, `candidates.json` ou `world-parties.json` mudarem, regenere `data/data-embed.js`:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-data-embed.ps1
```

## Observacoes

- O runtime principal do projeto e o trio `index.html` + `styles.css` + `app.js`
- O fallback offline agora espelha os dados reais de `data/`
- O projeto continua dependente de alguns assets externos, como Google Fonts, FlagCDN e Wikimedia/Wikidata
