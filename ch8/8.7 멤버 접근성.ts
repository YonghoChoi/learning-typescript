// Base 클래스는 두 개의 Public 멤버와 한 개의 Protected 한개의 Private, 
// 그리고 #truePrivate을 사용해 한 개의 private를 선언함
// Subclass는 public과 protected 멤버는 접근할 수 있지만 privater과 #truePrivate은 접근할 수 없음
class Base {
    isPublicImPlicit = 0;
    public isPublicExplicit = 1;
    protected isProtected = 2;
    private isPrivate = 3;
    #truePrivate = 4;
}

class Subclass extends Base {
    examples() {
        this.isPublicImPlicit;
        this.isPublicExplicit;
        this.isProtected;

        this.isPrivate;
        this.#truePrivate;
    }
}

new Subclass().isPublicImPlicit;
new Subclass().isPublicExplicit;

new Subclass().isProtected;

new Subclass().isPrivate;

// TwoKeywords 클래스는 name 멤버를 private과 readonly로 선언함
class TwoKeywords {
    private readonly name: string;

    constructor() {
        this.name = "Anne Sullivan"
    }

    log() {
        console.log(this.name)
    }
}

const two = new TwoKeywords()

two.name = "Savitirabal phule"