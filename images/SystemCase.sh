@echo off
title "���ͨѶ�Զ������Լ�"
echo *************�����Բ�����ʾ*************

md Result
echo "**************�Զ�������************" >Result/Result.txt

echo ��ʼʱ�䣺>>Result/Result.txt
date /t >>Result/Result.txt
time /t >>Result/Result.txt

echo ˵��-------����ǰ�������²�����

COLOR B
echo ��1���ֻ�root
echo ��2���ֻ���ΪӢ��ģʽ
echo ��3��������ʾΪ����˯�߻�����������ʱ��
echo ��4������Ĭ�����뷨ΪAndroidԭ��Ӣ�����뷨
echo ��5������USB����
echo ��6����MTKLogger
echo  (7) ���ֻ��е���_attttachment�ļ���
echo  (8) ��_attttachment�ļ����еı������ݻ�ԭ

:retry

set/p c=����������������������������������ȷ���Ƿ����������ý��в��� ��Y/N����
if "%c%" =="Y" goto Y
if "%c%" =="y" goto Y
if "%c%" =="N" goto N
if "%c%" =="n" goto N

:Y

echo ���������ļ�
adb push NoteBookTest.jar /data/local/tmp

adb shell mkdir -p /sdcard/notebook
adb shell mkdir -p /sdcard/notebook/Failed

adb push BrowserTest.jar /data/local/tmp

adb shell mkdir -p /sdcard/browser
adb shell mkdir -p /sdcard/browser/Failed

echo ��ʼ����
echo 1,���±�����
echo 2,���������
set /p val=������Ҫ���Եı�ţ�
set /p tmp=������Ҫ���ԵĴ�����


:start

echo %val%|findstr /be "[0-9]*" >nul && goto end || goto start
:end
if %val% geq 0  (if %val% leq 27 (goto %val%) ELSE (goto start)) ELSE goto start

:1

for /L %%i in (1 1 %tmp%) do (
	echo ��%%i�β��ԣ�>> Result/Result.txt
   	set tmp=%time:~0,2%��%time:~3,2%��%time:~6,2%��
   	echo %tmp% >> Result/Result.txt
echo �������������±����� >>Result/Result.txt
echo Message_033: >>Result/Result.txt
adb shell uiautomator runtest NoteBookTest.jar -c com/uiautomator/Test#noteBookTest >>Result/Result.txt


)
goto finish

:2

for /L %%i in (1 1 %tmp%) do (
	echo ��%%i�β��ԣ�>> Result/Result.txt
   	set tmp=%time:~0,2%��%time:~3,2%��%time:~6,2%��
   	echo %tmp% >> Result/Result.txt
echo ����������������� >>Result/Result.txt
echo Message_033: >>Result/Result.txt
adb shell uiautomator runtest BrowserTest.jar -c com/uiautomator/Test#galleryTest >>Result/Result.txt


)
goto finish


:finish
adb pull /sdcard/notebook/ Images\
adb pull /sdcard/browser/ Images\
pause