ui5strap.controller("tld__domain.product__app.controllers.main", {

	onInit : function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
		},

onBeforeRendering: function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
	var searchString = oModel.getProperty("/appdata/searchstring");
	
	
		},

	
	gotoResult : function(oEvent){
		
			this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
    var searchString = oModel.getProperty("/appdata/searchstring");
	
	var srcButton = oEvent.getSource();


ui5strap.Action.run({
    
    "parameters" : {
      
      "__format" : "AJ2.0",
      "__modules" : "ui5strap.AMGotoPage",

      "gotoPage" : {
        "viewName" : "tld__domain.product__app.views.Result",
		"transition" : "transition-flip",
		"writeHistory" : true,
		"bookmarkable" : true,
		"searchstring" : searchString
	}

    },
  

});
		
	},

onAfterRendering: function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	

	
	
		},

onExit: function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	
		},
	
	myFormatterFunction : function(text){
		return text.toUpperCase();
	},
	
	
	
	
	

});