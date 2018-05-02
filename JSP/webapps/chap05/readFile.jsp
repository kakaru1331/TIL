<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import = "java.io.*" %>
<html>
<head>
    <title>Read File</title>
</head>
<body>
    <%
        char[] buf = new char[128];
        int len;
        String path = "C:\\apache-tomcat-9.0.1\\webapps\\chap05\\textFile\\Fireflies.txt";

        try(InputStreamReader stream = new InputStreamReader(
            new FileInputStream(path), "utf-8")) {
                while((len = stream.read(buf)) != -1) {
                    out.print(new String(buf, 0, len));
                }                
        } catch(IOException e) {
            out.println(e.getMessage());
        }
    %>
</body>
</html>