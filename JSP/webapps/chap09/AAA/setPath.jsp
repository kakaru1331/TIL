<%@ page contentType = "text/html; utf-8" %>
<%@ page import = "java.net.URLEncoder" %>
<%
    Cookie cookieA = new Cookie("path1", URLEncoder.encode("Path: /chap09/AAA", "utf-8"));
    cookieA.setPath("/chap09/AAA");
    response.addCookie(cookieA);

    Cookie cookieB = new Cookie("path2", URLEncoder.encode("Path: ", "utf-8"));
    response.addCookie(cookieB);
    
    Cookie cookieC = new Cookie("path3", URLEncoder.encode("Path: /", "utf-8"));
    cookieC.setPath("/");
    response.addCookie(cookieC);

    Cookie cookieD = new Cookie("path4", URLEncoder.encode("Path: /chap09/BBB", "utf-8"));
    cookieD.setPath("/chap09/BBB");
    response.addCookie(cookieD);
%>

<html>
<head>
    <title>Set Path</title>
</head>
<body>
    <p>
        <%= cookieA.getName() %>: <%= cookieA.getValue() %>
        [<%= cookieA.getPath() %>]
    </p>
    <p>
        <%= cookieB.getName() %>: <%= cookieA.getValue() %>
        [<%= cookieB.getPath() %>]
    </p>
    <p>
        <%= cookieC.getName() %>: <%= cookieA.getValue() %>
        [<%= cookieC.getPath() %>]
    </p>
    <p>
        <%= cookieD.getName() %>: <%= cookieA.getValue() %>
        [<%= cookieD.getPath() %>]
    </p>
</body>
</html>