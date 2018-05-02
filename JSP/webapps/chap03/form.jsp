<%@ page contentType = "text/html; charset=UTF-8" %>
<html>
    <head>
        <title>form</title>
    </head>
    <body>
        <form action="/chap03/form_result.jsp" method="post">
            <p>
                이름: <input type="text" name="name">            
            </p>
            <p>
                주소: <input type="text" name="address">
            </p>
            <p>
                좋아하는 동물:
                    <input type="checkbox" name="pet" value="dog"> 강아지
                    <input type="checkbox" name="pet" value="cat"> 고양이
                    <input type="checkbox" name="pet" value="monkey"> 원숭이
            </p>
            <input type="submit" value="전송">
        </form>
    </body>
</html>