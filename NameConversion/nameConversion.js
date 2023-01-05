const text = document.getElementById("text");
const button = document.getElementById("convert-btn");
const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const screamingKebabCase = document.getElementById("screaming-kebab-case");

button.addEventListener("click", () => {
  console.log(text.value);
  convert();
});

function convert() {
  camelCase.innerText = toCamelCase(text.value);
  pascalCase.innerText = toPascalCase(text.value);
  snakeCase.innerText = toSnakeCase(text.value);
  screamingSnakeCase.innerText = toScreamingSnakeCase(text.value);
  kebabCase.innerText = toKebabCase(text.value);
  screamingKebabCase.innerText = toScreamingKebabCase(text.value);
}

function toCamelCase(str) {
  // Split the string into an array of words
  const words = str.split(/\s+/);

  // Convert the first word to lower case
  let result = words[0].toLowerCase();

  // Convert the first letter of each subsequent word to uppercase and append it to the result
  result += words
    .slice(1)
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join("");

  return result;
}

function toPascalCase(str) {
  // Split the string into an array of words
  const words = str.split(/\s+/);

  // Convert the first letter of each word to uppercase
  // and append it to the result
  const result = words
    .map((word) => {
      // Convert the first letter of the word to uppercase
      const firstLetter = word.charAt(0).toUpperCase();

      // Convert the rest of the letters in the word to lower case
      const rest = word.substring(1).toLowerCase();

      // Return the modified word
      return firstLetter + rest;
    })
    .join(""); // Join the modified words into a single string

  return result;
}

function toSnakeCase(str) {
  // Split the string into an array of words
  const words = str.split(/\s+/);

  // Convert the first word to lower case
  let result = words[0].toLowerCase();

  // Append an underscore and the lowercase version of each subsequent word to the result
  result += words
    .slice(1)
    .map((word) => "_" + word.toLowerCase())
    .join("");

  return result;
}

function toScreamingSnakeCase(str) {
  // Split the string into an array of words
  const words = str.split(/\s+/);

  // Convert each word to uppercase
  const result = words.map((word) => word.toUpperCase()).join("_");

  return result;
}

function toKebabCase(str) {
  // Split the string into an array of words
  const words = str.split(/\s+/);

  // Convert the first word to lower case
  let result = words[0].toLowerCase();

  // Append a dash and the lowercase version of each subsequent word to the result
  result += words
    .slice(1)
    .map((word) => "-" + word.toLowerCase())
    .join("");

  return result;
}

function toScreamingKebabCase(str) {
  // Split the string into an array of words
  const words = str.split(/\s+/);

  // Convert each word to uppercase
  const result = words.map((word) => word.toUpperCase()).join("-");

  return result;
}
