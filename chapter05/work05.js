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

