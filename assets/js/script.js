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

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	// Getting the question
	const question = document.getElementById("question");
    // Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


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

var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightgoldenrodyellow";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "lightskyblue";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	})
// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

//Next button and method 
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }
})

// previous button and method 
const previous = document.getElementsByClassName('previous')[0];
var id = 0;

previous.addEventListener("click", () => {
    start = false;
    if (id > 0) {
        id--;
        iterate(id);
        console.log(id);    
    }
})