// 두 개의 MergedProperties 인터페이스 선언에서는 same 속성이 모두 동일하므로 문제 없지만
// different 속성은 타입이 서로 다르기 때문에 오류가 발생

interface MergedProperties {
    same: (input: boolean) => string;
    different: (input: string) => string;
}

interface MergedProperties {
    same: (input: boolean) => string;
    different: (input: number) => string;
}

// 그러나 병합된 인터페이스는 동일한 이름과 다른 시그니처를 가진 메서드는 정의할 수 있음 => 메서드에 대한 함수 오버로드가 발생
// MergedMethods 인터페이스는 두 가지 오버로드가 있는 different 메서드를 생성함
interface MergedMethods {
    different(input: string): string;
}

interface MergedMethods {
    different(input: number): string
}