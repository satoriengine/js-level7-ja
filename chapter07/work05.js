/*
ワーク05_最終問題

クラス全体で共有する「カウンター」と、計算を行う「クラスメソッド」を組み合わせる課題です。

以下の手順でコードを書いてみましょう。

1. Ticketクラスを作成します。
2. Ticketクラスに、クラス変数countを作成し、初期値を 0 にします。
3. コンストラクタでnameを受け取り、インスタンス変数に保存します。
4. コンストラクタでインスタンスが作られるたびに Ticket.count を 1 ずつ加算します。
5. クラスメソッドshowTotalTicket() を作成し、「current ticket num is  (countの値)」と出力するようにしてください。

下部の実行コードは修正せず、そのまま実行して期待通りの結果が出るか確認しましょう。

実行結果のように表示する処理を作成してください。

実行結果
current ticket num is 3
*/

// 以下の部分に処理を作成してください
class Ticket {
    static count = 0;

    constructor(name) {
        this.name = name;
        Ticket.count++;
    }

    static showTotalTicket() {
        console.log('current ticket num is ' + Ticket.count);
    }
}

// 以下の部分は修正してはいけません
// 3個のインスタンス作成
new Ticket('Bob');
new Ticket('Tom');
new Ticket('Alice');
// クラスメソッドの呼び出し;
Ticket.showTotalTicket();
