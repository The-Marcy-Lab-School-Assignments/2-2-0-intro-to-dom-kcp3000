const heading = () => {
  const h1 = document.createElement("h1")
  h1.setAttribute("id", "main-heading")
  h1.innerHTML = "Hello World!"
  document.body.appendChild(h1)
}

heading();

const pTag = () => {
  const p = document.createElement("p")
  p.setAttribute("id", "main-text")
  p.setAttribute("class", "boring-text")
  p.innerHTML = "Look, I'm some text!"
  document.body.appendChild(p);
}

pTag();