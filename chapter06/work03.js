// クラス変数による状態管理
class User {
    // インスタンス変数
    name;
    // クラス変数;
    // クラス全体で1つだけのカウンター
    static count = 0;

    constructor(name) {
        this.name = name;
        // インスタンスが作られるたびに、クラス変数を加算
        User.count++;
    }
}

new User('Alice');
new User('Bob');

console.log('current user num is ', User.count); // 2
