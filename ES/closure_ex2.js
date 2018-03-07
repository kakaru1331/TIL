var arr = [];

for (var i=0; i < 5; i++) {
    arr[i] = (function(value) {
        return function() {
            return value;
        }
    }(i));
}

for (var j=0; j < 5; j++) {
    console.log(arr[j]());
}