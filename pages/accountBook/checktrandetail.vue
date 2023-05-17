<template>
	<view>
		<view class="top-area">
			<image class="logo-css"></image>
			<text class="number-css">+100.00元</text>
			<text class="status-text">成功</text>
			<text @click="checkPayAction">查看支付回单</text>
		</view>
	
		<view class="bottom-area">
			<view class="boottom-item-area">
				<text>交易账户</text>
				<text>xxxxx@163.com</text>
			</view>
			<view class="boottom-item-area">
				<text>业务发生时间</text>
				<text>2023-09-09</text>
			</view>
			<view class="boottom-item-area">
				<text>支付流水号</text>
				<text>123456</text>
			</view>
			<view class="boottom-item-area">
				<text>对方账户</text>
				<text>xxxxx@163.com</text>
			</view>
			<view class="boottom-item-area">
				<text>对方账户名</text>
				<text>xxxxx@163.com</text>
			</view>
			<view class="boottom-item-area">
				<text>备注信息</text>
				<text>转账</text>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad:function(res){
			console.log(res)
			var id = res.id
		},
		methods:{
			checkPayAction(){
				const subNVue = uni.getSubNVueById('receipt')
				subNVue.show('fade-in',200,function(){
					// 打开后进行一些操作
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

  .top-area{
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  padding: 10px 0;
	  color: #0076ff;
	  .logo-css{
		  width: 50px;
		  height: 50px;
		  background-color: orange;
	  }
	  .number-css{
		  color: red;
		  margin: 10px 0;
	  }
	  .status-text{
		  font-size: 12px;
		  color: #333;
		  margin-bottom: 10px;
	  }
  }


  .bottom-area{
	  background-color: #fff;
	  padding: 10px;
	  .boottom-item-area{
		  margin-bottom: 5px;
		  display: flex;
		  flex-direction: row;
		  align-items: center;
		  justify-content: space-between;
	  }
  }


</style>
