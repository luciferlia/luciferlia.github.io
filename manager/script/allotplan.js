function data(){
	var planId = document.getElementById('pid').value;
	var projectId = document.getElementById('id').value;
	var temp;
	 $.ajax({
			type : "POST",
			async:false,
			url : "showUserMsg?id=" + planId+"&projectId="+projectId,
			success : function(data) {
				if (data == "fail") {
					layer.msg("您没有获取人员信息的权限", {
						time : 2000
					});
				} else {
                 temp=data;
					
				}

			},
			error : function(xhx, e, errMsg) {
				alert(errMsg + "   " + "a-first");
			}
		});
	 return temp;
}


function showplan() {

	var start = document.getElementById('l2').value;
	var end = document.getElementById('l3').value;
	var start1 = start.replace(/\-/gi, "/");
	var end1 = end.replace(/\-/gi, "/");
	var time1 = new Date(start1).getTime();
	var time2 = new Date(end1).getTime();
	var gap = time2 - time1;

	var gap1 = gap / (24 * 60 * 60 * 1000);
	var gsp = gap1 + 1;
	var planId = document.getElementById('pid').value;
	var checked = document.getElementById('modul').value;
	var num = document.getElementById('num').value;
	var html = '';
	var person = document.getElementById('l6').parentNode.parentNode;
	if (checked == '1') {
		html += '<tr ><td></td><td><div  class="col-lg-10" style="width:150px;" name="sho">'
				+ '<select name="userId" style="width:130px;" class="selectpicker control show-tick" data-live-search="true" onChange="showtimes(this)"><option value="id"></option></select>'
				+ '</div></td></tr>';

	} else {
		for (i = 0; i < num; i++) {
			html += '<tr ><td></td><td><div  class="col-lg-10"style="width:150px;" name="sho">'
					+ '<select name="userId" style="width:130px;"  class="selectpicker control show-tick" onChange="showtimes(this)" data-live-search="true"><option value="id"></option></select>'
					+ '</div></td></tr>';
		}
			
		}
      $(person).after(html);
      $.ajax({
		type : "POST",
		url : "showUserMsg?id=" + planId+"&tag="+checked,
		success : function(data) {
			
			if (data == "fail") {
				layer.msg("您没有获取人员信息的权限", {
					time : 2000
				});
			} else {

				var sell = document.getElementsByName("userId");

				var str = '<option value="选择人员" data-flag="0" selected="selected">选择人员</option>';

				var ss = data.substr(1, data.length - 2).split(",");
				for (var i = 0; i < ss.length; i++) {
					var name = ss[i].split("_")[0];
					var id = ss[i].split("_")[1];

					var time = ss[i].split("_")[2]; // 人员时间
					var person= ss[i].split("_")[3];// 人员时间
					var personnum=parseFloat(person);
					var percent = time / (gsp*personnum);
					var leve=parseFloat(gsp*personnum-time);
					var times = parseFloat(time) + 1;
					var surplus=changeTwoDecimal(gsp-time);
					if (percent < 1 && percent > 0) {// 人员时间处于部分可用状态为蓝色
						str += '<option value="' + id + '"  data-flag="'
								+ times + '"style="color:#00B2EE;">' + name
								+ '</option>';
					} else if (percent == 0)// 人员时间处于完全可用状态为绿色
					{
						str += '<option value="' + id + '" data-flag="' + times
								+ '" style="color:#32CD32;">' + name
								+ '</option>';
					} else {// 人员时间处于不可用状态为红色
						str += '<option value="' + id + '"data-flag="' + times
								+ '" style="color:red;" disabled="disabled">' + name + '</option>';
					}

				}
				for (k = 0; k < sell.length; k++) {
					sell[k].innerHTML = str;
				}
				for (h = 0; h < sell.length; h++) {
					var ops = sell[h].getElementsByTagName("option");
					var arrOps = Array.prototype.slice.call(ops,0);
					arrOps.sort(function(a, b) {
						return a.attributes["data-flag"].value
								- b.attributes["data-flag"].value;
					});
					sell[h].options.length = 0;
					arrOps.map(function(op) {
						sell[h].appendChild(op);
					});
					//alert(sell[h]);
					$(sell[h]).selectpicker('refresh');
					$(sell[h]).selectpicker('val','选择人员');
				}

			}

		},
		error : function(xhx, e, errMsg) {
			alert(errMsg + "   " + "a-first");
		}
	});
     var divs=document.getElementsByName('sho');
     var table=document.getElementById('table');
     var row=table.rows.length;
     var cell = table.rows[0].cells.length;
     var caseinfo='';
     for(n=0;n<row;n++){
    	 var times=$("#table tr:eq('" + n + "') td:eq(0)").text();
    	 var time=changeTwoDecimal(times/60/8);
    	 var testmodule=$("#table tr:eq('" + n + "') td:eq(1)").text();
    	 
    	 var testnum=$("#table tr:eq('" + n + "') td:eq(2)").text();
    	 caseinfo='&nbsp;&nbsp;总计：<span class="alltime">'+time+'</span>天&nbsp;&nbsp;&nbsp;模块-条数：&nbsp;&nbsp;'+testmodule+'&nbsp;&nbsp;总计：&nbsp;&nbsp;'+testnum;
    	 $(divs[n]).after(caseinfo);
     }
   
}

