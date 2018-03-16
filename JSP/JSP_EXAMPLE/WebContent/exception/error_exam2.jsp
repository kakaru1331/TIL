<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page errorPage = "/view/error/view_error_exam.jsp" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Cope with error</title>
</head>
<body>
    <p><%= request.getParameter("empty").toUpperCase() %></p>
</body>
</html>