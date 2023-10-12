// WithNullableName 타입은 WithNonNullableName에서 null을 허용하지 않도록 적절하게 다시 설정됨
// 그러나 WithNumericName의 name에는 number | string이 허용되지 않음
// number | string은 string | null에 할당할 수 없기 때문임

interface WithNullableName{
    name : string | null;
}

interface WithNonNullableName extends WithNullableName {
    name: string;
}

interface WithNumericName extends WithNullableName{
    name: number | string
}