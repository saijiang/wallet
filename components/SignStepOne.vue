<template>
	<view>
		<view class="line-area">
			<text class="tip-text">i</text>
			<text>绑定企业支付宝,需验证企业支付宝法定代表人/负责人信息。</text>
		</view>
		<view class="bottom-area">
			<text>法定代表人/负责人</text>
			<view class="item-area">
				<view class="left-t-css">
					<text class="start-css">*</text>
					<text>姓名:</text>
				</view>
				<input class="input-css" placeholder="请输入"/>
			</view>
			<view class="item-area">
				<view class="left-t-css">
					<text class="start-css">*</text>
					<text>证件号码:</text>
				</view>
				<input class="input-css" placeholder="请输入" maxlength="18"/>
			</view>
		</view>
		
		<button class="btns-css" @click="oneNextAction">下一步</button>
		
		
		
	</view>
</template>

<script>
	export default {
		name:"SignStepOne",
		data() {
			return {
				
			};
		},
		methods:{
			oneNextAction(){
				this.$emit('oneNext')
			}
		}
	}
</script>

<style lang="scss" scoped>

.line-area{
	background-color: #e6f7ff;
	border: 1px solid #91d5ff;
	width: 100%;
	height: 40px;
	
	display: flex;
	align-items: center;
	
	.tip-text{
		width: 20px;
		height: 20px;
		border-radius: 10px;
		text-align: center;
		background-color: #0076ff;
		color: #fff;
		margin-right: 5px;
	}
	
}

.bottom-area{
	margin-top: 10px;
	background-color: #fff;
	padding: 15px 10px 20px 20px;
	
	.item-area{
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		
		.left-t-css{
			width: 100px;
			.start-css{
				color: red;
				margin-right: 2px;
			}
		}
		.input-css{
			flex: 1;
			border: 1px solid rgba(0, 0, 0, 0.1);
			height: 40px;
			padding-left: 10px;
		}
		
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