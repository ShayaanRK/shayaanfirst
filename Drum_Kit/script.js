var numButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numButtons; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      console.log("Button clicked!");
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
   })
}
