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

var timer;
var number = document.getElementById("number")
var generateButton = document.getElementById("generate");
var stopButton = document.getElementById("stop");
var prize = document.getElementById("prize");
            
generateButton.addEventListener("click", generate)
stopButton.addEventListener("click", stop)

    function generate(){
        timer = setInterval(randomNum, 20)
    }
    function stop(){
        clearInterval(timer)
            prize.innerHTML = "Cookie!"
    }
    function randomNum(){
    var num = Math.floor(Math.random() * 10)
    number.innerHTML = num + " "
}
