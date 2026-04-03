// getterメソッド
class Book {
    // プライベート変数を宣言、非公開のインスタンス変数
    #title;
    #price;

    constructor(title, price) {
        this.#title = title;
        this.#price = price;
    }

    // getキーワードで、プロパティのように振る舞うメソッドを作る
    get title() {
        return this.#title;
    }

    // getキーワードで、プロパティのように振る舞うメソッドを作る
    get price() {
        return this.#price;
    }
}

// インスタンス作成
const myBook = new Book('History of Magic', 1000);

// getterメソッド呼び出し。()は不要。変数のように扱える
console.log(myBook.title); // History of Magic
console.log(myBook.price); // 1000

// 値を代入しようとしても書き換え不可
myBook.title = 'anothor title';
console.log(myBook.title); // History of Magic
