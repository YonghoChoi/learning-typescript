// Lesson 클래스의 인스턴스는 파생된 OnlineLesson 인스턴스가 필요한 곳에서 사용할 수 없지만
// 파생된 인스턴스는 기본 클래스 또는 하위 클래스를 충족하는데 사용할 수 있음
class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject
    }
}

class OnlineLesson extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
        super(subject);
        this.url = url;
    }
}

let lesson: Lesson;
lesson = new Lesson("coding")
lesson = new OnlineLesson("coding", "oreilly.com")

let online: OnlineLesson;

online = new OnlineLesson("coding", "oreilly.com")

online = new Lesson("coding")

// 예제에서 LabeledPastGrades는 선택적 속성인 PastGrades만 추가하므로
// 하위 클래스 대신 기본 클래스의 인스턴스를 사용할 수 있음
class PastGrades {
    grades: number[] = [];
}

class LabeledPastGrades extends PastGrades {
    label?: string;
}

let subClass: LabeledPastGrades;

subClass = new LabeledPastGrades(); // ok
subClass = new PastGrades(); // ok