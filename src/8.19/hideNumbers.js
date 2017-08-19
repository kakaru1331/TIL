/*
# 7. 핸드폰번호 가리기

핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다.
*/

// 문자열로 번호를 받으면, 번호를 '*'로 바꾸는 함수. 뒷자리 4개는 제외.
// ex) '01043211234' -> *******1234
function hideNumbers(str){
  var hideNumbers = '';
  var endNumbers = str.substring(str.length-4, str.length);

  for (var i=0; i<str.length-4; i++) {
    hideNumbers += '*';
  }
  
  return hideNumbers + endNumbers;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888



// function test (s) {
  
//   var hideNumbers = '';
//   var endNumbers = s.substring(s.length-4, s.length);

//   for (var i=0; i<s.length-4; i++) {
//     hideNumbers += '*';
//   }
  
//   return hideNumbers + endNumbers;
// }
// console.log(test('01012340000'))
// console.log(test('024344660'))

// var newS = s.substring(s.length-4, s.length);
// var s = '01012345678';
// console.log(newS)
// console.log(hideNumbers)