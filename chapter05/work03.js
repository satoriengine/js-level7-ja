// コンストラクタの連鎖とsuper
// Aクラスの定義
class A {
    constructor() {
        console.log('This is A');
    }
}

// Aを継承したBクラス
class B extends A {
    constructor() {
        super(); // Aを呼び出す
        console.log('This is B');
    }
}

// Bを継承したCクラス
class C extends B {
    constructor() {
        super(); // Bを呼び出す
        console.log('This is C');
    }
}

// インスタンス作成、結果的にA→B→Cの順でコンストラクタが動作
new C();
