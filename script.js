document.body.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10);

let bgColor = prompt("Orqa fon rangini kiriting (masalan: red, blue, green...)");
if (bgColor) {
  document.body.style.backgroundColor = bgColor;
}

let textColor = prompt("Text rangini kiriting (masalan: white, yellow, pink...)");
if (textColor) {
  document.body.style.color = textColor;
}
