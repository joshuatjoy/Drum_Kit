
var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i < noOfDrumButtons; i++)
{

    document.querySelectorAll("button")[i].addEventListener("click",function () {
        
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);

        
    }
);

}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
}
)

function makeSound(key)
{
    switch(key)
        {
            case "w": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            case "l": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "a": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "j": 
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;

            case "k": 
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;

            case "s": 
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;

            case "d": 
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;

            default:
            console.log("Invalid!!!!");



        }
}

function buttonAnimation(keypressed)
{
    var buttonPressed = document.querySelector("." + keypressed);
    buttonPressed.classList.add("pressed");
    setTimeout(function (){buttonPressed.classList.remove("pressed");}, 100);
}

