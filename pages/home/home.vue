<template>
	<view>
		<head-nav @backEvent = "backEvent"></head-nav>
		<uni-drawer
		ref="showRight"
		mode="left" 
	    :mask-click="true"
		:width="320"
		>
		 <view class="drawer-area">
			<view class="top-area">
				<text>金链汇信科技发展有限公司</text>
			</view>
			<view class="center-area">
				<view v-for="(item , index) in popItemArray" :key="index" class="item-area" @click="popItemAction(item)">
					<image class="logos" :src="item.icon"></image>
					<text>{{item.name}}</text>
				</view>
	
			</view>
			<view class="bottom-area">
				<button>更多</button>
				<button @click="logoutAction">退出登录</button>
			</view>
		</view>
		</uni-drawer>
		
		<view class="infor-bottom-area" :style="{top:44*scaleFactor+statusBarHeight+'rpx'}">
			<view class="chain-area">
				<text>xxx链</text>
				<text>cfx:sdhahaggshdgha</text>
			</view>
			<tabbar-item :title-array="itemArr" :current-table="currentTab" @selectItem="selectItem"></tabbar-item>
			
		</view>
		

		
	</view>
</template>

<script>
	const app = getApp()
	import {systemInfo} from '@/tools/system-info.js'
	import {pubdata} from '../../tools/pub-data.js'
	import HeadNav from '@/components/HeadNav.vue'
	import TabbarItem from '@/components/tabbarItem.vue'
	export default {
		data() {
			return {
				// height:navHeightValue*scaleFactor+statusBarHeight+'rpx'
				scaleFactor: app.globalData.scaleFactor, //比例系数
				statusBarHeight: app.globalData.statusBarHeight, //状态栏高度
				itemArr:['我的资产','资产管理'],
				currentTab:1,
				popItemArray:[]
			};
		},
		components:{
		  HeadNav,
		  TabbarItem
		},
		created() {
			/* 获取设备信息 */
			const SystemInfomations = systemInfo()
			/* 通用平台 */
			this.statusBarHeight = SystemInfomations.statusBarHeight //状态栏高度
			this.scaleFactor = SystemInfomations.scaleFactor //比例系数
			
			const pupData = pubdata()
			this.popItemArray = pupData.popItemArray
		},
		methods:{
			backEvent(){
				this.$refs.showRight.open();
			},
			logoutAction(){
				this.$refs.showRight.close()
				uni.showModal({
					title:'您确定要退出吗?',
					cancelText:'取消',
					cancelColor:'#333',
					confirmText:'确定',
					confirmColor:'#0076ff',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.reLaunch({
								url:'/pages/index/index'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			selectItem(n){
				console.log(n)
			},
			popItemAction(item){
				var that = this
				uni.navigateTo({
					url:`../${item.file}`,
					success() {
						that.$refs.showRight.close()
					}
				})
			}
		}
	}
</script>

<style lang="scss">

.drawer-area{
	width: 100%;
	height: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	
	.top-area{
		height: 200px;
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;
		display: flex;
		flex-direction: column-reverse;
		// align-items: center;
	}
	.center-area{
		flex: 1;
		.item-area{
			height: 50px;
			display: flex;
			flex-direction: row;
			align-items: center;
			.logos{
				width: 20px;
				height: 20px;
				margin-left: 10px;
				margin-right: 5px;
			}
		}
	}
	.bottom-area{
		height: 100px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
}




.infor-bottom-area{
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	.chain-area{
		height: 120px;
		border-radius: 10px;
		width: 80%;
		background-color: olive;
		padding: 0 15px;
		margin-top: 15px;
		margin-bottom: 15px;

		
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	
	
}

</style>
