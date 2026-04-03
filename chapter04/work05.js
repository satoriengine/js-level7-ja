/*
ワーク05_練習問題

外部から直接書き換えられたくないデータを「隠し」、特定の形式で取り出す問題です。

以下の手順でコードを書いてみましょう。

1. Personクラスを定義します。
2. #nameというプライベート変数を作成します。
3. コンストラクタで受け取った値を#nameに代入します。
4. get name()でgetterメソッドを作成します。
5. get name()は#nameを戻り値として返します。


実行結果のように表示する処理を作成してください。

実行結果
Alice
*/

// 以下の部分に処理を作成してください
class Person {
    // プライベート変数を宣言
    #name;

    // コンストラクタを作成
    constructor(name) {
        this.#name = name;
    }

    // getterメソッドを定義
    get name() {
        return this.#name;
    }
}

// 以下の部分は修正してはいけません
const person = new Person('Alice');
console.log(person.name);
