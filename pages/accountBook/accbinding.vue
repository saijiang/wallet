<template>
	<view>
		<scroll-view class="scr-area">
			
		
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
			
			<view class="have-item-area">
				<view class="have-t-area">
					<text>支付宝付款专用账户zhifubao@ceshi.com</text>
					<text class="tag-text">签约账户</text>
				</view>
				<view class="ali-item-area"  v-for="(item,index) in objList" :key="index">
					<view class="ali-type-area">
						<text>专用账户{{item}}:1234567</text>
						<text>{铁路运费贷平台}</text>
					</view>
					<view class="ali-money-area">
						<text class="money-t-css">账户余额</text>
						<text>0.00</text>
					</view>
					<view class="btns-areas">
						<text>资金拨入</text>
						<text style="margin-left: 15px;">交易明细</text>
					</view>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objList:['1','2','3','4','5']
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

	.scr-area{
		width: 100%;
		height: 100%;
		background-color: transparent;
	}


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
    
	.have-item-area{
		background-color: #fff;
		margin-top: 15px;
		.have-t-area{
			height: 45px;
			padding: 0 10px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			font-size: 15px;
			
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			
			.tag-text{
				color: orange;
				border: 1px solid orange;
				padding: 2px 8px;
				height: 16px;
				text-align: center;
				border-radius: 8px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	  
		 .ali-item-area{
			padding: 10px;  
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			box-sizing: border-box;
			.ali-type-area{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
			.ali-money-area{
				margin-top: 10px;
				.money-t-css{
					color: rgba(0, 0, 0, 0.3);
					margin-right: 10px;
				}
			}
			.btns-areas{
				margin-top: 10px;
				display: flex;
				flex-direction: row;
				align-items: center;
				color: #0076ff;
			}
		  }
	
	}


</style>
