<template>
	<view>
		
		<view style="margin-top: 10px;">
			
			<view class="item-areas">
				<view class="name-areas">
					<text style="color: red;">*</text>
					<text>姓名</text>
				</view>
				<input v-model="objdata.name" style="flex: 1;" maxlength="15"  placeholder="请输入操作员真实姓名"/>
			</view>
			<view class="item-areas">
				<view class="name-areas">
					<text style="color: red;">*</text>
					<text>手机号</text>
				</view>
				<input v-model="objdata.phone" style="flex: 1;" maxlength="11" type="number" placeholder="请输入操作员的手机号"/>
			</view>
			<view class="item-areas">
				<view class="name-areas">
					<text style="color: red;">*</text>
					<text>验证码</text>
				</view>
				<input v-model="objdata.code" style="flex: 1;" type="number" placeholder="请输入验证码"/>
				<send-code :phone="objdata.phone" @sendAction="sendCodeAction"></send-code>
			</view>
			
			<button class="btns" :class="btnsCss()" @click="sureAction">确定</button>
		</view>

	</view>
</template>

<script>
	
	import tools from '../../tools/tools.js'
	
	export default {
		data() {
			return {
				objdata:{
					name:'',
					phone:'',
					code:''
				}
			};
		},
		methods:{

			// 确定按钮样式
			btnsCss(){
			 if(2 < this.objdata.name.length < 16 && tools.filterphone(this.objdata.phone) && this.objdata.code.length){
				 return 'btns-can'
			 }
			 else
			  return 'btns-no'
			},
			
			// 发送验证码
			sendCodeAction(){
				uni.showToast({
					title:'验证码',
					icon:'none'
				})
			},
			//确定
			sureAction(){
				uni.showToast({
					title:'确定',
					icon:'none'
				})
			}	
		}
	
	}
</script>

<style lang="scss" scoped>

.item-areas{
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	height: 46px;
	
	display: flex;
	flex-direction: row;
	align-items: center;
	
	.name-areas{
		margin-left: 15px;
		width: 100px;
	}
	
	.code-areas{
		width: 100px;
		height: 36px;
		margin-right: 15px;
		border-radius: 5px;
		color: #fff;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.code-normal{
		background-color: #0076ff;
		pointer-events: painted;
	}
	.code-click{
		background-color: rgba(0, 112, 255, 0.3);
		pointer-events: none;
	}
	
}


.btns{
	margin: 30px 20px 0 20px;
	height: 44px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 22px;
	border: none;
}

.btns-can{
	background-color: #0076ff;
	pointer-events: painted;
}

.btns-no{
	background-color: rgba(0, 112, 255, 0.3);
	pointer-events: none;
}



</style>
