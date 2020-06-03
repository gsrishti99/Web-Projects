var drumBtn = document.querySelectorAll(".drum").length;
for( var i=0; i<drumBtn; i++) {
  //document.querySelectorAll("button")[i].addEventListener("click", buttonClk);
document.querySelectorAll("button")[i].addEventListener("click",function () {
      var buttonInnerHTML = this.innerHTML;
      makesound(buttonInnerHTML);
      animation(buttonInnerHTML);
    }
    //Above used is called Anonymous Function
  );
}

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;

    case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;

    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;

    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;

    case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;

    case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;

    case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}

function animation(currentkey) {
  document.querySelector("." + currentkey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + currentkey).classList.remove("pressed");
  }, 100);
}

// function buttonClk() {
//   alert("I got clicked.");
// }
