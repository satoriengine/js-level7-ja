/*
ワーク07_練習問題

以下の手順でコードを作成してください。

1. Personクラスを定義してください。
2. クラスの中に、nameとageという2つのインスタンス変数を作成します。
3. name には'Alice'、ageには16を初期値として代入してください。
4. Personクラスから、personという名前のインスタンスを作成してください。
5. 作成したインスタンスをconsole.logで表示してください。

実行結果のように表示する処理を作成してください。

実行結果
Person { name: 'Alice', age: 16 }
*/

class Person {
    name = 'Alice';
    age = 16;
}

const person = new Person();
console.log(person);
