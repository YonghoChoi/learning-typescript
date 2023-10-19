// adaptation 변수는 original과 동일한 타입으로 선언되었음
Const original = {
    medium: "movie",
    title: "Mean Girls"
}

let adaptation: typeof original;

if (Math.random() > 0.5) {
    adaptation = {...original, medium: "play"} // ok
} else {
    adaptation = {...original, medium: 2} 
}


// logRating 함수는 rating 값의 키 중 하나를 받음
// 코드는 인터페이스를 생성하는 것 대신 keyof typeof를 사용해 키가 rating 값 타입의 키 중 하나여야 함을 나타냄
const rating = {
    imdb: 8.4,
    metacritic: 82,
}

function logRating(key: keyof typeof ratings) {
    console.log(ratings[key])
}

logRating('imdb') //ok

logRating('invaild')