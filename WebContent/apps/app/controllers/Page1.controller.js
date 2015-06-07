ui5strap.controller("tld__domain.product__app.controllers.Page1", {

	onInit : function(oEvent){
		this.nc = this.getApp().getFrame().control; 

	},

	
	checkLogin : function(oEvent){
		_this.gotoPage("tld__domain.product__app.views.main");
	},
	
	myFormatterFunction : function(text){
		return text.toUpperCase();
	},

showRegist : function(){
		this.getView().byId('regist').show();
	},

	modalShown : function(oEvent){
		
	},

	modalHidden : function(oEvent){
		
	},
	
		gotoPageMain : function(oEvent){
		_this.gotoPage("tld__domain.product__app.views.main");
	}
});