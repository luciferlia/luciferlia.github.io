/**
 * 
 */
(function($) {
  var placeholderfriend = {
    focus: function(s) {
      s = $(s).hide().prev().show().focus();
      var idValue = s.attr("id");
      if (idValue) {
        s.attr("id", idValue.replace("placeholderfriend", ""));
      }
      var clsValue = s.attr("class");
   if (clsValue) {
        s.attr("class", clsValue.replace("placeholderfriend", ""));
      }
    }
  }
  //判断是否支持placeholder
  function isPlaceholer() {
    var input = document.createElement('input');
    return "placeholder" in input;
  }
  //不支持的代码
  if (!isPlaceholer()) {
    $(function() {
      var form = $(this);
      //遍历所有文本框，添加placeholder模拟事件
      var elements = form.find("input[type='text'][placeholder]");
      elements.each(function() {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (pValue) {
          if (sValue == '') {
            s.val(pValue);
          }
        }
      });
      elements.focus(function() {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (sValue && pValue) {
          if (sValue == pValue) {
            s.val('');
          }
        }
      });
      elements.blur(function() {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (!sValue) {
          s.val(pValue);
        }
      });
      //遍历所有密码框，添加placeholder模拟事件
      var elementsPass = form.find("input[type='password'][placeholder]");
      elementsPass.each(function(i) {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (pValue) {
          if (sValue == '') {
            //DOM不支持type的修改，需要复制密码框属性，生成新的DOM
            var html = this.outerHTML || "";
            html = html.replace(/\s*type=(['"])?password\1/gi, " type=text placeholderfriend")
              .replace(/\s*(?:value|on[a-z]+|name)(=(['"])?\S*\1)?/gi, " ")
              .replace(/\s*placeholderfriend/, " placeholderfriend value='" + pValue
              + "' " + "onfocus='placeholderfriendfocus(this);' ");
            var idValue = s.attr("id");
            if (idValue) {
              s.attr("id", idValue + "placeholderfriend");
            }
            var clsValue = s.attr("class");
   if (clsValue) {
              s.attr("class", clsValue + "placeholderfriend");
            }
            s.hide();
            s.after(html);
          }
        }
      });
      elementsPass.blur(function() {
        var s = $(this);
        var sValue = s.val();
        if (sValue == '') {
          var idValue = s.attr("id");
          if (idValue) {
            s.attr("id", idValue + "placeholderfriend");
          }
          var clsValue = s.attr("class");
    if (clsValue) {
            s.attr("class", clsValue + "placeholderfriend");
          }
          s.hide().next().show();
        }
      });
    });
  }
  window.placeholderfriendfocus = placeholderfriend.focus;
});

function get_strlength(val) 
{ 
var str = new String(val);  
    var bytesCount = 0;  
    for (var i = 0 ,n = str.length; i < n; i++) {  
        var c = str.charCodeAt(i);  
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
            bytesCount += 1;  
        } else {  
            bytesCount += 2;  
        }  
    }  
    return (bytesCount).toFixed(0)
}



function showmark(obj,event){
   //var tr=obj.parentNode;
   var objwidth=$(obj).width();
	   var event = event || window.event;
	    var x=event.clientX;
	    var y=event.clientY;
	  var text=$(obj).text();
	  var a=document.getElementById('remark');
	a.innerHTML=text;
	if(text.trim().length>2){		
	var index=layer.open({
	            type: 1,
				title:false,
				shade:false,
				closeBtn: 0,
				skin: 'layui-layer-rim', //加上边框
				area: ['300px', 'auto'], //宽高
			    offset:[y-50,x-objwidth-330],
				content:$("#remark")
	});
	/*$(obj).mouseleave(function(){       
      layer.close(index);
                 }); */   
	}
	}
function leaves(obj,event){
	var index=showmark(obj,event);
	alert('sdkjl');
	$(obj).mouseleave(function(){       
	      layer.close(index);
	                 });
}
function addsonly(titles,wid){
	layer.open({
		type : 1,
		title : titles,
		skin : 'layui-layer-molv', //加上边框
		area : [wid,'auto'], //宽高
		content : $("#adds"),
		btn : [ '确定', '取消' ],
		yes : function() {
		 $("#addssub").submit();  
		},
		btn2:function(){}
		});
	}
function editonly(titles,wid){
	layer.open({
		type : 1,
		title : titles,
		skin : 'layui-layer-molv', //加上边框
		area :[wid,'auto'], //宽高
		content : $("#update"),
		btn : [ '确定', '取消' ],
		yes : function() {
		$('#updatesub').submit();
		},
		btn2:function(){}
		});
}

function updateuse(obj){
	var tr=obj.parentNode.parentNode;
	var l1=$(tr).children('td').eq(0).text();
	var l2=$(tr).children('td').eq(1).text();
	var l3=$(tr).children('td').eq(2).text();
	var l4=$(tr).children('td').eq(3).text();
	$('#l1').val(l1);
	$('#l2').val(l2);
	$('#l3').val(l3);
	$('#l4').val(l4);
	editonly('修改','290px');
}
function MergeCell1(tableId, startRow, endRow, col) {

	var tb = document.getElementById(tableId);
	
	var s = tb.rows[1].cells[1].innerHTML;

	if (col >= tb.rows[0].cells.length) {
		return;
	}
	//当检查第0列时检查所有行  
	if (col == 0) {
		endRow = tb.rows.length - 1;
	}
	for (var i = startRow; i < endRow; i++) {
		//subCol:已经合并了多少列  
		var subCol = tb.rows[0].cells.length
				- tb.rows[startRow].cells.length;
		//程序是自左向右合并，所以下一行一直取第0列  
		if (tb.rows[startRow].cells[col - subCol].innerHTML == tb.rows[i + 1].cells[0].innerHTML) {
			//如果相同则删除下一行的第0列单元格  
			tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[0]);
			//更新rowSpan属性  
			tb.rows[startRow].cells[col - subCol].rowSpan = (tb.rows[startRow].cells[col
					- subCol].rowSpan | 0) + 1;
			//当循环到终止行前一行并且起始行和终止行不相同时递归(因为上面的代码已经检查了i+1行，所以此处只到endRow-1)  
			if (i == endRow - 1 && startRow != endRow) {
				MergeCell1(tableId, startRow, endRow, col + 1);
			}
		} else {
			//起始行，终止行不变，检查下一列  
			MergeCell1(tableId, startRow, i, col + 1);
			//增加起始行  
			startRow = i + 1;
		}
	}
	
	$(tb).show();
	//hebing();
}
function pageScroll() {
	//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
	window.scrollBy(0, -100);
	//延时递归调用，模拟滚动向上效果
	scrolldelay = setTimeout('pageScroll()', 100);
	//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
	var sTop = document.documentElement.scrollTop + document.body.scrollTop;
	//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
	if (sTop == 0)
		clearTimeout(scrolldelay);
}



function editR() {
	var a = document.getElementById('t1');
	var b = document.getElementById('t2');
	$(a).hide();
	$(b).show();
}
function cancelR() {
	var a = document.getElementById('t1');
	var b = document.getElementById('t2');
	$(a).show();
	$(b).hide();
}

function changeTwoDecimal(x){
var f_x = parseFloat(x);  
	if (isNaN(f_x))  
	{  
	alert('function:changeTwoDecimal->parameter error');  
	return false;  
	}  
	var f_x = Math.round(x*100)/100;  
	var s_x = f_x.toString();  
	var pos_decimal = s_x.indexOf('.');  
	if (pos_decimal < 0)  
	{  
	pos_decimal = s_x.length;  
	s_x += '.';  
	}  
	while (s_x.length <= pos_decimal + 2)  
	{  
	s_x += '0';  
	}  
	return s_x;  
}
function change(){
	
	var flag=document.getElementById('modulename').value;
	
	var choose=document.getElementsByName('first1');
	var thirdT='EVT,DVT,PVT,MVT,MP,MR';
	var IPD='TR1,TR2,TR3,TR4,TR5,TR6,TR7';
	var html='<option value="请选择阶段">请选择阶段</option>';
	var strT=thirdT.split(",");
	var strI=IPD.split(",");
	if(flag=='3T模板')
	{
	for(i=0;i<strT.length;i++)
	{
	html +='<option value="'+strT[i]+'">'+strT[i]+'</option>';
	}
	for(j=0;j<choose.length;j++)
	{
	choose[j].innerHTML=html;
	}
	}
	else if(flag=='IPD模板')
	{
	for(m=0;m<strI.length;m++)
	{
	html +='<option value="'+strI[m]+'">'+strI[m]+'</option>';
	}
	for(n=0;n<choose.length;n++)
	{
	choose[n].innerHTML=html;
	}
	}
	else {
	for(k=0;k<choose.length;k++)
	{
	choose[k].remove();
	}
	}
	
	}
	function hebing(){
	var tb=document.getElementById('table');
 var row=document.getElementById('table').rows.length;
	for(var j=1;j<row;j++)
     {
       var count=1;
      for(var k=j+1;k<row;k++){
        
       	if ($("#table tr:eq('"+j+"') td:eq(1)").find('p.tet').text() == $("#table tr:eq('"+k+"') td:eq(1)").find('p.tet').text())
		{
        count++;
		if(k==row-1){
			j=k;
			
		}
		}
		
		else{
		j=k-1;break;
		
		}
		
	 }
	for(n=0;n<count-1;n++){
     $("#table tr:eq('"+(j-n)+"') td:eq(1)").remove();    
   }
   
   tb.rows[j-count+1].cells[1].rowSpan=count;
  
     }
	}
	function hebing1(){
	var tb=document.getElementById('table');
 var row=document.getElementById('table').rows.length;
	for(var j=1;j<row;j++)
     {
       var count=1;
      for(var k=j+1;k<row;k++){
        
       	if ($("#table tr:eq('"+j+"') td:eq(1)").find('p.tet').text() == $("#table tr:eq('"+k+"') td:eq(1)").find('p.tet').text()&&$("#table tr:eq('"+j+"') td:eq(2)").text() == $("#table tr:eq('"+k+"') td:eq(2)").text())
		{
        count++;
		if(k==row-1){
			j=k;
			
		}
		}
		
		else{
		j=k-1;break;
		
		}
		
	 }
	for(n=0;n<count-1;n++){
     $("#table tr:eq('"+(j-n)+"') td:eq(2)").remove();    
   }
   
   tb.rows[j-count+1].cells[2].rowSpan=count;
  
     }
	}
	function hebing2(){
	var tb=document.getElementById('table');
 var row=document.getElementById('table').rows.length;
	for(var j=1;j<row;j++)
     {
       var count=1;
      for(var k=j+1;k<row;k++){
        
       	if ($("#table tr:eq('"+j+"') td:eq(0)").text() == $("#table tr:eq('"+k+"') td:eq(0)").text())
		{
        count++;
		if(k==row-1){
			j=k;
			
		}
		}
		
		else{
		j=k-1;break;
		
		}
		
	 }
	for(n=0;n<count-1;n++){
     $("#table tr:eq('"+(j-n)+"') td:eq(0)").remove();    
   }
   
   tb.rows[j-count+1].cells[0].rowSpan=count;
  
     }
	}
	
	
	
	function hebing3(){
	var tb=document.getElementById('table');
 var row=document.getElementById('table').rows.length;
	for(var j=1;j<row;j++)
     {
       var count=1;
      for(var k=j+1;k<row;k++){
        
       	if ($("#table tr:eq('"+j+"') td:eq(2)").text() == $("#table tr:eq('"+k+"') td:eq(2)").text()&&$("#table tr:eq('"+j+"') td:eq(3)").text() == $("#table tr:eq('"+k+"') td:eq(3)").text())
		{
        count++;
		if(k==row-1){
			j=k;
			
		}
		}
		
		else{
		j=k-1;break;
		
		}
		
	 }
	for(n=0;n<count-1;n++){
     $("#table tr:eq('"+(j-n)+"') td:eq(3)").remove();    
   }
   
   tb.rows[j-count+1].cells[3].rowSpan=count;
  
     }
	}
	
	
	
	