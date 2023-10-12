// School 클래스와 getStudentTypes 메서드는 abstract로 표시됨
// 그러므로 하위 클래스인 Perschool과 Absence는 getStudentTypes를 구현해야 함
abstract class School {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getStudentTypes(): string[];
}

class Perschool extends School {
    getStudentTypes() {
        return ["preschooler"]
    }
}

class Absence extends School {}

// School 예제에서 new School을 호출하려고 하면 타입스크립트 오류가 발생함
let school: School;

school = new Perschool("Sunnyside daycare")
school = new School("somewhere alse")