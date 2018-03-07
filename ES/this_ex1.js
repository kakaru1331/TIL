this === global; // true

function outter() {
    console.log("outter's this: ", this);

    function inner() {
        console.log("inner's this: ", this);
    }
    inner();
}
outter();