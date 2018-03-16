<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="el.FoodCalories" %>
<%
FoodCalories fc = new FoodCalories();
request.setAttribute("fc", fc);
%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Food</title>
</head>
<body>
    ${fc.setCalories('apple', 52)}
    ${fc.setCalories('banana', 89)}
    ${fc.setCalories('chocolate', 546)}
    <p>사과 칼로리: ${fc.getCalories("apple")}</p>    
    <p>바나나 칼로리: ${fc.getCalories("banana")}</p>    
    <p>초콜릿 칼로리: ${fc.getCalories("chocolate")}</p>    
</body>
</html>