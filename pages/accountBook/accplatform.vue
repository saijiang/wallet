<template>
	<view>
		<view class="item-pub-area item-top-area">
			<text>请选择需要开通专户的平台</text>
		</view>
		
		<view>
			<view class="item-pub-area" v-for="(item,index) in listObj" :key="index">
				<text>{{item.name}}</text>
				<text class="round-norma round-pub"></text>
			</view>
		</view>
		
		<view class="bottom-area">
			<button class="btns" @click="sureBtnActions">确定</button>
		</view>
		
	</view>
</template>

<script>
	import {pubdata} from '../../tools/pub-data.js'
	export default {
		data() {
			return {
				listObj:[]
			};
		},
		created() {
			var pubData = pubdata()
			this.listObj = pubData.platformData
		},
		methods:{
			sureBtnActions(){
				uni.navigateTo({
					url:'/pages/accountBook/accsign'
				})
			}
		}
		
		
		
	}
</script>

<style lang="scss" scoped>

  .item-pub-area{
	  background-color: #fff;
	  height: 45px;
	  padding: 0 10px;
	  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	  
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  
  }
  
  .item-top-area{
	margin-top: 10px; 
	margin-bottom: 10px;
	color: #333;
  }
  
  .round-pub{
	  height: 30px;
	  width: 30px;
	  color: red;
  }
  .round-norma{
	  content: "\e600";
  }
  
  
  .bottom-area{
	  margin-top: 50px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  
	  .btns{
		  background-color: #0076ff;
		  color: #fff;
		  width: 120px;
		  height: 40px;
		  
		  display: flex;
		  align-items: center;
		  justify-content: center;
	  }
  }

</style>
