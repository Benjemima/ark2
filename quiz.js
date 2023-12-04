var quiz = document.getElementById("quiz");

var answer1 = "1970"
var answer2 = "1973"
var answer3 = "thomas minc"
var answer4 = "22"
var answer5 = "palm beach florida"
function startQuiz(){
    var question1 = prompt("When was the double mini trampoline invented?").toLowerCase()
    var question2 = prompt("When was the first DMT world age group?").toLowerCase()
    var question3 = prompt("Who won the 2023 DMT World Championships?").toLowerCase()
    var question4 = prompt("How old is Ruben Padilla?").toLowerCase()
    var question5 = prompt("Where was the 2023 DMT World Cup").toLowerCase()
    
    if(question1 == answer1 && question2 == answer2 && question3 == answer3 && question4 == answer4 && question5 == answer5){
        quiz.textContent = "Great job!! You got them all right!"
        quiz.setAttribute("style", "background-color: green")
        }else{
            quiz.textContent = "Maybe you shouldve studied better."
            quiz.setAttribute("style", "background-color: red")
        }
}

quiz.addEventListener("click", startQuiz)

document.body.style.backgroundImage = "url(https://usagym.org/wp-content/uploads/13471.jpg)";

function changeImage(event){
    if(event.code == "Space"){
        if(backgroundImage = "url('https://usagym.org/wp-content/uploads/13471.jpg')"){
            document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/USA_Gymnastics_logo.svg/440px-USA_Gymnastics_logo.svg.png')";
        }else{
            document.body.style.backgroundImage = "url('https://usagym.org/wp-content/uploads/13471.jpg')";
        }
    }
}
var currentImage = document.body.style.backgroundImage;
document.addEventListener("keydown", changeImage);