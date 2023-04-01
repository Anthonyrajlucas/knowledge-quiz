// Questions will be asked
const Questions = [{
    id: 0,
    q: "Which is the fastest bird in the world?",
    a: [{ text: "Bald Eagle", isCorrect: false },
        { text: "Peregrine Falcon", isCorrect: true },
        { text: "Hummingbird", isCorrect: false },
        { text: "Raven", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the tallest waterfall in the world?",
    a: [{ text: "Angel Falls, Venezuela", isCorrect: true, isSelected: false },
        { text: "Niagara Falls, New York", isCorrect: false },
        { text: "Wailua Falls, Hawaii", isCorrect: false },
        { text: "Sutherland Falls, New Zealand", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Which of these animals has the ability to laugh?",
    a: [{ text: "Dog", isCorrect: false },
        { text: "Whale", isCorrect: false },
        { text: "Bear", isCorrect: false },
        { text: "Rat", isCorrect: true }
    ]

},
{
    id: 3,
    q: "Which color is not there in the rainbow?",
    a: [{ text: "Indigo", isCorrect: false },
        { text: "Red", isCorrect: false },
        { text: "Brown", isCorrect: true },
        { text: "Yellow", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Which is the longest river in the world?",
    a: [{ text: "Mississippi", isCorrect: false },
        { text: "Nile", isCorrect: true },
        { text: "Amazon", isCorrect: false },
        { text: "Yangtze", isCorrect: false }
    ]

},

{
    id: 5,
    q: "Mountains and hills are a_________sight. I have always_________to see them?",
    a: [{ text: "Extraordinary / Advocated", isCorrect: false },
        { text: "stupendous / encouraged", isCorrect: false },
        { text: "Loving / Prepared", isCorrect: false },
        { text: "Fascinating / longed", isCorrect: true }
    ]

}

];

// Set start
var start = true;
var id = 0;

// Getting the result display section
var answer = document.getElementById("answer");


// Iterate
function iterate(id) {

	// Getting the question
	var question = document.getElementById("question");
    // Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	var op1 = document.getElementById('op1');
	var op2 = document.getElementById('op2');
	var op3 = document.getElementById('op3');
	var op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;


    op1.style.backgroundColor = "lightskyblue";
	op2.style.backgroundColor = "lightskyblue";
	op3.style.backgroundColor = "lightskyblue";
	op4.style.backgroundColor = "lightskyblue";

}

var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op1.value;
	});

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightgoldenrodyellow";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op2.value;
	});

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "lightskyblue";
		selected = op3.value;
	});

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	});

// Grabbing the evaluate button
var evaluate = document.getElementsByClassName("evaluate");
var score = document.getElementById("score");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (id < 6) {
        id++;
    if (selected == "true") {
        answer.innerHTML = "your answer is correct";
        answer.style.color = "green";
        let numberScore = parseInt(score.innerHTML);
        console.log('numberScore: ', numberScore);
        numberScore ++;
        score.innerHTML = numberScore;
    } else {
        answer.innerHTML = "Sorry, your answer is wrong";
        answer.style.color = "red";
    }
    }
    if (id < 6)
    {    
        iterate(id);
    }else if (id = 4)
    {
        showPopup();
        evaluate[0].disabled = true;
        
    }

} );

if (start) {
iterate("0");
answer.innerText = "";
}

function showPopup() {
    alert("Successfully completed! Your score is: " + score.innerHTML );
  }
