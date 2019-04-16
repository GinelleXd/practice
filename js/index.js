window.onload = function(){
	var deff = $.ajax({
					type:"get",
					url:"data.json?id="+Math.random(),
					async:true
				});
		deff.done(function(msg){
			//得到一个json对象  使用 for...in遍历
			var title = "";
			var arr = [];
			for (var attr in msg) {
				title = `<h2 cname=${attr}>${msg[attr].name}</h2>`;
				arr.push(title);
				//console.log( attr )
				if(msg[attr].name == "新品推荐"){
					var strCon = "";
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						strCon += `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".reItem").html( strCon );//导入内容
				}else if(msg[attr].name == "装扮仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".dressDown").html( strCon );//导入内容
				}else if(msg[attr].name == "古风仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".hangDown").html( strCon );//导入内容
				}else if(msg[attr].name == "汉风仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".hanDown").html( strCon );//导入内容
				}else if(msg[attr].name == "首饰仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".jewelryDown").html( strCon );//导入内容
				}else if(msg[attr].name == "零食仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".sockDown").html( strCon );//导入内容
				}else if(msg[attr].name == "服饰仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".clothesDown").html( strCon );//导入内容
				}else if(msg[attr].name == "周边仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".souvenirDown").html( strCon );//导入内容
				}else if(msg[attr].name == "手办仓"){
					var strCon = `<a href=""><img src="images/${attr}.jpg" alt="" class="photo"></a>`;
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						//console.log(pro);
						strCon +=  `<li>
										<a href="page.html?pname=${attr}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".GKDown").html( strCon );//导入内容
				}
			}
			
			var $nav = $(".nav");
			for(var i = 0 ; i < $nav.length ; i++){
				//var ti = ;
				//console.log(ti);
				$nav.eq(i).html(arr[i]);
			} 
			$(".nav").on("mouseenter","h2",function(){
					//alert( $(this).attr("cname") );
					//获取商品类型编号
					$(this).parent().parent().parent().addClass("active1").siblings().removeClass();
					var cname = $(this).attr("cname");
					var list = msg[cname].list;
					//将得到的list显示到页面上
					var  listCon = "";
					for( var i = 0 ; i < list.length ; i++ ){
						var pro = list[i];
						listCon += `<li>
										<a href="page.html?pname=${cname}&pid=${pro.id}" target="_blank">
											<img src="images/${pro.src}" alt="" />
											<p>${pro.name}</p>
											<p>${pro.price}</p>
										</a>
									</li>`;
					}
					$(".reItem").html( listCon );//导入内容
				})
			})
	var oLi = $(".navLeft li:first").siblings();
	for(var i = 0 ; i < oLi.length ; i++){
		oLi.eq(i).hover(function(){
			$(this).children("div").css("display","block");
			$(this).css({"border-bottom":"1px solid #ed3f3f","border-right":"none","height":"43px","width":"189px","border-top":"1px solid #ed3f3f"});
			if($(this).html() == oLi.eq(6).html()){
				$(".navLeft").css("border-bottom","none");
			}
		},function(){
			$(this).children("div").css("display","none");
			if($(this).html() == oLi.eq(6).html()){
				$(this).css({"border-bottom":"none","border-right":"1px solid #ed3f3f","height":"44px","width":"188px","border-top":"none"})
				}else{
				$(this).css({"border-bottom":"none","border-right":"1px solid #ed3f3f","height":"46px","width":"188px","border-top":"none"});
			}
			$(".navLeft").css("border-bottom","1px solid #ed3f3f");
		})
	}
	var timer = setInterval(auto,1500);
	var index = 0;
	function auto(){
		index++;
		if( index == $(".point li").size() ){
			index = 0;
		}
		$(".point li").eq(index).addClass("active").siblings().removeClass("active");
		$(".rotation li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	
	//鼠标 操作
	$(".point li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		auto();
	})
	$(".point li").mouseout(function(){
		timer = setInterval(auto,1500);
	})
}
var str = document.cookie;
var uname = document.getElementsByClassName("uname")[0];
var reg = document.getElementsByClassName("reg")[0];
if(str == ""){
	uname.innerHTML = "请登录";
	uname.href = "login.html";
}else{
	var arr = str.split(";");
	var cname = arr[0].split("=");
	var table = document.getElementsByTagName("table")[0];
	uname.innerHTML = cname[1];
	reg.innerHTML = "";
}
