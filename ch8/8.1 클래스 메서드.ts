// string 타입의 단일 필수 매개변수를 갖는 greet 클래스 메서드를 가진 Greeter 클래스를 정의하는 코드임
class Greeter {
    greet(name: string) {
        console.log(`${name}, do your stuff`)
    }
}

new Greeter().greet("Miss Frizzle");

new Greeter().greet();

// 다음 Greeted 생성자는 message: string으로 매개변수가 제공되어야 함
class Greeted {
    constructor(message: string) {
        console.log(`As I ${message}`)
    }
}

new Greeted("take chances");

new Greeted();