<template>
	<view class="contains">
		<view class="web-area">
			<iframe style="width: 100%;height: 100%;" src="https://blog.csdn.net/weixin_44794123/article/details/115956949"></iframe>
		</view>
		<button class="btns-css" @click="oneNextAction">下一步</button>
	</view>
</template>

<script>
	export default {
		name:"SignStepTwo",
		data() {
			return {
				
			};
		},
		methods:{
			oneNextAction(){
				this.$emit('twoNext')
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.contains{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

.web-area{
	background-color: #fff;
	width: 300px;
	height: 300px;
	border-radius: 5px;
	margin-top: 10px;
}

.btns-css{
	background-color: #0076ff;
	color: #fff;
	width: 120px;
	height: 45px;
	margin-top: 30px;
}

</style>