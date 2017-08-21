/*
11. 배열의 최대/최소값 구하기

배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.
*/

function getMaxValueFromArray(array) {
  array.sort(function(a,b) { return b - a });
  return array[0];
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  array.sort(function(a,b) { return a - b })
  return array[0];
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5

/*
# test

var arr = [-10, 0, 1, 2]
arr.sort(function(a, b) { return a - b })
console.log(arr)
*/