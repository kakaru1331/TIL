/*
# 9. 수박수박수박수박수박수?

waterMelon 함수는 정수 n을 매개변수로 입력받는다.
길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

예를들어 n이 4이면 ‘수박수박‘을 리턴하고 3이라면 ‘수박수‘를 리턴한다.
*/


// 반복문으로 n만큼 '수'와 '박'을 더한다.
function waterMelon(n){
  var strWaterMelon = '';

  // i가 짝수면 '수', 홀수면 '박'을 더한다
  for (var i=0; i<n-1; i++) {
    // i%2 ? strWaterMelon += '박' : strWaterMelon += '수';
    strWaterMelon += i%2 ? '박' : '수';
  }

  return strWaterMelon;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));



// function test(n) {
//   var strWaterMelon = ''
  
//   for (var i=0; i<n-1; i++) {
//     i%2 ? strWaterMelon += '박' : strWaterMelon += '수';
//   }
//   return strWaterMelon
// }

// console.log('n이 3인 경우: '+ test(3));
// console.log('n이 4인 경우: '+ test(4));