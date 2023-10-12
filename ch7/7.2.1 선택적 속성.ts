// 타입 애너테이션 : 앞에?를 사용해 인터페이스의 속성이 선택적 속성임을 나타낼 수 있다
interface Book{
    author?: string;
    pages: number;
}

// ok
const ok: Book = {
    author: "Rita",
    pages: 80,
}

const missing: Book = {
    pages: 80
}