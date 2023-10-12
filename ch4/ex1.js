//========================================
// 1. 타입 오류 확인
//========================================
var poet = {
    born: 1935,
    name: "Mary Oliver",
};
poet['born']; // 타입: number
poet.name; // 타입: string
// poet.end;   // Error: end는 존재하지 않는 프로퍼티
//========================================
// 2. 객체 타입 선언
//========================================
var poetLater;
poetLater = {
    born: 1935,
    name: "Mary Oliver",
};
var poetAlias;
poetAlias = {
    born: 1935,
    name: "Sara Teasdale",
};
var hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};
// WithFirstName/WithLastName은 타입 체크를 위한 타입으로만 사용되며 js로 변환되면 아래 변수들은 var 타입으로 선언됨
// 따라서 withFirstName과 withLastName 변수 모두 hasBoth의 객체를 담고 있음
var withFirstName = hasBoth;
console.log("4: " + withFirstName);
var withLastName = hasBoth;
console.log("4: " + withLastName);
var hasBothNames = {
    first: "Sarojini",
    last: "Naidu",
};
// Error: Date 타입 프로퍼티에 string 타입 대입
// const hasStartString: TimeRange = {
//     start: "1872-02-13",
// }
//========================================
// 6. 초과 속성 검사
//========================================
var poetMatch = {
    born: 1928,
    name: "Maya Angelou"
};
var extraProperty = {
    // activity: "walking", // Error: Poet 타입에 존재하지 않는 프로퍼티
    born: 1935,
    name: "Mary Oliver",
};
var existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};
var extraPropertyButOk = existingObject;
console.log("6: ", extraPropertyButOk);
