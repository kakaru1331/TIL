var x = 9;
var module = {
    x: 81,
    getX: function() { return this.x; }
};

console.log(module.getX());

var retrieveX = module.getX;
console.log(retrieveX());

var boundGetX = retrieveX.bind(module);
console.log(boundGetX());