// コンストラクタの基本
class Book {
    constructor() {
        // newされた瞬間にこの中身が実行される
        console.log('新しい本が作成されました！');
    }
}

// インスタンスを作るだけで、メッセージが表示される
const myBook = new Book();
