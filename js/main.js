// window.onload= function (){
//     // 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
//     var useragent = navigator.userAgent;
//     if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
//         // 这里警告框会阻塞当前页面继续加载
//         $("body").hide();
//         alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
//         // 以下代码是用javascript强行关闭当前页面
//         // var opened = window.open('about:blank', '_self');
//         // opened.opener = null;
//         // opened.close();

//         window.close();
//     }	
// }

/**
*	验证码倒计时
*/
var count = 60;
var flag = 1;
function show(){
	// flag = 1;
	if (flag = 1){
		if(count > 50){	//将来改成1
			count--;
			document.getElementById("check-button").value = count;
			setTimeout("show()", 1000);
		}else{
			document.getElementById("check-button").value = "重新验证";
			count = 60;
			flag = 0;
		}
	}
}

/**
*	电话号码必须check
*/
function phoneNumValidation(){
	var num = document.getElementById("phoneNum").value;
		if (num != "" && num.length == 11) {
			show();
		}else{
			$('#validationModal').modal('toggle')
		}

}