function submitt(){
	 var user=document.getElementsByName('userId');
     var table=document.getElementById('table');
     var row=table.rows.length;
     var cell = table.rows[0].cells.length;
     var ids=document.getElementById('id').value;
     var planId = document.getElementById('pid').value; 
 	var remark=document.getElementById("l7").value;
 	var tag=document.getElementById("tag").value;
 	var f=true;
 	if(tag==0){//重新分配
 		f=confirm("确认重新分配吗？");
 	}
 	if(f){
 		var array=[];
 		 var json = {};
 		 
 	 	  for(n=0;n<row;n++){
 	     	 var times=$("#table tr:eq('" + n + "') td:eq(0)").text();
 	     	 var time=changeTwoDecimal(times/60/8);
 	     	 var testmodule=$("#table tr:eq('" + n + "') td:eq(1)").text();
 	     	 if(testmodule.indexOf('拓展测试') != -1 ||testmodule.indexOf('Menu Tree 遍历') != -1 ){
 	     		if(testmodule.indexOf('拓展测试') != -1)
 	     		 {testmodule='拓展测试-0,';}
 	     		else{
 	     			
 	     			testmodule='Menu Tree 遍历-0,';
 	     		}
 	     		 
 	     	 }
 	     	 var caseid=$("#table tr:eq('" + n + "') td:eq(3)").text();
 	     	 var username=$(user[n]).val();
 	     	 var td=user[n].parentNode.parentNode;
 	     	 var start=$(td).find('span.starttime').text();
 	     	var end=$(td).find('span.endtime').text();
 	     	json={planId,start,end,remark,time,testmodule,username,caseid};
 	     	array.push(json);
 	 	  }
 	 	  console.log(array);
 	 	 layer.msg('加载中', {
 	 		  icon: 16
 	 		  ,shade:0.5,time:5000000
 	 		});
 	 	 $.ajax({
 			 type: "POST", 
 			 url:"deliverTask?tag="+tag,
 			 data:{"params":JSON.stringify(array)},
 			 dataType:"json", 
 			 success:function(data){
 		 
 				 layer.msg('分配任务成功!',{time:1000});
 				self.location = document.referrer;
 			 }, 
 			 error : function(e) {
 				 layer.msg('分配任务失败!',{time:1000}); 
 				 console.log(e);
 				//window.location.reload();	 
 			 } 
 	 	 });
 	}
 	 

 	  
}
function checkdata(){
	var sell = document.getElementsByName("userId");
	var selecteds='';
	for(i=0;i<sell.length;i++){
		 var v=$(sell[i]).find("option:selected").text();
		 selecteds +=v+",";
	}
	  	if(selecteds.indexOf('选择人员')==-1)
	  		{
	  		
	  		submitt()
	  		}
	  	else{
	  		layer.msg("人员未选择");
	  	}	
		
	
	 
}

