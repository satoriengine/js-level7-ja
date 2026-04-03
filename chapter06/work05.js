/*
ワーク05_練習問題

クラス全体で共有する「カウンター」と、計算を行う「クラスメソッド」を組み合わせる課題です。

以下の手順でコードを書いてみましょう。

1. Playerクラスを作成します。
2. Playerクラスに、クラス変数countを作成し、初期値を 0 にします。
3. コンストラクタでnameを受け取り、インスタンス変数に保存します。
4. コンストラクタでインスタンスが作られるたびに Player.count を 1 ずつ加算します。
5. クラスメソッド showTotal() を作成し、「current player num is  (countの値)」と出力するようにしてください。

下部の実行コードは修正せず、そのまま実行して期待通りの結果が出るか確認しましょう。

実行結果のように表示する処理を作成してください。

実行結果
current player num is 2
*/

// 以下の部分に処理を作成してください
class Player {
    static count = 0;

    constructor(name) {
        this.name = name;
        Player.count++;
    }

    static showTotal() {
        console.log('current player num is ' + Player.count);
    }
}

// 以下の部分は修正してはいけません
// 2個のインスタンス作成
new Player('アーサー');
new Player('マーリン');
// クラスメソッドの呼び出し;
Player.showTotal();
