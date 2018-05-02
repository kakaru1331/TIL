function Person(name) {
    this.name = name;
}

Person.prototype.exe = function(callback) {
    if (typeof callback == 'function') {
        callback.call(this);
        // callback();
    }
};

function print() {
    console.log(this.name);
}

var me = new Person('Kim');
me.exe(print);

// printMe = print.bind(me);
// printMe();