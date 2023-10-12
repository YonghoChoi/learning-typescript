// 기본 클래스 Assignment는 grade를 number | undefined로 선언하고
// 하위 클래스 GradedAssingment는 grade를 항상 존재하는 number 타입으로 선언함
class Assignment {
    grade?: number;
}

class GradedAssingment extends Assignment {
    grade: number;

    constructor(grade: number) {
        super();
        this.grade = grade;
    }
}

// 예제에서 VagueGrade의 value는 기본 클래스 NumericGrade의 
// number 타입에 | string을 추가하려고 하므로 타입 오류가 발생함
class NumericGrade {
    value = 0;
}

class VagueGrade extends NumericGrade {
    value = Math.random() > 0.5 ? 1 : "..";
}

const instance: NumericGrade = new VagueGrade();

// 예상 number 실제 number | string
instance.value