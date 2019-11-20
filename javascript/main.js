const myImage = document.getElementById("my-Img"); //获取img的值,存储到myImage中
const myButton = document.querySelector('button'); //获取button的值,存储到myButton中
const myHeading = document.querySelector('h1'); //获取h1的值,存储到myHeading中

//获取src,点击logo图标,判断显示第一张或第二张
myImage.onclick = ()=>{// ECMAScript 6 
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src', 'images/firefox2.png');
	}else{
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

//定义一函数,判断用户名是否为空
function setUserName (){
	let myName = prompt("请输入用户名!");
	if(!myName){
		arguments.callee.call(this);
	}else{
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Mozilla很酷, '+ myName;
	}
}

//初始化代码:在页面初次读取时进行构造工作
if(! localStorage.getItem('name')){
	setUserName();
}else{
	myHeading.textContent = 'Mozilla很酷, ' + localStorage.getItem('name'); 
}

//为按钮设置点击事件处理:
myButton.onclick = function(){
	setUserName();
}