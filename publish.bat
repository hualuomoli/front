@echo off

cd build
node r.js -o build.js

cd ..
gulp pro

pause