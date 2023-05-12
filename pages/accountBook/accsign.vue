<template>
	<view>
		<scroll-item :title-arr="titleArr" :setpnumber="setpnumber"></scroll-item>
	</view>
</template>

<script>
	import ScrollItem from '../../components/ScroItem.vue'
	export default {
		data() {
			return {
				titleArr:['填写信息','企业支付宝签约','开通专户'],
				setpnumber:1
			};
		},
		components:{
			ScrollItem
		}
		
		
	}
</script>

<style lang="scss" scoped>

</style>
