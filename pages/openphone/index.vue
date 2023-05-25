<template>
	<view>
		<z-paging>
			<view class="admin-areas">
				<view class="ad-top-title">
					<text>管理员</text>
					<text>王大拿</text>
				</view>
				<view class="ad-bottom-areas">
					<view class="ad-phone-areas">
						<text>手机号</text>
						<text>12345678900</text>
					</view>
					<view class="ad-times-areas">
						<text>2023-09-09</text>
					</view>
				</view>
			</view>
		
		    <view class="oper-bottom-areas">
				<view class="oper-title-areas">
					<text>操作员</text>
					<text style="color: blue;" @click="addOperAction">添加操作员</text>
				</view>
				<view class="oper-item-areas">
					<view class="item-areas">
						<text>姓名</text>
						<text>张三</text>
					</view>
					<view class="item-areas">
						<text>手机号</text>
						<text>1212121212121212</text>
					</view>
					<view class="item-areas">
						<text>2023-01-01</text>
						<view class="item-operation-area">
							<image @click="delectAction" class="op-logos" style="margin-right: 10px;"></image>
							<image @click="changeAction" class="op-logos"></image>
						</view>
					</view>
				</view>
			</view>
		
			<view class="bottom-infor-areas">
				<text>若管理员手机号已不能使用,请联系客服400-107-7166进行更换</text>
			</view>
		
		
		</z-paging>
	
	<uni-popup ref="popup" type="center" :is-mask-click="false">
		<view class="pop-areas">
			<view class="ti-areas">
				<text>请输入手机号xxx收到的验证码</text>
			</view>
			<view class="pop-center-areas">
				<input v-model="code" type="number" class="input-css" placeholder="请输入"/>
				<button class="btns-css" :class="codeBtnsCss()" @click="sendCodeAction">{{sendtitle}}</button>
			</view>
			<view class="pop-bottom-areas">
				<view class="botton-btns-area" @click="cancelAction">
					<text>取消</text>
				</view>
				<view class="botton-btns-area bottom-right-btns" @click="sureAction">
					<text>确定</text>
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
				sendNUmber:60,
				sendtitle:'发送验证码',
				timers:null,
				code:''
			};
		},
		methods:{
			delectAction(){
				var that = this
				uni.showModal({
					cancelText:'取消',
					confirmText:'确定',
					title:'您确定要删除吗?',
					success:function(res){
						if (res.confirm) {
							that.$refs.popup.open()
							
						} else if (res.cancel) {
							
						}
					}
				})
			},
			changeAction(){
				var that = this
				uni.showModal({
					cancelText:'取消',
					confirmText:'确定',
					title:'您确定要将该操作员改为管理员吗?',
					success:function(res){
						if (res.confirm) {
						 that.$refs.popup.open()
						} else if (res.cancel) {
							
						}
					}
				})
			},
			// 取消
			cancelAction(){
				this.$refs.popup.close()
				this.code=''
			},
			//确定
			sureAction(){
				this.$refs.popup.close()
				this.code=''
				console.log('确定')
			},
			// 添加操作员
			addOperAction(){
				// this.$refs.popup.open()
				uni.navigateTo({
					url:'/pages/openphone/addphone'
				})
			},
			// 发送验证码按钮样式
			codeBtnsCss(){
			
				if(this.timers){
					return 'btns-click-css'
				}
				else{
					if(this.timers){
						this.sendtitle = '获取验证码'
						this.sendNUmber = 60
						clearInterval(this.timers)
						this.timers = null
					}
					return 'btns-normal-css'
				}
			},
			// 发送验证码事件
			sendCodeAction(){
				
				if(this.timers) return
				this.timers = setInterval((n) =>{
					this.sendNUmber--
					if(this.sendNUmber <= 0){
						this.sendtitle = '获取验证码'
						this.sendNUmber = 60
						clearInterval(this.timers)
						this.timers = null
					}
					else{
						this.sendtitle = '重新发送'+this.sendNUmber+'s'
					}
				},1000)
				
			},
			
			
			
		}
	}
</script>

<style lang="scss" scoped>

.admin-areas{
	height: 100px;
	margin-top: 10px;
	background-color: #fff;
	.ad-top-title{
		height: 40px;
		padding: 0 10px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.ad-bottom-areas{
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		// justify-content: space-around;
		.ad-phone-areas{
			margin-top: 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
		.ad-times-areas{
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			color: rgba(0, 0, 0, 0.6);
			
		}
	}
}


.oper-bottom-areas{
	background-color: #fff;
	margin-top: 10px;
	padding: 0 10px;
	.oper-title-areas{
		height: 40px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.oper-item-areas{
		
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		.item-areas{
			margin-top: 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.item-operation-area{
				.op-logos{
					width: 20px;
					height: 20px;
					background-color: orange;
				}
			}
		}
	
	}
}

.pop-areas{
	width: 320px;
	height: 200px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	.ti-areas{
		height: 40px;
		display: flex;
		align-items: center;
		padding-left: 10px;
		font-size: 12px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	
	.pop-center-areas{
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.input-css{
			flex: 1;
			height: 40px;
			margin-left: 5px;
			margin-right: 5px;
			padding-left: 10px;
			border-radius: 2px;
			border: 1px solid rgba(0, 0, 0, 0.1);
		}
		.btns-css{
			margin-right: 5px;
			color: #fff;
			width: 120px;
			height: 40px;
			font-size: 12px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		.btns-normal-css{
			background-color: #0076ff;
			pointer-events: painted;
		}
		.btns-click-css{
			background-color: rgba(0, 118, 255, 0.5);
			pointer-events: none;
		}
		
		
	}
	
	.pop-bottom-areas{
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
		.botton-btns-area{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		.bottom-right-btns{
			border-left: 1px solid rgba(0, 0, 0, 0.1);
			color: #0076ff;
		}
	}
	
	
	
	
}


.bottom-infor-areas{
	margin-top: 40px;
}

</style>
