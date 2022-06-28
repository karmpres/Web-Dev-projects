let count = 0 ;

// document.querySelector("#value").textContent = count
// const btnIncrease= document.querySelector(".btn.increase");
// const btnDecrease= document.querySelector(".btn.decrease");
// const btnReset = document.querySelector(".btn.reset");


const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn){
   btn.addEventListener("click", function (e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
        count--;
    }
    else if(styles.contains("increase")){
        count++;
    }
    else{
        count = 0;
    }
    if(count<0){
        value.style.color = "red";
    }
    if(count>0){
        value.style.color = "green";
    } 
    if(count===0){
        value.style.color="black";
    }
    value.textContent = count;
   }
   )
})

// btnIncrease.addEventListener('click', ()=>{
//     count = count+1;
//     document.querySelector("#value").textContent = count
// });

// btnDecrease.addEventListener('click',()=>{
//     if(count<=0){
//         count = 0
//     }
//     else{count--;}  
//     document.querySelector("#value").textContent = count
// })

// btnReset.addEventListener('click',()=>{
   
//     count = 0;
//     document.querySelector("#value").textContent = count
// })


