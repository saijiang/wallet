<template>
	<view class="contains">
		<view v-for="(item,index) in titleArray" :key="index" class="item-pub" :class="itemCss(index+1)" @click="clickItemAction(index+1)">
			<text>{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbarItem",
		data() {
			return {
				centerTable:0
			};
		},
		created() {
			if(this.currentTable < 1){
				 this.centerTable = 1
			}
			else if(this.currentTable > this.titleArray.length){
				 this.centerTable = this.titleArray.length
			}
			else
		     this.centerTable = this.currentTable	
		},
		props:{
			titleArray:{
				type:Array,
				default:[]
			},
			currentTable:{
				type:Number,
				default:1
			}
		},
		methods:{
			itemCss(index){
				
				if(this.centerTable == index){
					return 'item-select'
				}
				else
				return 'item-normal'
				
			},
			clickItemAction(n){
				
				if(n == this.centerTable) return
				this.centerTable = n
				this.$emit('selectItem',n)
			}
			
		}
		
		
		
	}
</script>

<style lang="scss" scoped>
	.contains{
		
		width: 100%;
		height: 45px;
		
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		
		.item-pub{
			box-sizing: border-box;
			flex: 1;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.item-normal{
			color: #333;
			border-bottom: none;
		}
		.item-select{
			color: #0076ff;
			border-bottom: 2px solid #0076ff;
		}
		
		
	}
</style>