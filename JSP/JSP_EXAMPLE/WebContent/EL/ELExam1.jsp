<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setAttribute("name", "kakaru"); %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>EL Example1</title>
</head>
<body>
    <p>URI: ${ pageContext.request.requestURI }</p>
    <p>Name: ${ requestScope.name }</p>    
</body>
</html>