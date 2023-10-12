// 다음 예제에서 Quote 클래스의 text 속성은 생성자에게서는 값이 지정되지만
// 다른 곳에서 값을 지정하려고 하면 타입 오류가 발생함

class Quote {
    readonly text: string;

    constructor(text: string) {
        this.text = ; 
    }

    emphasize() {
        this.text += "!"
    }
}

const quote = new Quote(
    "There is a brilliant child"
);

Quote.text = "ha"

// 클래스 속성은 처음에는 모두 문자열 리터럴로 선언되므로 
// 둘 중 하나를 string으로 확자하기 위해서는 타입 애너테이션이 필요함
class RandomQuote {
    readonly explicit: string = "Home is the"
    readonly implicit = "Home is the"

    constructor() {
        if(Math.random() > 0.5) {
            this.explicit = "We start learning";
            this.implicit = "We start learning";
        }
    }
}

const quote = new RandomQuote();

quote.explicit;
quote.implicit;