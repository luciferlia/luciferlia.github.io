---
layout: post
title: "Page Visibility API"
date: 2018-02-02
tag: JS
categories: jekyll update
---
提高系统性能也是前端一项做药的工作，用户在在系统交互的时候，会有很多操作，但是用户隐藏系统当前页或者不在当前窗口时，有些请求就可以停止了，比如轮询服务器或者动画，实现这种操作的前提是能够检测到用户对系统页面可见，而Page Visibility API(页面可见性API)可以实现。
API由3个部分组成:
1. document.hidden:便是页面是否隐藏的布尔值，页面隐藏包括页面在后台标签中或者浏览器最小化
2. document.visibilityState:表示下列4个可能状态的值：
- 页面在后台标签页中或者浏览器最小化
- 页面在前台标签页中
- 实际页面已经隐藏，但用户可以看到页面的预览
- 页面在屏幕外执行预渲染处理

3.visibilitychange事件：当前文档从可见变为不可见或者从不可见变为可见时触发

```
if(document.hidden||document.msHidden||document.webKitHidden){
    //页面隐藏了
}else{
    //页面未隐藏
}
```
为了在页面从可见变为不可见或者从不可见变为可见时受到通知，可以侦听visibilitychange事件

```
function handleVisibilityChange(){
    var output=document.getElemenetById('output'),msg;
    if(ocument.hidden||document.msHidden||document.webKitHidden){
      msg="Page is now hidden"+(new Date())+"<br/>";  
    }else{
        msg="Page id now visible"+(new Date())+"<br/>";
    }
    output.innerHTML +=msg;
}
//要为两个事件都制定事件处理程序
EventUtil.addHandler(document,"msvisibilitychange",handleVisibilityChange);
EventUtil.addHandler(document,"webkitvisibilitychange",handleVisibilityChange);
```


