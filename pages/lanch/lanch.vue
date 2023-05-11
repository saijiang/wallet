<template>
	<view>
		<button @click="sureBtnAction">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			sureBtnAction(){
				uni.setStorage({
					key:'lanch',
					data:'success',
					success: () => {
						uni.reLaunch({
							url:'/pages/index/index'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
