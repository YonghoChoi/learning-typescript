// MissingInitializer 클래스는 property를 옵션으로 정의했으므로
// 엄격한 속성 초기화 검사와 관계없이 클래스 생성자에게 할당하지 않아도 됨
class MissingInitializer {
    property?: string;
}

new MissingInitializer().property?.length

new MissingInitializer().property.length