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


var list = document.getElementsByTagName("li")
	for(var i = 0; i < list.length; i++){
		list[i].addEventListener("click", toggle);
}

function crossOff(){
    this.setAttribute("style", "text-decoration: line-through")
}

function unCrossOff(){
    this.removeAttribute("style", "text-decoration: line-through")
}

function toggle(){
    if(this.style.textDecoration == "line-through"){
        unCrossOff.call(this)
    }else{
        crossOff.call(this)
    }
    
}