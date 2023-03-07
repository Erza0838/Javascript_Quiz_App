// Bagian import untuk mengambil function dan variable dari file Quizz_Answer.js
import 
{
	ListQuizzAnswerNumberZero,
	ListQuizzAnswerNumberOne,
	ListQuizzAnswerNumberTwo,
	ListQuizzAnswerNumberThree,
	answerQuestionPage0,
	answerQuestionPage1,
	answerQuestionPage2,
	answerQuestionPage3
} from "./Quizz_Answer.mjs"
// Baris akhir import

const StartButtonId = document.getElementById("Start_Button_Id")
	
const ShowFormContainer = document.getElementById("Form_Container_Id")

let containerAnswerOption = document.getElementById("Answer_Option_Container")

let displayRandomQuestionToPage = document.getElementById("Show_Quetions")

let displayRandomAnswerToPage = document.querySelectorAll("Random_Answer_Options")

let questionsList

let questionIndexZero

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

// Function untuk menampilkan pertanyaan secara acak
function ChooseRandomQuestions()
{	
	let mathRandomNumbers = Math.floor(3.7 + 2 * Math.random(4.7 - 2) - 1 * 3)
	// let mathRandomNumbers = Math.floor(2.5 + 1 * Math.random(4.7 - 2))
	let indexTwoAndFiveRandomNumbers = Math.floor(3 + 3.2 * Math.random(4.8 - 2))
	let indexTwoAndFiveNewRandomNumbers = indexTwoAndFiveRandomNumbers += 5 - 3  * 4 / 2 + 1
	let randomIndexQuestion = questionsList[mathRandomNumbers]
	let indexOfquestiionsList = [randomIndexQuestion, questionsList[indexTwoAndFiveNewRandomNumbers]]	
	// console.log(indexOfquestiionsList[1])
	// return randomIndexQuestion
	for(let loopCount = 0; randomIndexQuestion.length > loopCount; loopCount++)
	{	
		console.log(loopCount)
		if(loopCount == 0)
		{
			if(questionsList[0] && questionsList[1] > loopCount)
			{
				return indexOfquestiionsList[0]
			}
		}
		if(loopCount > 1 || loopCount == 1)
		{	
			return indexOfquestiionsList[1]
		}
	}
}
ChooseRandomQuestions()
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

// Function untuk memilih satu jawaban
function SelectedOneAnswe()
{
	displayRandomAnswerToPage.addEventListener("click", () => 
	{	
		for(let answerHasSelected = 0; answerHasSelected < containerAnswerOption.length - 3; answerHasSelected + 1)
		{
			switch(answerHasSelected.length)
			{
				case containerAnswerOption.length - 3 : 
					if(containerAnswerOption.childNodes)
					{
						displayRandomAnswerToPage.style.backgrounColor = "light green"
					}
				break
			}
		}
	}, {once:true})
}
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
	ShowAnswerToPage0 : // Function untuk menampilkan jawaban
						function ShowAnswerPageZero()
						{	
							let addAnswerToChildNodes0
							let addAnswerToPage0 
							[answerQuestionPage0].forEach( (AnswerValues) => 
							{	
								if(AnswerValues != undefined)
								{
									for(let compareValue = 0; containerAnswerOption.childElementCount > compareValue; compareValue++)
									{							 
										addAnswerToChildNodes0 = ListQuizzAnswerNumberZero(AnswerValues[compareValue])
										addAnswerToPage0 = containerAnswerOption.children[compareValue].innerText = addAnswerToChildNodes0
									}	
								}
							})
						},
	ShowAnswerToPage1 : function ShowAnswerPageOne() 
						{
							let addAnswerToChildNodes1
							let addAnswerToPage1 
							[answerQuestionPage1].forEach( (AnswerValues1) => 
							{	
								if(AnswerValues1 != undefined)
								{
									for(let compareValue1 = 0; containerAnswerOption.childElementCount > compareValue1; compareValue1++)
									{	
										addAnswerToChildNodes1 = ListQuizzAnswerNumberOne(AnswerValues1[compareValue1])
										addAnswerToPage1  = containerAnswerOption.children[compareValue1].innerText = addAnswerToChildNodes1
									}	
								}
							})
						},
	ShowAnswerToPage2 : function ShowAnswerPageTwo() 
						{
							let addAnswerToChildNodes2
							let addAnswerToPage2 
							[answerQuestionPage2].forEach( (AnswerValues2) => 
							{	
								if(AnswerValues2 != undefined)
								{
									for(let compareValue2 = 0; containerAnswerOption.childElementCount > compareValue2; compareValue2++)
									{	
										addAnswerToChildNodes2 = ListQuizzAnswerNumberOne(AnswerValues2[compareValue2])
										addAnswerToPage2 = containerAnswerOption.children[compareValue2].innerText = addAnswerToChildNodes2
									}	
								}
							})
						},
	ShowAnswerToPage3 : function ShowAnswerPageThree() 
						{
							let addAnswerToChildNodes3
							let addAnswerToPage3 
							[answerQuestionPage3].forEach( (AnswerValues3) => 
							{	
								if(AnswerValues3 != undefined)
								{
									for(let compareValue3 = 0; containerAnswerOption.childElementCount > compareValue3; compareValue3++)
									{	
										addAnswerToChildNodes3 = ListQuizzAnswerNumberThree(AnswerValues3[compareValue3])
										addAnswerToPage3 = containerAnswerOption.children[compareValue3].innerText = addAnswerToChildNodes3
									}	
								}
							})
						}
						// Baris akhir function 
}
// Baris akhir object

// Function untuk menampilkan pertanyaan dan jawaban
function QuestionNotEmty()
{	
	questionIndexZero = showQuestionAndAnswer.ShowQuestionToPage()
	if(displayRandomQuestionToPage.innerText != "")
	{	
		switch(displayRandomQuestionToPage.innerText)
		{	
			case questionsList[0] : 
			{	
				showQuestionAndAnswer.ShowAnswerToPage0()	
			}
			break		
			case questionsList[1] : 
			{	
				showQuestionAndAnswer.ShowAnswerToPage1()	
			}
			break		
			case questionsList[2] : 
			{	
				showQuestionAndAnswer.ShowAnswerToPage2()
			}
			break		
			case questionsList[3] : 
			{	
				showQuestionAndAnswer.ShowAnswerToPage3()
			}
			break		
		}
	}
}
QuestionNotEmty()
// Baris akhir function