const binary = document.getElementById("binary");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");


button.addEventListener("click",convert);

function convert(event){
    event.preventDefault(); // for preventing page reload on submit button
    let decimal = parseInt(binary.value,2);
    result.innerHTML = `Decimal Number : ${decimal}`;
}