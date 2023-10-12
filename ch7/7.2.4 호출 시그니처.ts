// 다음 FunctionAlias와 CallSignature 타입은 모두 동일한 함수 매개변수와 반환타입을 설명함

type FunctionAlias = (input: string) => number;

interface CallSignature {
    (input: string): number;
}

// 타입: (input: string) => number
const typedFunctionAlias: FunctionAlias = (input) => input.length

// 타입: (input: string) => number
const typedCallSignature: CallSignature = (input) => input.length



// 다음 KeepsTrackOfCalls 함수 선언에는 number 타입인 counter 속성이 주어저 Function WithCount 인터페이스에 할당 할 수 있음
// 따라서 FunctionWithCount 타입의 hasCallCount 인수에 할당할 수 있음
// 다음 코드의 마지막 함수에는 count 속성이 주어지지 않음

interface FunctionWithCount {
    count: number;
    (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
    console.log("No idea");
}

hasCallCount = doesNotHaveCount