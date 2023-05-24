<template>
	<view class="contains">
		
		<swiper class="swiper-area" :indicator-dots="true">
			<swiper-item v-for="(item,index) in logoArr" :key="index">
				<!-- <image class="logos" :src="item"></image> -->
				<swiperr-items :img-url="item" :show-btns="(index+1) == logoArr.length" @agreeAction="agreeAction"></swiperr-items>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import {pubdata} from '../../tools/pub-data.js'
	import SwiperrItems from '../../components/SwiperItem.vue'
	
	export default {
		data() {
			return {
				logoArr:[]
			};
		},
		components:{
			SwiperrItems
		},
		created() {
		   const pupData = pubdata()
		   this.logoArr = pupData.lanchLogo	
		 
		},
		methods:{
			agreeAction(){
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
	page{
		background-color: transparent;
	}
.contains{
	height: 100%;
	.swiper-area{
		width: 100%;
		height: 100%;
		.logos{
			width: 100%;
			height: 100%;
			
		}
	}
}
</style>
