// 예제에서 PassingAnnouncer의 생성자는 number 인수를 사용해 
// 기본 클래스인 GradeAnnouncer의 생성자를 올바르게 호출하는 반면,
// FailingAnnouncer는 기본 생성자를 올바르게 호출하지 않아 타입 오류가 발생함
class GradeAnnouncer {
    message: string;

    constructor(grade: number) {
        this.message = grage >= 65 ? "Maybe next time" : "you pass"
    }
}

class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100)
    }
}

class FailingAnnouncer extends GradeAnnouncer {
    constructor() {}
}

// ContinuedGradesTally 클래스는 super()를 호출하기 전에 생성자에서
// this.grades를 잘못 참조함
class GradesTally {
    grades: number[] = [];

    addGrades(...grades: number[]) {
        this.grades.push(...grades);
        return this.grades.length;
    }
}

class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades: number[]) {
        this.grades = [...previousGrades];

        super()

        console.log("Starting with legnth", this.grades.length)
    }
}