
let user = localStorage.getItem('userName');
console.log(user)
const quizData = [
    {
    question:"How many penalties are usually taken in a penalty shoot-out?",
    a:"1",
    b:"5",
    c:"3",
    d:"12",
    answer:"b"      
    },
    {
    question:"Who won the 1998 Football World Cup Final?",
    a:"France",
    b:"Brazil",
    c:"Portugal",
    d:"Wals",
    answer:"a"      
    },
    {
    question:"How many penalties are usually taken in a penalty shoot-out?",
    a:"1",
    b:"5",
    c:"3",
    d:"12",
    answer:"b"      
    },
    {
    question:"Who won the 1998 Football World Cup Final?",
    a:"France",
    b:"Brazil",
    c:"Portugal",
    d:"Wals",
    answer:"a"      
    },
    {
    question:"How many penalties are usually taken in a penalty shoot-out?",
    a:"1",
    b:"5",
    c:"3",
    d:"12",
    answer:"b"      
    },
    {
    question:"Who won the 1998 Football World Cup Final?",
    a:"France",
    b:"Brazil",
    c:"Portugal",
    d:"Wals",
    answer:"a"      
    },
    {
    question:"How many penalties are usually taken in a penalty shoot-out?",
    a:"1",
    b:"5",
    c:"3",
    d:"12",
    answer:"b"      
    },
    {
    question:"Who won the 1998 Football World Cup Final?",
    a:"France",
    b:"Brazil",
    c:"Portugal",
    d:"Wals",
    answer:"a"      
    },
    {
    question:"How many penalties are usually taken in a penalty shoot-out?",
    a:"1",
    b:"5",
    c:"3",
    d:"12",
    answer:"b"      
    },
    {
    question:"Who won the 1998 Football World Cup Final?",
    a:"France",
    b:"Brazil",
    c:"Portugal",
    d:"Wals",
    answer:"a"      
    }
]


const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questions = document.getElementById('question')
const aText = document.getElementById('aText')
const bText = document.getElementById('bText')
const cText = document.getElementById('cText')
const dText = document.getElementById('dText')
const next = document.getElementById('next')
const current = document.getElementById('current')

let currentQuiz = 0
let score = 0
/////////////start ///////////////



loadQuiz()

function loadQuiz() {

    deselectAnswers()

    next.style.visibility = 'hidden'
    const currentQuizData = quizData[currentQuiz]

    questions.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d

    answers.forEach(e=>e.addEventListener('change',()=>next.style.visibility = 'visible'))
}
 // delete answers ..........
function deselectAnswers() {
    answers.forEach(answers => answers.checked = false)
}

// to know the selected answer//////
function getSelected() {
    let answer
    answers.forEach(answers => {
        if(answers.checked) {
            answer = answers.id
        }
    })
    return answer
}

///////////////////////////////////////////



next.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {

       if(answer === quizData[currentQuiz].answer) {
           score++
       }

       currentQuiz++
       if(currentQuiz < 10) {
           current.innerText=`${currentQuiz+1}/10`
           loadQuiz()
       } else {
           localStorage.setItem(user,score)
           current.innerText=`10/10`
           next.style.visibility="hidden"
           
           allStorage()
           largest(values)

           quiz.innerHTML = `
           <h2>Your Score :${score}/10</h2>
           <h2>leader bord:</h2>
           <h3> top score : ${localStorage.key(largestt)} : ${largestt}/10</h3>
           <a href="index.html"><button id="finish">finish</button></a>
           `
           
       }
    }
})


   
var values=[]
    function allStorage() {
        localStorage.removeItem('userName')
        var keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        console.log(values)
        return values;
    }

    var largestt= 0;
function largest(valuess){
    
for (i=0; i<=valuess.length;i++){
    if (valuess[i]>largestt) {
        var largestt=valuess[i];
    }
}
return largestt;
}