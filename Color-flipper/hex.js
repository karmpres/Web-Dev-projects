const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener('click',()=>{
 document.body.style.backgroundColor = randHex()
 color.textContent = randHex()
})

function randHex(){
    let hexColor =  "#";
    for(let i=0; i<6;i++){
        const randNum = Math.floor(Math.random()*hex.length)
        hexColor+=hex[randNum];
    }
    return hexColor;
}