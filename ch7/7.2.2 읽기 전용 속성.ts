// Page 인터페이스의 text 속성에 접근하면 string을 반환하지만
// text에 새로운 값을 할당하면 타입 오류 발생

interface Page{
    readonly text: string;
}

function read(page: Page){
    // ok : text 속성을 수정하지 않고 읽는 것 
    console.log(page.text)

    page.text += "!"
}



const pageIsh = {
    text: "Hello world"
}

// ok: pageIsh는 Page객체가 아니라 text가 있는 유추된 객체 타입이다
pageIsh.text += "!";

// ok: pageIsh의 더 구체적인 버전인 Page를 읽음
read(pageIsh)