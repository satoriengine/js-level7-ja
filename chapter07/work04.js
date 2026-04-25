/*
ワーク04_最終問題

親クラスから引き継いだメソッドを、子クラス独自の動きに書き換える（オーバーライド）課題です。

以下の手順でコードを書いてみましょう。

1. Carクラスを継承したElectricCarクラスを作成してください。
2. Carにあるmove()メソッドをオーバーライドしてください。
3. オーバーライドしたmove()の中では、名前のあとに「(名前) moves by electricity」と出力するようにしてください。

下部の実行コードは修正せず、実行結果のように表示する処理を作成してください。

実行結果
Tesla moves by electricity
*/

// 以下のようなクラスがあります
class Car {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(this.name + ' moves by gas');
    }
}

// 以下の部分に処理を作成してください



//以下の部分は修正してはいけません
const ec = new ElectricCar('Tesla');
ec.move();
