/*
ワーク07_練習問題

引数が多い場合に便利なオブジェクト形式での初期化を練習します。

以下の手順でコードを作成してください。

1. Personクラスを定義します。
2. constructorで、引数として、1個のオブジェクト（info）を受け取れるようにします。
3. info.nameやinfo.ageを使って、インスタンス変数に値を代入してください。
4. インスタンスを作成する際、引数に { name: 'Alice', age: 16 } を渡してください。
5. console.logでインスタンスを表示してください。

実行結果のように表示する処理を作成してください。

実行結果
Person { name: 'Alice', age: 16 }
*/

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
    }
}

const person = new Person({
    name: 'Alice',
    age: 16,
});
console.log(person);
