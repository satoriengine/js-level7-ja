/*
ワーク02_最終問題

クラスとインスタンスメソッドを定義する課題です。

1. Greetngクラスを作成してください。
2. インスタンス変数としてnameを定義してください。
3. コンストラクタでnameを受け取り、インスタンス変数に保存します。
4. インスタンスメソッドとしてsayHelloという名前のメソッドを作成します。
5. インスタンスメソッドのsayHelloでは、「Hello, （名前）」という風に表示する処理を作成します。

下部の実行コードは修正せず、そのまま実行して期待通りの結果が出るか確認しましょう。

実行結果のように表示する処理を作成してください。

実行結果
Hello, Bob
Hello, Alice
*/

// 以下の部分に処理を作成してください
class Greetng {
    name;

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('Hello, ' + this.name);
    }
}

// 以下の部分は修正してはいけません
const g1 = new Greetng('Bob');
g1.sayHello();
const g2 = new Greetng('Alice');
g2.sayHello();
