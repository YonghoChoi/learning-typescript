// Student 클래스는 name 속성과 study메서드를 포함해 Learner 인터페이스를 올바르게 구현했지만
// Slaker에는 study가 누락되어 타입 오류가 발생함

// Slacker 예제에서 study(hours){} 메서드를 추가했다면 
// 타입스크립트는 타입 애너테이션을 지정하지 않는 한 hours 매개변수를 암시적으로 any로 간주함
interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours: number) {
        for (let i=0; i<hours; i+= 1){
            console.log("..studying")
        }   
    }
}

class Slacker implements Learner {

}

// 다른 형태로 구현한 Student 클래스는 멤버에 타입 애너테이션을 제공하지 않기 때문에
// 암시적인 any 타입 오류가 발생함
class Student implements Learner {
    name;

    study(hours) {
        
    }
}