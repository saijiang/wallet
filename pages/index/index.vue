<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="input-area">
			<image class="input-logo" src="/static/logo.png"></image>
			<input v-model="objdata.phone" maxlength="11" placeholder="请输入手机号" type="number"/>
		</view>
		<view  class="input-area">
			<image class="input-logo" src="/static/logo.png"></image>
			<input v-model="objdata.code" maxlength="6" style="flex: 1;" placeholder="请输入验证码" type="number"/>
			<view class="code-area" :class="codeBtnsCss()" @click="sendCodeAction">
				<text>{{sendtitle}}</text>
			</view>
		</view>
		<view class="btns" :class="loginBtnsCss()" @click="loginBtnsAction">
			<text>登录</text>
		</view>
		<!-- <button class="btns" :class="loginBtnsCss()" @click="loginBtnsAction">登录</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sendtitle: '获取验证码',
				sendNUmber:60,
				timers:null,
				objdata:{
					phone:'',
					code:''
				},
				openstatus:'' // 是否开通钱包状态标识
			}
		},
		onLoad() {

		},
		methods: {
			// 手机号校验
			filterphone(str){
				const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
				return reg.test(str)
			},
			// 发送验证码按钮样式
			codeBtnsCss(){

				var send = this.filterphone(this.objdata.phone)
				if(send){
					return 'code-can'
				}
				else{
					if(this.timers){
						this.sendtitle = '获取验证码'
						this.sendNUmber = 60
						clearInterval(this.timers)
						this.timers = null
					}
					return 'code-normal'
				}
			},
			// 发送验证码事件
			sendCodeAction(){
				
				if(this.timers) return
				console.log('发送')
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
			// 登录按钮样式
			loginBtnsCss(){
				var send = this.filterphone(this.objdata.phone)
				if(send && this.objdata.code.length == 6){
					return 'btns-can'
				}
				else
				return 'btns-normal'
			},
			// 登录按钮事件
			loginBtnsAction(){
				console.log('登录')
				this.openstatus = 'have'
				if(this.openstatus == 'have'){
					uni.navigateTo({
						url:'/pages/index/overOpen'
					})
				}
				else{
					uni.navigateTo({
						url:'/pages/index/initialOpen'
					})
				}

			}

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.input-area{
		margin-top: 10px;
		height: 44px;
		width: 80%;
		border-bottom: rgba(0, 0, 0, 0.2) 1px solid;
		
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.input-logo{
		width: 15px;
		height: 15px;
		background-color: aqua;
		margin-left: 10px;
		margin-right: 15px;
	}
	
	.btns{
		width: 70%;
		height: 44px;
		margin-top: 50px;
		border-radius: 22px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;

	}
	
	.btns-normal{
		background-color: rgba(0, 0, 0, 0.1);
		pointer-events: none;
	}
	.btns-can{
		background-color: #0076ff;
		pointer-events: painted;
	}
	
	
	.code-area{
		height: 30px;
		width: 100px;
		font-size: 14px;
		border-radius: 15px;
		
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.code-normal{
		background-color: rgba(0, 0, 0, 0.1);
		pointer-events: none;
	}
	.code-can{
		background-color: #0076ff;
		pointer-events: painted;
	}
	
</style>
<style>
	page{
		background-color: #fff;
	}
</style>
