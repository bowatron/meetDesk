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
var spaces  = oModel.getProperty("/appdata/spacedata"); 
var spaceId = getParam("spaceId");

var i = 0;
while (spaces[i].id != spaceId || spaces.length <= i) {
    i++;
}

if (spaceId ===  spaces[i].id) {
	
var spacePath = "/appdata/spacedata" + "/" + i + "/";
	oSpaceModel = new sap.ui.model.json.JSONModel();
	oSpaceModel.setData(spaces[i]);
//	oSpaceModel = this.getApp().getRootControl().getModel(spacePath);

   this.getView().setModel(oSpaceModel, "spaces");

}else
	{
	alert("keine Raumdaten gefunden");
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
	}
	}
	)
	}


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