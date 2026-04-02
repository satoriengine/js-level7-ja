// 複数インスタンスの作成
// クラス定義
class Book {
    title = 'History of Magic';
    author = 'Bob';
}

// 2個のインスタンス作成
const book1 = new Book();
const book2 = new Book();

// book2を変更
book2.title = 'Happy Cooking';
book2.author = 'Tom';

// それぞれの結果を確認
console.log(book1);
console.log(book2);
