/**
 * @ClassName:viewPage02
 * @Description:
 * @author: ranyi
 * @date: 2020-07-17 18:22
 * Version: V1.0
 */
Ext.onReady(function () {

    Ext.create("Ext.panel.Panel",{
        title: "数据详情",
        id: "detail_panel_id",
        width: "100%",
        height: "100%",
        layout: 'fit',
        items: [
            {
               xtype: "button",
               text: "aaaa",
               width: 100,
               height: 100
            }
        ],
        renderTo: Ext.getBody()
    });

});