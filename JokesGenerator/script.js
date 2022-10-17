const button = document.querySelector(".btn");
const joke = document.querySelector(".joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

function generateJokes (){
  fetch(url)
  .then(response => response.json())
  .then(data => joke.innerText = data.joke)
  .catch(error => console.log(error));
}
button.addEventListener("click", generateJokes);