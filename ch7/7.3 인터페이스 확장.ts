// Novella 인터페이스는 Writing을 확장하므로 
// 객체는 최소한 Novella의 pages와 Writing의 title 멤버가 모두 있어야 함

interface Writing {
    title: string;
}

interface Novella extends Writing {
    pages: number;
}

let myNovella: Novella = {
    pages: 195,
    title: "Ehthan"
}

let missingPages: Novella = {
    title: "The A"
}

let extraProperty: Novella = {
    pages: 500,
    strategy: "baseline",
    style: "Naturalism"
}