var Parent = (function() {
    function Parent(name) {
        this.name = name;
    }

    Parent.prototype.sayHi = function() {
        console.log('Hi! ' + this.name);
    }

    return Parent;
}())

var child = Object.create(Parent.prototype);
// 인스턴스의 프로토타입 지정.

child.name = 'Neo';
child.sayHi();
