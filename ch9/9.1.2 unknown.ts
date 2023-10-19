// unknown 타입 값의 속성에 접근하려고 시도하면 타입 오류를 보고함
Function greetComedian(name: unknown) {
    console.log(`Announcing ${name.toUpperCase}`)
}

// 다음 코드 스니펫은 unknown에서 string으로 타입을 좁히기 위해 typeof를 사용함
function greetComedianSafety(name: unknown) {
    if(typeof value === "string") {
        console.log(`Announcing ${name.toUpperCase()}`)
    } else {
        console.log(`Well I'm ok`)
    }
}

greetComedianSafety(`Better white`) // Logs: 4
greetComedianSafety({}) // 로그 없음