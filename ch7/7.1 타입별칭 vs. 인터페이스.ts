// type Poet = {
//     born: Number,
//     name: string,
// };

// 인터페이스로 구현한 위와 동일한 구문
// 위아 아래 두 구문은 거의 같다
interface Poet {
    born: number;
    name: string;
}

let valueLater: Poet;

valueLater = {
    born: 1935,
    name: "Sara"
}

valueLater = "Emily"


valueLater = {
    born: true,
    name: 'Sappho'
}