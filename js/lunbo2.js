
var h1=document.getElementById("h1");
var pnr=document.getElementById("pnr");
var span1=document.getElementById("span1");
var span2=document.getElementById("span2");


// var img1="../img/jiudianbg1.jpg";
// var img2="../img/ya23.jpg";


span1.onclick=pre;
span2.onclick=next;


function pre(){
	document.getElementById("imgtu").src="../img/jiudianbg1.jpg";
	h1.innerHTML="燃木齐大酒店";
	pnr.innerHTML="拉萨燃木齐大酒店座落于拉萨城关区小昭寺路与北京东路交叉口，藏式风格挂牌三星级酒店，位于小昭寺对面，步行至八藏自治区人民政府共同主办,西藏.西藏旅游文化国际博览会(简称“藏博会”)定于2014年9月25日至27日在拉萨举办。 首届藏博角街大昭寺...";
	span1.style.background="rgba(255, 170, 0, 1.0)";
	span2.style.background="rgba(255, 170, 0, 0.0)";
}


function next(){
	document.getElementById("imgtu").src="../img/ya23.jpg";
	h1.innerHTML="大酒店";
	pnr.innerHTML="首届中国、西藏自治区人民政府共同主办,西藏.西藏旅游文化国际博览会(简称“藏博会”)定于2014年9月25日至27日在拉萨举办。 首届藏博会由国家文化部、国家旅游局、西藏自治区人民政府共同主办,西藏...";
	span2.style.background="rgba(255, 170, 0, 1.0)";
	span1.style.background="rgba(255, 170, 0, 0.0)";
}


// var time=setInterval("ya()",2000)

// var bl=0;
// function ya(){
// 	if(bl==0){
// 		next();
// 		bl=1;
// 	}else{
// 		pre();
// 		bl=0;
// 	}
// }