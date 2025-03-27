#!/bin/bash
# start-dev.sh
# Script to start the development server for Champs Dog House website

echo -e "\033[0;36mStarting Champs Dog House development server...\033[0m"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "\033[0;31mError: npm is not installed. Please install Node.js and npm.\033[0m"
    exit 1
fi

# Display npm version
NPM_VERSION=$(npm --version)
echo -e "\033[0;32mUsing npm version: $NPM_VERSION\033[0m"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "\033[0;33mNode modules not found. Installing dependencies...\033[0m"
    npm install
    
    if [ $? -ne 0 ]; then
        echo -e "\033[0;31mError installing dependencies. Please check the error messages above.\033[0m"
        exit 1
    fi
fi

# Start the development server
echo -e "\033[0;32mStarting the development server...\033[0m"
npm run dev

# This line will only run if npm run dev exits
echo -e "\033[0;33mDevelopment server has stopped.\033[0m" 