


//  for button clicked


var n = document.querySelectorAll(".drm").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drm")[i].addEventListener("click", function() {
        
        var text = this.innerHTML;       
        sound(text);
       
        animatedBtn(text);
    });
}


// for keyboard key press


document.addEventListener("keydown", function(event) {
    sound(event.key);
    animatedBtn(event.key);
});


function sound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
             break;

        case "j":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

        case "k":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function animatedBtn(textKey){
    var activeBtn = document.querySelector("." + textKey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 150);
}


 // if(text == 'w'){
        //     var tom1 = new Audio("sounds/tom-1.mp3");
        //     tom1.play();
        // }else if(text == 'a'){
        //     var tom2 = new Audio("sounds/tom-2.mp3");
        //     tom2.play();
        // }else if(text == 's'){
        //     var tom3 = new Audio("sounds/tom-3.mp3");
        //      tom3.play();
        // }else if(text == 'd'){
        //     var crash = new Audio("sounds/crash.mp3");
        //      crash.play();
        // }else if(text == 'j'){
        //     var tom4 = new Audio("sounds/tom-4.mp3");
        //     tom4.play();
        // }else if(text == 'k'){
        //     var snare = new Audio("sounds/snare.mp3");
        //     snare.play();
        // }else{
        //     var kick = new Audio("sounds/kick-bass.mp3");
        //     kick.play();
        // }
