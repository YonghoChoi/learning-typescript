// destination은 string으로 명시적으로 선언되어 있어 FieldTrip 클래스 인스턴스에 할당되고 접근할 수 있음
// 클래스가 nonexistent 속성을 선언하지 않았기 때문에 생성자에서 this.nonexistent 할당은 허용되지 않음

class FieldTrip {
    destination: string;

    constructor(destination: string){
        this.destination = destination
        console.log(`we are going to ${this.destination}`)

        this.nonexistent = destination
    }
}

// 클래스 인스턴스가 사용될 때, 코드가 this.nonexistent와 같은 
// 클래스 인스턴스에 존재하지 않는 멤버에 접근하려고 시도하면 오류를 발생시킴

const trip = new FieldTrip("planetarium")

trip.destination

trip.nonexistent