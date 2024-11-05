let colors=["red","orange","blue","#F0F8FF","AntiqueWhite","Coral","Violet"];
let txt=document.querySelector("#change");
let body=document.querySelector("body");
console.log(body);

let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    let rnd=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[rnd];
    txt.innerText=`${colors[rnd]}`;
    
})