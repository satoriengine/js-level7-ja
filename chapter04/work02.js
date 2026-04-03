// プライベートメソッド
class Book {
    // パブリック変数、公開のインスタンス変数
    title;
    // プライベート変数を宣言、非公開のインスタンス変数
    #price;

    constructor(title, price) {
        this.title = title;
        this.#price = price;
    }

    // クラス内のみで呼び出し可能な非公開メソッド（プライベートメソッド）
    // クラス外からは呼び出し不可
    #getTaxRate() {
        return 1.1; // tax 10%
    }

    // クラス内外から呼び出し可能な公開メソッド
    showPrice() {
        // クラス内からプライベートメソッドを呼び出し可
        const total = Math.floor(this.#price * this.#getTaxRate());
        console.log('price with tax => ' + total);
    }
}

// インスタンス作成
const myBook = new Book('History of Magic', 1000);
// 公開メソッドなのでクラス外から呼び出し可
myBook.showPrice();

// 非公開メソッドなのでクラス外から呼び出す不可
// myBook.#getTaxRate(); // error
