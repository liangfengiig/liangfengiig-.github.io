
			var XZlunbo ={
				initlunbo:function(myImgesData){
				
				//创建控件
				var content = document.getElementById("content");
				
				var leftspan = document.createElement("span");
				leftspan.setAttribute("class",'change left');
				leftspan.id = 'pre';
				leftspan.innerText ="<";
				
				var rightspan = document.createElement("span");
				rightspan.setAttribute("class",'change right');
				rightspan.id='next';
				rightspan.innerText =">";
				
				var contentlist = document.createElement("ul");
				contentlist.setAttribute("class",'contentlist');
				contentlist.id = 'contentlist';
				
				var canvas = document.createElement("div");
				canvas.setAttribute("class",'canvas');
				var contentCircle = document.createElement("ul");
				contentCircle.setAttribute("class",'contentCircle');
				contentCircle.id = 'contentCircle';
				canvas.appendChild(contentCircle);
				
				content.appendChild(leftspan);
				content.appendChild(rightspan);
				content.appendChild(contentlist);
				content.appendChild(canvas);
				
				//
				var contentList=document.getElementById("contentlist");
				var contentCircle=document.getElementById("contentCircle");
				
				for(var i=0;i<myImgesData.imgs.length;i++){
					var myli =document.createElement("li")
					var myImg=document.createElement("img");
					myImg.setAttribute("src",myImgesData.imgs[i].url);
					myImg.setAttribute("title",myImgesData.imgs[i].title);
					myImg.setAttribute("data-index",myImgesData.imgs[i].index);
					myli.appendChild(myImg);
					contentList.appendChild(myli);
					
					var mylic=document.createElement("li");
					contentCircle.appendChild(mylic);
				}
				
				this.start();
			 },
			
			    start:function(){
					var preImg=document.getElementById("pre");
					var nextImg=document.getElementById("next");
					var imgs=document.querySelectorAll("#contentlist li");
					var cricles=document.querySelectorAll("#contentCircle li");
					//
					for(var j=0;j<cricles.length;j++){
						cricles[j].setAttribute("data-index",j)
					}
					
					
					//
					var currentIndex=0;
					//让第一张图片和圆点显示
					showImg();
					
					
					//
					for(var j=0;j<cricles.length;j++){
						cricles[j].addEventListener('click',function(event){
						currentIndex=Number(event.target.getAttribute('data-index'));
						showImg();
						})
					}
					
					//点击上一张
					preImg.addEventListener('click',function(){
						goPre();
					})
					function goPre(){
						currentIndex --;
						if(currentIndex==-1){
							currentIndex=imgs.length-1;
						}
						showImg();
					}
					
					
					//点击下一张
					nextImg.addEventListener('click',function(){
						goNext();
					})
					
					function goNext(){
						currentIndex ++;
						if(currentIndex==imgs.length){
							currentIndex = 0;
						}
						showImg();
					}
					
					//根据图片的下标显示图片
					function showImg(){
						for(var i =0;i<imgs.length;i++){
							if(i === currentIndex){
								imgs[i].setAttribute('class','active');
							}else{
								imgs[i].removeAttribute('class')
							}
						}
						
						for(var i =0;i<imgs.length;i++){
							if(i === currentIndex){
								cricles[i].setAttribute('class','activec');
							}else{
								cricles[i].removeAttribute('class')
							}
						}
						
					}
					
				 lunbotime=setInterval(function(){goNext()},3500);
				
				
				//鼠标在
				document.getElementById("content").onmouseenter=function(){
					clearInterval(lunbotime);
					}
				//鼠标移
				document.getElementById("content").onmouseleave=function(){
					clearInterval(lunbotime);
					lunbotime=setInterval(function(){goNext()},3500);
					}
				
				
					
				}
			
			}
			
			
			function yaopen(){
				document.getElementById("dhl").style.transform="scaleY(1)";
			}
			function yadate(){
				document.getElementById("dhl").style.transform="scaleY(0)";
			}