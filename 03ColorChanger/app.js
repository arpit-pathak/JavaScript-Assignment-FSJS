const canvas = document.getElementById("canvas");
const button = document.getElementById("button");

button.addEventListener("click",changeColor);

function generateColor(){
    const hexCode = "1234567890abcdef"
    let color = "#";
    for(let i=0; i<6; i++){
     color += (hexCode[Math.floor(Math.random() *16)]);
    }
    return color;
}

function changeColor(){
    let color = generateColor();
    canvas.style.backgroundColor = color;
}