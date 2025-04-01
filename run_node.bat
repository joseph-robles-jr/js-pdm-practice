@echo off
if "%1"=="" (
    echo Please provide a JavaScript file to run.
    exit /b 1
)
"C:\Users\rjosepha\Downloads\node-v22.14.0-win-x64\node-v22.14.0-win-x64\node.exe" "%1"
