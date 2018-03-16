<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage = "true" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Error Page</title>
</head>
<body>
    <h1>Error Occured!</h1>
    <p>Error type: <%= exception.getClass().getName() %></p>
    <p>Error msg: <%= exception.getMessage() %></p>
</body>
</html>