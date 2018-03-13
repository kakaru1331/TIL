<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import = "java.util.Enumeration" %>
<html>
<head>
    <title>header ex</title>
</head>
<body>
    <p>
        <%
            Enumeration headerEnum = request.getHeaderNames();
            while(headerEnum.hasMoreElements()) {
                String headerName = (String)headerEnum.nextElement();
                String headerValue = request.getHeader(headerName);
        %>
            <%= headerName %>: <%= headerValue %> <br>
        <%
            }
        %>
    </p>
</body>
</html>