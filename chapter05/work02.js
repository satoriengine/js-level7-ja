// メソッドのオーバーライド
// 親クラスの定義
class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    cry() {
        console.log('[' + this.name + '] 鳴き声');
    }
}

// 子クラスの定義、Animalを継承したDogクラス
class Dog extends Animal {
    // 親クラスのメソッドを上書き
    cry() {
        console.log('[' + this.name + '] ワンワン');
    }
    // 子クラスの独自メソッドの定義
    dig() {
        console.log('[' + this.name + '] ここ掘れ');
    }
}

// 親クラスのインスタンス生成
const animal = new Animal('生き物');
animal.cry();

// 子クラスのインスタンス生成
const myDog = new Dog('ポチ');
// オーバーライドしたメソッドの呼び出し
myDog.cry();
// 子クラスの独自メソッドの呼び出し
myDog.dig();
