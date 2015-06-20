ui5strap.controller("tld__domain.product__app.controllers.Result", {

	onInit : function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
		},
		
		

onBeforeRendering: function(oEvent){
		
	//	sap.ui.getCore().loadLibrary("openui5.googlemaps", "openui5/googlemaps/");
		this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
	var searchString = oModel.getProperty("/appdata/searchstring");

if (searchString === " "){
searchString = getParam("searchstring");

oModel.setProperty("/appdata/searchstring", searchString);		

this.getApp().getRootControl().setModel(oModel);

}
else{
 }

   
		},


find : function(oEvent){
		
			this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
	var searchString = oModel.getProperty("/appdata/searchstring");
	var capacity = oModel.getProperty("/appdata/capacity");
	var room = oModel.getProperty("/appdata/room");
	var from = oModel.getProperty("/appdata/from");
	var to = oModel.getProperty("/appdata/to");
	
	
	//var srcButton = oEvent.getSource();

	//	srcButton.setSelected(!srcButton.getSelected());

//var oPath = srcButton.oBindingContexts.meetdesk.sPath;

//var org = oModel.getProperty(oPath);

//	alert(org.id);
//alert(to);
//oModel.setProperty("/appdata/detail_path", oString1);		

//this.getApp().getRootControl().setModel(oModel);

window.location.reload();
	
ui5strap.Action.run({
    
    "parameters" : {
      
      "__format" : "AJ2.0",
      "__modules" : "ui5strap.AMGotoPage",

      "gotoPage" : {
      "viewName" : "tld__domain.product__app.views.GotoResult",
	"transition" : "transition-flip",
	"writeHistory" : true,
	"bookmarkable" : true,
	"searchstring" : searchString,
"roomtype" : room,
"to" : to,
"from" : from,
	}

    },
    
    "app" : this.getApp()

});
	
	
	
	},
getprop : function(oEvent){
		
			this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
	var searchString = oModel.getProperty("/appdata/spacedata");
	
	var srcButton = oEvent.getSource();

		srcButton.setSelected(!srcButton.getSelected());

var oPath = srcButton.oBindingContexts.meetdesk.sPath;

var space = oModel.getProperty(oPath);

		alert(space.id);
//oModel.setProperty("/appdata/detail_path", oString1);		

//this.getApp().getRootControl().setModel(oModel);

//if (ui5strap.Action){
	
//	}
//else {
 

  //  }
	
	
ui5strap.Action.run({
    
    "parameters" : {
      
      "__format" : "AJ2.0",
      "__modules" : "ui5strap.AMGotoPage",

      "gotoPage" : {
        "viewName" : "tld__domain.product__app.views.Detail",
		"transition" : "transition-flip",
		"writeHistory" : true,
		"bookmarkable" : true,
		"spaceId" : space.id
	}

    },
    
    "app" : this.getApp()

});
	
	},

onAfterRendering: function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
	var searchString = oModel.getProperty("/appdata/searchstring");
	
	
		},

onExit: function(oEvent){
		this.nc = this.getApp().getFrame().control; 
	
	var oModel = new sap.ui.model.json.JSONModel();
	
	oModel = this.getApp().getRootControl().getModel("meetdesk");
	
	var searchString = oModel.getProperty("/appdata/searchstring");
	
	
		},
	
	myFormatterFunction : function(text){
		return text + "€ p.P.";
	//	return text.toUpperCase();
	},
	
	marker_clicked : function(oEvent){	
		var srcButton = oEvent.getSource();
		

	},
handleChange : function(oEvent){
			var oDP = oEvent.oSource;
			var oInput = sap.ui.getCore().byId("I2");
			var sValue = oEvent.getParameter("value");
			var bValid = oEvent.getParameter("valid");
			iEvent++;
			oInput.setValue("Change - Event " + iEvent + ": DatePicker " + oDP.getId() + ":" + sValue + " ;valid: " + bValid);
			if (bValid) {
				oDP.setValueState(sap.ui.core.ValueState.None);
			} else {
				oDP.setValueState(sap.ui.core.ValueState.Error);
			}
		},	

});