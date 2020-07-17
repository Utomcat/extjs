/**
 * @ClassName:myDefinePanel02
 * @Description: 自定义页面组件
 * @author: ranyi
 * @date: 2020-07-17 11:27
 * Version: V1.0
 */
Ext.defin("base.js.define.myDefinePanel02",{
    extend: "Ext.Component",//当前页面继承自那个Ext组件
    alias: "base-js-define-myDefine02", //自定义当前组件的别名
    requires: [],//当前页面引入的其他页面
    mixins: {ctest: ""},//
    config: {},//设置初始化该页面时的一些初始参数
    width: 800,
    height: 700,
    bodyPadding: 10,
    autoScroll: true,
    resizable: true,
    modal: true,
    layout: "fit",
    frame: false,//
    constructor:function (config) {
        var me = this;
        config = config || {};
        Ext.applyIf(config,me.config);
        this.callParent(arguments);
    },
    initComponent: function () {

        //全局变量声明
        var me = this;

        //页面渲染的组件声明
        Ext.apply(this,{
            items:[
                {
                    xtype: "panel",
                    itemId: "business_panel_item",
                    layout: "vbox",
                    title: "测绘成果测撤销或变更",
                    items: [
                        {
                            xtype: "fieldset",
                            columnWidth: 1,
                            name: "rb",
                            title: "业务类型选择",
                            collapsible: true,
                            defaultType: "radiogroup",
                            layout: "hbox",
                            items: [
                                {
                                    xtype: "radiogroup",
                                    columns: 2,
                                    items: [
                                        {
                                            boxLabel: "变更",
                                            name: 'rb',
                                            inputValue: "2"
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
                            items: [
                                {
                                    xtype: "textfield",
                                    fieldLabel: "需修改的测绘编号：",
                                    name: "survey_text_item",
                                    allowBlank: false
                                }
                            ]

                        },
                        {
                            width: "99%",
                            layout: "hbox",
                            tbar: [
                                {
                                    text: "确认"
                                },
                                {
                                    text: "取消"
                                }
                            ]
                        }
                    ]
                }
            ],

        });

        this.callParent(arguments);

    }

});