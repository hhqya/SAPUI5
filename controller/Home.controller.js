sap.ui.define([
   "sap/ui/message/controller/BaseController"
], function (BaseController) {
   "use strict";
   return BaseController.extend("sap.ui.message.controller.Home", {
	   toStationClock : function (oEvent){
		   this.getRouter().navTo("stationClock");
	   },
	   toWorkList : function(oEvent){
		   this.getRouter().navTo("workOrderList")
	   },
	   toShowMoney : function(oEvent){
		   this.getRouter().navTo("showMoney");
	   },
	   toShowImage : function (){
	   		this.getRouter().navTo("showImage");
	   }
   });

});
