/*
ワーク06_練習問題

データが更新される際に、不正な値が入らないようチェックする処理の課題です。

以下の手順でコードを書いてみましょう。

1. Personクラスを定義します。
2. #ageというプライベート変数を作成します（初期値は0）。
3. set age(value)でsetterメソッドを作成します。
4. set age(value)で、「0以上の数値」の場合、 #age にvalueを代入します。
5. set age(value)で、「0未満」を場合、「error：age cannot be negative value」を表示します。
6. get age()でgetterメソッドを作成します。
7. get age()は#ageを戻り値として返します。

実行結果のように表示する処理を作成してください。

実行結果
error：age cannot be negative value
age =>  20
*/

// 以下の部分に処理を作成してください
class Person {
    // プライベート変数を宣言
    #age = 0;

    // setterメソッドで値をチェックして代入
    set age(value) {
        if (value < 0) {
            console.log('error：age cannot be negative value');
        } else {
            this.#age = value;
        }
    }

    // getterメソッドを定義
    get age() {
        return this.#age;
    }
}

// 以下の部分は修正してはいけません
const person = new Person();
person.age = -5; // 不正な値（エラーが出る）
person.age = 20; // 正しい値
console.log('age => ', person.age);
