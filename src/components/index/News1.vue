 <style>
.dotline{
	BORDER-BOTTOM-STYLE: dotted;
	BORDER-LEFT-STYLE: dotted;
	BORDER-RIGHT-STYLE: dotted; 
	BORDER-TOP-STYLE: dotted ;
	width: 100%
}
#flexmain
{
	border:0px solid black;
	display:flex;
}
#newstitle div{
	display: flex;
	flex-direction: column;
	margin-left: 10px;
}
#title{
	font-size: 18px;
	width: 300px;
	margin-bottom: -5px;
}
#flexmain div{
	display: flex;
	margin-top: 10px;
	margin-left: 10px;
	flex-direction: column;
}
#newsbottom {
	display: flex;
	flex-direction: row;
	background: #9FB6CD;
	justify-content: space-between;
}
#news{
	margin-top: 2%;
	margin-left: 20%;
	padding-top: 10px;
	width: 800px;
	height: 400px;
	background: #CFCFCF;  
}
#newsContent{
	margin-left: 30px;
	text-indent: 2em;
	font-size: 15px;
}
#content{
	margin-left: 20px;
	margin-top: 20px;
	margin-right: 20px;
	background:#B0C4DE;

}
#picture{
	width: 60px;
	height: 60px;
	background: #EEE5DE;
	cursor: pointer;
}
#clickrate{
	margin-top: 5px;
	margin-left: 20px;
	font-size: 15px;
	cursor: pointer;
}
#share{
	margin-top: 5px;
	margin-right: 20px;
	font-size: 15px;
	cursor: pointer;
}
.more{
	align-self: flex-end;
	margin-right: 20px;

}
body{
	background: #CFCFCF;
}
</style>
	
<style scoped>

</style>

<template>
	<div id="news" class="center-block" >
		<div id="content">
			<div id="flexmain">
				<div id="picture"><img src="/src/asset/images/demo/touxiang.png"></div>
				<div id="newstitle">
					<div id="title">热烈祝贺十九大完美落幕</div>
				 	<div>作者来源</div>
				</div>
			</div>
			<div style="display: flex;flex-direction:column;">
				<h id="newsContent">使用单文件的 Vue 组件化开发模式
									基于 npm + webpack + babel 开发，支持 ES2015
									高质量、功能丰富
									友好的 API ，自由灵活地使用空间</h>
				<a class="more" href="">更多</a>
			</div>

			<div><hr class="dotline" color=#111111 > </div>
			<div id="newsbottom">
				<div id="clickrate">点击量</div>       
				<div id="share">分享</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Error'
  }
</script>
