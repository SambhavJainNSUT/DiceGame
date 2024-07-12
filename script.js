var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;

var randomDiceImages1 = "images/dice" + num1 + ".png";
var randomDiceImages2 = "images/dice" + num2 + ".png";


document.querySelector("#dice1").setAttribute("src",randomDiceImages1);
document.querySelector("#dice2").setAttribute("src",randomDiceImages2);







    if (num1>num2) {
        document.querySelector("h1").textContent = "🔻Player 1 Wins!!";
    }
    else if (num1<num2) {
        document.querySelector("h1").textContent = "Player 2 Wins!!🔻";
    }
    else {
        document.querySelector("h1").textContent = "🔻It's a Draw🔻";
    }


