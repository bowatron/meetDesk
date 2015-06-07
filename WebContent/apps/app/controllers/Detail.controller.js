ui5strap.controller("tld__domain.product__app.controllers.Detail", {

	onInit : function(oEvent){
		this.nc = this.getApp().getFrame().control; 




 this.nc.setBindingContext("/meetdesk/appdata/org/1/");
	//var srcButton = oEvent.getSource();

	//	srcButton.setSelected(!srcButton.getSelected());
	
	
	
	
	
	
	
		},

onBeforeRendering: function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
	var searchString = oModel.getProperty("/appdata/searchstring");	
var para = getParam("orgId");

		},

onAfterRendering: function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	

		},
	
	myFormatterFunction : function(text){
		return text.toUpperCase();
	},
	


	
	

});