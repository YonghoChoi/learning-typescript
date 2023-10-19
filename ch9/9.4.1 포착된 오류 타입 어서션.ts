// 다음 스니펫은 Error 클래스의 인스턴스라고 가정된 error의 message 속성에 접근함
try {
    // (오류를 발생시키는 코드)
} catch (error) {
    console.warn("Oh no", (error as Error).message)
}


// 다음 스피넷은 catch 블록에 발생한 error가 Error 클래스의 인스턴스인지 검사해
// 콘솔에 Error의 message를 출력할지 error 자체를 출력할지 여부를 확인함
try {
    // (오류를 발생시키는 코드)
} catch (error) {
    console.warn("Oh no", error instanceof Error ? error.message : error)
}