<template>
	<view>
		<z-paging>
			<template slot="top">
				<view class="top-status-area">
					<view class="com-area">
						<image class="com-logos"></image>
						<text>xx有限公司</text>
					</view>
					<view class="buy-areas">
						<text>2023-10-01到期</text>
						<view class="btns-css" @click="openVIPAction">
							<text>立即续费</text>
						</view>
					</view>
				</view>
				<text style="margin: 10px 0 10px 10px;">购买记录</text>
			</template>
			
			<view class="pay-items-areas" v-for="(item,index) in objlist" :key="index">
				<view class="item-infor-areas">
					<text>年度会员[¥3.00]</text>
					<text>微信扫码支付</text>
				</view>
				<view class="item-infor-areas">
					<text class="order-infor-css">订单号:123456</text>
					<text class="order-infor-css">2023-09-09</text>
				</view>
			</view>
			
			
			
		</z-paging>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objlist:['1','2','3','4','5']
			};
		},
		methods:{
			openVIPAction(){
				uni.navigateTo({
					url:'/pages/vipmember/openvip'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>


 .top-status-area{
	 height: 90px;
	 background-color: #fff;
	 margin: 10px 10px 0 10px;
	 padding: 0 10px;
	 border-radius: 5px;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-around;
	 .com-area{
		 display: flex;
		 flex-direction: row;
		 align-items: center;
		 justify-content: space-between;
		 .com-logos{
			 width: 30px;
			 height: 20px;
			 background-color: orange;
		 }
	 }
	 
	 .buy-areas{
		 display: flex;
		 flex-direction: row;
		 align-items: center;
		 justify-content: space-between;
		 // background-color: bisque;
		 .btns-css{
			 width: 120px;
			 height: 40px;
			 background-color: #0076ff;
			 color: #fff;
			 border-radius: 5px;
			 
			 display: flex;
			 align-items: center;
			 justify-content: center;
		 }
	 }
 }

 .pay-items-areas{
	height: 60px;
	background-color: #fff;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 0 10px;
	.item-infor-areas{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.order-infor-css{
			color: rgba(0, 0, 0, 0.6);
		}
	}
 }




</style>
