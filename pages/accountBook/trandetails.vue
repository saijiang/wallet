<template>
	<view>

		<z-paging>
			<template solt="top">
				<view class="top-area">
					<text>xx服务管理平台</text>
					<text>共10笔</text>
				</view>
			</template> 

			
			
			<view class="item-area" v-for="(item,index) in objlist" :key="index">
				<image class="logo-css"></image>
				<view class="right-bottom-area">
					<view class="right-areas">
						<text style="font-weight: bold;font-size: 15px;">资金拨入</text>
						<text>+10.00元</text>
					</view>
					<view class="right-areas">
						<text style="color: rgba(0, 0, 0, 0.6);">2023-01-01</text>
						<text>成功</text>
					</view>
				</view>
			</view>
			
		</z-paging>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objlist:['1','2','3','4','5']
			};
		}
	}
</script>

<style lang="scss" scoped>

  .top-area{
	  height: 45px;
	  display: flex;
	  padding: 0 10px;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
  }
  
  .item-area{
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  background-color: #fff;
	  margin-bottom: 10px;
	  height: 50px;
	  .logo-css{
		  width: 30px;
		  height: 30px;
		  margin: 0 10px;
		  background-color: orange;
	  }
	  .right-bottom-area{
		  flex: 1;
		  padding-right: 10px;
		  .right-areas{
			  display: flex;
			  flex-direction: row;
			  align-items: center;
			  justify-content: space-between;
		  }
		  
	  }

	  
	  
  }

</style>
