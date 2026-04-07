param(
    [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)

$projectRoot = (Resolve-Path $ProjectRoot).Path
$dataDir = Join-Path $projectRoot 'data'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Read-JsonFile([string]$path) {
    Get-Content $path -Raw -Encoding UTF8 | ConvertFrom-Json
}

$payload = [ordered]@{
    questions = Read-JsonFile (Join-Path $dataDir 'questions.json')
    worldQuestions = Read-JsonFile (Join-Path $dataDir 'world-questions.json')
    candidates = Read-JsonFile (Join-Path $dataDir 'candidates.json')
    worldParties = Read-JsonFile (Join-Path $dataDir 'world-parties.json')
}

$json = $payload | ConvertTo-Json -Depth 100
$output = "window.APP_STATIC_DATA = $json`r`n;"
$target = Join-Path $dataDir 'data-embed.js'

[System.IO.File]::WriteAllText($target, $output, $utf8NoBom)
