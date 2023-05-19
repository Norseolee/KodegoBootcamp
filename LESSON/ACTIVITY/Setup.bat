echo off
cls
title Setup Web Folder
echo Welcome!
echo Creating Folders...
mkdir home
cd home
type nul > readme.txt
cd ..
mkdir about
echo Creating index.html
type nul > index.html
Echo Success!
pause
//make a batch file that create two (home and about) and an index.html file
//echo off is to hide commands and location
//cls to clear commands