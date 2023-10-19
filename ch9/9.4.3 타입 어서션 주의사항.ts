// seasonCounts 예제에서 Map이 시간이 지남에 따라 다른 값을 갖도록 변경된다고 가정함
// non-null 어서션은 여전히 코드가 타입스크립트 타입 검사를 통과하도록 만들지만 런타임 오류가 발생할 수 있음
const seasonCounts = new Map([
    ["Broad City", 5], 
    ["Community", 6], 
])

// 타입: string
const knownValue = seasonCounts.get("I love Lucy")!;

console.log(knownValue.toUpperCase()) // 타입 오류는 아니지만 런타임 오류 발생


// acts 멤버가 없는 동일한 결함을 가지며 타입이 Entertainer인 객체 두 개를 생성하는 코드임
// 타입스크립트는 Entertainer타입 애너테이션으로 인해 declared변수에서 오류를 잡을 수 있음
// 하지만 타입 어서션 때문에 asserted 변수에 대해서는 오류를 잡을 수 없음
interface Entertainer {
    acts: string[],
    name: string;
}

const declared: Entertainer = {
    name: "Moms Mabley"
}

const asserted = {
    name: "Moms Mabley",
} as Entertainer; // 허용되지만 런타임 시 오류 발생

// 다음 구문은 런타임 시 다음 오류로 인해 정상적으로 작동되지 않음
console.log(declared.acts.join(", "))
console.log(asserted.acts.join(", "))


// 원시 타입은 서로 관련이 전혀 없으므로 하나의 원시 타입에서 다른 원시 타입으로 전환하는 것은 허용되지 않음
let myValue = "Stella!" as number;


// 하나의 타입에서 값을 완전히 관련 없는 타입으로 전환해야 하는 경우 이중 타입 어서션을 사용함
// 먼저 값을 any나 unknown 같은 top타입으로 전환한 다음 그 결과를 관련 없는 타입으로 전환함
let myValueDouble = "1337" as unknown as number; // 허용되지만 이렇게 사용하면 안 됨

