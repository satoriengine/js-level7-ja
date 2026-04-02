// return this によるメソッドチェーン
class Book {
    setTitle(title) {
        this.title = title;
        // 自分自身（インスタンス）を返す
        return this;
    }

    setPrice(price) {
        this.price = price;
        // 自分自身（インスタンス）を返す
        return this;
    }
}

// インスタンス作成
const myBook = new Book();

// 戻り値が「自分自身」なので、続けて次のメソッドを呼べる
myBook.setTitle('History of Magic').setPrice(1000);

console.log(myBook);
