//1. 使用传统的创建对象的方式创建窗口组件
//(function(){
//  Ext.onReady(function(){
//    var win =  new Ext.window.Window({
//          width: 400,
//          height: 300,
//          title: "测试窗口组件"
//        });
//      win.show();
//
//  });
//})();

//2. 点击按钮弹出窗体
//(function(){
//  Ext.onReady(function(){
//    var win =  new Ext.window.Window({
//          width: 400,
//          height: 300,
//          title: "测试窗口组件"
//        });
//
//    Ext.get('mybutton').on('click',function(){
//        win.show();
//    })
//
//  });
//})();

//3. Ext.js中给某个对象取别名
//(function(){
//  Ext.onReady(function(){
//    var o = {
//      say: function (){
//        alert("1111");
//      }
//    }
//
//    var fn = Ext.Function.alias(o,'say');
//    fn();
//  });
//})();

//4. 使用Ext 的 create 方法进行创建对象
//(function(){
//  Ext.onReady(function(){
//    var win = Ext.create("Ext.window.Window",{
//      width: 400,
//      height: 300,
//      title: "使用create方式创建window组件"
//    });
//
//    win.show();
//  });
//})();


//5. 使用Ext.define方式进行组件的创建
(function(){
  Ext.onReady(function(){
    Ext.define("myWin",{
        extend: "Ext.window.Window",
        width: 300,
        height: 200,
        title: "使用define的方式创建窗口组件",
        newTitle: "新标题",
        mySetTitle: function () {
          this.title = this.newTitle;
        },
        initComponent: function (){
            this.mySetTitle();
            this.callParent(arguments);
        }
    });
    Ext.create("myWin",{
        title:"myWin"
    }).show();
  });
})();
