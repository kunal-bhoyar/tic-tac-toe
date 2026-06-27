let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");


let turnO = true;   // true = O turn

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

        if(box.innerText != ""){
            return;
        }


        if(turnO){
            box.innerText = "O";
            turnO = false;
            msg.innerText = "Player X Turn";
        }
        else{
            box.innerText = "X";
            turnO = true;
            msg.innerText = "Player O Turn";
        }


        checkWinner();

    });

});



function checkWinner(){

    for(let pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


        if(pos1 != "" && pos2 != "" && pos3 != ""){

            if(pos1 == pos2 && pos2 == pos3){

                msg.innerText = "Winner is " + pos1;

                disableGame();

            }
        }

    }

}



function disableGame(){

    boxes.forEach((box)=>{
        box.disabled = true;
    });

}



reset.addEventListener("click",()=>{

    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });


    turnO = true;
    msg.innerText = "Player O Turn";

});