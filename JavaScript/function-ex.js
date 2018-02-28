function changeCarMake(car) {
    car.make = 'Tesla';
}

var myCar = { make: 'KIA' };

var make1, make2;
make1 = myCar.make;

changeCarMake(myCar);
make2 = myCar.make;

console.log("make1: " + make1 + "\nmake2: " + make2);