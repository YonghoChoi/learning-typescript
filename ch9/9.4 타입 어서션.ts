// 스니펫에서 JSON.parse로부터 반환된 결과는 
// string[], [string, string], ["grace", "frankie"]같은 타입이 될 수 있음
// 세 줄의 코드에서 타입 어서션을 사용해 any인 타입을 셋 중 하나로 전환함
const rawData = '["grace", "frankie"]';

// 타입: any
JSON.parse(rawData);

// 타입: string[]
JSON.parse(rawData) as string[];

// 타입: [string, string]
JSON.parse(rawData) as [string, string];

// 타입: ["grace", "frankie"]
JSON.parse(rawData) as ["grace", "frankie"];

