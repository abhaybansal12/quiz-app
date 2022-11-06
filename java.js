const quizData = [{
    question: "Peyush Bansal is the founder of which startup company ?",
    a: "OYO",
    b: "OLA",
    c: "ZOMATO",
    d: "LENSKART",
    correct: "d",
},
{
    question: "Who is the richest person of India?",
    a: "GAUTAM ADANI",
    b: "MUKESH AMBANI",
    c: "RKD",
    d: "SHIV NADAR",
    correct: "a",
},
{
    question: "Who is the only new judge of shark tank S2?",
    a: "ANUPAM MITTAL",
    b: "AMIT JAIN",
    c: "ASHNEER GROVER",
    d: "none of the above",
    correct: "b",
},
{
    question: "AMIT JAIN is the founder of which company?",
    a: "Shaadi.com",
    b: "CarDekho",
    c: "BharatPe",
    d: "Lenskart",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {

document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <a href="https://abhaybansal12.github.io/Netflix-clone/"><h3 class="w-100">  You've scored ${correct} / ${total} ,
        if you want you can look out my other projects also </h3></a>
    </div>
`
}
loadQuestion(index);