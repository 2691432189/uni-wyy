<template>
	<view>
		<navHeader navName="云音乐" :index="false"></navHeader>
		<view class="container">
					<scroll-view scroll-y="true">
						<!--搜索栏-->
						<view class="index-search" @tap="handleToSearch">
							<text class="iconfont iconsearch"></text>
							<input 
							type="text" 
							value="" 
							placeholder="搜索歌曲" 
							/>
						</view>
						<!--骨架屏-->
							<view class="skeleton" v-if="loading">
								<m-for-skeleton
								:avatarSize="200"
								:row="3"
								:title="false"
								:loading="loading"
								isarc="square"
								:titleStyle="{}"
								v-for="(item,key) in 4"
								:key="key">
								</m-for-skeleton>
							</view>
						<!--歌曲分类-->
						<view class="index-list">
							<view 
							class="index-list-item" 
							v-for="(item,index) in topList" 
							:key="index" 
							@tap="handleToList(item.listId)"
							>
								<view class="index-list-img">
									<image 
									:src="item.coverImgUrl" 
									mode=""
									/>
									<text>{{ item.updateFrequency }}</text>
								</view>
								<view class="index-list-text">
									<view 
									v-for="(item ,index) in item.tracks" 
									:key="index"
									>
									{{ index + 1 }}.{{item.first}} - {{item.second}}
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
	</view>
</template>

<script>
	// 导入循环骨架屏
	import mForSkeleton from "@/components/m-for-skeleton/m-for-skeleton"
	import '../../common/iconfont.css'
	// 引入nav头部组件
	import navHeader from '@/components/nav-header/nav-header.vue'
	// 引入API
	import { getTopList } from '@/common/api.js'
	export default {
		data() {
			return { 
				topList : [],
				loading: true
			}
		},
		components: {
			// 挂载nav头部组件
			navHeader,
			mForSkeleton
		},
		methods: {
			// 调转到list.vue播放页面
			handleToList(listId){
				uni.navigateTo({
					url: '/pages/musicList/musicList?id=' + listId
				});
			},
			// 搜索歌曲
			handleToSearch(){
				uni.navigateTo({
					url: '/pages/search/search'
				});
			}
		},
		onLoad() {
			// 获取排行榜内容
			getTopList()
			.then(res=>{
				this.topList=res
				this.loading = false;
			})
			
			
		}
		
	}
</script>

<style lang="scss" scoped>
	/*搜索栏*/
		.index-search{ 
			display: flex; 
			background:#f7f7f7; 
			height:73rpx; 
			margin:70rpx 30rpx 30rpx 30rpx; 
			border-radius: 50rpx; 
			align-items: center;
			}
		.index-search text{ 
			margin:0 27rpx;
			} 
		.index-search input{ 
			font-size:26rpx; 
			flex:1;
			}
		/*歌曲分类*/
		.index-list{ 
			margin:0 30rpx;
			}
		.index-list-item{ 
			display: flex; 
			margin-bottom: 35rpx;
			}
		.index-list-img{ 
			width:212rpx; 
			height:212rpx; 
			margin-right:20rpx; 
			border-radius: 15rpx; 
			overflow: hidden; 
			position: relative;
			}
		.index-list-img image{ 
			width:100%; 
			height:100%;
			}
		.index-list-img text{ 
			position: absolute; 
			font-size:22rpx; 
			color:white; 
			bottom: 15rpx; 
			left:15rpx;
			}
		.index-list-text{ 
			flex:1; 
			font-size:24rpx; 
			line-height: 68rpx;
			}
		.index-list-text view{}
</style>
