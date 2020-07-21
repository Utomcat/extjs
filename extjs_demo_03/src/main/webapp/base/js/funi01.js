(function(){
  Ext.onReady(function(){

    var me = this;
    var regiTypeList = [{"id":1,"name":"新建"},{"id":2,"name":"变更"},{"id":3,"name":"注销"},{"id":4,"name":"关联项目"}];
    var isHistoryList = [{"id":4,"name":"新建"},{"id":7,"name":"历史"},{"id":8,"name":"其他"}];
    var importTypeList = [{"id":1,"name":"从测绘库导入"},{"id":2,"name":"自定义"}];
    var storeA185_D_1 = [{"id":1,"name":"地号"},{"id":2,"name":"项目编号"},{"id":3,"name":"项目小区名称"},{"id":4,"name":"楼地址"}];
    var storeA185_D = '[{"id":1,"name":"地号"},{"id":2,"name":"项目编号"},{"id":3,"name":"项目小区名称"},{"id":4,"name":"楼地址"}]';
    var combostore = Ext.create("Ext.data.Store",{
      fields: ["id","name"],
      data: [{"id":1,"name":"地号"},{"id":2,"name":"项目编号"},{"id":3,"name":"项目小区名称"},{"id":4,"name":"楼地址"}]
    });

    //console.log(storeA185_D_1);
    //console.log(storeA185_D);

    //关联项目选项的提示信息
    var tip_tbtext_itemId_hidden = true;
    //楼栋类型
    var is_history_hidden = false;
    //楼栋编号
    var natuId_text_itemId_hidden = true;
    //变更类型
    var chageType_radiogroup_itemId_hidden = true;
    //其他
    var otherCheck_fieldset_itemId_hidden = true;
    //地号
    var queryByDh_txt_itemId_hidden = true;
    //项目编号
    var queryByXmxqid_txt_itemId_hidden = true;
    //小区名称
    var queryByXmxqmc_txt_itemId_hidden = true;
    //楼栋地址
    var queryByLdz_txt_itemId_hidden = true;
    //项目名称
    var periodName_fieldset_itemId_hidden = true;


   var myWin =   Ext.create("Ext.window.Window",{
      id: "myWin",
      title: "楼栋业务类型选择",
      width: 500, //"30%", //"70%",
      height: 200,//"30%",//"80%",
      resizable: true,//false,
      autoScroll: true,
      modal: true,
      border:0,
      items: [
        {
          xtype: "form",
          layout: "vbox",
          border:0,
          items: [
            {
              xtype:"fieldset",
              itemId:"houNew_form_itemId",
              width: "100%",
              layout: "vbox",
              margin:"2 0 8 8",
              border: 0,
              items: [
                //关联项目选项的提示信息，隐藏，当业务类型选择关联项目时，显示
                {
                  xtype: "tbtext",
                  itemId: "tip_tbtext_itemId",
                  margin: "20 0 0 -5",
                  text:"<span style='color:red;font-size:14px;font-weight:bold'>温馨提示：关联项目，楼栋类型将由历史变为新建，且不可逆！</span>",
                  hidden: tip_tbtext_itemId_hidden
                },
                //业务类型选择
                {
                  xtype: "radiogroup",
                  width: "100%",
                  name: "regiType",
                  fieldLabel: "业务类型<span style='color:red'>*</span>",
                  margin: "20 0 0 0",
                  items: [
                    {
                      boxLabel: regiTypeList[0].name,
                      inputValue: regiTypeList[0].id,
                      name: "regiType",
                      checked: true
                    },
                    {
                      boxLabel: regiTypeList[1].name,
                      inputValue: regiTypeList[1].id,
                      name: "regiType"
                    },{
                      boxLabel: regiTypeList[2].name,
                      inputValue: regiTypeList[2].id,
                      name: "regiType"
                    },{
                      boxLabel: regiTypeList[3].name,
                      inputValue: regiTypeList[3].id,
                      name: "regiType"
                    }
                  ],
                  listeners: {
                      //业务类型选择事件
                      change: function( _this, newValue, oldValue, eOpts){

                          console.log(newValue);

                          //选择的不是新建业务类型
                          if(newValue.regiType === 1){
                            myWin.queryById("tip_tbtext_itemId").setHidden(true);
                            myWin.queryById("isHistory").setHidden(false);
                            myWin.queryById("natuId_text_itemId").setHidden(true);
                            myWin.queryById("chageType_radiogroup_itemId").setHidden(true);
                            myWin.queryById("otherCheck_fieldset_itemId").setHidden(true);
                            myWin.queryById("queryByDh_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqid_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqmc_txt_itemId").setHidden(true);
                            myWin.queryById("queryByLdz_txt_itemId").setHidden(true);
                            myWin.queryById("periodName_fieldset_itemId").setHidden(true);
                          }else if (newValue.regiType === 2) {
                            myWin.queryById("tip_tbtext_itemId").setHidden(true);
                            myWin.queryById("isHistory").setHidden(true);
                            myWin.queryById("natuId_text_itemId").setHidden(false);
                            myWin.queryById("chageType_radiogroup_itemId").setHidden(false);
                            myWin.queryById("otherCheck_fieldset_itemId").setHidden(true);
                            myWin.queryById("queryByDh_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqid_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqmc_txt_itemId").setHidden(true);
                            myWin.queryById("queryByLdz_txt_itemId").setHidden(true);
                            myWin.queryById("periodName_fieldset_itemId").setHidden(true);

                          }else if (newValue.regiType === 3) {
                            myWin.queryById("tip_tbtext_itemId").setHidden(true);
                            myWin.queryById("isHistory").setHidden(true);
                            myWin.queryById("natuId_text_itemId").setHidden(false);
                            myWin.queryById("chageType_radiogroup_itemId").setHidden(true);
                            myWin.queryById("otherCheck_fieldset_itemId").setHidden(true);
                            myWin.queryById("queryByDh_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqid_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqmc_txt_itemId").setHidden(true);
                            myWin.queryById("queryByLdz_txt_itemId").setHidden(true);
                            myWin.queryById("periodName_fieldset_itemId").setHidden(true);

                          }else if (newValue.regiType === 4) {
                            myWin.queryById("tip_tbtext_itemId").setHidden(false);
                            myWin.queryById("isHistory").setHidden(true);
                            myWin.queryById("natuId_text_itemId").setHidden(false);
                            myWin.queryById("chageType_radiogroup_itemId").setHidden(true);
                            myWin.queryById("otherCheck_fieldset_itemId").setHidden(true);
                            myWin.queryById("queryByDh_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqid_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqmc_txt_itemId").setHidden(true);
                            myWin.queryById("queryByLdz_txt_itemId").setHidden(true);
                            myWin.queryById("periodName_fieldset_itemId").setHidden(false);

                          }else {
                            myWin.queryById("tip_tbtext_itemId").setHidden(true);
                            myWin.queryById("isHistory").setHidden(false);
                            myWin.queryById("natuId_text_itemId").setHidden(true);
                            myWin.queryById("chageType_radiogroup_itemId").setHidden(true);
                            myWin.queryById("otherCheck_fieldset_itemId").setHidden(true);
                            myWin.queryById("queryByDh_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqid_txt_itemId").setHidden(true);
                            myWin.queryById("queryByXmxqmc_txt_itemId").setHidden(true);
                            myWin.queryById("queryByLdz_txt_itemId").setHidden(true);
                            myWin.queryById("periodName_fieldset_itemId").setHidden(true);

                            Ext.Msg.alert("提示信息","未选择正确的业务类型");
                          }
                      }
                  }
                },
                //楼栋类型选择，显示，当选择变更、注销、关联项目时，隐藏；新建时，显示
                {
                  xtype: "radiogroup",
                  width: "100%",
                  name: "isHistory",
                  fieldLabel: "楼栋类型<span style='color:red'>*</span>",
                  margin: "20 0 0 0",
                  itemId: "isHistory",
                  hidden: is_history_hidden,
                  items: [
                    {
                      boxLabel: isHistoryList[0].name,
                      inputValue: isHistoryList[0].id,
                      name: "isHistory",
                      checked: true
                    },
                    {
                      boxLabel: isHistoryList[1].name,
                      inputValue: isHistoryList[1].id,
                      name: "isHistory"
                    },
                    {
                      boxLabel: isHistoryList[2].name,
                      inputValue: isHistoryList[2].id,
                      name: "isHistory"
                    }
                  ],
                  listeners:{

                  }
                },
                //楼栋编号输入框，隐藏，当选择业务类型为变更或注销时显示
                {
                  xtype: "numberfield",
                  fieldLabel:"楼栋编号<span style='color:red'>*</span>",
                  width:445,
                  hidden:natuId_text_itemId_hidden,
                  itemId: "natuId_text_itemId",
                  margin: "20 0 0 0",
                  name:"natuId",
                  emttyText:"输入楼栋编号"
                },
                //变更类型选择，隐藏，当业务类型为变更时显示
                {
                  xtype:"radiogroup",
                  itemId:"chageType_radiogroup_itemId",
                  name:"chageType",
                  fieldLabel:"变更类型<span style='color:red'>*</span>",
                  margin: "20 0 0 0",
                  width: "100%",
                  hidden:chageType_radiogroup_itemId_hidden,
                  items:[
                    {
                      boxLabel:importTypeList[0].name,
                      inputValue:importTypeList[0].id,
                      name:"chageType",
                      checked:true
                    },
                    {
                      boxLabel:importTypeList[1].name,
                      inputValue:importTypeList[1].id,
                      name:"chageType"
                    }
                  ]
                }
              ]
            },
            //楼栋类型为其他时，查询类别选择框
            {
              xtype: "fieldset",
              itemId: "otherCheck_fieldset_itemId",
              width: "100%",
              height: 50,
              layout: "hbox",
              margin: "20 0 10 8",
              border:0,
              hidden: otherCheck_fieldset_itemId_hidden,
              items: [
                //类型选择框
                {
                  xtype: "combo",
                  itemId:"otherChange_combo_itemId",
                  fieldLabel:"查询类别<span style='color:red'>*</span>",
                  labelSeparator:":",
                  labelWidth:80,
                  margin:"0 5 0 0",
                  width:295,
                  displayField: "name",
                  valueField:"id",
                  value:3,
                  aueryMode: "local",
                  store: combostore,//此处是一个Ext.data.Store对象,
                  listeners:{}
                },
                //以下为条件值的输入框
                //地号值输入框
                {
                  xtype: "combo",
                  width: 255,
                  itemId: "queryByDh_txt_itemId",
                  name: "dh",
                  hidden:queryByDh_txt_itemId_hidden,
                  emptyText: "输入地号",
                  //minLength:2,
                  listeners:{

                  }
                },
                //项目编号值输入框
                {
                  xtype: "combo",
                  width: 255,
                  itemId: "queryByXmxqid_txt_itemId",
                  name: "xmxqid",
                  hidden:queryByXmxqid_txt_itemId_hidden,
                  emptyText: "输入项目编号",
                  //minLength:2,
                  listeners:{

                  }
                },
                //项目小区名称值输入框
                {
                  xtype: "combo",
                  width: 255,
                  itemId: "queryByXmxqmc_txt_itemId",
                  name: "xmxqmc",
                  hidden:queryByXmxqmc_txt_itemId_hidden,
                  emptyText: "输入项目小区名称",
                  //minLength:2,
                  listeners:{

                  }
                },
                //楼地址值输入框
                {
                  xtype: "combo",
                  width: 255,
                  itemId: "queryByLdz_txt_itemId",
                  name: "ldz",
                  hidden:queryByLdz_txt_itemId_hidden,
                  emptyText: "输入楼地址",
                  //minLength:2,
                  listeners:{

                  }
                }
              ]
            },
            //选择关联项目时的选择条件
            {
              xtype: "fieldset",
              itemId: "periodName_fieldset_itemId",
              width: "100%",
              layout: "hbox",
              margin: "20 0 10 8",
              border:0,
              hidden: periodName_fieldset_itemId_hidden,
              items: [
                {
                  fieldLabel: "项目名称<span style='color:red'>*</span>",
                  labelWidth: 120,
                  margin: "0 5 0 0",
                  width: 445,
                  itemId: "periodName_compete_itemId",
                  xtype: "combo",
                  name:"periodRegiId",
                  emptyText: "输入项目名称"

                }
              ]
            },
            //确定取消按钮
            {
              width: "99%",
              layout: "hbox",
              border:0,
              tbar: [
                "->",
                {
                  text: "确定",
                  margin: "0 0 0 5",
                  handler:function(){

                  }
                },
                {
                  text: "cancel",
                  margin: "0 5 0 10",
                  handler:function(){
                    myWin.close();
                  }
                }
              ]
            }
          ]
        }
      ]
    }).show();

  });
})();
