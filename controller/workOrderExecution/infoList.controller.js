sap.ui.define([
    "sap/ui/message/controller/BaseController",
    "sap/ui/core/routing/History"
], function (BaseController,History) {
    "use strict";
    return BaseController.extend("sap.ui.message.controller.workOrderExecution.infoList", {
        routerBtn:function (){
            alert('click now')
        },
        onNavBack: function (){
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined){
                window.history.go(-1);
            }
        },
        saveButton:function (){
            console.log('save');
        },
        backButton:function (){
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            window.history.go(-1);
        }
    });
});
