// メソッド内でのsuperの利用
// 親クラスの定義
class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(this.name + 'は動いている');
    }
}

class Dog extends Animal {
    // オーバーライド
    move() {
        // 親(Animal)のmoveを実行
        super.move();
        // 独自の処理を追加
        console.log(this.name + 'は楽しく走り回っている');
    }
}

// 子クラスのインスタンス生成
const myDog = new Dog('ポチ');
myDog.move();
