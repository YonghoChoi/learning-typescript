// preferencesMutable 값은 as const 없이 선언되었으므로 
// 이름은 원시 타입인 string이 되고 수정이 허용됨
// 그러나 as const로 선언되었으므로 해당 멤버 값은 리터럴이고 수정이 허용되지 않음
function describePreference(preference: "maybe" | "no" | "yes") {
    switch (preference) {
        case "maybe": 
            return "I suppose...";
        case "no":
            return "No thanks";
        case "yes":
            return "Yes please";
    }
}

// 타입: {movie: string, standup: string}
const preferencesMutable = {
    movie: "maybe",
    standup: "yes",
}

describePreference(preferencesMutable.movie);

preferencesMutable.movie = "no";

// 타입: readonly { readonly movie: "maybe", readonly standup: "yes"}
const preferencesReadonly = {
    movie: "maybe",
    standup: "yes"
} as const;

describePreference(preferencesReadonly.movie);

preferencesReadonly.movie = "no"