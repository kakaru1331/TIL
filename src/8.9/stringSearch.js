/*
1. 문자열 내에 p와 y 개수를 각각 구한다. 후에 그 값을 비교.
2. if) p = y return true
    else) return false
*/

// for
function numPY1(blah) {
  var pTotal = 0; 
  var yTotal = 0;
  // p, y 개수를 담을 변수 선언

  for(var i = 0; i < blah.length; i++) {
    if('p' === blah[i]) pTotal += 1;
  
    if('P' === blah[i]) pTotal += 1;

    if('y' === blah[i]) yTotal += 1;

    if('Y' === blah[i]) yTotal += 1;

    // 문자열 내에서 p, y 개수를 구한다.

  }
  
  if(pTotal === yTotal) return true
  else return false 
  // 개수 비교. true, false 반환.
}

console.log(numPY1('pPoooyY')) // p === y
console.log(numPY1('Pyy')) // p !== y
console.log(numPY1('a')) // p && y === 0


// RegExp

function numPY2(blah) {
  if(blah.match(/[py]/ig) === null) {
    return true
  } else if(blah.match(/p/ig).length === blah.match(/y/ig).length) {
    return true;
  } else {
    return false;
  }  
}

console.log(numPY2('pPoooyY')) // true
console.log(numPY2('Pyy')) // false
console.log(numPY2('a')) // true