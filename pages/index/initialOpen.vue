<template>
	<view class="contain">
		<view class="center-area" @click="clickPopAction">
			<text class="title-css">企业数据钱包</text>
			<text>上云上链加密存储数据,开展企业数字化管理</text>
		</view>
		<button class="bottom-btns" @click="createBtnsAction">创建企业数据密钥</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			
			uni.$on('walletpop',function(res){
				uni.getSubNVueById('walletpop').hide() // 隐藏 subnvue 

			})
		},
		methods:{
			createBtnsAction(){
				uni.showModal({
					title: '',
					content: '请先完成企业实名认证',
					confirmText:'去认证',
					showCancel:false,
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.navigateTo({
								url:'/pages/index/createkey'
							})
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})

			},
			clickPopAction(){
				const subNVue = uni.getSubNVueById('walletpop')
				subNVue.show('fade-in',200,function(){
					// 打开后进行一些操作
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contain{
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.center-area{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		.title-css{
			color: #0076ff;
			font-size: 25px;
			font-weight: bold;
			margin-bottom: 15px;
		}
	}
	.bottom-btns{
		width: 80%;
		height: 44px;
		border-radius: 22px;
		margin-bottom: 30px;
		background-color: #0076ff;
		color: #fff;
	}


</style>
