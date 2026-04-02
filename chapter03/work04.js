// 戻り値のあるメソッド
class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    // 税込み価格を計算して「数値」として返す
    getTaxPrice() {
        const tax = 1.1; // 消費税10%
        return Math.floor(this.price * tax);
    }
}

// インスタンス作成
const myBook = new Book('History of Magic', 1000);
// メソッド呼び出し 戻り値を受け取る
const finalPrice = myBook.getTaxPrice();

console.log('price with sales tax is ' + finalPrice);
