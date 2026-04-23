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
