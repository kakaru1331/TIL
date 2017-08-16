// 4) 문자열 다루기

// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
// 예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다

function alphaString46 (s) {
  // 문자열의 길이가 부합하지 않으면 false.
  if (s.length < 4 || s.length > 6) return false;
  
  // 문자열 내의 숫자의 갯수를 담을 빈 객체 선언
  var empty = [];

  // 숫자를 만나면 빈 배열에 i를 담는다.
  for (var i = 0; i < s.length; i++) {
    if (s[i] < 10) {
      empty.push(i);
    }    
  }
  
  // 배열과 문자열의 길이가 같다면 문자열은 모두 숫자다.
  return s.length === empty.length;
}

console.log(alphaString46('444')); // false
console.log(alphaString46('12345'));
console.log(alphaString46('a23456')); // false