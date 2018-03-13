<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import = "java.io.*" %>
<html>
<head>
    <title>Read File with Application Object</title>
</head>
<body>
    <p>getRealPath: <%= application.getRealPath("/textFile/Fireflies.txt") %></p>
    <%
        char[] buf = new char[256];
        int len;

        try(InputStreamReader stream = new InputStreamReader(
            application.getResourceAsStream("/textFile/Fireflies.txt"), "utf-8")) {
            while((len = stream.read(buf)) != -1) {
                out.print(new String(buf, 0, len));
            }
        } catch(IOException e) {
            out.println(e.getMessage());
        }
    %>
</body>
</html>