function Tab(id,isAuto){	
	var that=this;
	this.outid=document.getElementById(id);//获取最外面的box id
	//一、先获取目标dom
	this.cont=this.outid.children[1];//获取内容部分 的标签对象
	this.tit=this.outid.children[0];//获取标题部分 的标签对象
	this.lis=this.tit.getElementsByTagName("li");
	this.len=this.lis.length;
	this.uls=this.cont.getElementsByTagName("ul");//从指定dom对象里面去找子dom
	this.lis[0].className="active comClass2";//默认让第一个title显示
	this.uls[0].className="active";
	
	//二、为了避免显示多余的部分
	//让所有的ul都隐藏，让标题里面所有li的class都设置成空
	for (var i = 0; i < this.lis.length; i++) {
		this.lis[i].index=i;
		this.lis[i].onclick=function(){				
			that.tabTo(this.index)
		}
	};
	var n=0;
	if(isAuto){
		setInterval(function(){
			n++
			if(n>that.len-1) n=0;
			that.tabTo(n);
		}, 2000)
	}		
}
Tab.prototype.clearclass=function(){
	for (var i = 0; i < this.lis.length; i++) {
		this.lis[i].className="comClass2";
		this.uls[i].className="";
	};
}
Tab.prototype.tabTo=function(index){
	this.clearclass();
	this.lis[index].className="active comClass2";
	this.uls[index].className="active";
}
