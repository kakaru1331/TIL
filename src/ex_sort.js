var arr = [1, 10, 100, 2, 3, 5];

console.log(arr.sort()); // [1, 10, 100, 2...] 아스키 코드값으로 정렬.

console.log(arr.sort(function(a, b) { return a-b; })); // a - b -> [1, 2, 3, 5, 10, 100]

console.log(arr.sort(function(a, b) { return b-a; })); // b - a -> [100, 10, 5, 3, 2, 1]