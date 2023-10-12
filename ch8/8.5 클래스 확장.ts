// Teacher는 StudentTeacher 하위 클래스의 인스턴스에 
// 사용할 수 있는 teach 메서드를 선언함
class Teacher {
    teach() {
        console.log("The surest test of")
    }
}

class StudentTeacher extends Teacher {
    learn() {
        console.log('I cannot afford the')
    }
}

const teacher = new StudentTeacher();

teacher.teach();
teacher.learn();

teacher.other();