function showtimes(obj){// 显示人员时间
	var table=document.getElementById('table');
    var row=table.rows.length;
	var start=document.getElementById('l2').value;
	var end=document.getElementById('l3').value;
	 var start1=start.replace(/\-/gi,"/");
	 var end1=end.replace(/\-/gi,"/");
	 var time1=new Date(start1).getTime();
	  var time2=new Date(end1).getTime();
	  var gap=time2-time1;
	
	  var gap1=gap/(24*60*60*1000);
	  var gsp=gap1+1;//计划时间
	var td=obj.parentNode.parentNode;
	if(document.getElementsByName('times')[0]){
		var timedom=$(td).children('label');
		
			$(timedom).remove();
		
		
	}
	var planId=document.getElementById("pid").value;
	var tag=document.getElementById("modul").value;
	var selected=obj.value;
	var divs=obj.parentNode;
	var td=obj.parentNode.parentNode;
	$.ajax({
	      type: "POST",
	      async:false,
	  	url:"showUserMsg?id="+planId+"&tag="+tag,
	  success: function(data){   
		 //alert(data);
	if(data=="fail"){
		   layer.msg("您没有获取人员信息的权限",{time:2000});
	}else{
		
		     var ss=data.substr(1, data.length-2).split(",");
		     var html="";
		     var alltime=$(td).find('span.alltime').text();
		     for(var i=0;i<ss.length;i++)
		       {	       
		      var name=ss[i].split("_")[0];
		      var id=ss[i].split("_")[1];	
		      var time=ss[i].split("_")[2];
		      var person= ss[i].split("_")[3];// 人员时间
				var personnum=parseFloat(person);
		      if(selected==id)
		    	  {
		    	 var times=changeTwoDecimal(time/personnum);
		    	
		    			 //if(times<=(gsp*personnum)){	    	 
		    	    	 var stime=savenums(times);//个人的已被占用时间
		    	    	 if(stime<=1){
		    	    		 stime=0;
		    	    	 }else{
		    	    		 stime=stime-1;
		    	    	 }
				    	 var startd=new Date(time1+stime*24*60*60*1000);
				    	 var startday=startd.getFullYear()+"-"+(startd.getMonth()+1)+"-"+startd.getDate();
				    	 var startday1=startday.replace(/\-/gi,"/");
				    	 var starttime=new Date(startday1).getTime();
                         
                          var worktime=savenums(parseFloat(alltime)+parseFloat(times));
                          var endday=sum(start,worktime);
                          var endday1=endday.replace(/\-/gi,"/");
                     	 var endtime1=new Date(endday1).getTime();
                     	 if(endtime1>time2){
                     		 layer.msg('该人员任务结束时间大于计划结束时间，你可以选择修改计划或者选择其他人员',{time:3000});
                     	 }
				    	 html='<label name="times">开始时间:  <span class="starttime">'+startday+'</span>&nbsp;&nbsp;结束时间:<span class="endtime">'+endday+'</span>&nbsp;&nbsp;排除双休</label>';
				    	 $(divs).after(html);
		    			 
		    	 }
		    	 
		    	  }
		       }  
		    
	
	  
	  },
	  error : function(xhx,e,errMsg) {
	  alert(errMsg+"   "+"a-first");
	  }
	});
	
}

function showtime(obj,event){
	var temp=data();
	var planId = document.getElementById('pid').value;
	   var event = event || window.event;
	    var x=event.screenX;
	    var y=event.screenY;
	    del_ff(obj);    //清理空格
	   var span=$(obj).find('span.text').text();
	   var start=document.getElementById('l2').value;
		var end=document.getElementById('l3').value;
		 var start1=start.replace(/\-/gi,"/");
		 var end1=end.replace(/\-/gi,"/");
		 var time1=new Date(start1).getTime();
		  var time2=new Date(end1).getTime();
		  var gap=time2-time1;
		
		  var gap1=gap/(24*60*60*1000);
		  var gsp=gap1+1;
	   //alert(span);
	   // console.log(span);
	   
					var ss = temp.substr(1, temp.length - 2).split(",");
					for (var i = 0; i < ss.length; i++) {
						var name = ss[i].split("_")[0];
						var id = ss[i].split("_")[1];
						var time = ss[i].split("_")[2];
						var person= ss[i].split("_")[3];// 人员时间
						var personnum=parseFloat(person);
			          if(span==name){
			        	  var times=changeTwoDecimal(gsp*personnum-time);
			        	  var html='<label>人员可用时间'+times+'天</label>';
			        	  var a=document.getElementById('datatime');
			        	  a.innerHTML=html;
			        	
			        	  var index=layer.open({
				            type: 1,
							title:false,
							shade:false,
							skin: 'layui-layer-rim', //加上边框
							area: '200px', //宽高
						    offset:[y-130,x-370],					 
							content:$("#datatime")
				});
				//执行你弹出后要做的事
				$(obj).mouseout(function(){       
			      layer.close(index); 
			                });    
				
			          }
					
					}

	
}
function del_ff(elem){

	var elem_child = elem.childNodes;

	for(var i=0; i<elem_child.length;i++){

	if(elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue))

	{elem.removeChild(elem_child)

	}

	}

	}
function changeTwoDecimal(x){
	var f_x = parseFloat(x);  
		if (isNaN(f_x))  
		{  
		//alert('function:changeTwoDecimal->parameter error');  
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

function sum(time1,bet){
	var count=1;
	var a=time1.replace(/\-/gi,"/");	
	var c=new Date(a).getTime();
	if(bet==0){
		bet=1;
	}
	var timw1=new Date(time1);	
	var week1=timw1.getDay();//获取开始时间是星期几		
	for(i=0;i<(bet+count-1);i++){
	var s=new Date(a).getTime();
	var s1=new Date(s+i*24*60*60*1000);
	var wk=s1.getDay();	
	if(wk==0||wk==6){
	count++;
	}
	}
	var endtime=s1.getFullYear()+"-"+(s1.getMonth()+1)+"-"+s1.getDate();
	return endtime;
}

function savenums(num){
	var x=parseInt(num);
	var y=num-x;
	if(num<1){
		num=0
	}else{
		if(y<0.9 && y>0){
			num=x;
		}else{
			num=x+1;
		}
	}
	return num;
}

