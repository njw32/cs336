const textArea = document.getElementById("textArea");
const words = document.getElementById("numberOfWords");
const chars = document.getElementById("numberOfCharacters");


document.addEventListener("keyup", () => {
  chars.innerHTML = textArea.innerHTML.length;
});