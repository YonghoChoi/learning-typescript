// 더 엄격한 구성 설정을 사용할 때 타입스크립트는 다음 예제에서 볼 수 있는 것과 같은
// ratings[key]에 대한 오류를 보고 함
// 타입 string은 Ratings 인터페이스에서 속성으로 허용되지 않는 값을 허용하고
// Ratings는 string 키를 허용하는 인덱스 시그니처를 선언하지 않음
/* interface Ratings {
    audience: number;
    critics: number;
}

function getRating(ratings: Ratings, key: string): number {
    return ratings[key]
}

const ratings: Ratings = { audience: 66, critics: 84};

getRating(ratings, 'audience') // ok

getRating(ratings, 'not valid') // 허용되지만 사용하면 안 됨 */


// 또 다른 옵션은 허용되는 키를 위한 리터럴 유니언 타입을 사용하는 것임
// 이 경우 컨테이너 값에 존재하는 키만 적절하게 제한하는 것이 더 정확함
function getRating(ratings: Ratings, key: 'audience' | 'critic'): number {
    return ratings[key] // ok
}

const ratings: Ratings = { audience: 66, critics: 84}

getRating(ratings, 'audience')

getRating(ratings, 'not valid')


// keyof Ratings는 'audience' | 'critic'과 동일하지만, 
// 작성하는 것이 훨씬 빠르고 Ratings 인터페이스가 변경되더라도 수동으로 업데이트 할 필요가 없음
function getCountKeyof(ratings: Ratings, key: keyof Ratings): number {
    return ratings[key] //ok
}

const ratings: Ratings = { audience: 66, critic: 84}

getCountKeyof(ratings, 'audience') // ok

getCountKeyof(ratings, 'not valid')