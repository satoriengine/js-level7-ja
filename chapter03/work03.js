// 引数のあるメソッド
class Book {
    constructor(title) {
        this.title = title;
        this.price = 0; // priceの初期値は0
    }

    // 引数で受け取った値でpriceを更新
    updatePrice(newPrice) {
        this.price = newPrice;
    }
}

// インスタンス作成
const myBook = new Book('History of Magic');
console.log(myBook); // 更新前

// メソッド呼び出し 引数を渡す
myBook.updatePrice(600);
console.log(myBook); // 更新後
