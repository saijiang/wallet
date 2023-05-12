<template>
	<view class="contains">

		<view class="top-area">
			<view v-for="(item,index) in titleArr" :key="index" class="top-item-area" :class="index+1 == titleArr.length  ? '' : 'top-item-area-equal'">
				<view class="round-pub-area" :class="roundCss(index+1)">
					<text>{{index+1}}</text>
				</view>
				<view class="line-area" :class="lineCss(index+1)"></view>
			</view>
		</view>
		<view class="bottom-area">
			<view v-for="(item,index) in titleArr" :key="index" :class="titleCss(index+1)">
				<text>{{item}}</text>
			</view>
		</view>
		
		
		
	</view>
	

	
	
	
	
</template>

<script>
	export default {
		name:"scroItem",
		data() {
			return {
				centerNumber:1
			};
		},
		props:{
			titleArr:{
				type:Array,
				default:[]
			},
			setpnumber:{
			  type:Number,
			  default:1 // 默认为1  从 1开始 2 3.......
			}
			
		},
		methods:{
			// 当前选中数据判断
			judegeCurrentNumber(){
			  if(this.setpnumber < 1){
				  this.centerNumber = 1
			  }	
			  else if(this.setpnumber > this.titleArr.length){
				   this.centerNumber = this.titleArr.length
			  }
			  else
			   this.centerNumber = this.setpnumber
			},
			// 圆圈样式
			roundCss(n){
				this.judegeCurrentNumber()
				if(n <= this.centerNumber){
					return 'round-select-area'
				}
				else
				 return 'round-normal-area'
			},
			//线条样式
			lineCss(n){
				this.judegeCurrentNumber()
				if(n <= this.centerNumber){
					return 'line-select-area'
				}
				else
				 return 'line-normal-area'
			},
			// 标题字体样式
			titleCss(n){
				this.judegeCurrentNumber()
				if(n <= this.centerNumber){
					return 'title-areas-select'
				}
				else
				 return 'title-areas-normal'
				
			}


		}
		
		
		
		
		
	}
</script>

<style lang="scss" scoped>


 .contains{
	 background-color: #fff;
	 height: 70px;
	 margin-top: 10px;
	 width: 100%;
	 
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
 }
  .top-area{

	  padding-left: 25px;
	  padding-right: 25px;
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
	  
	  .top-item-area-equal{
		   flex: 1;
	  }
	  .top-item-area{
		 
		  display: flex;
		  flex-direction: row;
		  align-items: center;
		  .round-pub-area{
	     	  height: 26px;
			  width: 26px;
			  border-radius: 13px;
		  	  margin-bottom: 3px;
			  
			  display: flex;
			  align-items: center;
			  justify-content: center;
		  }
		  .round-normal-area{
			  border: 1px solid rgba(0, 0, 0, 0.1);
			  color: rgba(0, 0, 0, 0.1);
		  }
		  .round-select-area{
			  border: 1px solid #0076ff;
			  color: #0076ff;
		  }
		  
		  .line-area{
			  height: 2px;
			  flex: 1;
		  }
		  .line-normal-area{
			  background-color:rgba(0, 0, 0, 0.1);
		  }
		  .line-select-area{
		  	 background-color:#0076ff;
		  }
		  
		  
		  
		  
	  }
  }
 
  .bottom-area{
	
	  padding: 0 10px;
	 
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
	  
	  .title-areas-normal{
		   color: rgba(0, 0, 0, 0.1);
	  }
	  .title-areas-select{
		  color: #0076ff;
	  }
  }


</style>