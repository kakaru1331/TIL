<%@ page contentType = "text/html; charset=UTF-8" %>
<%@ page import = "java.util.Calendar" %>
<%@ page trimDirectiveWhitespaces="true" %>
<html>
    <head>
        <title>Calendar</title>
    </head>
    <body>
        <% Calendar calendar = Calendar.getInstance(); %>
        <%= calendar.get(Calendar.YEAR) %>년
        <%= calendar.get(Calendar.MONTH) %>월
        <%= calendar.get(Calendar.DATE) %>일 입니다.
    </body>
</html>