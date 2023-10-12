// Teacher 클래스의 이름은 teacher 변수에 주석을 다는 데 사용됨
// teacher 변수에는 Teacher클래스의 자체 인스턴스처럼 
// Teacher 클래스에 할당할 수 있는 값만 할당해야 함을 타입스크립트에 알려줌
class Teacher {
    sayHello() {
        console.log("Take chances")
    }
}

let teacher: Teacher;

teacher = new Teacher()

teacher = "Wahoo"

// 다음 withSchoolBus는 Schoolbus 타입의 매개변수를 받음
// 매개변수로 Schoolbus클래스 인스턴스처럼 
// 타입이 () => string[]인 getAbilitese 속성을 가진 모든 객체를 할당할 수 있음
class Schoolbus {
    getAbilities() {
        return ["magic", 'shapeshifiting']
    }
}

function withSchoolBus(bus: Schoolbus) {
    console.log(bus.getAbilities())
}

withSchoolBus(new Schoolbus())

// ok
withSchoolBus({
    getAbilities: () => ["transmerigication"]
});

withSchoolBus({
    getAbilities: () => 123;
})