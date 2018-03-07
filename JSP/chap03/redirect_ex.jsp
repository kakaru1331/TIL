<%@ page contentType="text/html; charset=utf-8" %>
<%
    String id = request.getParameter("id");
    if (id != null && id.equals("admin")) {
        response.sendRedirect("/chap03/admin.jsp");
    } else {
%>
<html>
    <title>You're not admin!</title>
    <body>
        admin only!
    </body>
</html>
<%
    }
%>