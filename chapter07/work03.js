/*
ワーク03_最終問題

継承に関する課題です。

1. Phoneクラスを継承したSmartPhoneクラスを作成してください。
2. インスタンスメソッドとしてuseAppという名前のメソッドを作成します。
3. インスタンスメソッドのuseAppでは、「（名前）can use apps」という風に表示する処理を作成します。

下部の実行コードは修正せず、そのまま実行して期待通りの結果が出るか確認しましょう。

実行結果のように表示する処理を作成してください。

実行結果
iPhone can make phone call
iPhone can use apps
*/

// 以下のようなクラスがあります
class Phone {
    constructor(name) {
        this.name = name;
    }
    call() {
        console.log(this.name + ' can make phone call');
    }
}

// 以下の部分に処理を作成してください
class SmartPhone extends Phone {
    useApp() {
        console.log(this.name + ' can use apps');
    }
}

// 以下の部分は修正してはいけません
const sp = new SmartPhone('iPhone');
sp.call();
sp.useApp();
