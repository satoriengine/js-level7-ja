// setterメソッドと値チェック
class Book {
    // プライベート変数を宣言、非公開のインスタンス変数
    #price = 0;

    // setキーワードで書き込み時の処理を定義
    // 非公開メンバに値を代入する際、値の妥当性をチェック
    set price(value) {
        // 負の数値は代入不可
        if (value < 0) {
            console.log('error: negative value');
        } else {
            // 正の数値は代入可
            this.#price = value;
        }
    }

    // getキーワードで、プロパティのように振る舞うメソッドを作る
    get price() {
        return this.#price;
    }
}

// インスタンス作成
const myBook = new Book();

// setterメソッドで代入。()は不要。変数のように扱える
myBook.price = -500; // 負の値なので代入不可
myBook.price = 1500; // 正の値なので代入可

// getterメソッド呼び出し。()は不要。変数のように扱える
console.log('price => ', myBook.price);
