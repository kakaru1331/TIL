<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import = "java.net.URLDecoder" %>
<html>
<head>
    <title>Cookie Example2</title>
</head>
<body>
    <%
        Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (int i=0; i < cookies.length; i++) {
    %>
        <p><%= cookies[i].getName() %>: <%= URLDecoder.decode(cookies[i].getValue(), "utf-8") %></p>        
    <%
            }
        } else {
    %>
    There's no cookie
    <%
        }
    %>
</body>
</html>