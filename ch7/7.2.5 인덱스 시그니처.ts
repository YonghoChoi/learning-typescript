// 다음 WordCounts 인터페이스는 number값을 갖는 모든 string 키를 허용하는 것으로 선언되었음
// 이런 타입의 객체는 값이 number면 string 키가 아닌 그 어떤 키도 바인딩 할 수 없음

interface WordCounts {
    [i: string]: number;
}

const counts: WordCounts = {}

counts.apple = 0;
counts.banana = 1;

counts.cherry = false


// 다음 publishDates 값은 Date 타입으로 Frankenstein을 안전하게 반환하지만
// 타입스크립트는 Beloved가 정의되지 않았음에도 불구하고 정의되었다고 생각하도록 속임
interface DatesByName {
    [i: string]: Date;
}

const publishDates: DatesByName = {
    Frankenstein: new Date("1 jan 1818")
}

publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString())

publishDates.Beloved;
console.log(publishDates.Beloved.toString())


// 다음 HistoricalNovels는 모든 속성을 number 타입으로 선언했고 추가적으로 Oroonoko 속성이 존재해야 함
interface HistoricalNovels {
    Oroonoko: number;
    [i: string]: number;
}

const novels: HistoricalNovels = {
    Outlander: 1991,
    Oroonoko: 1688,
}

const missingOroonoko: HistoricalNovels = {
    Outlanger: 1991,
}

// 다음 ChapterStarts는 preface 속성은 0으로 다른 모든 속성은 더 일반적인 number를 갖도록 선언함
// 즉, ChapterStarts를 사용하는 모든 객체의 preface 속성은 반드시 0이어야 함
interface ChapterStarts {
    preface: 0;
    [i: string]: number;
}

const correctPreface: ChapterStarts = {
    preface: 0,
    night: 1,
    shopping: 5,
}

const wrongPreface: ChapterStarts = {
    preface: 1,
}

// 다음 MoreNarrowNumbers 인터페이스는 string을 string | undefined에 할당할 수 있지만
// MoreNarrowNumbers 인터페이스는 string | undefined를 String에 할당할 수 없음
interface MoreNarrowNumbers {
    [i: number]: string;
    [i: string]: string | undefined;
}

const mixedNumberAndStrings: MoreNarrowNumbers = {
    0: '',
    key1: '',
    key2: undefined,
}

interface MoreNarrowNumbers {
    [i: number]: string | undefined;
    [i: string]: string;
}