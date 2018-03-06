function makeClosure(f, repeat) {
    return function() {
        for(var i=0; i < repeat; i++)
            f();
    };
}

function print808() {
    console.log("808");
}

var printThreeTimes = makeClosure(print808, 3);
printThreeTimes();
console.log()

var printOnce = makeClosure(print808, 1);
printOnce();
console.log()

var printTwice = makeClosure(print808, 2);
printTwice();