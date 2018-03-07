var obj1 = {
    x: 1,
    print: function() {
        console.log(this.x);
    }
}
obj1.print(); // 1

var obj2 = {
    x: 2    
}

obj2.print = obj1.print;
obj2.print(); // 2