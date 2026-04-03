// プライベート変数の定義
class Book {
    // パブリック変数、公開のインスタンス変数
    title;
    // プライベート変数を宣言、非公開のインスタンス変数
    #price;

    constructor(title, price) {
        this.title = title;
        this.#price = price;
    }
}

// インスタンス作成
const myBook = new Book('History of Magic', 1000);

console.log(myBook.title); // アクセス可能

// クラス外からアクセスしようとするとエラー
// console.log(myBook.#price); // error
