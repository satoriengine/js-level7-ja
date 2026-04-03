// クラスメソッド（静的メソッド）
class Triangle {
    // クラスメソッド
    static getArea(base, height) {
        return (base * height) / 2;
    }
}

// クラスメソッドは、インスタンスを作らずに呼び出せる
// クラス名.メソッド名() で呼び出す
const area = Triangle.getArea(10, 5);
console.log(area); // 25
