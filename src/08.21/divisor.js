// 12. 약수의 합

// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다.

// 약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다

function sumDivisor(num) {
  var divisorSet = [];
  var divisorSum = 0;

  for(i = 1; i <= num; i++){
    if(num % i === 0) {
      divisorSet.push(i);
    }
  }

  for(j = 0; j < divisorSet.length; j++){
      divisorSum += divisorSet[j];
  }
  
  return divisorSum;
}
console.log(sumDivisor(12)); // 28

/*
# test

var num = 12
var ar = new Array;
console.log(arr)

function test(num){
  var arr = [];
  var sum = 0;

  for(i = 1; i < num; i++) {
    if(num % i === 0) {
      arr.push(i);
    }
    console.log(arr)
  }

  for(j = 0; j < arr.length; j++){
    sum += arr[j];
  }
  console.log(sum);

  return sum;
}
console.log(test(12));
*/