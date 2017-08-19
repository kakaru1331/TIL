function toWeirdCase(str) {
  var wordArr = str.split(' ');
  // ex) wordArr: [ ‘aladin’, ‘banana’, 'chocolate'... ]

  for (var i = 0; i < wordArr.length; i++) {
    wordArr[i] = toUpperLower(wordArr[i]);
  }
  // ex) wordArr[0] = 'AlAdIn', wordArr[1] = 'BaNaNa'...
  return wordArr.join(' ');

  function toUpperLower(str) {
    var res = '';
    for (var i = 0; i < str.length; i++) {
      // 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
      res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return res;
  }
}
console.log(toWeirdCase('donald knuth'))