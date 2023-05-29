<template>
	<view>
		<view class="top-info-area">
			<text>设置新密钥的验证码会发送至管理员的手机{{phoneNumShow()}}</text>
		</view>
		<view class="input-infor-area">
			<view class="item-input-area item-bottom-line">
				<text class="item-title-css">验证码</text>
				<input style="flex: 1;" placeholder="请输入验证码"/>
				<send-code :phone="phone" @sendAction="sendCodeAction"></send-code>
			</view>
			<view class="item-input-area item-bottom-line">
				<text class="item-title-css">新密钥</text>
				<input style="flex: 1;" placeholder="请输入新密钥"/>
			</view>
			<view class="item-input-area">
				<text class="item-title-css">确认新密钥</text>
				<input style="flex: 1;" placeholder="请再次输入新密钥"/>
			</view>
		</view>
		
		<button @click="sureBtnAction" class="btns">确定</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'18212121212'
			};
		},
		methods:{
			
			//隐藏手机号
			phoneNumShow () {
				let that = this;
				let number = this.phone; //获取到手机号码字段
				let mphone = number.substring(0, 3) + '****' + number.substring(7);
				return mphone
			},
			// 点击发送验证码事件
			sendCodeAction(){
				uni.showToast({
					title:this.phone,
					icon:'none'
				})
			},
			sureBtnAction(){
				uni.reLaunch({
					url:'/pages/home/home'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

.top-info-area{
	margin: 8px 10px;
}
.input-infor-area{
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.item-input-area{
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 10px;
	.item-title-css{
		width: 100px;
	}
}

.item-bottom-line{
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}


.btns{
	margin: 30px 20px 0 20px;
	background-color: #0076ff;
	color: #fff;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
