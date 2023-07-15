let playerText= document.getElementById("player");
let computerText= document.getElementById("computer");
let resultText= document.getElementById("result");

let btn = document.querySelectorAll(".btn");
let player;
let computer;
btn.forEach((element)=>{
    element.addEventListener("click", ()=>{
        player = element.textContent;
        playerText.textContent=`Player: ${player}`
        computerTurn();
        computerText.textContent =`Computer: ${computer}`;
        resultText.textContent=check();
    })
});

function computerTurn(){
    let random = Math.floor((Math.random()*3)+1);
    console.log(random);
    switch(random){
        case 1: computer= "ROCK"
        break

        case 2: computer = "PAPER";
        break

        case 3: computer = "SCISSORS";
        break;
    }
}

function check(){
    if (player==computer){
        return "Draw!"
    }
    else if(computer=="ROCK"){
        return (player=="PAPER") ? "You Win!" : "You Lose!";
    }

    else if (computer=="PAPER"){
        return (player=="SCISSORS") ? "You Win!" : "You Lose!";
    }

    else if (computer=="SCISSORS"){
        return (player=="ROCK") ? "You Win!" : "You Lose!";
    }
    
    
}

