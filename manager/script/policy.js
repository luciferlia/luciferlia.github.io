function show(){//将传来的关于模块和测试内容的数据分解成数组
		  cities = new Object();
		 	
		 var rows = document.getElementById("table1").rows.length; 

		 for(var i=1;i<rows;i++)
		 {

		 var caseType=$("tr:eq('"+i+"') td:eq(0)").text();
		 
		 var caseStore=$("tr:eq('"+i+"') td:eq(1)").text();
		 var caseSel=$("tr:eq('"+i+"') td:eq(2)").text();
		 //alert(get_strlength(caseSel));
		 var city =[];
		 var strs= new Array(); //定义一数组 
		 var strsel= new Array(); //定义一数组 
		 cities[caseType] = new Array()
		  strs=caseStore.split("|"); //字符分割 
		 strsel=caseSel.split(">>>"); //字符分割 
		  for(var j=0;j<strs.length-1;j++)
		  {
		  //var data=strs[j];
		 // var strs1= new Array();
		  var strs1=strs[j].split(","); 
		   cities[caseType].push(strs1[0]+'>>>'+strs1[1]+'>>>'+strs1[2]+'>>>'+strs1[3]+'>>>'+strsel[j]+'>>>'+strs1[4]);
		  }

		 }
        return cities;
		}
function set_modaul(obj){//将select的值写入到input框里 ，若测试内容选择为入口测试，则版本开始时间为测试开始时间
	var ne=$(obj).next('input')[0];
	var pv=obj.value;
	//alert(pv);
	ne.value=pv;
	
	var tr=obj.parentNode.parentNode.parentNode;
	var tdnum=$(tr).find("td").index($(obj.parentNode.parentNode));
	if(tdnum==3){
		$(tr).children('td').eq(4)[0].children[0].value="";
		
	}
	
	if(pv=="入口测试"){
		
		var fir=$(tr).children('td').eq(10)[0].children[0];
		var fir1=$(tr).children('td').eq(2)[0].children[0];
		fir.value=fir1.value;	
	}
	
	 /*var cell= document.getElementById('tablel').rows[0].cells.length;
	 if(cell==16){
      $(tr).children('td').eq(15)[0].children[0].value=1;
		 
	 }	*/
	 changeFlag(obj);
}
function sum(time1,bet){
	var count=1;
	
	var a=time1.replace(/\-/gi,"/");	
	var c=new Date(a).getTime();

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
function auto(obj){//计算人力与人数，自动显示结束时间
	var tr=obj.parentNode.parentNode;
	var penum=$(tr).children('td').eq(6)[0].children[0].value;
		var num=$(tr).children('td').eq(7)[0].children[0].value;
		var start=$(tr).children('td').eq(11)[0].children[0];
          var date2=obj.value;  
          
          if(penum==null||penum==""||num==null||num==""||date2==null||date2=="")
        	  {
        	  start.value="";
        	  }
          else{

              if(num==0){
            	  
            	  layer.msg("人力安排不能为空");
              }
              else{
            	  var ll=Math.ceil(penum/num);
            		if(ll==0||ll==1)
            			{var lu=1;}
            		else{
            			
            			lu=ll-1;
            		}
            		  var time2=sum(date2,lu);
            		start.value=time2;  
            	  
              }
          }
        	 
            	           
	}
function auto1(obj){
	var tr=obj.parentNode.parentNode;
	var penum=$(tr).children('td').eq(6)[0].children[0].value;
		var num=$(tr).children('td').eq(7)[0].children[0].value;
		var start=$(tr).children('td').eq(11)[0].children[0];
          var date2=obj.value;   
          if(penum==null||penum==""||num==null||num==""||date2==null||date2=="")
        	  {
        	  start.value="";
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
            		//alert(lu);
            		  var time2=new Date(day+lu*24*60*60*1000);
            		start.value=time2.getFullYear()+"-"+(time2.getMonth()+1)+"-"+time2.getDate();  
            	  
              }
          }
        	 
            	           
	}

