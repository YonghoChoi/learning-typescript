// isNumberOrString 함수는 value를 받고 그 값이 number 또는 string인지를 나타내는 boolean값을 반환함
// isNumberOrString이 true를 반환하므로 if 문 내부의 값이
// 두 가지 타입 중 하나여야 한다고 유추할 수 있지만 타입스크립트는 그렇지 않음

// 타입스크립트는 isNumberOrString이 boolean 값을 반환한다는 사실만 알 수 있고 
// 인수의 타입을 좁히기 위함이라는 건 알 수 없음
function isNumberOrString(value: unknown) {
    return ['number', 'string'].includes(typeof value);
}

function logValueIfExists(value: number | string | null | undefined) {
    if(isNumberOrString(value)) {
        // value: number | string | unll | undefined의 타입
        value.toString();
    }else {
        console.log("Value does not exist:", value)
    }
}


// 타입 서술어의 반환 타입은 매개변수의 이름, is 키워드, 특정 타입으로 선언할 수 있음
function typePredicate(input: WideType): input is NarrowType;


// 이전 예제의 isNumberOrString 함수에서 value를 
// value is number | string으로 명시적으로 변경하면 명시적 반환 타입을 가질 수 있다
// 그러면 타입스크립트는 value가 number | string인 경우의 코드 블록은 
// number | string 타입의 값을 가져야 한다고 추론함
// 반면에 value가 number | string이 아닌 경우의 코드 블록은 null | undifined 타입의 값을 가져아 함
function isNumberOrString(value: unknown): value is number | string {
    return ['number', 'string'].includes(typeof value);
}

function logValueIfExists(value: number | string | null | undefined) {
    if(isNumberOrString(value)) {
        // value: number | string의 타입
        value.toString(); // ok
    } else {
        // value: null | undefined의 타입
        console.log("Value does not exist:", value)
    }
}


// StandupComedian 인터페이스는 Comedian 인터페이스 위에 추가 정보를 갖음
// isStandupComedian 타입 가드는 Comedian이 구체적으로 StandupComedian인지 여부를 확인하는데 사용 됨
interface Comedian {
    funny: boolean;
}

interface StandupComedian extends Comedian {
    routine: string;
}

function isNumberOrString(value: Comedian): value is StandupComedian {
    return 'routine' in value;
}

function workWithComedian(value: Comedian) {
    if (isStandupComedian(value)) {
        // value: StandupComedian의 타입
        console.log(value.routine);
    }

    //value: Comedian의 타입
    console.log(value.routine);
}


// isLongString 타입 서술어는 input 매개변수가 undefined 또는 길이가 7보다 작은 string인 경우 false를 반환함
// 결과적으로 else문(false 조건)은 text를 undefined타입으로 좁힘
function isLongString(input: string | undefined): input is string {
    return !!(input && input.length >= 7);
}

function workWithText(text: string | undefined) {
    if (isLongString(text)) {
        // text:string의 타입
        console.log("Long text:", text.length);
    } else {
        // text: undefined의 타입
        console.log("Short text:", text?.length)
    }
}