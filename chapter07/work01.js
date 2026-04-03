/*
ワーク01_最終問題

クラスを定義する課題です。

1. Carクラスを作成してください。
2. インスタンス変数としてnameとcolorを定義してください。
3. コンストラクタでnameとcolorを受け取り、インスタンス変数に保存します。

下部の実行コードは修正せず、そのまま実行して期待通りの結果が出るか確認しましょう。

実行結果のように表示する処理を作成してください。

実行結果
Car { name: 'Tesla', color: 'white' }
Car { name: 'Porsche', color: 'red' }
*/

// 以下の部分に処理を作成してください
class Car {
    name;
    color;

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

// 以下の部分は修正してはいけません
const car1 = new Car('Tesla', 'white');
console.log(car1);
const car2 = new Car('Porsche', 'red');
console.log(car2);
