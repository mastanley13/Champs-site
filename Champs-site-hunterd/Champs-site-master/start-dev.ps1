# Start-Dev.ps1
# Script to start the development server for Champs Dog House website

Write-Host "Starting Champs Dog House development server..." -ForegroundColor Cyan

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "Using npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "Error: npm is not installed or not in the PATH. Please install Node.js and npm." -ForegroundColor Red
    exit 1
}

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path -Path .\node_modules)) {
    Write-Host "Node modules not found. Installing dependencies..." -ForegroundColor Yellow
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error installing dependencies. Please check the error messages above." -ForegroundColor Red
        exit 1
    }
}

# Start the development server
Write-Host "Starting the development server..." -ForegroundColor Green
npm run dev

# This line will only run if npm run dev exits
Write-Host "Development server has stopped." -ForegroundColor Yellow 