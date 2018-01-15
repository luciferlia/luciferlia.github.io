function show(){//将传来的关于模块和测试内容的数据分解成数组
		  cities = new Object();
		 	
		 var rows = document.getElementById("table1").rows.length; 

		 for(var i=2;i<rows+1;i++)
		 {

		 var caseType=$("tr:eq('"+i+"') td:eq(0)").text();
		 var caseStore=$("tr:eq('"+i+"') td:eq(1)").text();
		 var city =[];
		 var strs= new Array(); //定义一数组 
		 cities[caseType] = new Array()
		  strs=caseStore.split("|"); //字符分割 
		  for(var j=0;j<strs.length-1;j++)
		  {
		  var data=strs[j];
		  var strs1= new Array();
		  strs1=data.split(","); 
		   cities[caseType].push(strs1[0]+'/'+strs1[3]);
		  }

		 }
        return cities;
		}
function set_modaul(obj){//将select的值写入到input框里 ，若测试内容选择为入口测试，则版本开始时间为测试开始时间
	//var ne=$(obj).next('input')[0];
	var pv=obj.value;
	//alert(pv);
	//ne.value=pv;
	//var tr=obj.parentNode.parentNode.parentNode;
	if(pv=="入口测试"){
		
		var fir=document.getElementsByName('plan.versionReleasetime');
		var fir1=document.getElementsByName('plan.startTime');
		fir1[0].value=fir[0].value;	
	}
			 
	
	
}
function auto(obj){//计算人力与人数，自动显示结束时间
	
	var penum=document.getElementById('time').value;
		var num=document.getElementsByName('plan.humanCount')[0].value;
		var start=document.getElementsByName('plan.endTime');
          var date2=obj.value;   
          if(penum==null||penum==""||num==null||num==""||date2==null||date2=="")
        	  {
        	  start[0].value="";
        	  }
          else{
        	  
        	  var day2=date2.replace(/\-/gi,"/");
              var day=new Date(day2).getTime();
              if(num==0){
            	  
            	  layer.msg("人力安排不能为空");
              }
              else{
            	  var ll=Math.ceil(penum/num);
            		if(ll==0)
            			{var lu=ll;}
            		else{
            			
            			lu=ll-1;
            		}
            		
            		  var time2=new Date(day+lu*24*60*60*1000);
            		start[0].value=time2.getFullYear()+"-"+(time2.getMonth()+1)+"-"+time2.getDate();  
            	  
              }
          }
        	 
            	           
	}

		 function showt(obj) {//测试内容弹出框
	   var cities=show();
	   //console.log(cities);
		var pv;
		var i;
        var first;
var ss=obj.value;	
        var first=document.getElementById('schoolId');		
	    pv = first.value;
		if (pv == '0')
			return;
		if (typeof (cities[pv]) == 'undefined')
			return;
		if(pv=='拓展测试'||pv=='Menu Tree 遍历')
		{

		
		var ckhtml='<textarea placeholder="请输内容" name="" id="expect" class="layui-textarea" onkeyup="changedouhao(this)"style="width:800px;height:180px;margin-left:10%;margin-top:1%;">'+ss+'</textarea>';	
		$("#choose").html(ckhtml);		
		}
		else{
			
		
		var chkhtml=[];
		var select='<button class="layui-btn layui-btn-normal layui-btn-radius" onclick="showdengji()"style="margin-left:35%;">等级分</button>'+'<button onclick="showxneng()" class="layui-btn layui-btn-normal layui-btn-radius">功能分</button>&nbsp;&nbsp;<input type="checkbox" onclick="selectall()"id="select">全选&nbsp;&nbsp;<input type="checkbox" onclick="cancelall()" id="cancel">取消全选<br/><hr/>';
		chkhtml.push(select);
		for (i = 0; i < cities[pv].length; i++) {
			var modul=cities[pv][i].split('/');
			var deng=modul[1].split('-');
			var dengt='';
			for(n=0;n<deng.length-1;n++)
				{
				var dengd=deng[n].split("_");
				var time=changeTwoDecimal(dengd[1]/60/8);
				if(dengd[0]=='功能'||dengd[0]=='性能'){
					dengt +='<span name="checkedsIdn"><input type="checkbox" name="checkedsId" value="'+dengd[0]+'"/>'+dengd[0]+'&nbsp;</span>';	
					
				}
				else{
					
					dengt +='<span name="checkeddIdn"><input type="checkbox" name="checkeddId" value="'+dengd[0]+'"/>'+dengd[0]+'&nbsp;</span>';
				}
				
				}
			if((i+1)%4==0)
			{
				
				
               chkhtml.push('<span class="mytest" name="choose"><input type="checkbox"  name="checkedId" value="'+modul[0]+'"/>'+modul[0]+'&nbsp;&nbsp;&nbsp;'+dengt+'</span><br/>');
			}
			else{
			chkhtml.push('<span class="mytest" name="choose"><input type="checkbox"name="checkedId" value="'+modul[0]+'"/>'+modul[0]+'&nbsp;&nbsp;&nbsp;'+dengt+'</span>');
			}					
		}
		
		
	    $("#choose").html(chkhtml.join(''));	
	    //将之前选择的模块回显出来
		
		if(ss.indexOf('>>')!=-1){
			var va=ss.split(">>");
			var box=document.getElementsByName("checkedId");
			for(var i=0;i<va.length;i++)
			{
			for(j=0;j<box.length;j++){
	         var checnk=va[i].split("-");
			if(box[j].value==checnk[0])
			{
			box[j].checked=true;
			break;
			}
			}
			}
		}else{
			var va1=ss.split(",");
			var box=document.getElementsByName("checkedId");
			for(var i=0;i<va1.length;i++)
			{
			for(j=0;j<box.length;j++){
	         
			if(box[j].value==va1[i])
			{
			box[j].checked=true;
			break;
			}
			}
			}
			
		}
		
		
		
		
		var xneng=document.getElementsByName('checkedsIdn');
		for(d=0;d<xneng.length;d++){
			$(xneng[d]).hide();
		}
		var dengji=document.getElementsByName('checkeddIdn');
		for(g=0;g<dengji.length;g++){
			$(dengji[g]).hide();
		}
		}
		layer.open({
			type: 1,
			title:'请选择需要的测试模块',
			maxmin: true,
			skin: 'layui-layer-rim', //加上边框
			area: ['1100px', '310px'], //宽高
			content:$("#choose"),
				btn: ['确定', '取消']
           ,yes: function(){
       //获取选择的模块和选择的等级或功能
                var arrsum=''; 	   

        	   if(pv=='拓展测试'){
        		  var expect=document.getElementById('expect').value;
        		  arrsum='拓展测试('+expect+')-->>';
        	   }
        	   else if(pv=='Menu Tree 遍历'){
         		  var expect=document.getElementById('expect').value;
         		  arrsum='Menu Tree 遍历('+expect+')-->>';
         	   }
        	   else{
        	var spans=document.getElementsByName('choose');
        	var arrs='';
        	
        	for(l=0;l<spans.length;l++)
        		{
        		var moduljson="";
        		var dengjson="";
        		var xnengjson="";
        		$(spans[l]).find('input:checkbox[name=checkedId]:checked').each(function(i){
        			moduljson=moduljson+$(this).val();
    				
    			});
        		$(spans[l]).find('input:checkbox[name=checkeddId]:checked').each(function(i){
        			dengjson=dengjson+$(this).val()+",";
    				
    			});
        		$(spans[l]).find('input:checkbox[name=checkedsId]:checked').each(function(i){
        			xnengjson=xnengjson+$(this).val()+",";
    				
    			});
        		if(moduljson==null||moduljson=="") {continue;}
        		arrs=moduljson+'-'+dengjson+'-'+xnengjson+'>>';
        		arrsum +=arrs;
        		}
	
	}
	
	
	
	//统计用时和用例条数的
	
	var rows = document.getElementById("table1").rows.length; 
	 var sum=0;
	 var time=0;
	 var tt=obj.parentNode;
	 var tr=tt.parentNode;
	  var va=arrsum.split(">>");
	 for(var i=1;i<rows;i++)
	 {
	 var caseStore=$("tr:eq('"+i+"') td:eq(1)").text();
	 var city =[];
	 var strs= new Array(); //定义一数组 
	  strs=caseStore.split("|"); //字符分割 
	  for(k=0;k<va.length;k++){
	  for(var j=0;j<strs.length-1;j++)
	  {
	
		  var strs1=strs[j].split(",");//分解字段获取测试模块
		  
		  var checnk=va[k].split("-");//分解字符获得测试模块
		 // alert(checnk[0]);
		  if(checnk[0]==strs1[0])
		  {		
			 
			 if(checnk[1].length==0 && checnk[2].length==0){
				 sum +=parseInt(strs1[1]);
				  time +=parseFloat(strs1[2]); 	
				 
			 }
			 else if(checnk[1].length!=0 && checnk[2].length==0){
				 //分解等级，并和里面的匹配
				
			var pdeng=checnk[1].split(",");
			var dengg=strs1[3].split('-');
			for(p=0;p<pdeng.length-1;p++)
				{
				for(e=0;e<dengg.length;e++){
					var denggs=dengg[e].split('_');
					
					if(pdeng[p]==denggs[0])
					{
					      
						 sum +=parseInt(strs1[1]);
						 
						 time +=parseFloat(denggs[1]/480);
					}
				}
				
				}
			 
			 
			 }
			 else{
				
				 var xdeng=checnk[2].split(",");
					var denggx=strs1[3].split('-');
					for(px=0;px<xdeng.length-1;px++)
						{
						for(ex=0;ex<denggx.length;ex++){
							var denggsx=denggx[ex].split('_');
							if(xdeng[px]==denggsx[0])
							{ 
								 sum +=parseInt(strs1[1]);
								 time +=parseFloat(denggsx[1]/480);
							}
						}
						
						}
					 
				 
			 }
			  break;
	}}
	  }
	 }
	 
	 
	 
	 
	 var sumall=document.getElementById('studentId');
	 
	  $(sumall).val(sum);
	  var x=parseInt(time);
	  var y=time-x;
	  var m;
	 if(time>0&&time<=0.7)
		  {
		  m=0.5;
		  
		  }else if(time==0)
			  {
			  m=0;
			 
			  }else if(time>0.7&&y>0.7){
				  m=x+1;
			  }else if(time>0.7&&y>0.2&&y<=0.7)
				  {
				  m=x+0.5;
				  }
			  else{
				  m=x;
			  }
		  var time=document.getElementById('time');
	    $(time).val(m);
	 
        	//alert(arrsum);
        	console.log(arrsum);
                         layer.closeAll();
				obj.value=arrsum;
			
           }
           ,btn2: function(){
           layer.closeAll();
          }					
		  });
		
	}
	
		 function showdengji(){
			
			 var dengji=document.getElementsByName('checkeddIdn');
				for(g=0;g<dengji.length;g++){
					$(dengji[g]).show();
				} 
				 var xneng=document.getElementsByName('checkedsIdn');
					for(d=0;d<xneng.length;d++){
						$(xneng[d]).hide();
					}
					var select=document.getElementsByName('checkedsId');
					for(i=0;i<select.length;i++)
						{
						
					select[i].checked=false;
						}
		 }
		 function showxneng(){
			 var xneng=document.getElementsByName('checkedsIdn');
				for(d=0;d<xneng.length;d++){
					$(xneng[d]).show();
				}	 
				 var dengji=document.getElementsByName('checkeddIdn');
					for(g=0;g<dengji.length;g++){
						$(dengji[g]).hide();
					}
					var select=document.getElementsByName('checkeddId');
					for(i=0;i<select.length;i++)
						{
						
					select[i].checked=false;
						}
		 }
	function sount(obj){//input框只能输入2为小数的数字
		 obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符     
		      obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的     
		      obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");    
		      obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入2个小数     
		      if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额    
		       obj.value= parseFloat(obj.value);    
		      }    
		}
		function sounts(obj){//input框只能输入整数
		
			obj.value=obj.value.replace(/\D/g,'');
		}
		function sounts1(obj){//input框只能输入整数
			
			obj.value=obj.value.replace(/\D/g,'');
			var tr=obj.parentNode.parentNode;
			var pnum= $(tr).children('td').eq(7).children('input').val();
			if(obj.value<pnum){
				obj.value="";
				layer.msg("样机数不能小于人数");
			}
			
			
		}
		
		function selectall(){
			var cancel=document.getElementById('cancel');
			var select=document.getElementsByName('checkedId');
			for(i=0;i<select.length;i++)
				{
				
			select[i].checked=true;
				}
			
			cancel.checked=false;
		}
		
		function cancelall(){
			var select=document.getElementById('select');
			var cancel=document.getElementsByName('checkedId');
			for(i=0;i<cancel.length;i++)
				{
			
				cancel[i].checked=false;
				}
			select.checked=false;
		}
		function changeTwoDecimal(x){
			var f_x = parseFloat(x);  
				if (isNaN(f_x))  
				{  
					s_x=0; 
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
		
	