// クラス変数（静的メンバ）
class Player {
    // インスタンス変数
    name;
    job;
    // クラス変数;
    // 職業の定義
    static JOB_HERO = '勇者';
    static JOB_MAGICIAN = '魔法使い';
    static JOB_FIGHTER = '戦士';

    constructor(name, job) {
        this.name = name; // インスタンス変数（個別の名前）
        this.job = job; // インスタンス変数（個別の職業）
    }
}

// クラス変数は、インスタンスを作らずに呼び出せる
// クラス名.変数名で呼び出す
console.log(
    '選べる職業:',
    Player.JOB_HERO,
    Player.JOB_MAGICIAN,
    Player.JOB_FIGHTER,
);

// クラス変数を使ってキャラクターを作成
const p1 = new Player('Bob', Player.JOB_HERO);
console.log(p1);
const p2 = new Player('Tom', Player.JOB_MAGICIAN);
console.log(p2);
