var str = document.cookie;
var uname = document.getElementsByClassName("uname")[0];
var reg = document.getElementsByClassName("reg")[0];
if(str == ""){
	uname.innerHTML = "登录";
	uname.href = "login.html";
}else{
	var arr = str.split(";");
	var cname = arr[0].split("=");
	var table = document.getElementsByTagName("table")[0];
	uname.innerHTML = cname[1];
	reg.innerHTML = "";
}
var href = location.href;
var str1 = href.split("?")[1];
var str2 = str1.split("&")[0];
var str3 = str1.split("&")[1];
var pname = str2.split("=")[1];
var pid = str3.split("=")[1];
window.onload = function(){
	//使用ajax请求data.json中的数据
	var deff = $.ajax({
		type:"get",
		url:"data.json",
		async:true
	});
	deff.done(function(json){
		var strCon = "";
		for( var attr in json ){
			//拼接类型名称
			for( var i = 0 ; i < json[pname].list.length ; i++ ){
				var pro1 = json[pname].list[i];
				if(pid == pro1.id){
				strCon =  `<div style="background:url(images/${pro1.src}) left top no-repeat;background-size:330px 330px;">
								<img src="images/${pro1.src}" >
							</div>
							<div>
								<p>${pro1.name}</p>
								<p>价格：${pro1.price}</p>
								<button type="button">购买</button>
							</div>`;	
				}
			}
			break;
		}
		//显示内容
		$(".mainCon").html( strCon );
		var box = document.getElementsByClassName("mainCon")[0].children[0];
		var pic = box.children[0];
		box.onmouseenter = function(){
			pic.className = "pic";
		}
		box.onmousemove = function(e){
			var e = e || event;
			var x = e.pageX - box.offsetLeft;
			
			var y = e.pageY - box.offsetTop;
			var maxL = box.offsetWidth;
			var maxT = box.offsetHeight;
			x = x < 0 ? 0 : ( x > maxL ? maxL : x );
			y = y < 0 ? 0 : ( y > maxT ? maxT : y );
			var bigImgLeft  = x * (pic.offsetWidth) / (box.offsetWidth) - x;
			var bigImgTop = y * (pic.offsetHeight) / (box.offsetHeight) - y;
			pic.style.left = - bigImgLeft  + "px";
			pic.style.top = - bigImgTop + "px";
		}
		pic.onmouseout = function(){
			pic.className = "";
		}
	})
}
