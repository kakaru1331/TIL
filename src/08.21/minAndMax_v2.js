/*
11. 배열의 최대/최소값 구하기

배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.
*/

// 최댓값 -> Math.max
// 매개변수로 배열을 받아 처리한다 -> apply.
function getMaxValueFromArray(array) {
  return Math.max.apply(null, array);
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

// 최솟값 -> Math.min
function getMinValueFromArray(array) {
  return Math.min.apply(null, array);
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
