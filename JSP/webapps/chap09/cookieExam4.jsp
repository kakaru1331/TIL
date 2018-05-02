<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import = "java.net.URLEncoder" %>
<%
    Cookie[] cookies = request.getCookies();
    if (cookies != null && cookies.length > 0) {
        for (int i=0; i < cookies.length; i++) {
            if ("name".equals(cookies[i].getName())) {
                Cookie cookie = new Cookie("name", "");
                cookie.setMaxAge(0);
                response.addCookie(cookie);
            }
        }
    }
%>
<html>
<head>
    <title>Cookie Example4</title>
</head>
<body>
    <span>deleted "name" cookie</span> 
</body>
</html>

