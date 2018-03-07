function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(nickName, flavor) {
    Product.call(this, 'Food', 20);
    this.category = 'food';

    this.nickName = nickName;
    this.flavor = flavor;
}

function Toy() {
    Product.call(this, 'robot', 30);
    this.category = 'toy';
}

var product = new Product('stuff', 10);
var cheese = new Food('빙수', '빨간맛');
var lego = new Toy();

console.log(product);
console.log(cheese);
console.log(lego);