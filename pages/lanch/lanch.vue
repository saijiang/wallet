<template>
	<view class="contains">
		
		<swiper class="swiper-area">
			<swiper-item v-for="(item,index) in logoArr" :key="index">
				<image class="logos" :src="item"></image>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import {pubdata} from '../../tools/pub-data.js'
	
	export default {
		data() {
			return {
				logoArr:[]
			};
		},
		created() {
		   const pupData = pubdata()
		   this.logoArr = pupData.lanchLogo	
		 
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

<style lang="scss" scoped>
.contains{
	height: 100%;
	.swiper-area{
		width: 100%;
		height: 100%;
		background-color: orange;
		.logos{
			width: 100%;
			height: 100%;
			background-color: blue;
		}
	}
}
</style>
