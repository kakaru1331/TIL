// 1. 두 수를 입력받아 큰 수를 반환하는 함수
// 2. 숫자를 입력하면 한글 요일을 반환하는 함수
// 3. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
// 4. 숫자를 n개 전달 받아 숫자들의 평균을 반환하는 함수
// 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
// 6. 세 수를 입력받아 큰 수를 반환하는 함수
// 7. n개의 인자를 받아서 가장 큰 수를 반환
// 8. 문자열을 역순으로 바꿔주는 함수
// 9. 비밀번호 문자열 validation 최소 8글자 최대 20글자 영어 대소문자 숫자 포함


// 1. compare

function compare(a,b) {
  if(a >=b) {
    return a;
  } else {
    return b;
  }  
}

console.log(compare(3,5));



// 2. 한글 요일
 
function whatDay(x) {
  var daySet = ['월요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
  // 반환값을 배열에 담는다.
  
  if(x % 7 === 1) {
    x = 1;
    console.log(daySet[x]);
  } else if(x % 7 === 2) {
    x = 2;
    console.log(daySet[x])
  } else if(x % 7 === 3) {
    x = 3;
    console.log(daySet[x])
  } else if(x % 7 === 4) {
    x = 4;
    console.log(daySet[x])
  } else if(x % 7 === 5) {
    x = 5;
    console.log(daySet[x])
  } else if(x % 7 === 6) {
    x = 6;
    console.log(daySet[x])
  } else {
    x = 7;
    console.log(daySet[x])
  }
}

whatDay(33.5);



// 3. 배열 요소의 평균값
// 베열의 값을 모두 더한다. 배열 길이로 나눈다.

// reduce
function arrAvg(arr) {
  tot = 0;
  tot = arr.reduce(function(a,b){
    return a + b;
  });
  console.log(tot / arr.length);
}

arrAvg([1, 5, 9]);

// for
function arrAvg(x) {
  total = 0;
  for(var i = 0; i < x.length; i++) {
    total += x[i];
  }
  console.log(total / x.length);
}

arrAvg([1, 2, 3, 5, 8])



// 4. 평균값

function avg() {
  sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum/arguments.length)
}
avg(1,100,4)


// 5. 요소가 문자인 배열을 받아서, 문자열로 변환하는 함수.

function arrToString(x) {
  return String(x.join(''));
}

console.log(arrToString(['s','u','n']));



// 6. 숫자 셋 중 가장 큰 수를 반환하는 함수

function max (a, b, c) {
  if (a >= b) {
    if (a >=c) return a;
    else return c
  }
  if (b >= a) {
    if (b >= c) return b;
    else return c
  }
}

console.log(max(3, 5, 9));



// 7. 입력받은 수 중 가장 큰 수를 반환

function argMax() {
  var arr = Array(arguments).sort(function(a,b) { return b - a; })
  return arr[0];

  
}

console.log(argMax(3,10,5,6));






/* 

data type check

1. 
  1) 삼항연산자 
  2) Math.max()

2.
  1) n % 7

3.
  연산 횟수 고려.
  arrow function

4.
  call, spread, Array.from

6.
  for

7.
  apply

8.
  1) for
  2) split
  
9.
  1) 공백 확인. 조건 확인. 문자열 크기 비교. 
  2) 정규표현식

*/
