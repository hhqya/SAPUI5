sap.ui.define([
    "sap/ui/message/controller/BaseController",
    "sap/ui/core/routing/History",
    'sap/ui/model/json/JSONModel'
], function (BaseController,History,JSONModel) {
    "use strict";
    return BaseController.extend("sap.ui.message.controller.workOrderExecution.addList", {
        onInit:function (){
            var optionStatus = [
                        {
                            id:'0',
                            name:'正常',
                            value:'ok'
                        },
                        {
                            id:'1',
                            name:'异常',
                            value:'exception'
                        }
              ]
            var optionList = {
                  "optionStatus":optionStatus
            }
            var value = {
                "value": ''
            }
            //存入SAP数据缓存
            this.getView().setModel(new JSONModel(value));
            this.getView().setModel(new JSONModel(optionList),'optionStatus');
            this.getView().byId("selectItem").setFilterFunction(function(sTerm, oItem) {
                return oItem.getText().match(new RegExp(sTerm, "i")) || oItem.getKey().match(new RegExp(sTerm, "i"));
            });
        },
        //返回上一级
        onNavBack: function (){
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
                window.history.go(-1);
        },
        saveButton: function (){
            console.log('submit now');
        },
        backButton: function (){
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
                window.history.go(-1);
        }
    });
});
