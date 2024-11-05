let bodyEl=document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>{
let xPos=event.offsetX;
let yPos=event.offsetY;
let spanEl=document.createElement("span")
let size=Math.random()*100;
spanEl.style.width=size+"px";
spanEl.style.height=size+"px";
spanEl.style.left=xPos+"px";
spanEl.style.top=yPos+"px";
bodyEl.appendChild(spanEl)
setTimeout(()=>{
 spanEl.remove();
},3000)
});
