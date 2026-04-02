// メソッド内でのthis利用
class Book {
    constructor(title) {
        this.title = title;
    }

    // 自分のtitleを使って文字列を作る
    showTitle() {
        console.log('title => ' + this.title);
    }
}

// インスタンス作成
const myBook = new Book('History of Magic');
// メソッド呼び出し
myBook.showTitle();
