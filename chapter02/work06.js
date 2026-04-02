/*
ワーク06_練習問題

コンストラクタを使って、インスタンスを作る時に「名前」と「年齢」を自由に設定できるようにしましょう。

以下の手順でコードを作成してください。

1. Personクラスを定義します。
2. constructorを作成し、引数としてnameとageを受け取れるようにします。
3. 受け取った値を、それぞれthis.nameとthis.ageに代入してください。
4. インスタンスを作成する際に、実行結果と同じデータ（'Bob', 17）を渡して作成してください。
5. console.logでインスタンスを表示してください。

実行結果のように表示する処理を作成してください。

実行結果
Person { name: 'Bob', age: 17 }
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('Bob', 17);
console.log(person);
