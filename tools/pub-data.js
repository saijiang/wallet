
const pubdata = function (){
  let popItemArray =[
	  {
		icon:'../../static/logo.png',
		name:'企业实名认证',
		file:'enterAuthen/enterSuccess'
		
	},{
		icon:'../../static/logo.png',
		name:'企业账本',
		file:'accountBook/accbinding'
	},{
		icon:'../../static/logo.png',
		name:'VIP会员',
		file:'vipmember/index'
	},{
		icon:'../../static/logo.png',
		name:'管理手机号',
		file:'openphone/index'
	}]
	
	let lanchLogo = ['/static/lancher/lanch0.png','/static/lancher/lanch1.png','/static/lancher/lanch0.png'] // 动态设置时 本地图片不用添加.. 或者 @
	
	let platformData = [{
		name:'铁路运费贷服务管理平台',
		select:false
	},{
		name:'票据服务管理平台',
		select:false
	},{
		name:'汇融e链服务管理平台',
		select:false
	},{
		name:'零立方服务管理平台',
		select:false
	}]
	
	
	let wobjlist = [
		{
			name:'电子合同',
			file:'elecontract/index'
		},
		{
			name:'企业账单',
			file:''
		},
		{
			name:'数据资产',
			file:''
		}
	]
	
	return {
		popItemArray,
		lanchLogo,
		platformData,
		wobjlist
	}
	
}

export  {
	pubdata
}