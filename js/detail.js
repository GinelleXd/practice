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
var oUl = document.getElementsByClassName("navCon")[0];
var href = location.href;
var str1 = href.split("?")[1];
var cname = str1.split("=")[1];
var arr = ["detail1","detail2","detail3","detail4","detail5","detail6","detail7","detail8","detail9","detail0"]
for(let i = 0 ; i < arr.length ; i++){
	if(cname == arr[i]){
		oUl.children[i + 1].style.backgroundColor = "#3b0908";
	}
}
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
			for( var i = 0 ; i < json[cname].list.length ; i++ ){
				var pro = json[cname].list[i];
				strCon +=  `<li>
								<a href="page.html?pname=${cname}&pid=${pro.id}" target="_blank">
									<img src="images/${pro.src}" alt="" />
									<p>${pro.name}</p>
									<p>价格：${pro.price}</p>
								</a>
							</li>`;
			}
			break;
		}
		//显示内容
		$(".mainCon").html( strCon );
		
	})
}