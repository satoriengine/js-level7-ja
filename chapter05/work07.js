/*
ワーク07_練習問題

親クラスから引き継いだメソッドを、子クラス独自の動きに書き換える（オーバーライド）課題です。

以下の手順でコードを書いてみましょう。

1. Singerクラスを継承したRockStarクラスを作成してください。
2. Singerにあるsing()メソッドをオーバーライドしてください。
3. オーバーライドしたsing()の中では、名前のあとに「(名前) is screaming!!」と出力するようにしてください。

下部の実行コードは修正せず、そのまま実行して期待通りの結果が出るか確認しましょう。

実行結果のように表示する処理を作成してください。

実行結果
Bob is screaming!!
*/

// 以下のようなクラスがあります
class Singer {
    constructor(name) {
        this.name = name;
    }
    sing() {
        console.log(this.name + ' is singing');
    }
}

// 以下の部分に処理を作成してください
class RockStar extends Singer {
    sing() {
        console.log(this.name + ' is screaming!!');
    }
}

//以下の部分は修正してはいけません
const star = new RockStar('Bob');
star.sing();
