<template>
	<view class="contain">
		<view class="image-area">
			<image class="logos" :src="imgUrl"></image>
		</view>
		<view v-show="showBtns" @click="sureBtnAction" class="btns-area">
			<text>按钮</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"SwiperItem",
		data() {
			return {
				
			};
		},
		props:{
			imgUrl:{
				type:String,
				default:''
			},
			showBtns:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			sureBtnAction(){
				this.$emit('agreeAction')
			}
		}
		
		
		
		
	}
</script>

<style lang="scss" scoped>
.contain{
	width: 100%;
	height: 100%;
	
	// background-repeat: no-repeat;
	// background-size: cover;
	// font-size: 20px;
	
	// display: flex;
	// flex-direction: column-reverse;
	// align-items: center;
	.image-area{
		height: 100%;
		width: 100%;
		.logos{
			height: 100%;
			width: 100%;
		}
	}
	
	.btns-area{
		position: absolute;
		bottom: 120px;
		width: 120px;
		height: 45px;
		background-color: rgba(12, 222, 120, 0.2);
		color: #fff;
		// margin-bottom: 120px;
		
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	
	// background-image: url('../static/lancher/lanch0.png');
}
</style>