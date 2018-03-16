<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Table</title>
</head>
<body>
  <table border="1">
      <tr>
          <td>Product</td>
          <td>Pizza</td>        
      </tr>
      <tr>
          <td>Coast</td>
          <td>18,000 won</td>
      </tr>
  </table>
  
  <jsp:include page="/module/module2.jsp">
    <jsp:param name="order" value="A" />
  </jsp:include>
</body>
</html>