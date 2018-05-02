function add(a, b, c) {
    return a + b + c;
}

var ret1 = add(1, 1, 1);
console.log(ret1)

var add1 = add.bind(null, 1);
var ret2 = add1(2,2);
console.log(ret2);

var add2 = add.bind(null, 2);
var ret3 = add2(3,3);
console.log(ret3);

var add3 = add.bind(null, 3,3,3);
var ret4 = add3();
console.log(ret4);