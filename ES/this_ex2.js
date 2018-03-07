var x = 1;

var obj = {
    x: 2,
    method: function() {
        console.log("method's this.x: ", this.x);

        function inner() {
            console.log("inner's this.x: ", this.x);
        }
        inner();
    }
};

obj.method();