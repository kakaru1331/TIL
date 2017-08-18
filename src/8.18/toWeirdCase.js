// # 6. 이상한 문자만들기

// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
// 바꾼 문자열을 리턴하도록 함수를 완성하라.
// 예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  var weirdStr = '';
  var evenOrOdd = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      // 공백을 만나면, 홀짝 카운트를 다시 센다.
      evenOrOdd = 0;
      weirdStr += ' ';
    } else if (evenOrOdd % 2) {
      weirdStr += s[i].toLowerCase();
      evenOrOdd++
    } else {
      weirdStr += s[i].toUpperCase();
      evenOrOdd++
    }
  }

  return weirdStr;
}
console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'



// function test(str) {
//   var weirdStr = '';
//   var j = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       j = 0;
//       weirdStr += ' ';
//       } else if (j % 2) {
//         weirdStr += str[i].toLowerCase();
//         j++
//       } else {
//         weirdStr += str[i].toUpperCase();
//         j++
//       } 
//   }
//   return weirdStr;
// }
// console.log(test('try hello world'));


// var s = 'try hello world';
// var str = new String(s);
// console.log(str)

// var str = 'try hello world';
// for (var i = 0; str < i.length; i++) {
//   if (i % 2) {
    
//   }
// }
// str.toUpperCase();
// var strArr = str.split(' ');
// console.log(strArr)
// str[0];
// console.log(strArr[2])


