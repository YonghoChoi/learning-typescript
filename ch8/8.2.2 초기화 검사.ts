// WithValue 클래스는 unused 속성에 값을 할당하지 않았고 
// 타입스크립트는 이 속성을 타입 오류로 인식함

class WithValue {
    immediate = 0;
    later: number;
    mayBeUndefined: number | undefined;
    unused: number;

    constructor() {
        this.later = 1;
    }
}


// 다음 예제는 엄격한 초기화 검사가 수행되지 않으면 올바르게 컴파일되지만 자바스크립트는 런타임 시 문제가 발생
class MissingInitializer {
    property: string
}

new MissingInitializer().property.length


// ActivitiesQueue 클래스는 생성자와는 별도로 여러 번 다시 초기화될 수 있으므로 
// pending 속성은 !와 함께 할당되어야 함

class ActivitiesQueue {
    pending!: string[];

    initialize(pending: string[]) {
        this.pending = pending
    }

    next() {
        return this.pending.pop()
    }
}

const activities = new ActivitiesQueue()

activities.initialize(['eat', 'sleep', 'learn'])
activities.next()