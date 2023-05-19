<template>
	<view>
		<view class="open-top-area">
			<image class="open-logos"></image>
			<view class="open-infor-areas">
				<text>金链</text>
				<text>2023-09-09到期(使用中)</text>
			</view>

		</view>
	
		<view class="open-center-areas">
			<view class="center-title-area">
				<text>企业数据钱包会员</text>
			</view>
			<!-- <scroll-view></scroll-view> -->
			<view scroll-x="true" class="center-info-areas">
				<view class="info-items-areas" v-for="(item,index) in objlist" :key="index">
					<text class="items-top-title-css">20天</text>
					<text class="items-bottom-money-css">¥0</text>
				</view>
			</view>
		</view>
	
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objlist:['1','2','3','4']
			};
		}
	}
</script>

<style lang="scss" scoped>

 .open-top-area{
	 height: 80px;
	 background-color: #fff;
	 margin: 10px;
	 border-radius: 5px;
	 display: flex;
	 flex-direction: row;
	 .open-logos{
		 width: 30px;
		 height: 20px;
		 margin: 0 10px;
		 margin-top: 10px;
		 background-color: coral;
	 }
	 .open-infor-areas{
		 display: flex;
		 flex-direction: column;
		 justify-content: space-around;
	 }
 }

.open-center-areas{
	height: 140px;
	padding:0 10px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	.center-title-area{
		height: 40px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	.center-info-areas{
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: orange;
		.info-items-areas{
			border-radius: 5px;
			background-color: rgba(0, 0, 0, 0.1);
		    margin-left: 10px;
			width: 100px;
			height: 80px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			.items-top-title-css{
				color: #333;
				font-size: 15px;
			}
			.items-bottom-money-css{
				color: #333;
				font-size: 18px;
				font-weight: bold;
			}
		}
	}
}

</style>
