// 두 가지 타입 어서션은 둘 다 Date | undefined가 아니고 Date가 된다는 점에서 동일함
// 타입 유추:Date | undifined
let maybeDate = Math.random() > 0.5
    ? undefined
    : new Date()

// 타입이 Date라고 간주됨
maybeDate as Date;

// 타입이 Date라고 간주됨
maybeDate!;


// 다음 seasonCounts는 일반적인 Map<string, number>임
// seasonCounts는 "I love Lucy"키를 포함하고 있으므로 
// knownValue 변수는 !를 사용해 해당 타입에서 | undefined를 제거할 수 있음
const seasonCounts = new Map([
    ["I love Lucy", 6],
    ["The Golden Girls", 7]
])

//타입 string | undefined
const maybeValue = seasonCounts.get("I love Lucy")

console.log(maybeValue.toUpperCase())

// 타입:string
const knownValue = seasonCounts.get("I love Lucy")!

console.log(knownValue.toUpperCase())