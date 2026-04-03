// extendsによるクラスの継承
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
    // 中身は空
}

// 親クラスのインスタンス生成
const animal = new Animal('生き物');
animal.cry();

// 子クラスのインスタンス生成
const myDog = new Dog('ポチ');
myDog.cry();
