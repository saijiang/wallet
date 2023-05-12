<template>
	<view>
		<view class="item-area">
			<view class="title-area">
				<text>支付宝付款专用账户</text>
			</view>
			<view class="binding-area" @click="bindingPayAction">
				<text>+</text>
				<text>添加支付宝付款专用账户</text>
			</view>
		</view>
		
		<view class="item-area">
			<view class="title-area">
				<text>支付宝收款账户</text>
			</view>
			<view class="binding-area" @click="bindingReachAction">
				<text>+</text>
				<text>添加支付宝收款账户</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			bindingPayAction(){
				uni.navigateTo({
					url:'/pages/accountBook/accplatform'
				})
			},
			bindingReachAction(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>

	.item-area{
		background-color: #fff;
		height: 200px;
		margin-top: 15px;
		
		display: flex;
		flex-direction: column;
		
		.title-area{
			height: 45px;
			padding-left: 10px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			display: flex;
			align-items: center;
		}
		.binding-area{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		
		
	}

</style>
