/** FEEDBACK: I love the use of functions here! Could we have made it DRYer? 
 * We also typically want to use our runner function so make sure you include that in the future!
 * Great job getting all test cases to pass!
 */
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