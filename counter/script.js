let increase=0;
let decrese=0;
let num=document.querySelector("#inum")

document.querySelector("#increase").addEventListener("click",()=>{
    increase++;
    rnum.innerText=increase;
    if(rnum.innerText>0){
        rnum.style.color="blue";
    }

})

document.querySelector("#decrease").addEventListener("click",()=>{
    increase--;
    rnum.innerText=increase;
    if(rnum.innerText<0){
        rnum.style.color="red";
    }

})
document.querySelector("#reset").addEventListener("click",()=>{
   rnum.innerText=0
   

})