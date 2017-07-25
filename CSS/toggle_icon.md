# 토글(toggle)

>토글이란?

토글이란 하나의 설정 값에서 다른 값으로 전환하는 기능입니다.  
온/오프 스위치를 떠올리면 이해하기 쉽겠네요.  
HTML의 토글은 체크박스가 있습니다.

> 토글(체크박스)로 할 수 있는 것

체크박스는 어떤 용도로 쓰일까요?  
간단히 생각하면 체크를 하는 정도겠지요.  

체크박스의 본질은 토글입니다.  
다시말해 '값의 전환' 기능인데요.  
여기에 약간의 CSS를 더하면 재밌는 기능을 만들 수 있습니다.

---

# 아이콘 만들기

>토글 아이콘의 원리

1. 레이블을 이용해서 아이콘과 체크박스를 묶어준다.  
// 간접적으로 아이콘에 토글 기능 부여
2. UI 상태에 따른 값을 부여한다.  
// 애니메이션 효과 부여

코드를 통해 좀 더 구체적으로 알아보겠습니다.  



    <label for="toggle">
      <input type="checkbox" id="toggle">
      <div class="i"></div>
    </label>


HTML 코드  


    #toggle {
      display: none;
    }
    .i {
      width: 30px;
      height: 30px;
      background-color: orange;
      cursor: pointer;
      transition: all, 1s;ㅎ
    }
    #toggle:checked + .i {
      background-color: violet;
    }


CSS 코드
