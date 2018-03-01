class User {
    constructor(id, authority) {
        this.id = id;
        this.authority = authority;
    }

    introduceSelf() {
        console.log("안녕하세요. 저는 " + this.id + "이라고 합니다");
    }
}

var son = new User('손', "guest");
var park = new User('박', "admin");
var kim = new User('김', "guest");

son.introduceSelf();
park.introduceSelf();
kim.introduceSelf();