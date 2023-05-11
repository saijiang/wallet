
const pubdata = function (){
  let popItemArray =[
	  {
		icon:'../../static/logo.png',
		name:'企业实名认证',
		file:'enterAuthen/enterSuccess'
		
	},{
		icon:'../../static/logo.png',
		name:'企业账本',
		file:'enterAuthen/enterSuccess'
	},{
		icon:'../../static/logo.png',
		name:'VIP会员',
		file:'enterAuthen/enterSuccess'
	},{
		icon:'../../static/logo.png',
		name:'管理手机号',
		file:'enterAuthen/enterSuccess'
	}]
	
	let lanchLogo = ['/static/lancher/lanch0.png','/static/lancher/lanch1.png','/static/lancher/lanch0.png'] // 动态设置时 本地图片不用添加.. 或者 @
	
	return {
		popItemArray,
		lanchLogo
	}
	
}

export  {
	pubdata
}