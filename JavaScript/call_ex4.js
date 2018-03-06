var data = 'Cookie';

function print() {
    console.log('data value is %s ', this.data);
}

print.call(); // node에서는 안 됨.