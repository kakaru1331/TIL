function f() {
    try {
        console.log('A');
        throw 'bogus';
    } catch(e) {
        console.log('B');
        return true; // finally block이 끝날 때까지 유예된다.
        console.log('C');
    } finally {
        console.log('D');
        return false; // catch block의 return값인 true를 덮어씀.
                      // 최종적으로 false를 반환하고 함수 종료.
        console.log('E');
    }

    console.log('F');
}

var ret = f();
if (ret == true) {
    console.log("returned value is true");
} else {
    console.log("returned value is false");
}