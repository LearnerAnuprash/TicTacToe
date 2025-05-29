let boxes=document.querySelectorAll(".clickme");
let resetBtn=document.querySelector(".res");

let turnO=true; //player O if true

const winningCondition=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];//2D Array

boxes.forEach(
    function(clickme){
        clickme.addEventListener("click",()=>{
            console.log("Box was clicked");
            if(clickme.textContent==="")
            {
            if(turnO)
            {
                clickme.textContent="O";
                clickme.style.color="rgb(199, 3, 78)";
                turnO=false;
                
            }

            else{
                clickme.textContent="X";
                clickme.style.color="rgb(82, 7, 255)";
                turnO=true;
            }
            checkWinner();

            }
        })
    }
);
const checkWinner =()=>
{
    
}
