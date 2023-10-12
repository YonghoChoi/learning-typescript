// WithMethod 클래스는 모든 인스턴스가 참조할 수 있는 myMethod 메서드를 선언함
class WithMethod {
    myMethod() {}
}

new WithMethod().myMethod === new WithMethod().myMethod // true


// WithProperty 클래스는 이름이 myProperty인 단일 속성을 포함하며 
// 각 클래스 인스턴스에 대해 다시 생성되는 () => void 타입임
class WithProperty {
    myProperty: () => {}
}

new WithMethod().myProperty === new WithMethod().myProperty // false


// WithPropertyParameters 클래스는 타입이 (input: boolean) => string인 takesParameters 속성을 가짐
class WithPropertyParameters {
    takesParameters = (input: boolean) => input ? "yes" : "no"
}

const instance = new WithPropertyParameters()

instance.takesParameters(true) // ok

instance.takesParameters(123)