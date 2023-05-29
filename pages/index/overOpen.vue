<template>
	<view>
		<view class="contains-area">
			<image class="logos"></image>
			<text>企业数据钱包已加密</text>
			<view class="input-css">
				<input v-model="paddword" placeholder="请输入密钥"  password class="inputs"/>
				<text v-if="paddword" class="clear-btns" @click="clearActions">x</text>
			</view>
			
			<view class="forget-area">
				<text @click="forgetWordAction">忘记密钥</text>
			</view>
			
			<button @click="unlockAction" class="btns">解锁企业数据</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				paddword:''
			};
		},
		methods:{
			clearActions(){
				this.paddword = ''
			},
			forgetWordAction(){
			 uni.navigateTo({
			 	url:'/pages/index/forgetpassword'
			 })	
			},
			unlockAction(){
				uni.reLaunch({
					url:'/pages/home/home'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

.contains-area{
	margin: 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	

}

.logos{
	width: 600rpx;
	height: 300rpx;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: orange;
}

.input-css{
	border: 1px solid rgba(0, 0, 0, 0.1);
	height: 60rpx;
	width: 500rpx;
	border-radius: 20px;
	padding: 0 10px;
	margin-top: 20px;
	
	display: flex;
	flex-direction: row;
	align-items: center;
	
	.clear-btns{
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inputs{
		flex: 1;
	}
}

.forget-area{
	margin-top: 5px;
	width: 500rpx;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
}

.btns{
	margin-top: 30px;
	background-color: #0076ff;
	color: #fff;
	width: 300rpx;
}

</style>
