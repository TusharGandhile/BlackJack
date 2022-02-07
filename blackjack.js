let firstcard=getrandom();
let secondcard=getrandom();
let cards=[firstcard,secondcard];
let sum=firstcard + secondcard;
let player={
    name:"Tushar",
    coins:400
}
let message="";
let hasBlackjack=false;
let isAlive=true;

let playerEl=document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.coins ;


function getrandom(){
    let x =Math.floor(Math.random()*13)+1;
    if(x==1){
        return 11;
    }
    else if(x > 10){
        return 10;
    }
    else{
        return x;
    }
    
}

function startGame(){
    renderGame();
}



function renderGame(){

    
    let cardEl=document.getElementById("card-el")
    cardEl.textContent = "cards:" 
    for(let i=0; i < cards.length ;i++){
        cardEl.textContent += cards[i] + " ";
        console.log(cards[i]);
    }

   
    document.getElementById("sum-el").textContent ="sum:" + sum;
 

    if(sum<21){
        message="Do you want to draw new card? ";
    }
    else if(sum===21){
        message="Heyy!you got Blacljack!";
        hasBlackjack = true;
    }
    else{
        message="you are out of the game";
        isAlive = false;
    }
console.log(message);
let msgEl=document.getElementById("msg-el");
msgEl.textContent=message;

}



function newcard(){
    let ncard=getrandom(); 
    console.log("Drwaing a new card from a deck");
    sum += ncard;
    
   cards.push(ncard); 

   console.log(cards); 

   if(isAlive==true && hasBlackjack==false){
    renderGame();
   }

  
  }
