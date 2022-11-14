const input = document.querySelector(".data");
const submit = document.querySelector(".submit");
const img = document.getElementById("img");
const main = document.getElementById("main");
const button = document.getElementById("submit");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


submit.addEventListener("click", () => {
    let imageUrl = url.concat(input.value);
    if (!input.value) return;    // if the input is empty then return
    button.innerText = "Generating QR Code...";
    img.src = imageUrl;
    img.addEventListener("load", () => {
        img.style.display = "block";
        main.style.height = "500px";
        button.innerText = "Generate QR Code";
    });
});

input.addEventListener("keyup", () => {
    if (!input.value) {
        img.style.display = "none";
        main.style.height = "300px";

    }
})