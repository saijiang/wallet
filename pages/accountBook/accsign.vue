<template>
	<view>
		<scroll-item :title-arr="titleArr" :setpnumber="setpnumber"></scroll-item>
		<view style="margin-top: 10px;">
			<sign-one v-if="setpnumber == 1" @oneNext = "oneNextAction"></sign-one>
			<sign-two v-else-if="setpnumber == 2" @twoNext="twoNextAction"></sign-two>
			<sign-three v-else-if="setpnumber == 3" @openAccount="openAccountAction"></sign-three>
		</view>
	</view>
</template>

<script>
	import ScrollItem from '../../components/ScroItem.vue'
	import SignOne from '../../components/SignStepOne.vue'
	import SignTwo from '../../components/SignStepTwo.vue'
	import SignThree from '../../components/SignStepThree.vue'
	export default {
		data() {
			return {
				titleArr:['填写信息','企业支付宝签约','开通专户'],
				setpnumber:1
			};
		},
		components:{
			ScrollItem,
			SignOne,
			SignTwo,
			SignThree
		},
		methods:{
			// 认证第一步事件
			oneNextAction(){
				this.setpnumber++
			},
			//认证第二步事件
			twoNextAction(){
			 this.setpnumber++	
			},
			//开通专户
			openAccountAction(){
				uni.navigateBack({
					delta:2,
					success: () => {
						uni.showToast({
							icon:'success',
							title:'开通成功'
						})
					}
				})
			}
			
		}
		
		
	}
</script>

<style lang="scss" scoped>

</style>
