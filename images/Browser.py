#improt package
import random
import sys,time,datetime,os
from com.android.monkeyrunner import MonkeyRunner as mr, MonkeyDevice as md, MonkeyImage as mi
#connect device
device = mr.waitForConnection()
mr.sleep(3)

#Browser_055
print "Browser_055 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open baidu
print "open baidu"
device.touch(249,117,"DOWN_AND_UP")
mr.sleep(3)
device.type('www.baidu.com')
mr.sleep(3)
device.touch(670,1117,"DOWN_AND_UP")
mr.sleep(3)
#Search asd
device.touch(131,495,"DOWN_AND_UP")
mr.sleep(3)
device.type('asd')
mr.sleep(3)
device.touch(616,210,"DOWN_AND_UP")
mr.sleep(3)
#Find from web
print "Find from web"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,838,"DOWN_AND_UP")
mr.sleep(3)
device.type('asd')
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_055-1.png','png')
mr.sleep(3)
#Search Next
print "Search Next"
device.touch(680,111,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_055-2.png','png')
mr.sleep(3)
#Search Next
print "Search Next"
device.touch(680,111,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_055-3.png','png')
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_BACK")
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_055 finish"

#Browser_057
print "Browser_057 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open baidu
print "open baidu"
device.touch(249,117,"DOWN_AND_UP")
mr.sleep(3)
device.type('www.baidu.com')
mr.sleep(3)
device.touch(670,1117,"DOWN_AND_UP")
mr.sleep(3)
#share baidu
print "share baidu"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,757,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_057-1.png','png')
mr.sleep(3)
#share baidu by sms
print "share baidu by sms"
device.touch(378,850,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_057-2.png','png')
mr.sleep(3)
#exit sms
print "exit sms"
device.press("KEYCODE_BACK")
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.touch(573,725,"DOWN_AND_UP")
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_057 finish"

#Browser_064
print "Browser_064 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open history
print "open history"
for a in range(10):
    device.press("KEYCODE_MENU")
    mr.sleep(3)
    device.touch(354,1035,"DOWN_AND_UP")
    mr.sleep(3)
    device.touch(361,196,"DOWN_AND_UP")
    mr.sleep(3)
    device.touch(349,305,"DOWN_AND_UP")
    mr.sleep(3)
    y=random.randrange(417,1089)
    device.touch(354,y,"DOWN_AND_UP")
    mr.sleep(3)
    #save Screenshot
    print "save Screenshot "+str(a+1)+""
    result=device.takeSnapshot()
    result.writeToFile('D:/images/Browser_064'+str(a+1)+'.png','png')
    mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_064 finish"

#Browser_066
print "Browser_066 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open history
print "open history"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
device.touch(361,196,"DOWN_AND_UP")
mr.sleep(3)
device.touch(349,305,"DOWN_AND_UP")
mr.sleep(3)
#delete one history
print "delete one history"
device.drag((354,434),(354,434),5)
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_064-1.png','png')
mr.sleep(3)
#delete
device.touch(354,870,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_064-2.png','png')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_066 finish"

#Browser_071
print "Browser_071 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open bookmark
print "open bookmark"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
#choose one bookmark
device.drag((168,469),(168,469),5)
mr.sleep(3)
#open in new label page
device.touch(354,442,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_071.png','png')
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_071 finish"

#Browser_072
print "Browser_072 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open bookmark
print "open bookmark"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
#choose one bookmark
print "choose one bookmark"
device.drag((168,469),(168,469),5)
mr.sleep(3)
#redact bookmark
print "redact bookmark"
device.touch(354,539,"DOWN_AND_UP")
mr.sleep(3)
#write something
device.type('tegjya')
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_072-1.png','png')
mr.sleep(3)
#abolish write
print "abolish write"
device.touch(181,688,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_072-2.png','png')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_072 finish"

#Browser_073
print "Browser_073 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open bookmark
print "open bookmark"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
#choose one bookmark
print "choose one bookmark"
device.drag((168,469),(168,469),5)
mr.sleep(3)
#redact bookmark
print "redact bookmark"
device.touch(354,539,"DOWN_AND_UP")
mr.sleep(3)
#write something
device.type('tegjya')
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_073-1.png','png')
mr.sleep(3)
#save write
print "save write"
device.touch(539,688,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_073-2.png','png')
mr.sleep(3)
#open this bookmark
print "open this bookmark"
device.touch(168,469,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_073-3.png','png')
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_073 finish"

#Browser_079
print "Browser_079 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open bookmark
print "open bookmark"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
#choose one bookmark
print "choose one bookmark"
device.drag((168,469),(168,469),5)
mr.sleep(3)
#Add to Home Screen
print "Add to Home Screen"
device.touch(351,635,"DOWN_AND_UP")
mr.sleep(3)
device.press("KEYCODE_HOME")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_079-1.png','png')
mr.sleep(3)
#open shortcut
print "open shortcut"
device.touch(448,845,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_079-2.png','png')
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_079 finish"

#Browser_081
print "Browser_081 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open bookmark
print "open bookmark"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
#choose one bookmark
print "choose one bookmark"
device.drag((168,469),(168,469),5)
mr.sleep(3)
#copy URL
print "copy URL"
device.touch(351,825,"DOWN_AND_UP")
mr.sleep(3)
device.press("KEYCODE_HOME")
mr.sleep(3)
#into sms
print "into sms"
device.startActivity(component='com.android.mms/com.android.mms.ui.ConversationList')
mr.sleep(3)
#new sms
print "new SMS"
device.touch(508,100,"DOWN_AND_UP")
mr.sleep(3)
#input URL
print "input URL"
device.press("KEYCODE_BACK")
mr.sleep(3)
device.drag((283,1108),(283,1108),2)
mr.sleep(1)
device.touch(96,1029,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_081.png','png')
mr.sleep(3)
#exit sms
print "exit sms"
device.press("KEYCODE_BACK")
mr.sleep(3)
device.touch(573,725,"DOWN_AND_UP")
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
#exit Browser
print "exit Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_081 finish"

#Browser_082
print "Browser_082 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open bookmark
print "open bookmark"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
#choose one bookmark
print "choose one bookmark"
device.drag((168,469),(168,469),5)
mr.sleep(3)
#Set as Homepage
print "Set as Homepage"
device.touch(354,1017,"DOWN_AND_UP")
mr.sleep(2)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_082-1.png','png')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
#open Homepage
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,361,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_082-2.png','png')
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_082 finish"

#Browser_084
print "Browser_084 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open bookmark
print "open bookmark"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(354,1035,"DOWN_AND_UP")
mr.sleep(3)
#Saved pages
print "Saved pages"
device.touch(593,199,"DOWN_AND_UP")
mr.sleep(3)
#delete one Saved pages
print "delete one Saved pages"
device.drag((157,243),(157,243),5)
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_084-1.png','png')
mr.sleep(3)
#delete
device.touch(354,680,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_084-2.png','png')
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_084 finish"

#Browser_091
print "Browser_091 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(1)
#open new label page
print "open new label page"
for b in range(15):
    #add new pages
    print "add new pages "+str(b+1)
    device.touch(450,1146,"DOWN_AND_UP")
    mr.sleep(1)
    device.touch(450,117,"DOWN_AND_UP")
    mr.sleep(1)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_091-1.png','png')
device.drag((400,959),(400,400))
mr.sleep(1)
device.touch(450,1146,"DOWN_AND_UP")
mr.sleep(1)
device.touch(450,117,"DOWN_AND_UP")
mr.sleep(1)
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_091-2.png','png')
device.press("KEYCODE_BACK")
mr.sleep(1)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_091 finish"

#Browser_099&104
print "Browser_099 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
for c in range(5):
    #open and download
    print "open and download"
    device.touch(309,118,"DOWN_AND_UP")
    mr.sleep(3)
    device.type('http://42.96.171.2/download.jsp?dir=text&name=Text.txt')
    mr.sleep(3)
    device.touch(667,1121,"DOWN_AND_UP")
    mr.sleep(3)
    #save Screenshot
    print "save Screenshot"
    result=device.takeSnapshot()
    result.writeToFile('D:/images/Browser_099.png','png')
    device.press("KEYCODE_BACK")
    mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_099 finish"

#Browser_108
print "Browser_108 start"
#enter Browser
print "enter Browser"
device.startActivity(component='com.android.browser/com.android.browser.BrowserActivity')
mr.sleep(3)
#open fly mode
print "open fly mode"
device.drag((358,20),(358,785))
mr.sleep(3)
device.drag((358,20),(358,785))
mr.sleep(3)
device.touch(133,673,"DOWN_AND_UP")
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.touch(73,613,"DOWN_AND_UP")
mr.sleep(3)
#save Screenshot
print "save Screenshot"
result=device.takeSnapshot()
result.writeToFile('D:/images/Browser_108.png','png')
mr.sleep(3)
#close fly mode
print "close fly mode"
device.drag((358,20),(358,785))
mr.sleep(3)
device.drag((358,20),(358,785))
mr.sleep(3)
device.touch(133,673,"DOWN_AND_UP")
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(3)
device.press("KEYCODE_BACK")
mr.sleep(10)
device.press("KEYCODE_BACK")
mr.sleep(3)
#exit Browser
print "exit Browser"
device.press("KEYCODE_MENU")
mr.sleep(3)
device.touch(454,554,"DOWN_AND_UP")
mr.sleep(3)
device.touch(354,709,"DOWN_AND_UP")
mr.sleep(3)
print "Browser_108 finish"


