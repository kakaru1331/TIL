<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.Enumeration" %>
<%@ page import="java.util.Map" %>
<%
    request.setCharacterEncoding("utf-8");
%>
<html>
    <head>
        <title>form_result</title>
    </head>
    <body>
        <p>
            name: <%= request.getParameter("name") %>
        </p>
        <p>
            address: <%= request.getParameter("address") %>
        </p>        
        <p>
            favorite pet:
            <%
                String[] params = request.getParameterValues("pet");
                if (params != null) {
                    for (int i=0; i < params.length; i++) {
            %>
                <%= params[i] %>
            <%
                    }
                }
            %>
        </p>
        <p>
            Parameters(enum):
            <%
                Enumeration paramEnum = request.getParameterNames();
                while(paramEnum.hasMoreElements()) {
                    String name = (String)paramEnum.nextElement();
            %>
                <%= name %>
            <%
                }
            %>
        </p>
        <p>
            name(map):
            <%
                Map paramMap = request.getParameterMap();
                String[] name_arr = (String[])paramMap.get("name");
                if (paramMap != null) {
            %>
                <%= name_arr[0] %>
            <%
                }
            %>
        </p>
    </body>
</html>