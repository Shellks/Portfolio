@echo off
:: ============================================
:: Docker Compose Wrapper Script (Windows)
:: ============================================

set "ORIGINAL_DIR=%cd%"
:: Get script directory and set project path
set "SCRIPT_DIR=%~dp0"
set "PROJECT_DIR=%SCRIPT_DIR%"

:: Verify directory exists
if not exist "%PROJECT_DIR%" (
    echo [ERROR] Directory not found: %PROJECT_DIR%
    echo.
    echo Current directory: %cd%
    echo Script directory: %SCRIPT_DIR%
    exit /b 1
)

:: Navigate to project directory
pushd "%PROJECT_DIR%" || (
    echo [ERROR] Failed to access: %PROJECT_DIR%
    exit /b 1
)

:: ----------------------------
:: Command Handling
:: ----------------------------
if "%1"=="" goto :show_usage

if "%1"=="start" (
    echo [INFO] Starting Docker compose build...
    docker compose up --build --detach --quiet-pull
    goto :cleanup
) else if "%1"=="stop" (
    echo [INFO] Stopping Docker compose build...
    docker compose down --remove-orphans
    goto :cleanup
) else if "%1"=="prune" (
    echo [INFO] Cleaning all Docker system...
    docker system prune -af
    goto :cleanup
) else if "%1"=="build" (
    echo [INFO] Building Docker compose without starting services...
    docker compose build --parallel
    goto :cleanup
)  else if "%1"=="fclean" (
    echo [INFO] Stopping Docker compose build...
    docker compose down --remove-orphans
    echo [INFO] Cleaning all Docker system...
    docker system prune -af
    goto :cleanup
) else if "%1"=="status" (
    echo [INFO] Checking Docker compose status...
    docker compose ps
    goto :cleanup
) else if "%1"=="logs" (
    echo [INFO] Displaying Docker compose logs...
    docker compose logs --follow --timestamps
    goto :cleanup
) else if "%1"=="shell" (
    echo [INFO] Opening Docker shell...
    docker exec -it src-angular-1 sh
    goto :cleanup
) else (
	goto :show_usage
)

:show_usage
echo [ERROR] Invalid or missing command
echo.
echo [USAGE] docker.bat [command]
echo.
echo Available commands:
echo   start   - Start services
echo   stop    - Stop services
echo   prune   - Clean Docker system
echo   build   - Build without starting
echo   status  - Show service status
echo   logs    - Display logs
echo   shell   - Open container shell
goto :cleanup

:cleanup
popd
exit /b %errorlevel%