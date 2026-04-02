// コンストラクタをオブジェクトで初期化
class Book {
    // optionsというオブジェクトを受け取る

    constructor(options) {
        // オブジェクトの各値をインスタンス変数に代入
        this.title = options.title;
        this.author = options.author;
        this.price = options.price;
    }
}

// オブジェクト渡すので、順番を気にしなくてOK
const myBook = new Book({
    title: 'History of Magic',
    author: 'Bob',
    price: 1200,
});

console.log('title => ' + myBook.title);
console.log('author => ' + myBook.author);
console.log('price => ' + myBook.price);
