/**
 * @ClassName:myDefinePanel
 * @Description:
 * @author: ranyi
 * @date: 2020-07-11 0:00
 * Version: V1.0
 */
Ext.defin("base.js.define.MyDefinePanel",{
    itemId: 'MyDefinePanel01',
    title: '自定义面板一',
    extend: 'Ext.panel.Panel',
    xtype: 'define-MyDefinePanel',
    requests:[],
    mixins:[],
    layout: 'fit',
    constructor: function (config) {
        var me = this;
        config = config || {};
        Ext.applyIf(config, me.config);
        this.callParent(arguments);
    },
    initComponent: function () {

        Ext.apply(this,{
            tbar: [
                {
                    text: '测绘类型：',
                    xtype: 'tbtext',  /*Ext.toolbar.TextItem*/
                    padding: '0 0 0 4',
                    style: {
                        fontWeight: 'bold',
                        color: '#111'
                    }
                },
                {
                    text: '测绘类型名称',
                    xtype: 'tbtext',
                    padding: '0 10 0 0',
                    style: {
                        fontWeight: 'bold',
                        textAlign: 'right',
                        color: '#FFC0CB'
                    }
                },
                '-',
                {
                    text: '业务类型：',
                    xtype: 'tbtext',
                    padding: '0 0 0 4',
                    style: {
                        fontWeight: 'bold',
                        color: '#111'
                    }
                },
                {
                    text: '业务类型名称',
                    xtype: 'tbtext',
                    padding: '0 10 0 0',
                    style: {
                        fontWeight: 'bold',
                        textAlign: 'right',
                        color: '#FFC0CB'
                    }
                },
                '-',
                {
                    text: '测绘编号：',
                    xtype: 'tbtext',
                    padding: '0 0 0 4',
                    style: {
                        fontWeight: 'bold',
                        color: '#111'
                    }
                },
                {
                    text: '测绘编号值',
                    xtype: 'tbtext',
                    padding: '0 10 0 0',
                    style: {
                        fontWeight: 'bold',
                        textAlign: 'right',
                        color: '#FFC0CB'
                    }
                },
                '-',
                {
                    text: '业务件号：',
                    xtype: 'tbtext',
                    padding: '0 0 0 4',
                    style: {
                        fontWeight: 'bold',
                        color: '#111'
                    }
                },
                {
                    text: '业务件号值',
                    xtype: 'tbtext',
                    padding: '0 10 0 0',
                    style: {
                        fontWeight: 'bold',
                        textAlign: 'right',
                        color: '#FFC0CB'
                    }
                }
            ]
        });
    }

});