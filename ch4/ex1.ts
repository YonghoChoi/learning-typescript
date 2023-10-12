//========================================
// 1. 타입 오류 확인
//========================================
const poet = {
    born: 1935,
    name: "Mary Oliver",
};

poet['born'];   // 타입: number
poet.name;  // 타입: string

// poet.end;   // Error: end는 존재하지 않는 프로퍼티


//========================================
// 2. 객체 타입 선언
//========================================
let poetLater: {
    born: number;
    name: string;
};

poetLater = {
    born: 1935,
    name: "Mary Oliver",
};

// poetlater = "Sappho";   // Error : 객체 타입 변수에 string 타입을 대입

//========================================
// 3. 별칭 객체 타입
//========================================
type Poet = {
    born: number;
    name: string;
}

let poetAlias: Poet;
poetAlias = {
    born: 1935,
    name: "Sara Teasdale",
};

// poetAlias = "Emily Dickinson"; // Error : Poet 타입 변수에 string 타입 대입

//========================================
// 4. 구조적 타이핑
//========================================
type WithFirstName = {
    firstName: string;
};

type WithLastName = {
    lastName: string;
};

const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};

// WithFirstName/WithLastName은 타입 체크를 위한 타입으로만 사용되며 js로 변환되면 아래 변수들은 var 타입으로 선언됨
// 따라서 withFirstName과 withLastName 변수 모두 hasBoth의 객체를 담고 있음
let withFirstName: WithFirstName = hasBoth;
console.log("4: ", withFirstName);

let withLastName: WithLastName = hasBoth; 
console.log("4: ", withLastName);

//========================================
// 5. 사용 검사
//========================================

type FirstAndlastNames = {
    first: string;
    last: string;
}

const hasBothNames: FirstAndlastNames = {
    first: "Sarojini",
    last: "Naidu",
}

// Error : last 프로퍼티가 빠짐
// const hasOnlyOne: FirstAndlastNames = {
//     first: "Sappho"
// }

type TimeRange = {
    start: Date;
}

// Error: Date 타입 프로퍼티에 string 타입 대입
// const hasStartString: TimeRange = {
//     start: "1872-02-13",
// }

//========================================
// 6. 초과 속성 검사
//========================================

const poetMatch: Poet = {
    born: 1928,
    name: "Maya Angelou"
}

const extraProperty: Poet = {
    // activity: "walking", // Error: Poet 타입에 존재하지 않는 프로퍼티
    born: 1935,
    name: "Mary Oliver",
}

const existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
}

// 아래 extraPropertyButOk 변수는 여기선 Poet 타입이지만 변환 시 var 타입이므로 activity 프로퍼티도 포함됨
const extraPropertyButOk: Poet = existingObject;
console.log("6: ", extraPropertyButOk);

//========================================
// 7. 중첩된 객체 타입
//========================================
type Poem7 = {
    author: {
        firstName: string;
        lastName: string; 
    };
    name: string;
}

const poemMatch: Poem7 = {
    author: {
        firstName: "Sylvia",
        lastName: "Plath",
    },
    name: "Lady Lazarus",
}

const poemMismatch: Poem7 = {
    author: {
        // Error: 프로퍼티명이 일치하지 않음
        // name: "Sylvia Plath",
    },
    name: "Tulips",
}

type Author = {
    firstName: string;
    lastName: string;
}

// Object 타입의 프로퍼티는 별도 타입으로 추출해서 포함가능
type PoemWithAuthor = {
    author: Author;
    name: string;
}

