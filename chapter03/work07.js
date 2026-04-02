/*
ワーク07_練習問題

メソッドの最後にthisを返すことで、複数の処理を1行でつなげて書く「メソッドチェーン」を練習します。

Personクラスが定義済みです。Personクラスをメソッドチェーンで呼び出す処理を作成しましょう。

以下の手順でコードを書いてみましょう。

1. Personクラスのインスタンスを作成します。
2. メソッドチェーンを使ってsetNameを呼び出します。引数としてBobを渡します。
3. メソッドチェーンを使ってsetAgeを呼び出します。引数として16を渡します。
4. 最後にインスタンスを表示してください。

実行結果のように表示する処理を作成してください。

実行結果
Person { name: 'Bob', age: 16 }
*/

// 以下のようなクラスがあります
class Person {
    // 名前を設定して自分自身を返す
    setName(name) {
        this.name = name;
        return this;
    }

    // 年齢を設定して自分自身を返す
    setAge(age) {
        this.age = age;
        return this;
    }
}

// 以下の部分に処理を作成してください
const person = new Person();
// メソッドチェーンで連続設定
person.setName('Bob').setAge(16);
console.log(person);
