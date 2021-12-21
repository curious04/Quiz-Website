const quizDB = [
    {question: "Q1: What is part of a database that holds only one type of information?",
            a:  "Report",
	        b:  "Field",
	        c:  "Record",
	        d:  "File",
            ans:"ans2"
    },

    {question: "Q2: 'OS' computer abbreviation usually means ?",
            a:  "Order of Significance",
            b:  "Open Software",
            c:  "Operating System",
            d:  "Optical Sensor",
          ans:  "ans3"

    },

    {question: "Q3: '.MOV' extension refers usually to what kind of file?",
            a:  "Image file",
            b:  "Animation/movie file",
            c:  "Audio file",
            d:  "MS Office document",
          ans:  "ans2"


    },

    {question: "Q4: In which decade with the first transatlantic radio broadcast occur?        ",
            a:  "1850s",
            b:  "1860s",
            c:  "1870s",
            d:  "1900s",
          ans:  "ans4"


    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#ShowScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    
    const questionList = quizDB[questionCount];    
    
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;  
}

loadQuestion();

const getCheckedAnswer = () =>{
    let answer;

    answers.forEach((currentAnsElement) => {
        if(currentAnsElement.checked){
            answer = currentAnsElement.id;
        }

    });

    return answer;

};

const deselectAll = () => {
    answers.forEach((currentAnsElement) => currentAnsElement.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans ){
        score++;
    }

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML = ` <h3> You scored ${score}/${quizDB.length} 🏆 </h3>
                            <button class="btn" onclick="location.reload()"> Try Again </button> `;

        showscore.classList.remove('ScoreArea');
    }

    
});
