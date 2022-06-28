const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const  btn = document.getElementById("btn");
const color = document.querySelector(".color");

 btn.addEventListener('click',()=>{
     //get random num between 0 and 3
     const randNum = getRandNum();
     console.log(randNum)

     document.body.style.backgroundColor = colors[randNum];
     color.textContent = colors[randNum];
 });

 function getRandNum(){
    return Math.floor(Math.random()*colors.length);
 }