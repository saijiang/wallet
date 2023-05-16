<template>
	<view>
		<scroll-item :title-arr="titleArr" :setpnumber="setpnumber"></scroll-item>
		<view>
			<sign-one v-if="setpnumber == 1"></sign-one>
		</view>
	</view>
</template>

<script>
	import ScrollItem from '../../components/ScroItem.vue'
	import SignOne from '../../components/SignStepOne.vue'
	export default {
		data() {
			return {
				titleArr:['填写信息','企业支付宝签约','开通专户'],
				setpnumber:1
			};
		},
		components:{
			ScrollItem,
			SignOne
		}
		
		
	}
</script>

<style lang="scss" scoped>

</style>
