// 인터페이스 멤버를 함수로 선언하는 두 가지 방법
// 1, 메서드 구문 : 인터페이스 멤버를 member(): void와 같이 객체의 멤버로 호출되는 함수로 선언
// 2, 속성 구문 : 인터페이스 멤버를 member: () => void와 같이 독립 함수로 동일하게 선언
 
interface HasBothFunctionTypes{
    property: () => string;
    method() : string;
}

const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
        return "";
    }
}

hasBoth.property()
hasBoth.method()

// 선택적 속성 키워드인 ?를 사용해 필수로 제공하지 않아도 되는 멤버로 나타낼 수 있음

interface OptionReadonlyFunctions {
    optionalProperty?: () => string;
    potionalMethod?(): string; 
}

