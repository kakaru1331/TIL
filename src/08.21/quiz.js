// # Quiz


// 1. ES5와 ES6 문법을 활용하여 자신의 이름을 출력하고 코드에 대한 설명을 주석으로 서술하시오.

// ES5
var name1 = 'Kim';
console.log('my name is '+name1);

// ES6
let name2 = 'Kim';
console.log(`my name is ${name2}`);
// ES6는 템플릿 대입문을 제공한다. + 연산을 하는 수고로움에서 벗어날 수 있다.



// 2. 1부터 9까지 각 수의 제곱을 구하고 `=>`의 작동원리를 주석으로 서술하시오.

const powArray = [];
for(let i = 1; i < 10; i++){
  powArray.push(Math.pow(i, 2));
}
console.log(powArray); // [1, 4, 9 , 16, 25, 36, 49, 64, 81]
// () => '...' 과 function () {...}은 반환값이 같다.



// 3. 다음의 `ES5`문법을 `ES6`로 변경하시오.

/*
3-1

function plus(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}
*/

function plus(x = 0, y = 0) {
  return x + y;
}
console.log(plus(1)); // 1 + 0


/* 3-2

function sum() {
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}
console.log(sum(1, 2, 3, 4, 5));
*/

const sum = function (...args){
  return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 3, 5)) // 9



/* 3-3

var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
*/

const arr = [1, 2, 3];
arr.push(...[4, 5, 6]);
console.log(arr) // [1, 2, 3, 4, 5, 6]



/* 3-4

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]



/* 3-5

var Person = (function () {
  function Person(name) {
    this._name = name;
  }

  Person.prototype.sayHi = function () {
    console.log('Hi! ' + this._name);
  };

  return Person;
}());

var me = new Person('Lee');
me.sayHi(); // Hi! Lee.

console.log(me instanceof Person); // true
*/

class Person {
  constructor(name) {
    this._name = name;
  }

  
  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
  get getHi() {
    return (console.log(`Hi ${this._name}`))
  }
}

const me = new Person('Lee');
me.sayHi(); // Hi! Lee
me.getHi; // Hi! Lee

console.log(me instanceof Person); // true