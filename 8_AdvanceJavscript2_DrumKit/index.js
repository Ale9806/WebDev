
var NumberOfDrumButtons = document.querySelectorAll(".drum").length;
var DrumButtons = document.querySelectorAll("button");
for (i=0; i<NumberOfDrumButtons; i++){
    DrumDom = DrumButtons[i];

    // Click Event listner
    DrumDom.addEventListener("click", function(){
        var letter =  this.innerHTML;
        Sound(letter);
        buttonAnimation(letter)
    });

    // Key event Listiner
    DrumDom.addEventListener("keydown", function(event){
        var letter = event.key
        Sound(letter);
        buttonAnimation(letter)
        });


}

function Sound(letter){
    switch(letter){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            break;       
        default:
            console.log(letter);
            break;

        
    }
    audio.play();
  }

  function buttonAnimation(letter){
      var activeButton = document.querySelector("."+letter);
      activeButton.classList.add("pressed")
      console.log(activeButton);
      setTimeout(() => activeButton.classList.remove("pressed"),100)
  }

