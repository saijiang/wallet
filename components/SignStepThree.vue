<template>
	<view>
		<view class="center-area">
			<text class="t-titite">已完成签约</text>
			<text class="s-titite">还没有开通资金专户</text>
		</view>
		<button class="btns-css" @click="openAction">开通专户</button>
	</view>
</template>

<script>
	export default {
		name:"SignStepThree",
		data() {
			return {
				
			};
		},
		methods:{
			openAction(){
				this.$emit('openAccount')
			}
		}
	}
</script>

<style lang="scss" scoped>

.center-area{
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.t-titite{
		font-size: 20px;
		font-weight: bold;
	}
	.s-titite{
		font-size: 15px;
		margin-top: 10px;
	}
}

.btns-css{
	background-color: #0076ff;
	color: #fff;
	width: 120px;
	height: 45px;
	margin-top: 30px;
}


</style>