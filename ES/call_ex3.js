var obj1 = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
};

var obj2 = {
    animal: 'dogs', sleepDuration: 'about 14 hours'
}

function greet() {
    console.log([this.animal, 'typically sleep between', this.sleepDuration].join(' '));
}

greet.call(obj1);
greet.call(obj2);