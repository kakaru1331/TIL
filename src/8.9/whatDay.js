/* 
1. 매개변수, 월과 일로 2016년 해당 날짜 값을 얻어야 함.
2. 1에서 얻은 값에서 요일을 출력.
*/

// 월, 일을 매개변수로 하는 함수 선언.
function getDayName1(a,b) {
  newDay = new Date(2016, a-1, b);
  // 날짜 값을 변수에 담음.
  
  console.log(String(newDay).substring(0,3).toUpperCase());
  // 요일 부분은 공통적으로 선두 세 글자 -> 앞 세글자만 출력해주면 됨 -> substring & toUpperCase
}

getDayName1(5,24); // TUE



function getDayName2(a,b) {
  var daySet = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // 요일을 배열에 담는다.

  newDay = new Date(2016, a-1, b).getDay();
  // 입력받은 값으로 날짜 값을 받는다. 앞에서 얻은 값에서 요일에 해당하는 인수를 얻음.

  console.log(daySet[newDay])
  // 함수 선두에 선언한 배열에 인수값을 넣는다.
}

getDayName2(5,24); // TUE