<template>
	<view>
		<!-- <button @click="sureBtnAction">确定</button> -->
		<swiper>
			<swiper-item v-for="(item,index) in logoArr" :key="index">
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import {lanchLogo} from '../../tools/pub-data.js'
	
	export default {
		data() {
			return {
				logoArr:[]
			};
		},
		onLoad() {
		   this.logoArr = lanchLogo	
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
