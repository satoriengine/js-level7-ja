/*
ワーク06_練習問題

既存のクラス（親クラス）の機能をすべて引き継ぎつつ、新しい機能（メソッド）を追加した新しいクラス（子クラス）を作成してみましょう。

以下の手順でコードを書いてみましょう。

1. Singerクラスを継承した、新しいクラスIdolを定義してください。
2. Idolクラスの中に、子クラスだけのメソッドdance()を作成してください。
3. dance()メソッド内では、自分の名前（this.name）を使って 「(名前) is dancing」 と出力するようにしてください。

下部の実行コードは修正せず、そのまま実行して期待通りの結果が出るか確認しましょう。

実行結果のように表示する処理を作成してください。

ヒント
Idolクラスにはconstructorやsingメソッドを書いていませんが、extends を使うことで親であるSingerの機能をそのまま使うことができます。

実行結果
Alice is singing
Alice is dancing
*/

// 以下のようなクラスがあります
class Singer {
    name;
    constructor(name) {
        this.name = name;
    }
    sing() {
        console.log(this.name + ' is singing');
    }
}

// 以下の部分に処理を作成してください



//以下の部分は修正してはいけません
const myIdol = new Idol('Alice');
myIdol.sing();
myIdol.dance();
