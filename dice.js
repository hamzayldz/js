function zar() {
    let sayi = Math.ceil(Math.random()*6);
    return sayi
}
console.log(zar())

const startButton = document.getElementById("start");

const dice1 = document.getElementById("dice_A");
const dice2 = document.getElementById("dice_B");

startButton.onclick= () =>{
    let num1 = zar();
    let num2 = zar();
    dice1.src= `images/dice${num1}.png`
    dice2.src= `images/dice${num2}.png`

    let kazanan = document.querySelector("h1");

    let renk = document.getElementById("player_1")
    let renk2 = document.getElementById("player_2")

    if (num1> num2){
        kazanan.innerHTML= "player 1 wins!!"
    renk.style.color="red"}
         else if (num2>num1){
            kazanan.innerHTML= "player2 wins!!"
            renk2.style.color="red"
    }
    else kazanan.innerHTML= "DRAW"
    console.log(num1);
    console.log(num2)
}