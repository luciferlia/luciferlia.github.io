@echo off
title "与德通讯自动化测试集"
echo *************完整性测试演示*************

md Result
echo "**************自动化测试************" >Result/Result.txt

echo 开始时间：>>Result/Result.txt
date /t >>Result/Result.txt
time /t >>Result/Result.txt

echo 说明-------测试前请做如下操作：

COLOR B
echo （1）手机root
echo （2）手机改为英文模式
echo （3）设置显示为永不睡眠或调至最大休眠时长
echo （4）更改默认输入法为Android原生英文输入法
echo （5）开启USB调试
echo （6）打开MTKLogger
echo  (7) 向手机中导入_attttachment文件夹
echo  (8) 将_attttachment文件夹中的备份数据还原

:retry

set/p c=…………………………………………请确认是否按照以上设置进行操作 （Y/N）：
if "%c%" =="Y" goto Y
if "%c%" =="y" goto Y
if "%c%" =="N" goto N
if "%c%" =="n" goto N

:Y

echo 建立数据文件
adb push NoteBookTest.jar /data/local/tmp

adb shell mkdir -p /sdcard/notebook
adb shell mkdir -p /sdcard/notebook/Failed

adb push BrowserTest.jar /data/local/tmp

adb shell mkdir -p /sdcard/browser
adb shell mkdir -p /sdcard/browser/Failed

echo 开始测试
echo 1,记事本测试
echo 2,浏览器测试
set /p val=请输入要测试的编号：
set /p tmp=请输入要测试的次数：


:start

echo %val%|findstr /be "[0-9]*" >nul && goto end || goto start
:end
if %val% geq 0  (if %val% leq 27 (goto %val%) ELSE (goto start)) ELSE goto start

:1

for /L %%i in (1 1 %tmp%) do (
	echo 第%%i次测试！>> Result/Result.txt
   	set tmp=%time:~0,2%点%time:~3,2%分%time:~6,2%秒
   	echo %tmp% >> Result/Result.txt
echo 验收用例：记事本测试 >>Result/Result.txt
echo Message_033: >>Result/Result.txt
adb shell uiautomator runtest NoteBookTest.jar -c com/uiautomator/Test#noteBookTest >>Result/Result.txt


)
goto finish

:2

for /L %%i in (1 1 %tmp%) do (
	echo 第%%i次测试！>> Result/Result.txt
   	set tmp=%time:~0,2%点%time:~3,2%分%time:~6,2%秒
   	echo %tmp% >> Result/Result.txt
echo 验收用例：相机测试 >>Result/Result.txt
echo Message_033: >>Result/Result.txt
adb shell uiautomator runtest BrowserTest.jar -c com/uiautomator/Test#galleryTest >>Result/Result.txt


)
goto finish


:finish
adb pull /sdcard/notebook/ Images\
adb pull /sdcard/browser/ Images\
pause