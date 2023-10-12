// 두 클래스에서 모두 Graded를 구현하려면 grades 속성을 가져야 하고
// Reporter를 구현하려면 report 속성을 가져야 함
// Empty 클래스에는 Graded와 Reporter인터페이스를 제대로 구현하지 못했으므로 두 가지 타입 오류가 발생
interface Graded {
    grades: number[];
}

interface Reperter {
    report: () => string
}

class RepertCard implements Graded, Reperter {
    grades: number[];

    constructor(grades: number[]) {
        this.grades = grades;
    }

    report() {
        return this.grades.join(", ")
    }
}

class Empty implements Graded, Reperter {}

// 다음 AgeIsNumber와 AgeIsNotNumber 인터페이스는 age 속성을 서로 다른 타입으로 선언함
// AsNumber 클래스와 NotAsNumber 클래스 모두 두 인터페이스를 제대로 구현하지 못했음
interface AgeIsNumber {
    age: number;
}

interface AgeIsNotNumber {
    age: () => string;
}

class AsNumber implements AgeIsNumber, AgeIsNotNumber {
    age = 0; 
}

class NotAsNumber implements AgeIsNumber, AgeIsNotNumber {
    age() { return "";}
}