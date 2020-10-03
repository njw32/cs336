//variables declaration
const textArea = document.getElementById("textArea");
const words = document.getElementById("numberOfWords");
const chars = document.getElementById("numberOfCharacters");


document.addEventListener("keyup", () => {
  //ternary plural variable for characters - write to html
  plurchars = textArea.value.length != 1 ? " characters" : " character";
  chars.innerHTML = textArea.value.length + plurchars;

  //ternary plural variable for words - write to html
  plurwords = textArea.value.split(" ").length - 1 != 1 ? " words" : " word";
  words.innerHTML = textArea.value.split(" ").length - 1 + plurwords;

  //convert to uppercase
  textArea.value = textArea.value.toUpperCase();
});
