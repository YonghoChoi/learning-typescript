// 다음 Novel 인터페이스는 인라인 객체 타입인 author 속성과 
// setting 인터페이스인 setting 속성을 포함함

interface Novel {
    author: {
        name: string;
    }
    setting: Setting;
}

interface Setting{
    place: string;
    year: number;
}

let myNovel: Novel;

myNovel = {
    author: {
        name: 'Jane' 
    },
    setting: {
        place: "England",
        year: 1812
    }
}

myNovel = {
    author: {
        name: 'Emliy'
    },
    setting: {
        place: "West"
    }
}