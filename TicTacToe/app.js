let boxes = document.querySelectorAll(".game");
let resetBtn = document.querySelector("#resetBtn");
let winnerMsg = document.querySelector("#winnerMsg");
let messageDiv = document.querySelector(".msgContainer");
let newBtn = document.querySelector("#NewGame");
let turnx = true;
let winnerArr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("inside the click function");
    if(turnx===true){
        box.innerText = "X";
        turnx= false;
    }else{
        box.innerText="O";
        turnx= true;
    }
    box.disabled=true;
    checkWinner();
})
})
const resetGame = ()=>{
    turnx = true;
    enableBoxes();
    messageDiv.classList.add("hidden");
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}
const announceWinner =(winner)=>{
    winnerMsg.innerText = `Congratulatin game is Completed and winner is ${winner}`;
    messageDiv.classList.remove("hidden");
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner = ()=>{
        for(let winArr of winnerArr){
            let pos1 = boxes[winArr[0]].innerText;
            let pos2  = boxes[winArr[1]].innerText;
            let pos3 = boxes[winArr[2]].innerText;
            
            if(pos1!=""&& pos2!=""&&pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                    announceWinner(pos1);
                }
            }
        }
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
