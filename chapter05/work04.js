// コンストラクタでの引数受け渡し
// 親クラスの定義
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// 子クラスの定義、Animalを継承したDogクラス
class Dog extends Animal {
    constructor(name, type) {
        // 親クラスのコンストラクタを呼び出す。nameを渡す
        super(name);
        // 子クラス独自のインスタンス変数を代入
        this.type = type;
    }

    //子クラスの独自メソッドの定義
    showInfo() {
        console.log('name => ' + this.name);
        console.log('type => ' + this.type);
    }
}

// 子クラスのインスタンス生成
const myDog = new Dog('ポチ', '秋田犬');
//子クラスの独自メソッドの呼び出し
myDog.showInfo();
