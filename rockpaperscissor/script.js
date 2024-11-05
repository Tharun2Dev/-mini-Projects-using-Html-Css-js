let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreEle=document.querySelector("#user-score");
const CompScoreEle=document.querySelector("#comp-score");
const Upara=document.querySelector("#userP");
const Cpara=document.querySelector("#compP");

const gencompChoice=()=>{
    let options=["rock","papper","scissors"];
    let rnd=Math.floor(Math.random()*3);
    return options[rnd];
}



const gameDraw=()=>{
    msg.style.backgroundColor=" #081b31";
    msg.innerText="The game is Draw!";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreEle.innerText=userScore;
        msg.innerText=`your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="orange";
        
    }else{
        compScore++;
        CompScoreEle.innerText=compScore;
        msg.innerText=`computer choice ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
       
    }
}

const playGame=(userChoice)=>{
    let compChoice=gencompChoice();
    if(userChoice==compChoice){
        gameDraw();

    }
    else{
        let userWin=true;
        if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }else if(userChoice==="rock"){
            userWin=compChoice==="scissors"?true:false;
        }else{
            userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
       
    })
})

let btn=document.querySelector("#btn");
let control=document.querySelector("body");
let currMode="light";
btn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        msg.style.color="pink";
        userScoreEle.style.color="white";
        CompScoreEle.style.color="white";
        Upara.style.color="white";
        Cpara.style.color="white";
        control.style.backgroundColor="black";
        btn.innerText="light mode";
    }else{
        currMode="light";
      
        msg.style.color="pink";
        userScoreEle.style.color="black";
        CompScoreEle.style.color="black";
        Upara.style.color="black";
        Cpara.style.color="black";
        btn.innerText="dark mode";
        control.style.backgroundColor="white";
        
    }
})