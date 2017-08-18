/*
1. Check Palindrom
palindrome(회문): 시작과 끝을 뒤집어도 동일한 문자 또는 문장.
인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.
*/

function checkPalindrom(str) {
  str ? str : '';
  
  reverseStr = str.split('').reverse().join('');
  // 문자열을 짤라서 배열에 담는다. 뒤집는다. 붙여준다.

  // if (str === reverseStr) {
  //   return true;
  // } else {
  //   return false;
  // }
  return (str === reverseStr);
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true



/*
20. 최단 거리 1차원 점의 쌍 구하기 (DAUM)

1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.
*/


function findMinDistance(array){
  var distance = [];
  var distance2 = [];  
  var indexNumber = []
  // 아래 sort가 배열 자체를 바꾸는데 이를 해결할 방법을 못찾았습니다.

  for (i = 0; i < array.length-1; i++) {
    distance[i] = array[i+1] - array[i];
    distance2[i] = array[i+1] - array[i];
  }

  var minDistance = distance2.sort(function (a,b) { return a - b }).shift();
  // 점과 점 사이의 최단거리 구하기

  for (var j = 0; j < array.length-1; j++) {
    if (distance[j] === minDistance) {
      indexNumber.push(array[j], array[j+1])
    }
  }
  // 해당 위치를 배열에 담기

  return indexNumber;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [3, 4, 23, 24] 값을 배열 단위로 구분 못했습니다.