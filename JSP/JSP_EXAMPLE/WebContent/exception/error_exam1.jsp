<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>cope with error</title>
</head>
<body>
    <% try { %>
    <%= request.getParameter("empty").toUpperCase() %>
    <% } catch (Exception e) { %>
    <p>There's no param</p>
    <% } %>
</body>
</html>