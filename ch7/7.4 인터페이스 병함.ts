// fromFirst와 fromSecond라는 두 개의 속성을 갖는 Merged 인터페이스를 선언함
interface Merged{
    fromFirst: string;
}

interface Merged{
    fromSecond: number
}

// 기본 타입스크립트 컴파일로 옵션을 사용할 때, 파일에서 myEnvironmentVariable 속성이 있는
// Window 인터페이스를 선언하면 window.myEnvironmentVariable을 사용할 수 있음
interface Window{
    myEnvironmentVariable: string
}

window.myEnvironmentVariable;