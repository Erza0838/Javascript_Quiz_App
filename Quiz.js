	const StartButtonId = document.getElementById("Start_Button_Id")

const RemoveDisplay = StartButtonId.addEventListener("click", Click_Event, {once : true})
	
	const ShowFormContainer = document.getElementById("Form_Container_Id")

// Function untuk menjalankan Event Listener
function Click_Event()
{
	return StartButtonId.style.display = "none"	
}
// Baris akhir function 

	switch(RemoveDisplay)
	{
		case RemoveDisplay : Show_Form()
			break
	}

// Function untuk memunculkan form pertanyaan
function Show_Form()
{	
	return window.ShowFormContainer.style.display = "contents"
}
// Baris akhir function 