function showt(obj){
	var cities=show();
	console.log(cities);
	var tr=obj.parentNode.parentNode;
	//获取tr的td数
	var tdnum=$(obj).prevAll().length;
	var ss=obj.value;
	//var size=parseInt($('#tablel tr:eq(1) td').size()-1);//获取了td的数目
	var size=parseInt(tr.cells.length-1);
	var first=$(tr).children('td').eq(3)[0].children[0].children[1];
	var pv=first.value;
	var ref=$(obj.parentNode).find('span').text();
	if(pv=='0')
		return;
	if(typeof(cities[pv])=='undefined')
		return;
	if(pv=='拓展测试'||pv=='Menu Tree 遍历')
	{
    if(ss.indexOf('(')!=-1){
    	//回显已选的测试模块和选项
    	var tuo=ss.split("(")[1];
        var tuoq=tuo.split(")")[0];
   var ckhtml='<textarea placeholder="请输内容" name="" id="expect" class="layui-textarea" onkeyup="changedouhao(this,event)"style="width:800px;height:180px;margin-left:10%;margin-top:1%;">'+tuoq+'</textarea>';	
    }
    else{
    	var ckhtml='<textarea placeholder="请输内容" name="" id="expect" class="layui-textarea" onkeyup="changedouhao(this,event)"style="width:800px;height:180px;margin-left:10%;margin-top:1%;"></textarea>';	
	
    }
	$("#choose").html(ckhtml);
	
	
	}else{
		var chkhtml=[];
		var operation='<span id="operation" style="display:none;">'+cities[pv][0].split('>')[4]+'</span>';
		chkhtml.push(operation);
		/*var select='<button class="btn btn-primary" onclick="showdengji()"style="margin-left:35%;">等级分</button>'+'<button onclick="showxneng()" class="btn btn-primary">功能分</button>&nbsp;&nbsp;<input type="checkbox" onclick="selectall()"id="select">全选&nbsp;&nbsp;<input type="checkbox" onclick="cancelall()" id="cancel">取消全选<br/><hr/>';
		if(cities[pv][0].split('>')[4]==1)//如果是只能单选的方式
		{
			chkhtml.push(select);			
		}*/
		for (i = 0; i < cities[pv].length; i++) {
			var p1=cities[pv][i].split('>>>');
			//p1[0]模块名  p1[1]总条数   p1[2]总用时    p1[4] 筛选项   p1[3] 计算方式 p1[5]casestore的id
			//分解筛选项
			var sel='';
			if(p1[4]!=null||p1[4]!=""){			
			var p2=p1[4].split('€');
			
			for(j=0;j<p2.length-1;j++){
				
				var p3=p2[j].split('^');
				//alert(p3[1]);
				var p4=p3[1].split(',');
				var tou='<select class="selectpicker control show-tick" name="sel'+j+'" onChange="justtest(this)"multiple data-live-search="true" data-live-search-placeholder="Search" data-actions-box="true" data-size="8">';
				var end='</select>';
				var opt='';
				for(l=0;l<p4.length-1;l++){
					opt +='<option value="'+p4[l]+'">'+p4[l]+'</option>';
				}
								
				sel +='<li style="line-height:50px;" class="selectop opt" name="selectop"><label>'+p3[0]+'</label>:'+tou+opt+end+'</li>';	
				
			}
			}
			var htls='<span class="mytest" name="choose"><ul class="checksel"><li style="line-height:50px;width:13px;"><input type="checkbox"  name="checkedId" value="'+p1[5]+'" style="margin-top:20px;"/></li><li style="height:50px;"><p class="wrap">'+p1[0]+'</p><label style="display:none;" class="sumtag">'+p1[3]+'</label></li><li style="line-height:50px;width:48px;">&nbsp;&nbsp;'+p1[1]+'条</li><li style="line-height:50px;width:54px;">&nbsp;'+p1[2]+'天&nbsp;</li>'+sel+'</ul></span>';
			
			chkhtml.push(htls);
		
		}
		
		 $("#choose").html(chkhtml.join(''));
		 $('.show-tick').selectpicker('refresh');
		//回显已选的测试模块和选项
		 if(ref!=""||ref!=null){
			 var select=document.getElementsByName('checkedId');
			 var ref1=ref.split('-->>');
			 if(ref1[0].indexOf('€')!=-1){
				 for(r=0;r<ref1.length-1;r++){
					var ref2=ref1[r].split('€');
					for(y=0;y<select.length;y++)
					{
					 var uldom=select[y].parentNode.parentNode;
                   	 var casename=$(uldom).children('li').eq(1).find('p').text();
                   	 if(casename==ref2[0]){//如果匹配到模块
                   		 select[y].checked=true;
                   		 //处理赛选项
                   		 for(z=1;z<ref2.length-1;z++){
                   			 
                   			 var ctype=ref2[z].split('%%')[0];
                   			 for(s=4;s<ref2.length+3;s++){
                   				 var countstype=$(uldom).children('li').eq(s).find('label').text();
                       			 if(ctype==countstype){
                       				 if(ref2[z].split('%%')[1].indexOf(',')!=-1){
                       					 var srr=ref2[z].split('%%')[1].split(",");
                       					 var selc=$(uldom).children('li').eq(s).find('select')[0];
                       					 $(selc).selectpicker('val', srr);
                       					 $(selc).selectpicker('refresh');
                       				 }
                       				 else{
                       					 var selc=$(uldom).children('li').eq(s).find('select')[0];
                       					 $(selc).selectpicker('val', ref2[z].split('%%')[1]);
                       					 $(selc).selectpicker('refresh'); 
                       				 }
                       			 } 
                   			 }
                   			
                   		 }
                   		 
                   	 }
					}
				 } 
			 }
			 else{
				 //兼容以前的数据格式				
					 //寻找模块名，名字一样的则勾选
					
						for(i=0;i<select.length;i++)
							{
							 var uldom=select[i].parentNode.parentNode;
	                    	 var casename=$(uldom).children('li').eq(1).find('p').text();
	                    	 for(t=0;t<ref1.length-1;t++){
	                    		 if(casename==ref1[t]){
	                    			 select[i].checked=true;
	                    		 }
							}
				 }
				 
			 }
		 }
		 
		
	}
	
	 layer.open({
			type: 1,
			title:'请选择需要的测试模块',
			maxmin: true,
			skin: 'layui-layer-rim', //加上边框
			area: ['1000px', '310px'], //宽高
			content:$("#choose"),
				btn: ['确定', '取消']
        ,yes: function(){
     	   //获值
        	  var arrsum='';
        	  var refernce='',refernces='';
       	   if(pv=='拓展测试'){
       		  var expect=document.getElementById('expect').value;
       		  var arrsums='拓展测试('+expect+')-->>';
       		  arrsum=arrsums.replace(/[\r\n]/g,",");//将换行符转成，，后台分解时注意将null值抛出
       		  //obj.value=arrsum;
       		 $(tr).children('td').eq(5).find('input').val(0);
           	$(tr).children('td').eq(6).find('input').val(1);
           	$(tr).children('td').eq(size).find('input').val('');
       	   }
       	   else if(pv=='Menu Tree 遍历'){
        		  var expect=document.getElementById('expect').value;
        		  var arrsums='Menu Tree 遍历('+expect+')-->>';
        		  arrsum=arrsums.replace(/[\r\n]/g,",");//将换行符转成，，后台分解时注意将null值抛出
        		 // obj.value=arrsum;
        		  $(tr).children('td').eq(5).find('input').val(0);
              	$(tr).children('td').eq(6).find('input').val(1);

              	$(tr).children('td').eq(size).find('input').val('');
        	   }else{
        		   
               	//获取选中的测试模块
               	var select=document.getElementsByName('checkedId');
               	var json={};
               	var arrays=[];
    			for(i=0;i<select.length;i++)
    				{
                     var  flag=select[i].checked;
                     if(flag){//如果模块被选中,则会去获取值
                    	 //获取选中模块的名字
                    	 //ul的DOM
                    	 //获取去计算方式值
                        
                    	 var uldom=select[i].parentNode.parentNode;
                    	 var ids=select[i].value;
                    	 var casename=$(uldom).children('li').eq(1).find('p').text();
                    	 var opr=$(uldom).children('li').eq(1).find('label.sumtag').text();
                    	 //获取筛选条件以及其select的选中值
                    	 var len=$(uldom).find('li.opt').length+4;
                    	 var counttype='';
                    	 var counttypes='';
                    	 json={ids,casename,opr};
                    	for(n=4;n<len;n++){
                    		
                    		var countname=$(uldom).children('li').eq(n).find('label').text();
                    		var selid=$(uldom).children('li').eq(n).find('select').val();//获取选中的option的值
                    		var name='l'+(n-3);
                    		json[name]=countname+'%%'+selid;
                    		counttype +=countname+'%%'+selid+'€';
                    		if(selid!=null){
                    			counttypes +=countname+':'+selid+';';	
                    		}
                    	}
                    	
                    	arrays.push(json);
                    	//arrsum +=casename+'-->>';
                    	refernce +=casename+'€'+counttype+'-->>';
                    	arrsum +=casename+'-'+counttypes+'-->>';
                    	 
                     }
    				}
               	
               	console.log(arrays);
               	$.ajax({
                   type: "POST",
                   url: "getSearchCases", //这里你根据后台地址改
                   data:{"params":JSON.stringify(arrays)},

                   dataType:"json",		
                success: function(data){
                 //返回值，返回总用例条数，总用时，选中的id数
                	//alert(data);
                	var sumtime=0,sumcase=0,idsall='';
                	var str=data.split('>>');
                	for(i=0;i<str.length-1;i++){
                		var strs=str[i].split('-');
                		//strs[1]是条数， strs[2]是小时数 strs[0]=名字+ids
                		sumcase +=parseFloat(strs[1]);
                		sumtime +=parseFloat(strs[2]); 
                		idsall +=strs[0]+'>>'+strs[2]+'-';
                	}
                	//将分钟数转成小时数，并且x.0<l<x.2=x, x.3<l<x.8=x.5  x.9<l=x+1
                	var daytime=sumtime/(60*8);
                	var x=parseInt(daytime);
                	var y=daytime-x;
                	if(daytime>0&&daytime<0.8)
                		{
                		daytime=0.5
                		}else if(daytime>0.8 & daytime<1){
                			daytime=1
                		}else{
                			if(y<0.2){
                				daytime=x;
                			}else if(y>0.2 & y<0.8){
                				daytime=x+0.5;
                			}else{
                				daytime=x+1;
                			}
                		}
                	$(tr).children('td').eq(5).find('input').val(sumcase);
                	$(tr).children('td').eq(6).find('input').val(daytime);
                    // alert(size);
                	$(tr).children('td').eq(size).find('input').val(idsall);

                },
                error:function(e) {
                 alert(e);
                },
               
             });
        	   }     	   
       	obj.value=arrsum;
       	$(obj.parentNode).find('span').text(refernce);
       	autosize.update(obj);
     	   layer.closeAll();}
  ,btn2: function(){
      layer.closeAll();
     }					
	  });
	
	
	
}

		function showdengji(){
			$('.dengji').show();
			$('.gneng').hide();			
			 var gneng=document.getElementsByName('gneng');
			 for(g=0;g<gneng.length;g++){
				 var selele= $(gneng[g]).find('select')[0];
				 for(i=0;i<selele.options.length;i++){
					 selele.options[i].selected=false;
				 }
				 $(selele).selectpicker('refresh');
				}
		} 
		 function showxneng(){
			 $('.dengji').hide();
			 $('.gneng').show();
			 var dengji=document.getElementsByName('dengji');
			 for(g=0;g<dengji.length;g++){
				 var selele= $(dengji[g]).find('select')[0];
				 for(i=0;i<selele.options.length;i++){
					 selele.options[i].selected=false;
				 }
				 $(selele).selectpicker('refresh');
				}
		 }
		 
		 function justtest(obj){
			 var uls=obj.parentNode.parentNode;
			 var lis=obj.parentNode;
			 var result=$($(lis).find('select')[0]).val();			 
			 var ables=true;
			 var tag=$(uls).find('label.sumtag').text();
			 if(parseInt(tag)==1){
				 //如果是单个计算方式，那么点击此select，则另外的 select不可以点击，如果此select的选项全部取消，则其他的可以被选择
				 //首先查询点击后是属于有选择还是一个选择都没有了
			if(result==null||result==""){
				ables=false;
			}
			var x=$(lis).nextAll('li');
			var y=$(lis).prevAll('li');
			for(i=0;i<x.length;i++){
				$(x[i]).find('select').attr('disabled',ables);				
			}
			for(j=0;j<y.length;j++){
				$(y[j]).find('select').attr('disabled',ables);
			}	
			 }
		 }
		 function selall(obj){
			 var lis=obj.parentNode.parentNode.parentNode.parentNode.parentNode;
			 var uls=lis.parentNode;
			 var tag=$(uls).find('label.sumtag').text();
			 if(parseInt(tag)==1){
			 var x=$(lis).nextAll('li');
				var y=$(lis).prevAll('li');
				for(i=0;i<x.length;i++){
					$(x[i]).find('select').attr('disabled',true);				
				}
				for(j=0;j<y.length;j++){
					$(y[j]).find('select').attr('disabled',true);
				}
			 }
		 }
		 function delall(obj){
			 var lis=obj.parentNode.parentNode.parentNode.parentNode.parentNode;
			 var uls=lis.parentNode;
			 var tag=$(uls).find('label.sumtag').text();
			 if(parseInt(tag)==1){
			 var x=$(lis).nextAll('li');
				var y=$(lis).prevAll('li');
				for(i=0;i<x.length;i++){
					$(x[i]).find('select').attr('disabled',false);				
				}
				for(j=0;j<y.length;j++){
					$(y[j]).find('select').attr('disabled',false);
				}
			 }
		 }
		 function savePlan(){
		      var array=[];
		      var a=document.getElementsByName('status');
		      var b=document.getElementsByName('version');
		       var c=document.getElementsByName('pushtime');
		        var d=document.getElementsByName('modaul');
		         var e=document.getElementsByName('test');
		          var f=document.getElementsByName('count');
		          var g=document.getElementsByName('humannum');
		          var h=document.getElementsByName('humancount');
		          var j=document.getElementsByName('pcount');
		          var k=document.getElementsByName('preuse');
		           var l=document.getElementsByName('startime');
		            var m=document.getElementsByName('endtime');
		            var n=document.getElementsByName('remark');
		            var o=document.getElementsByName('Ids');
		            var p=document.getElementsByName('reference');
		             if(document.getElementsByName('policyId').length!=0){
		            	 var x=document.getElementsByName('policyId');
		            	 if(document.getElementsByName('Flag').length!=0){	
		            		  var y=document.getElementsByName('Flag');
		            	 for(i=0;i<a.length;i++)
		             	{	                     
		             	 var status=a[i].value;
		                  var version=b[i].value;
		                   var pushtime=c[i].value;
		                    var modaul=d[i].value;
		                     var test=e[i].value;
		                      var count=f[i].value;
		                      var humannum=g[i].value;
		                      var humancount=h[i].value;
		                      var pcount=j[i].value;
		                      var preuse=k[i].value;
		                       var startime=l[i].value;
		                        var endtime=m[i].value;
		                        var remark=n[i].value;
		                        var policyId=x[i].value;
		                         var Flag=y[i].value;
		                         var Ids=o[i].value;
		                         var reference=$(p[i]).text();
		                         json={status,version,pushtime,modaul,test,count,humannum,humancount,pcount,preuse,startime,endtime,remark,policyId,Flag,Ids,reference};
		                         array.push(json);
		             	}	 
		            	 }else{
		            		 
		            		 for(i=0;i<a.length;i++)
				             	{	                     
				             	 var status=a[i].value;
				                  var version=b[i].value;
				                   var pushtime=c[i].value;
				                    var modaul=d[i].value;
				                     var test=e[i].value;
				                      var count=f[i].value;
				                      var humannum=g[i].value;
				                      var humancount=h[i].value;
				                      var pcount=j[i].value;
				                      var preuse=k[i].value;
				                       var startime=l[i].value;
				                        var endtime=m[i].value;
				                        var remark=n[i].value;
				                        var policyId=x[i].value;
				                        var Ids=o[i].value;
				                        var reference=$(p[i]).text();
				                         json={status,version,pushtime,modaul,test,count,humannum,humancount,pcount,preuse,startime,endtime,remark,policyId,Ids,reference};
				                         array.push(json);
				             	}	 
		            		 
		            	 }
		             }
		             else{
		            	
		            	 var x=document.getElementsByName('planId');
		            	  var y=document.getElementsByName('Flag');
		            	 for(i=0;i<a.length;i++)
			             	{
		            	 var status=a[i].value;
		                 var version=b[i].value;
		                  var pushtime=c[i].value;
		                   var modaul=d[i].value;
		                    var test=e[i].value;
		                     var count=f[i].value;
		                     var humannum=g[i].value;
		                     var humancount=h[i].value;
		                     var pcount=j[i].value;
		                     var preuse=k[i].value;
		                      var startime=l[i].value;
		                       var endtime=m[i].value;
		                       var remark=n[i].value;
		                       var planId=x[i].value;
		                        var Flag=y[i].value;
		                        var Ids=o[i].value;
		                        var reference=$(p[i]).text();
		                        json={status,version,pushtime,modaul,test,count,humannum,humancount,pcount,preuse,startime,endtime,remark,planId,Flag,Ids,reference};
		                        array.push(json);
			             	}
		             }
		      
		      
		        return array;
		   }

		   function isEmptyObject(obj) {
		      for (var key in obj) {
		         return false;
		      }
		      return true;
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
				var p1= $(tr).children('td').eq(8).children('input').val();
				var p2=parseInt(p1)+parseInt(obj.value);
				
				if(parseInt(p2)<parseInt(pnum)){
					
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
		
		

		function delet(vall,param){
layer.confirm('确定删除此条计划?', {icon: 3, title:'提示'}, function(index){
                                layer.close(index);
                               
                             $.ajax( {

       async : false,

       cache : false,

       type : 'POST',

       url :"Plan_deletePlan?id="+vall+"&projectId="+param,// 请求的action路径      href="Plan_deletePlan?id=${planForm.plan.planId }&projectId=${id}"

       success : function(data) { // 请求成功后处理函数。
      if(data=="success"){
      layer.msg("删除成功");
       window.location.reload();
      }else if(data=="fail"){
      	layer.msg("该计划已被分配，不能被删除");
      }
      
       },
        error : function(e) {
           layer.msg('删除失败!',{time:1000});
           window.location.reload();	
         }
       });
								},function(index){ layer.close(index);
								return false;
								});

}
		
		function delete1(obj) {
			layer.confirm('确定删除此行?', {icon: 3, title:'提示'}, function(index){
	                                layer.close(index);
		    	var tr = obj.parentNode.parentNode;
		
		    	 var tbody = tr.parentNode;
		    	 tbody.removeChild(tr);
		    	 layer.msg('删除成功',{time:1000});
		    	 },function(index){ layer.close(index);});		
			
		}
		function input(){
			 var c=document.getElementById("ids");
		      var d=document.getElementById("kkk");
		      d.value=c.value;
			layer.open({
				type : 1,
				title :'导入项目计划',
				skin : 'layui-layer-molv', //加上边框
				area :['400px','300px'], //宽高
				content : $("#importDiv"),
				btn : [ '确定', '取消' ],
				yes : function() {
				$('#updatesub').submit();
				},
				btn2:function(){}
				});
		     
			}
			
			function hidd(){
		       var a=document.getElementById("importDiv");
		      var b=document.getElementById("hid");
		      a.style.display="none";
		      b.style.display="none";
		      }
			
		function delete2(obj) {
			obj.disable=true;
			var tr = obj.parentNode.parentNode;
			var id=$(tr).children('td').eq(13)[0].children[0].value;
		     if(id==""||id==null)
		    	 {
		    	 layer.confirm('确定删除此行?', {icon: 3, title:'提示'}, function(index){
	                                layer.close(index);
		    	 var tbody = tr.parentNode;
		    	 tbody.removeChild(tr); 
		    	 layer.msg('删除成功',{time:1000});
		    	 },function(index){ layer.close(index);});
		    	 
		    	 }
		     else{
		    	 //进入数据库删
		    	 layer.confirm('确定删除此行包括数据?', {icon: 3, title:'提示'}, function(index){
	                                layer.close(index);
		    	// alert(id);
		    	 $.ajax({
		 			type:"post",
		 			url:"deletePolicy?policyId="+id,
		 			success:function(textStatus){
		 				 var tbody = tr.parentNode;
		 		    	 tbody.removeChild(tr);
		 				layer.msg('删除成功',{time:1000});
		 			},
		 			error:function(xhr,status,errMsg){
		 				alert(errMsg);
		 				layer.msg('删除失败',{time:1000});
		 				window.location.reload();	
		 			}
		 		});},function(index){ layer.close(index);});
		 	}
			
			
		}
		function validateFile(target){
			var fileSize=0;
			var name=target.value;

			var strs=name.split("\\");
			var showname=document.getElementById('showname');
			showname.innerHTML=strs[strs.length-1];
			if(!target.files)
			{
			var filePath=target.value;
			var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
			var file=fileSystem.GetFile(filePath);
			fileSize=file.size;
			}else{
			fileSize=target.files[0].size;
			}
			var size=fileSize/1024;
			if(size>9000)
			{
			layer.msg("附件不能大于9M");
			target.value="";

			}
			var name=target.value;
			var fileName=name.substring(name.lastIndexOf(".")+1).toLowerCase();
			if(fileName !="xls" && fileName !="xlsx")
			{
			layer.msg("只能上传excel格式的文件");
			target.value="";

			}
			}		
					function checkfile(){
				
				var file=document.getElementById('file').value;
				if(file==""||file==null)
				{
				layer.msg("请先选择文件");
				return false;
				}
				else{
				//alert("success");
				return true;
				
				}
				}
				
				
				
		function changeFlag(obj){
			var tr = obj.parentNode.parentNode;
			var size=parseInt(tr.cells.length-2);//获取了td的数目
			if($($(tr).children('td').eq(size).find('input')).attr('name')=='Flag'){
				
				$(tr).children('td').eq(size).find('input').val(1);
			}
		}
		function changedouhao(obj,e){ 
			var str=obj.value;
			strs=str.replace(/[\r\n\，\。\？\;\；\、]/g,","); 
			obj.value=strs;
			}
		function checkDate(obj){
			var date1=obj.value;
			
				var tr=obj.parentNode.parentNode;


		var strat=$(tr).children('td').eq(10)[0].children[0];
		var date2=strat.value;
		var day1=date1.replace(/\-/gi,"/");
		var day2=date2.replace(/\-/gi,"/");
		var time1=new Date(day1).getTime();
		var time2=new Date(day2).getTime();
		if(time1<time2)
		{
		obj.value="";
		layer.msg("结束时间不能小于起始时间");

		}else{
		return true;
		}		   

			}
				