function login(){

let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;

if(user === "" || pass === ""){

document.getElementById("loginMsg")
.innerHTML =
"Please fill all fields";

return;
}

window.location.href =
"dashboard.html";
}
// WEATHER

async function getWeather(){

let city =
document.getElementById("city").value;

document.getElementById(
"weatherResult"
).innerHTML =

`
<h2>🌡 28°C</h2>
<p>Sunny in ${city}</p>
`;

}


// QUOTES

async function getQuote(){

let quotes = [

"Success comes from consistency.",

"Never stop learning.",

"Believe in yourself.",

"Dream big and work hard.",

"Every day is a new opportunity."

];

let random =

Math.floor(
Math.random() * quotes.length
);

document.getElementById(
"quoteResult"
).innerHTML =

`<h2>${quotes[random]}</h2>`;
}
// QUIZ QUESTIONS

const quizData = [

{
question: "Which language is used for styling web pages?",
answers: ["HTML", "CSS", "Python", "Java"],
correct: "CSS"
},

{
question: "Which language is used for web interactivity?",
answers: ["CSS", "HTML", "JavaScript", "SQL"],
correct: "JavaScript"
},

{
question: "Which tag creates a hyperlink?",
answers: ["<img>", "<a>", "<p>", "<div>"],
correct: "<a>"
},

{
question: "What does API stand for?",
answers: [
"Application Programming Interface",
"Advanced Program Internet",
"Application Process Integration",
"Automatic Program Interface"
],
correct: "Application Programming Interface"
},

{
question: "Which company developed JavaScript?",
answers: ["Google", "Apple", "Netscape", "Microsoft"],
correct: "Netscape"
}

];

let currentQuestion = 0;
let score = 0;

const quizBox = document.getElementById("quizBox");
const nextBtn = document.getElementById("nextBtn");

if(quizBox){

loadQuestion();

nextBtn.addEventListener("click", nextQuestion);

}

function loadQuestion(){

let q = quizData[currentQuestion];

quizBox.innerHTML = `
<h2>${q.question}</h2>
${q.answers.map(answer =>
`<button class="answer-btn"
onclick="selectAnswer('${answer}')">
${answer}
</button>`
).join("")}
`;

}

let selectedAnswer = "";

function selectAnswer(answer){

selectedAnswer = answer;

let buttons =
document.querySelectorAll(".answer-btn");

buttons.forEach(btn => {

btn.style.background = "#eef2ff";

if(btn.innerText === answer){

btn.style.background = "#4f46e5";
btn.style.color = "white";

}

});

}

function nextQuestion(){

if(selectedAnswer === ""){

alert("Please select an answer.");

return;

}

if(
selectedAnswer ===
quizData[currentQuestion].correct
){

score++;

}

selectedAnswer = "";

currentQuestion++;

if(currentQuestion < quizData.length){

loadQuestion();

}else{

localStorage.setItem("quizScore", score);

window.location.href =
"reward.html";

}

}
// REWARD PAGE

const rewardTitle =
document.getElementById("rewardTitle");

const scoreDisplay =
document.getElementById("scoreDisplay");

if(rewardTitle){

let finalScore =
localStorage.getItem("quizScore");

scoreDisplay.innerHTML =
`Score : ${finalScore}/5`;

if(finalScore >= 4){

rewardTitle.innerHTML =
"🏆 GOLD ACHIEVER";

}

else if(finalScore >= 3){

rewardTitle.innerHTML =
"🥈 SILVER ACHIEVER";

}

else{

rewardTitle.innerHTML =
"🥉 BRONZE ACHIEVER";

}

}