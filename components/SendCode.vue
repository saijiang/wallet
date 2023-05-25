<template>
	<view>
		<view class="code-areas" :class="codeCss()" @click="sendCodeAction">
			<text>{{codeTitle}}</text>
		</view>
	</view>
</template>

<script>
	import tools from '../tools/tools.js'
	export default {
		name:"SendCode",
		data() {
			return {
				codeTitle:'获取验证码',
				codeNumber:60,
				timers:null
			};
		},
		props:{
			phone:{
				type:String,
				default:''
			}
		},
		methods:{
			codeCss(){
				if(tools.filterphone(this.phone)){
					return 'code-normal'
				}
				else{
					return 'code-click'
				}
			},
			
			sendCodeAction(){
				if(this.timers)return
				this.$emit('sendAction')
				this.timers = setInterval((n) =>{
					this.codeNumber--
					if(this.codeNumber <= 0){
						this.codeTitle = '获取验证码'
						this.codeNumber = 60
						clearInterval(this.timers)
						this.timers = null
					}
					else{
						this.codeTitle = '重新发送'+this.codeNumber+'s'
					}
				},1000)
			}
			
			
		}
		
		
		
	}
</script>

<style lang="scss" scoped>

	.code-areas{
		width: 100px;
		height: 36px;
		margin-right: 15px;
		border-radius: 5px;
		color: #fff;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.code-normal{
		background-color: #0076ff;
		pointer-events: painted;
	}
	.code-click{
		background-color: rgba(0, 112, 255, 0.3);
		pointer-events: none;
	}


</style>