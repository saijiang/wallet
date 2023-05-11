<template>
	<view>
		<view class="bottom-area">
			<view class="top-area">
				<text>金链汇信</text>
				<text class="text-css">已实名认证</text>
			</view>
			<view class="info-area">
				<view class="item-area">
					<text>统一社会信用代码</text>
					<text>212121212</text>
				</view>
				<view class="item-area">
					<text>法定代表人</text>
					<text>212121212</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>

 .bottom-area{
	 background-color: #fff;
	 margin-top: 20px;
	 .top-area{
		 height: 45px;
		 padding: 0 15px;
		 display: flex;
		 flex-direction: row;
		 align-items: center;
		 justify-content: space-between;
		 border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		 box-sizing: border-box;
		 .text-css{
			 color: orange;
			 border: 1px solid orange;
			 box-sizing: border-box;
			 padding: 2px 4px;
			 border-radius: 2px;
		 }
	 }
	 
	 .info-area{
		 padding-bottom: 15px;
		 .item-area{
		 		 height: 40px;
		 		 padding: 0 15px;
		 		 display: flex;
		 		 flex-direction: row;
		 		 align-items: center;
		 		 justify-content: space-between;
		 		 
		 }
	 }

	 
 }


</style>
