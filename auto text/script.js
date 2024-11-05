let container=document.querySelector(".container");
let carrer=["web developer","coder"];
let characterIndex=0;
let carrerIndex=0;

update()
function update(){
  characterIndex++;
  container.innerHTML=`<h1> i am a ${carrer[carrerIndex].slice(0,characterIndex)}</h1>`
  
  if(characterIndex==carrer[carrerIndex].length){
    carrerIndex++;
    characterIndex=0;
  }
  if(carrerIndex==carrer.length){
    carrerIndex=0;
  }
 setTimeout(update,200);
}
