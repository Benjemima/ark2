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

var degrees = 0;
var right;
var left;
var box = document.getElementById("rotating-box")
box.addEventListener("keydown", Rotate)
    
		    
function Rotate(e){
	clearInterval(right)
    clearInterval(left)
	degrees == 0
    if(e.key != "Space"){
	    right = setInterval(rotateRight, 1)
	    function rotateRight(){
	        box.style.transform = "rotate("+degrees+"deg)"
	        degrees += 0.001
            console.log(degrees)
	    }
	}
}