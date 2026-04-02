// フィールド宣言（Publicフィールド）
class Book {
    // フィールド宣言
    // あらかじめ「タイトルという変数を使うよ」と宣言
    title;
    author;

    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const myBook = new Book('History of Magic', 'Bob');
console.log(myBook);
