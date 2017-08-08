function Person(name) {
    this.name = name;

    this.setName = function(name) {
        this.name = name;
    }
}
// Constructor

var one = new Person('Neo');
// Instance

console.log(one.name);

one.setName('Keanu');
// call a method

console.log(one.name);
