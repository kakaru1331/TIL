function devide(numerator, denominator) {
    if (denominator == 0) {
        var err = new Error("Can't devide by zero.");
        throw err;
    }

    return numerator/denominator;
 }

 var result1 = devide(10, 5);
 var result2 = devide(10, 0);

 console.log('process closed');