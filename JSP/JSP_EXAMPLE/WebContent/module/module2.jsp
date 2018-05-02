<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String order = request.getParameter("order");
if (order == null) 
  return;
%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Module 2</title>
</head>
<body>
    <table border="1">
        <tr>
            <td>Order</td>
            <td><%= order %>
        </tr>
        <tr>
            <td>Feature</td>
            <td>
            <% if (order.equals("A")) { %>
            Pepperoni            
            <% } else if (order.equals("B")) { %>
            Potato
            <% } %>
            </td>            
        </tr>
    </table>
</body>
</html>