/**
 * @ClassName:form01
 * @Description:
 * @author: ranyi
 * @date: 2020-07-09 13:47
 * Version: V1.0
 */
Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'Field with Label',
        width: 400,
        height: 200,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        layout: {
            type: 'hbox',
            align: 'middle'
        },
        items: [{
            xtype: 'textfield',
            hideLabel: true,
            flex: 1
        }, {
            xtype: 'label',
            forId: 'myFieldId',
            text: 'My Awesome Field',
            margin: '0 0 0 10'
        }]
    });
});