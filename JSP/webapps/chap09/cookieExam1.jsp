<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import = "java.net.URLEncoder" %>
<%
    Cookie cookie = new Cookie("name", URLEncoder.encode("kakaru", "utf-8"));
    response.addCookie(cookie);
%>
<html>
<head>
    <title>Cookie Exam</title>
</head>
<body>
    <span><%= cookie.getName() %>: "<%= cookie.getValue() %>"</span>
</body>
</html>