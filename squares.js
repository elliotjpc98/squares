let squareArea = document.querySelector("#squarearea");
// let squareArea = document.getElementById("squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
//Make some variable for a really big zIndex
document.querySelectorAll("button")[0].onclick= addSquare;
document.querySelectorAll("button")[1].onclick = changeColors;
for(let i = 0;i<squareCount;i++){
    addSquare();
    //make a square
    //I can put a onclick and a function(this)
    //put it on the screen
}
function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650)+"px";
    square.style.top = parseInt(Math.random()*250)+"px";
    square.style.backgroundColor = getRandomColor();
    squareArea.append(square);
}

function getRandomColor(){
    //Make a color string?
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i <6;i++){
        color+=letters.charAt(parseInt(Math.random()*letters.length));
    }
    //return that string
    return color;
}
//Make a function to add 1 square
//Make sure that I set that as a the oneclick for thebutton

//Make a Function that changes all the colors of all the squares
//Make sure the button calls it
function changeColors(){
    //Make an array
    let allSquares = document.querySelectorAll(".square");
    //For of loop or just do a regular for loop with index
    //Change the color
    for(let i = 0;i <allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}