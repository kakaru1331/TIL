<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import = "java.net.URLEncoder" %>
<%
    Cookie[] cookies = request.getCookies();
    if (cookies != null && cookies.length > 0) {
        for (int i=0; i < cookies.length; i++) {
            if ("name".equals(cookies[i].getName())) {
                Cookie cookie = new Cookie("name", URLEncoder.encode("Hazard", "utf-8"));
                response.addCookie(cookie);
            }
        }
    }
%>
<html>
<head>
    <title>Cookie Example3</title>
</head>
<body>
    <span>reassigned "name" cookie</span> 
</body>
</html>

