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

}



