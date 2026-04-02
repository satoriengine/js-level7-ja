// インスタンス変数への代入
class Book {
    constructor(title, author) {
        // 引数をインスタンス変数に代入
        this.title = title;
        this.author = author;
    }
}

const myBook = new Book('History of Magic', 'Bob');

// インスタンス変数の表示
console.log(myBook.title);
console.log(myBook.author);
