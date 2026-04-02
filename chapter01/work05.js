// instanceofによる型チェック
// クラス定義
class Book {}
class Magazine {} // 比較用の別のクラス

// インスタンス作成
const myBook = new Book();

// myBookは「Bookクラス」から作られたものか？
console.log(myBook instanceof Book); // true

// myBookは「Magazineクラス」から作られたものか？
console.log(myBook instanceof Magazine); // false
