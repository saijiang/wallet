<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			var value = uni.getStorageSync('lanch')
			if(value){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
			else{
				uni.reLaunch({
					url:'/pages/lanch/lanch'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
