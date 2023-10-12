// FailureCounter의 countGrades 메서드는 기본 GradeCounter의 countGrages 메서드의 
// 반환 타입과 첫 번째 매개변수가 동일하기 때문에 허용 됨
// AnyFailureChecker의 countGrades는 잘못된 반환 타입을 가지므로 타입 오류 발생
class GradeCounter {
    countGrades(grades: string[], letter: string){
        return grades.filter(grade => grade === letter).length
    }
}
    
class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
        return super.countGrades(grades, "F")
    } 
}

class AnyFailureChecker extends GradeCounter {
    countGrades(grades: string[]) {
        return super.countGrades(grades, "F") !==0;

    }
}

const counter: GradeCounter = new AnyFailureChecker();

// 예상 number 실제 boolean
const count = counter.countGrades(["A", "C", "F"]);