// 3) 짝수와 홀수

// evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.
// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.


// if

function evenOrOdd1 (num) {
  // mod 2. 홀수는 나머지가 1이다. 'Odd' 반환
    if (num % 2) {
    return 'Odd';
  } else {
    return 'Even';
  }
}

console.log(evenOrOdd1(2)); // 'Even'
console.log(evenOrOdd1(3)); // 'Odd'


// 3항 연산자

function evenOrOdd2 (num) {
  return num % 2 ? 'Odd' : 'Even';
}

console.log(evenOrOdd2(2)); // 'Even'
console.log(evenOrOdd2(3)); // 'Odd
