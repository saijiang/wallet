<template>
	<view>
		<z-paging>
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
				
				<view class="center-info-areas">
					<scroll-view style="white-space: nowrap;" :scroll-x="true">
						<view style="display: inline-block;margin-top: 5px;"  v-for="(item,index) in objlist" :key="index"  @click="clickItemAction(index)">
							<view class="info-items-areas">
								<text class="items-top-title-css">20天</text>
								<text class="items-bottom-money-css" :class="selMoneyCss(index)">¥0</text>
								<text v-show="index ==0 || index+1 == objlist.length " class="right-tag-css">{{tagName(index)}}</text>
							</view>
						</view>
					</scroll-view>
			
				</view>
			</view>
				
			<button class="btns-area-css" @click="openVipAction">立即开通</button>
			
			<view class="open-bottom-areas">
				<text>开通会员可以享受如下功能</text>
				<view class="have-item-area">
					<view class="logo-area">
						<image class="logos"></image>
						<text>企业信息</text>
					</view>
					<view>
						<text>维护企业基本信息,经营信息等,开展信息数字化管理,建议企业自身画像及信用体系</text>
					</view>
				</view>
				<view class="have-item-area">
					<view class="logo-area">
						<image class="logos"></image>
						<text>电子合同</text>
					</view>
					<view>
						<text>维护企业基本信息,经营信息等,开展信息数字化管理,建议企业自身画像及信用体系</text>
					</view>
				</view>
				<view class="have-item-area">
					<view class="logo-area">
						<image class="logos"></image>
						<text>企业账本</text>
					</view>
					<view>
						<text>维护企业基本信息,经营信息等,开展信息数字化管理,建议企业自身画像及信用体系</text>
					</view>
				</view>
			</view>
				
		</z-paging>

	    <uni-popup ref="popup" type="bottom">
			<view class="pop-areas">
				<view class="top-pop-area">
					<text>确认订单信息</text>
					<text>x</text>
				</view>
				
				<view class="bo-infor-areas">
					<text style="font-size: 20px;">金链</text>
					<text style="margin: 10px 0;">购买后将在xx到期</text>
					<text>会员类型</text>
					<view class="vip-type-areas">
						<text>1个月</text>
						<text style="font-weight: bold;font-size: 20px;">¥10</text>
					</view>
					<text>支付方式</text>
					<view class="pay-type-areas">
						<view class="type-areas">
							<text>微信</text>
						</view>
						<view class="type-areas">
							<text>支付宝</text>
						</view>
					</view>
					<view class="pay-number-areas">
						<text>实付金额</text>
						<text style="margin: 0 10px; color: red;font-size: 15px;">¥10</text>
						<view class="bts-css">
							<text @click="upOrdAction">提交订单</text>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objlist:['1','2','3','4'],
				currentNumber:0
			};
		},
		methods:{
			// 开通会员
			openVipAction(){
				this.$refs.popup.open('bottom')
			},
			// 提交订单 支付
			upOrdAction(){
				uni.requestPayment({
				    provider: 'alipay',
				    orderInfo: 'orderInfo', //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
				    success: function (res) {
				        console.log('success:' + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log('fail:' + JSON.stringify(err));
				    }
				});
			},
			// 点击
			clickItemAction(index){
			  	if(index == this.currentNumber)return
				  this.currentNumber = index
			},
			// 选择时金额样式
			selMoneyCss(index){
				if(index ==  this.currentNumber){
					return 'item-bottom-money-select'
				}
				else
				 return 'item-bottom-money-normal'
				 
			},
			// 标签
			tagName(index){
				if(index == 0){
					return '免费试用'
				}
				else if(index+1 == this.objlist.length){
					return '推荐'
				}
				else
				return ''
			}
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
	height: 170px;
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
		height: 130px;
		.info-items-areas{
			position: relative;
			border-radius: 5px;
			background-color: rgba(0, 0, 0, 0.1);
		    margin-left: 10px;
			width: 150px;
			height: 120px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			.items-top-title-css{
				color: #333;
				font-size: 15px;
			}
			.items-bottom-money-css{
				
				font-size: 18px;
				font-weight: bold;
			}
			.item-bottom-money-normal{
				color: #333;
			}
			.item-bottom-money-select{
				color: red;
			}
			
			.right-tag-css{
				color: #fff;
				position: absolute;
				top: 0;
				right: 0;
				background-color: red;
				padding: 0 8px;
				height: 20px;
				border-radius: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
}


.btns-area-css{
	background-color: #0076ff;
	color: #fff;
	margin: 15px 20px 0 20px;
	height: 44px;
	border-radius: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.open-bottom-areas{
	margin-top: 15px;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	.have-item-area{
		height: 80px;
		background-color: #fff;
		margin-top: 10px;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		.logo-area{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 130px;
			.logos{
				width: 30px;
				height: 20px;
				background-color: orange;
			}
		}
	}
}


.pop-areas{
	background-color: #fff;
	height: 380px;
	.top-pop-area{
		background-color: rgba(0, 0, 0, 0.2);
		height: 40px;
		padding: 0 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.bo-infor-areas{
		margin-top: 10px;
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		
		.vip-type-areas{
			width: 120px;
			height: 80px;
			margin-top: 10px;
			margin-bottom: 10px;
			border: 1px solid red;
			border-radius: 5px;
			display: flex;
            flex-direction: column;
			align-items: center;
			justify-content: space-around;
		}
	
		.pay-type-areas{
			margin: 10px 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.type-areas{
				width: 130px;
				height: 30px;
				border: 1px solid rgba(0, 0, 0, 0.1);
				border-radius: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	
		.pay-number-areas{
			display: flex;
			flex-direction: row;
			align-items: center;
			.bts-css{
				width: 120px;
				height: 30px;
				border-radius: 5px;
				background-color: #0076ff;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	
	
	}
}

</style>
