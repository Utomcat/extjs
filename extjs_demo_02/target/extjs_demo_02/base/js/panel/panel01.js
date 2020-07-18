/**
 * @ClassName:panel
 * @Description:
 * @author: ranyi
 * @date: 2020-07-11 9:31
 * Version: V1.0
 */
Ext.onReady(function () {

    Ext.create("Ext.panel.Panel",{
        id: 'panel1', //设置该面板的ID
        title: '面板组件学习',  //会生成一个标题栏，没有此属性时，则不会有标题栏
        /*margin: '10 0 0 10', */ //设置面板的border到浏览器边框的距离 即外边距
        /*padding: '10 10 10 10',*/  //设置面板的border到面板内的内容的距离 即内边距
        width: '100%', //面板宽度
        height: '100%', //面板的高度
        layout: 'fit', //设置当前面板的布局
        items:[
            {
                xtype:'tabpanel',
                itemId: 'tabPanel1',
                title: '卡片项',
                width: '100%',
                height: '100%',
                activeTab: 0, //设置默认的激活Tab 从 0 开始
                frame:false,
                /*bodyPadding: 5,*/
                items:[
                    {
                        title: 'Tab1',
                        bodyPadding:10,
                        tabName:'childPanel1',
                        xtype: 'panel',
                        items: [
                            {
                                fieldLabel: 'Start Date1：',
                                itemId: 'start_date_1',
                                xtype: 'datefield'
                            },
                            {
                                itemId: 'end_date_1',
                                fieldLabel: 'End Date1：',
                                xtype: 'datefield'
                            }
                        ]
                    },
                    {
                        title: 'Tab 2',
                        tabName:'childPanel1',
                        xtype: 'panel',
                        items: [
                            {
                                fieldLabel: 'Start Date2：',
                                itemId: 'start_date_2',
                                xtype: 'datefield'
                            },
                            {
                                fieldLabel: 'End Date2：',
                                itemId: 'end_date_2',
                                xtype: 'datefield'
                            }
                        ]
                    }
                ],
                listeners: {
                    beforetabchange: function(tabs, newTab, oldTab) { //tab切换前的监听事件
                        //console.log(tabs);//当前的这个 tabpanel 对象
                        //console.log(newTab); //点击的这个tab 对象
                        //console.log(oldTab); //点击前激活的 tab 对象

                        //Ext.Msg.alert("Tab 切换提示！","当前激活的Tab为："+newTab.title+ " " + (newTab.title === 'Tab 2'));

                        var itemArray = newTab.items.items;

                        for (let i = 0; i < itemArray.length; i++) {
                            var itemId = itemArray[i].itemId;
                            if (itemId === "start_date_2"){
                                console.log("start_date_2 的值为：" + itemId.value);
                            }
                        }
                        return true; //当返回值为false 时，不会实现对应的Tab 切换
                    }


                }
            }
        ],
        renderTo: Ext.getBody() //渲染组件到对应页面的 Body 中
    });

});