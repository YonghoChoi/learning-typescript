// 튜플을 반환하는 함수처럼 일반적인 원시 타입 대신 특정 리터럴을 생성한다고 알려진 함수에서 유용할 수 있음
// 다음 함수는 좀 더 구체적으로 만들 수 있는 값을 반환하는데 여기에서 getNameConst의 반환 타입은 
// 일반적인 string 대신 "Maria Bamford"라는 더 구체적인 값임
// 타입:() => string
const getName = () => "Maria Bamford";

// 타입: () => "Maria Bamford" 
const getNameConst = () => "Maria Bamford" as const;


// 다음 narrowJoke 변수는 string 대신 "one-liner"를 style 값으로 가지므로
// Joke 타입이 필요한 위치에 제공될 수 있음
interface Joke {
    quote: string;
    style: "story" | "one-liner"
}

function tellJoke(joke: Joke) {
    if(joke.style === "one-liner") {
        console.log(joke.quote)
    } else {
        console.log(joke.quote.split("\n"))
    }
}

// 타입: { quote: string; style: "one-liner"}
const narrowJoke = {
    quote: "If you stay alive for no other reason do it for spite",
    style: "one-liner" as const,
}

tellJoke(narrowJoke) // ok

// 타입: { quote: string; style: string}
const wideObject = {
    quote: "Time flies when you are anxious",
    style: "one-liner"
}

tellJoke(wideObject)