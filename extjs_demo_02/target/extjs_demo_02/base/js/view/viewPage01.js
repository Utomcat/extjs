/**
 * @ClassName:viewPage01
 * @Description:
 * @author: ranyi
 * @date: 2020-07-15 19:22
 * Version: V1.0
 */
Ext.onReady(function () {

    let me = this;

    Ext.create("Ext.window.Window", {
        title: "业务操作选择",
        id: "panel_window_id",
        width: 500,
        height: 300,
        bodyPadding: 10,
        autoScroll: true,
        resizable: true,
        modal: true,
        layout: "fit",
        frame: false,
        items: [
            {
                xtype: "panel",
                id: "business_panel_item",
                layout: "vbox",
                border: 0,
                items: [
                    {
                        xtype: "fieldset",
                        columns: 2,
                        name: "rb",
                        title: "业务类型选择",
                        collapsible: true,
                        width: "99%",
                        height: 70,
                        defaultType: "radiogroup",
                        layout: "hbox",
                        padding: "10 10 10 10",
                        items: [
                            {
                                xtype: "radiogroup",
                                id: "rb_Id",
                                width: '99%',
                                columns: 2,
                                fieldLabel: "业务类型"+"<a style='color: red;font-size: 20px;alignment: center'>*</a>",
                                items: [
                                    {
                                        boxLabel: "变更",
                                        name: 'rb',
                                        inputValue: "2",
                                        checked: true
                                    },
                                    {
                                        boxLabel: "注销",
                                        name: 'rb',
                                        inputValue: "3"
                                    }
                                ]
                            }
                        ]

                    },
                    {
                        xtype: "fieldset",
                        name: "ft",
                        columnWidth: 1,
                        title: "测绘编号",
                        collapsible: true,
                        defaultType: "textfield",
                        layout: "vbox",
                        width: "99%",
                        items: [
                            {
                                xtype: "textfield",
                                fieldLabel: "需修改的测绘编号"+"<a style='color: red;font-size: 20px;alignment: center'>*</a>",
                                width: "99%",
                                labelWidth: 145,
                                name: "survey_text_item",
                                id: "survey_text_id",
                                emptyText: "输入测绘编号",
                                allowBlank: false
                            }
                        ]

                    },
                    {
                        width: "99%",
                        layout: "hbox",
                        border: 0,
                        tbar: [
                            {
                                xtype: "button",
                                text: "确认",
                                width: 150,
                                margin: "20 40 0 40",
                                handler:function (_this,e) {
                                    //console.log(typeof me);
                                    //console.log(Ext.getCmp("business_panel_item").items.items);
                                    //console.log(Ext.getCmp("survey_text_id"));
                                    //console.log(me.up("business_panel_item"));
                                    //console.log(me.down("business_panel_item"));
                                    //console.log(Ext.getCmp("rb_Id"));
                                    //console.log(regiType);
                                    //console.log(surveyCode);
                                    let surveyCode = Ext.getCmp("survey_text_id").value;

                                    if (null == surveyCode || surveyCode === ""){
                                        Ext.Msg.alert("空值提示","测绘编号未填写，请先填写测绘编号！");
                                        return;
                                    }

                                    let regiTypes = Ext.getCmp("rb_Id").items.items;
                                    let regiType;
                                    for (var i = 0;i<regiTypes.length;i++){
                                        //console.log(regiTypes[i]);
                                        if (regiTypes[i].checked){
                                            regiType = regiTypes[i].inputValue;
                                            continue;
                                        }
                                    }

                                    if (regiType == null || (typeof regiType) === undefined){
                                        Ext.Msg.alert("操作类型为选择提示","请选择业务类型！");
                                    }else {
                                        //Ext.Msg.alert("regiType  ==》 " + regiType);

                                        //

                                    }
                                }
                            },
                            "->",
                            {
                                xtype: "button",
                                text: "取消",
                                  width: 150,
                                margin: "20 60 0 40",
                                handler: function (_this,e) {
                                    //console.log(Ext.getCmp("panel_window_id"));
                                    Ext.getCmp("panel_window_id").close();
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }).show();

})