const imgA =document.getElementById("door_a")
const imgB= document.getElementById("door_b")
const imgC= document.getElementById("door_c")

let numClosedDoor= 3;

let findFly="findfly.png";
let ocean ="ocean.png";
let jungle = "forest.png"
let kapali= "door_closed.png"

let openDoor1= "";
let openDoor2= "";
let openDoor3= "";


imgA.onclick= ()=> {
    imgA.src= openDoor1
    if (imgA===kapali) {
        playDoor()
    }
    
}

imgB.onclick= ()=>{
        imgB.src= openDoor2

          if (imgB===kapali) {
        playDoor()
    }}

imgC.onclick= ()=>{
    imgC.src= openDoor3
    if (imgC===kapali) {
        playDoor()
    }}

    let findDoor= "";
function find() {
    let findDoor= Math.floor(Math.random()*3)
    if (findDoor === 0) {
        openDoor1= findFly
        openDoor2= ocean
        openDoor3= jungle
    }
     else if (findDoor === 1){
        openDoor1= ocean
        openDoor2= jungle
        openDoor3= findFly
    } else if (findDoor === 2) {
        openDoor1= jungle
        openDoor2= findFly
        openDoor3= ocean
    }
    
    
}
find();

// function isCliked(params) {
//     if (params.src===kapali) { return
//         false
//     } else return true
    
// }
// isCliked(findDoor)


function playDoor() {
    if (isCliked = true) {
        numClosedDoor --
    
    }
    
    if (numClosedDoor===0) {
       console.log("gameOver")
        
    }
}