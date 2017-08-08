function Person(name) {
    this. name = name;
}

Person.prototype.setName = function(name) {
    this.name = name;
}

var one = new Person('Neo');
console.log(one); // one = {name: 'Neo'} 

one.setName('Keanu'); 
console.log(one); // one = {name: 'Keanu'}

/* 프로토타입과 상속. 인스턴스에 일일이 메소드를 부여할 필요가 없음.  */