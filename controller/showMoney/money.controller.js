sap.ui.define([
    "sap/ui/message/controller/BaseController",
    "sap/ui/core/routing/History",
    'sap/ui/model/json/JSONModel'
], function (BaseController,History,JSONModel) {
    "use strict";
    return BaseController.extend("sap.ui.message.controller.showMoney.moneny", {
        onInit:function (){
        },
        //返回上一级
        onNavBack: function (){
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined){
                window.history.go(-1);
            }else{
                this.getRouter().navTo("appHome", {}, true);
            }
        },
    });
});
