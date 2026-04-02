// 引数を受け取るコンストラクタ
class Book {
    constructor(title) {
        // newの中身が title に入ってくる
        console.log('title => ', title);
    }
}

// 引数にタイトルを渡して作成
const myBook = new Book('History of Magic');
