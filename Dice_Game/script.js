// Dice Game Project

let img1 = document.getElementsByClassName("img1")[0];
let img2 = document.getElementsByClassName("img2")[0];
let title = document.querySelectorAll("h1")[0];

title.addEventListener("click", () =>{
   let numSet = [1,2,3,4,5,6];
   let randomNumber1 = numSet[Math.floor(Math.random() * numSet.length)];
   let randomNumber2 = numSet[Math.floor(Math.random() * numSet.length)];

   let img1_name = "images/dice" + randomNumber1 + ".png";
   let img2_name = "images/dice" + randomNumber2 + ".png";

   img1.setAttribute("src", img1_name);
   img2.setAttribute("src", img2_name);

   setTimeout(displayWinner=() => {
      if(randomNumber1>randomNumber2){
         title.innerHTML = "Player 1 Wins!";
      }else if(randomNumber2>randomNumber1){
         title.innerHTML = "Player 2 Wins!";
      }else{
         title.innerHTML = "It's a draw!";
      }
   }, 300);

});
