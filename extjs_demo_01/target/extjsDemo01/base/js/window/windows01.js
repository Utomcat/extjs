/**
 * @ClassName:windows01
 * @Description:
 * @author: ranyi
 * @date: 2020-07-09 9:25
 * Version: V1.0
 */
Ext.onReady(function () {
    Ext.create('Ext.window.Window', {
        title: 'window hello'
        ,
        height: '20%'
        ,
        width: '30%'
        ,
        layout: 'fit'
        ,
        constrain: true  /*限制窗口不能超出浏览器边界设置，true：是不能超出边界；false：是能超出，等同于没有设置该属性*/
        ,
        constrainHeader: false /*限制窗口标题不能超过浏览器边界设置，true：是不能超出边界；false：是能超出，等同于没有设置该属性*/
        ,
        modal: true  /*设置弹出该窗口后，其他窗口产生遮罩层，其对应的窗口组件不能使用*/
        ,
        plain: false  /*如果为True，则以透明背景渲染窗口主体，以便将其融合到框架元素中；如果为false，则添加较浅的背景色以在视觉上突出显示主体元素，并将其与周围框架更清晰地分开。  测试无明显差异*/
        ,
        x: 10 /*初始显示时窗口左边缘的X位置。默认情况下将窗口居中在窗口容器的宽度内*/
        ,
        y: 20 /*初始显示时窗口顶部边缘的Y位置。默认将窗口居中在窗口容器的高度内*/
        ,
        html: '<div style="background-color: #0f0f0f;color: red;width: 100px;height: 100px">这是第一个div</div><div style="background-color: #1A4D8F;color: #00FF00;width: 100px;height: 100px">这是第二个div</div>' /*在该组件中添加html元素*/
        ,
        autoScroll: true  /*设置当窗口中的内容超出窗口的宽度或高度时，给窗口添加滚动条；5.1版本后使用 scrollable*/
        /*,
        iconCls: ''*/   /*设置CSS样式*/
        ,
        icon: '../../../js/icon/banshou.png' /*字符串参数，值为该图标的的路径 */
        /*,renderTo: Ext.getBody()*/
    }).show();
});