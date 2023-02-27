import 
{
    containerAnswerOption
} from "./Quiz.js";

export
{
    answerQuestionPage1,
    answerQuestionPage2,
    ListQuizzAnswer
}
// Array untuk menyimpan jawaban - jawaban quiz
let answerQuestionPage1 = []
let answerQuestionPage2 
// Baris akhir array
let randomAnswer
let randomAnswerIndexs
// Function berisi jawaban pertanyaan halaman pertama
function ListQuizzAnswer(AnswerOne)
{    
    switch(AnswerOne)
    {
        case undefined :
        {
            AnswerOne = ["Linus Trovalds", "Bil Gates", "James gostling", "Elon Musk"]
            for(randomAnswer of AnswerOne)
            {   
                return randomAnswer
                // for(let incrementValue = 0; containerAnswerOption.childNodes.length > incrementValue; incrementValue++)
                // {
                //     return randomAnswer[incrementValue]
                // }
            }
        }
        break
    }
}
// Baris akhir function 