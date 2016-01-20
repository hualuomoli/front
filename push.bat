@echo off

:: commit message
set /p message=Please Input message
echo.
if '%message%' == '' then
set message=add

:: password
set /p password=Please Input Password:
echo.
if '%password%' == '' then
set password=%git_password%

:: git 
git add *
git commit -m %message%
git push --all --progress http://hualuomoli:%password%@github.com/hualuomoli/front

pause