<template>
	<view class="nav" :style="{ color : color }">
		<view 
		class="nav-ico" 
		v-if="index"
		>
			<text 
			class="iconfont iconzuojiantou-copy"
			@click="handleToBack()"
			/>|
			<text 
			class="iconfont iconshouye"
			@click="handleToHome()"
			/>
		</view>
		<view class="navName">
			{{navName}}
		</view>
	</view>
</template>

<script>
	import '../../common/iconfont.css'
	export default {
		name:"nav-header",
		props:['navName','index','color'],
		data() {
			return {
				
			}
		},
		methods:{
			// 返回上一页
			handleToBack(){
				uni.navigateBack();
			},
			// 回到首页
			handleToHome(){
				uni.navigateTo({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		height:75px; 
		text-align: center; 
		line-height: 80px; 
		font-size:16px; 
		color:black; 
		overflow: hidden; 
		position: relative;
		.nav-ico {
			width:97px; 
			height:31px;
			background:rgba(0,0,0,0.4); 
			border-radius: 15px;
			position: absolute; 
			left:10px; 
			top:22px; 
			line-height: 31px; 
			display: flex; 
			justify-content: space-evenly; 
			color:white;
		}
		.navName {
			width: 280rpx;
			margin: 0 auto;
			overflow:hidden; //超出的文本隐藏
			text-overflow:ellipsis; //溢出用省略号显示
			white-space:nowrap; //溢出不换行	
		}
	}
</style>
