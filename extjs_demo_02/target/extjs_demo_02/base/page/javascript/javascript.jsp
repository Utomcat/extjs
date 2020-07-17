<%--
  Created by IntelliJ IDEA.
  User: ranyi
  Date: 2020-07-10
  Time: 23:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>JavaScript初步学习</title>
        <link rel="stylesheet"
              href="<%=request.getContextPath()%>/js/extjs/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css"
              type="text/css"/>
        <script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/js/extjs/ext-all.js"></script>
        <script type="text/javascript" charset="utf-8"
                src="<%=request.getContextPath()%>/js/extjs/packages/ext-locale/build/ext-locale-zh_CN.js"></script>
        <script type="text/javascript" charset="UTF-8" src="<%=request.getContextPath()%>/base/js/javascript/javascript01.js"></script>
    </head>
    <body>

        <ul style="margin-top: 2%;">
            <li style="font-size: 20px">JavaScript 中的几大数据类型</li>
            <ul style="margin-top: 10px">
                <li style="font-size: 15px;color: red">Number</li>
                <ul>
                    <li>var num1 = 10;</li>
                    <li>var num2 = 10.5;</li>
                    <li>var num3 = .6; ==> 0.6 </li>
                    <li>var num4 = 070; ==> 八进制的 56</li>
                    <li>var num5 = 1/0; ==> 正无穷</li>
                    <li>var num6 = window.parseInt(“sdfadfa”);  ==> NaN not a number  两个 NaN 的数不相等</li>
                </ul> 
                <li style="font-size: 15px;color: red">String</li>
                <ul>
                    <li>单双引号表示的字符串</li>
                </ul>
                <li style="font-size: 15px;color: red">Boolean</li>
                <ul>
                    <li>true/false</li>
                </ul>
                <li style="font-size: 15px;color: red">Object</li>
                <li style="font-size: 15px;color: red">Undefined</li>
                <ul>
                    <li>声明了变量但是还未赋值的 等同于 NULL，<a style="color: red;font-size: 15px">注意：当 var a; a === null 时为false;a == null 时为true</a></li>
                </ul>
                <li style="font-size: 15px;color: red">Function</li>
            </ul>
            <li>typeof 用来判断某个变量的数据类型</li>
        </ul>

        

    </body>
</html>
