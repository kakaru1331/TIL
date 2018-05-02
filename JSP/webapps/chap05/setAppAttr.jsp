<%@ page contentType = "text/html; charset=utf-8" %>
<%
    String name = request.getParameter("name");
    String msg = request.getParameter("msg");

    if (name != null && msg != null) {
        application.setAttribute(name, msg);
    }
%>

<html>
<head>
    <title>Set application attribute</title>
</head>
<body>
    <%
        if (name != null && msg != null) {
    %>
    <p>app attribute: <%= name %> <%= msg %></p>
    <%
        } else {
    %>
    <h2>no attribute!</h2>
    <% } %>
</body>
</html>