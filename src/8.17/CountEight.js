function countEight () {
  // 8의 갯수를 담을 변수 선언
  var count = 0;
  
  // i를 1~10000 순회한다. 
  // i를 문자열로 바꾸고, 자리마다 '8'과 일치하는지 확인.

  // 1~9 순회. 8을 만나면 count++
  for (var i = 0; i < 10; i++)
    if (String(i).charAt(0) === '8') {
      count++;
    }
  
  // 10, 1 자리 둘 다 8인 경우
  for (i = 10; i < 100; i++)
    if (String(i).charAt(0) === '8') {
      count++ 
      if (String(i).charAt(1) === '8') {
        count++
      }
      
      // 1의 자리만 8인 경우.
    } else if (String(i).charAt(1) === '8') {
      count++
    }
  
  // 반복.
  for (i = 100; i < 1000; i++)
    if (String(i).charAt(0) === '8') {
      count++
      if (String(i).charAt(1) === '8') {
        count++
      }
      if (String(i).charAt(2) === '8') {
        count++
      }

    } else if (String(i).charAt(1) === '8') {
      count++
        if (String(i).charAt(2) === '8') {
          count++
        }

    } else if (String(i).charAt(2) === '8') {
      count++
    }


  for (i = 1000; i < 10000; i++)
    if (String(i).charAt(0) === '8') {
      count++
      if (String(i).charAt(1) === '8') {
        count++
      }
      if (String(i).charAt(2) === '8') {
        count++
      }
      if (String(i).charAt(3) === '8') {
        count++
      }

    } else if (String(i).charAt(1) === '8') {
      count++
        if (String(i).charAt(2) === '8') {
          count++
        }
        if (String(i).charAt(3) === '8') {
          count++
        }

    } else if (String(i).charAt(2) === '8') {
      count++
        if (String(i).charAt(3) === '8') {
          count++
        }

    } else if (String(i).charAt(3) === '8') {
      count++
    }

  return count;
}

console.log(countEight()) // 4000