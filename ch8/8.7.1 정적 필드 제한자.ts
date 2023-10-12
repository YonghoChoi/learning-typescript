// Question 클래스는 protected, static, readonly를 모두 사용해 prompt와 answer 속성을 만듦
class Question {
    protected static readonly answer: "bash";
    protected static readonly prompt = "What an"

    guess(getAnswer: (prompt: string) => string) {
        const answer = getAnswer(Question.prompt);

        if(answer === Question.answer) {
            console.log("you got it")
        }else{
            console.log("Try again")
        }
    }
}

Question.answer;