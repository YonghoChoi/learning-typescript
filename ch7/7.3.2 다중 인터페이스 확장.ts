// GivesBothAndEither는 세 개의 메서드를 가짐
// 하나는 자체 메서드, 하나는 GivesNumber, 하나는 GivesString

interface GivesNumber {
    giveNumber(): number;
}

interface GivesString {
    giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string
}

function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither();
    instance.giveNumber();
    instance.giveString();
}