<%--
  Created by IntelliJ IDEA.
  User: ranyi
  Date: 2020-07-09
  Time: 9:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Ext.js window组件的学习</title>
        <link rel="stylesheet" href="<%=request.getContextPath()%>/js/extjs/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css" type="text/css" />
        <script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/js/extjs/ext-all.js"></script>
        <script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/js/extjs/packages/ext-locale/build/ext-locale-zh_CN.js"></script>
        <script type="text/javascript" charset="UTF-8" SRC="<%=request.getContextPath() %>/base/js/window/windows01.js"></script>
    </head>
    <body>
        <h1 style="margin-top: 10px;margin-left: 10px">Ext.js window组件的学习一</h1>
        <input type="button" title="按钮一" width="100px" height="20px" value="an" onclick="alert('aaa')" />
        <input type="button" title="按钮二" width="200px" height="20px" value="bn" onclick="alert('bbb')"/>
    </body>
</html>
