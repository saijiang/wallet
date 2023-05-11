<template>
	<view>
		<view class="top-area">
			<text>为保护你的数据隐私,企业数据钱包需要先设置密钥</text>
		</view>
		<view>
			<view class="input-area">
				<text class="start-css">*</text>
				<text class="title-csss">密钥</text>
				<input v-model="code" class="input-css" placeholder="请输入密钥"/>
			</view>
			<view class="input-area input-bottom-area">
				<text class="start-css">*</text>
				<text class="title-csss">确认密钥</text>
				<input v-model="ncode" class="input-css" placeholder="请输入确认密钥"/>
			</view>
		</view>
		
		<view class="bottom-area">
			<text @click="createPassWordAction" class="btns-pub" :class="btnsCss()">创建</text>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:'',
				ncode:''
			};
		},
		methods:{
			btnsCss(){
			 if(this.code.length > 6 && this.ncode.length > 6){
				 return 'btns-can'
			 }
			 else
			  return 'btns-normal'
			 
			},
			createPassWordAction(){
				console.log('创建密钥')
				uni.reLaunch({
					url:'/pages/home/home'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.top-area{
	color: rgba(0, 0, 0, 0.3);
	font-size: 15px;
	height: 45px;
	
	display: flex;
	align-items: center;
	justify-content: center;
}

.input-area{
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 15px;
	border-top: solid 1px rgba(0, 0, 0, 0.3);
	box-sizing: border-box;
	height: 50px;
	
	.start-css{
		color: red;
		margin-left: 20px;
	}
	
	.title-csss{
		width: 80px;
	}
	
	.input-css{
		
		flex: 1;
	}
}

.input-bottom-area{
	border-bottom: solid 1px rgba(0, 0, 0, 0.3);
	box-sizing: border-box;
}

.bottom-area{
	margin-top: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	.btns-pub{
		width: 200px;
		color: #fff;
		font-size: 16px;
		text-align: center;
		padding: 10px 0;
		border-radius: 26px;
	}
	
	.btns-normal{
		background-color: rgba(0, 0, 0, 0.3);
		pointer-events: none;
	}
	
	.btns-can{
		background-color: #0076ff;
		pointer-events: painted;
	}
	
	
}


</style>
