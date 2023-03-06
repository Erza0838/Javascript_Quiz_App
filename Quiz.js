// Bagian import untuk mengambil function dan variable dari file Quizz_Answer.js
import 
{
	ListQuizzAnswer,
	answerQuestionPage1
} from "./Quizz_Answer.mjs"
// Baris akhir import

// Bagian untuk mengexport
export
{
	containerAnswerOption
}
// Baris akhir export

const StartButtonId = document.getElementById("Start_Button_Id")
	
const ShowFormContainer = document.getElementById("Form_Container_Id")

let containerAnswerOption = document.getElementById("Answer_Option_Container")
console.log(containerAnswerOption.childElementCount)
let displayRandomQuestionToPage = document.getElementById("Show_Quetions")

let displayRandomAnswerToPage = document.querySelectorAll("Random_Answer_Options")

let displayAllRandomAnswerToPage = containerAnswerOption + displayRandomAnswerToPage

let questionsList

let mathRandomNumbers

let radomIndexQuestion

// Function untuk menyimpan pertanyaan 
function QuestionsList()
{
	questionsList = 
	[
		"Siapa pencipta Linux?",
		"Penulisan variable yang benar pada javascript?",
		"Yang termasuk bahasa interpreter adalah?",
		"DOM digunakan untuk?",
		"Penulisan array pada javascript?",
		"Yang bukan pencipta bahasa pemrograman adalah?",
	]
}
QuestionsList()
// Baris akhir function

// Function untuk menyimpan jawaban
function QuestionsAndAnswerList()
{
	questionsList = 
	[
		"Siapa pencipta Linux?",
		"Penulisan variable yang benar pada javascript?",
		"Yang termasuk bahasa interpreter adalah?",
		"DOM digunakan untuk?",
		"Penulisan array pada javascript?",
		"Yang bukan pencipta bahasa pemrograman adalah?",
	]
}
QuestionsAndAnswerList()
// Baris akhir function

// Function untuk memilih pertanyaan secara acak
function ChooseRandomQuestions()
{
	mathRandomNumbers = Math.floor(2.1 + 2 * Math.random(4.7))
	radomIndexQuestion = questionsList[mathRandomNumbers]
	return radomIndexQuestion
}
// Baris akhir function

// Function untuk memulai quizz dengan mouse klik
function ClickEvent()
{	
	StartButtonId.addEventListener("click", () => 
	{
		StartButtonId.style.display = "none"	
		ShowFormContainer.style.display = "block"
	}, {once : true}) 
}
// Baris akhir function 

// Function untuk memulai quizz dengan tombol Enter
function EnterKeyEvent()
{	
	window.addEventListener("keypress", (KeyCode) => 
	{	
		if(KeyCode.key == "Enter")
		{
			StartButtonId.style.display = "none"	
			ShowFormContainer.style.display = "block"
		}
	}, {once : true})
}
// Baris akhir function 

// Function untuk menjalankan event mouse dan keyboard
function RunClickAndKeyboardEvents()
{
	ClickEvent() || EnterKeyEvent()
}
RunClickAndKeyboardEvents()
// Baris akhir function

// Object  untuk menampilkan pertanyaan dan jawaban
let showQuestionAndAnswer = 
{
	ShowQuestionToPage : // Function untuk menampilkan pertanyaan 
						function ShowQuestion()
						{	
							displayRandomQuestionToPage.innerText = ChooseRandomQuestions()
						},
						// Baris akhir function 
	ShowAnswerToPage : // Function untuk menampilkan jawaban
						function ShowAnswer()
						{	
							[answerQuestionPage1].forEach( (AnswerValues) => 
							{	
								for(let compareValue = 0; containerAnswerOption.childNodes.length > compareValue; compareValue++)
								{
									containerAnswerOption.childNodes[compareValue].innerText = ListQuizzAnswer(AnswerValues[compareValue])
								}
							})		
						}
						// Baris akhir function 
}
// Baris akhir object

// Function untuk menampilkan pertanyaan  dan jawaban
function QuestionNotEmty()
{	
	if(displayRandomQuestionToPage.innerText != "")
	{	
		showQuestionAndAnswer.ShowQuestionToPage()
		showQuestionAndAnswer.ShowAnswerToPage()
	}
}
QuestionNotEmty()
// Baris akhir function