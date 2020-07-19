//JS中类的声明就是一个function的定义
function user(){

  //此时相当于Java类中声明的 public 的属性变量
  this.Name = "aaaa";
  this.age = 26;

  //此时相当于Java 类中声明的 private 的属性变量，外部实例获取该变量的值时需要通过其指定方法获取 简单的闭包操作
  var email = "ranyk@qq.com";
  //外部获取该变脸的方法
  this.getEmail = function(){
    return email;
  }

  this.setEmail = function(_email){
    email = _email;
  }
}

var u = new user();

//alert(u.Name);
//alert(u.getEmail());
u.setEmail("ranyk@.163.com");
//alert(u.getEmail());

//JS中对象的创建
var person = {
  name : "ranyk",
  age : 25
};

//获得js对象中的属性的两种方式 对象.属性名   对象['属性名']
//alert(person.name + "  " + person.age );
//alert(person.name + "  " + person['age']);
