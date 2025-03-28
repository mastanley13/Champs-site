# Navigate to the project directory
$projectPath = Join-Path -Path $PSScriptRoot -ChildPath "Champs-site-hunterd\Champs-site-master"
Write-Host "Attempting to navigate to: $projectPath"

# Try to navigate to the project directory
try {
    Set-Location -Path $projectPath -ErrorAction Stop
    Write-Host "Successfully navigated to: $((Get-Location).Path)"
} catch {
    Write-Host "Error: Could not navigate to project directory"
    Write-Host "Error details: $_"
    Exit 1
}

# Check if package.json exists
if (Test-Path "package.json") {
    Write-Host "Found package.json, starting development server..."
    npm run dev
} else {
    Write-Host "Error: package.json not found in current directory"
    Write-Host "Current location: $((Get-Location).Path)"
    Write-Host "Please make sure you're running this script from the root project directory"
    Exit 1
} 