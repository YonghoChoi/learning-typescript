// any는 일반적으로 console.log의 매개변수와 같이 모든 타입의 데이터를 받아들이는 위치에서 사용함
let anyValue: any;
anyValue = "Lucille Ball" // ok
anyValue = 123; // ok

console.log(anyValue); // ok


// 아래의 name.toUpperCase() 호출은 확실히 문제가 되지만
// name이 any로 선언되었기 때문에 타입스크립트는 타입 오류를 보고하지 않음
function greetComedian(name: any) {
    // 타입 오류 없음
    console.log(`Announcing ${name.toUpperCase()}`)
}

greetComedian({name: `Bea Arthur`});