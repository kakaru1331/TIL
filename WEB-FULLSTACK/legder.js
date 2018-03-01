var ledger = [];
var balance = 0;

function withdraw(money, particulars) {
    if (balance < money) {
        throw new Error("잔고가 모자라용. (ㅜ.ㅜ)");
    }

    ledger.push("출금", money, particulars);
    balance -= money;
    console.log("출금 후 잔고: " + balance);
}

function deposit(money, particulars) {
    ledger.push(["입금", money, particulars]);
    balance += money;
    console.log("입금 후 잔고: " + balance);
}

try {
    deposit(100, "월급");
    deposit(200, "성과금");
    withdraw(100, "세금");
    withdraw(300, "치킨");
} catch (e) {
    console.log(ledger);
    console.log(e);
    
}