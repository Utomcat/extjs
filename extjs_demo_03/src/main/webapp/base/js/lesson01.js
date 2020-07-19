(function(){
  Ext.onReady(function(){
    //alert("hello WORD");
    //Ext.Msg.alert("hello","Hello World");

    var myArray = [1,2,3,4,-3,-4];

    //Array类的方法 every 相当于遍历某个数组，在回调函数中对其进行处理
    Ext.Array.every(myArray,function(item,index,array){
      //console.log(item); //数组中每一项的值
      //console.log(index);//数组中每一项的索引
      //console.log(array);//当前数组
      if (item > 0) {
        return true;
      }else{
        //alert(item);
        return false;
      }
    },this);


    var newMyArray = Ext.Array.filter(myArray,function(item, index, array){
        if (item < 0) {
          return true;
        }else {
          return false;
        }
    },this);

    alert(newMyArray.join("\n"));

  });
})();
