param(
  [string]$Message = ""
)

# Simple auto-push script: stages all changes, commits with timestamp (or provided message) and pushes to origin/main
# USAGE: .\git-autopush.ps1 -Message "My commit message"

Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition)
Set-Location -Path ..

$gitStatus = git status --porcelain
if ([string]::IsNullOrWhiteSpace($gitStatus)) {
  Write-Host "Geen wijzigingen om te pushen."
  exit 0
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Auto-commit: $(Get-Date -Format yyyy-MM-dd_HH:mm:ss)"
}

Write-Host "Voeg wijzigingen toe..."
git add -A

Write-Host "Commit met bericht: $Message"
$commit = git commit -m "$Message" 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Host "Commit faalde of er was niets te committen:`n$commit"
} else {
  Write-Host "Commit gelukt.`n$commit"
}

Write-Host "Push naar origin/main..."
$push = git push origin main 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Host "Push mislukt:`n$push"
  exit 1
}

Write-Host "Push succesvol."