const getMainHeadingText = () => {
  let h1 = document.querySelector("#main-heading").textContent
  //console.log(text.textContent)
  console.log(h1)
};

//getMainHeadingText();

const getAllMainText = () => {
  const empty = []
  const p = document.querySelectorAll(".main-text")
  const toArr = [...p]
  for (const ele of toArr) {
    const text = ele.textContent
    empty.push(text)
  }
  console.log(empty.join(','))

  //console.log(newArr.toString())
};

const setSubtitleText = () => {
  document.querySelector("#subtitle").innerHTML = "This is a subtitle!"
};

const modifyDivClassList = () => {
  const list = document.getElementById("modify-classes").classList
  list.remove("bad-class")
  list.add("new-class")
};

const addH2 = () => {
  const h2 = document.createElement("h2")
  h2.setAttribute("id", "h2-test")
  h2.innerHTML = "Another one!"
  document.body.appendChild(h2)
};

const removeOldInfo = () => {
  const beGone = document.getElementById("old-info")
  beGone.remove()
};

const makeAlphabet = () => {
  const yes = document.querySelector("#alphabet")
  const num = (yes.dataset.numLetters)

  // const list = document.createElement("li")
  // list.innerHTML = "A is letter #1 in the alphabet"
  // document.getElementById("alphabet").appendChild(list)

  // const list2 = document.createElement("li")
  // list2.innerHTML = "B is letter #2 in the alphabet"
  // document.getElementById("alphabet").appendChild(list2)

  // const list3 = document.createElement("li")
  // list3.innerHTML = "C is letter #3 in the alphabet"
  // document.getElementById("alphabet").appendChild(list3)

  // const list4 = document.createElement("li")
  // list4.innerHTML = "D is letter #4 in the alphabet"
  // document.getElementById("alphabet").appendChild(list4)

  // const list5 = document.createElement("li")
  // list5.innerHTML = "E is letter #5 in the alphabet"
  // document.getElementById("alphabet").appendChild(list5)

  // const list6 = document.createElement("li")
  // list6.innerHTML = "F is letter #2 in the alphabet"
  // document.getElementById("alphabet").appendChild(list6)

  const alp = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 1; i <= num; i++) {
    const list = document.createElement("li");
    list.innerHTML = `${alp[i]} is letter #${i} in the alphabet`;
    document.getElementById("alphabet").appendChild(list)
  };

};

const makeBio = () => {
  const bioEl = document.querySelector('#my-bio');
  bioEl.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
  // const h2 = document.createElement("h2");
  // h2.setAttribute("id", "bio-heading")
  // h2.innerHTML = "About Me"
  // document.getElementById("my-bio").appendChild(h2)

  // const p = document.createElement("p")
  // p.innerHTML = "My name is Zo and I like learn cool new things"
  // document.getElementById("my-bio").appendChild(p)

  // const h3 = document.createElement("h3");
  // h3.setAttribute("id", "hobby-heading")
  // h3.innerHTML = "My Hobbies"
  // document.getElementById("my-bio").appendChild(h3)

  // const ul = document.createElement("ul")
  // document.getElementById("my-bio").appendChild(ul)

  // const li = document.createElement("li")
  // li.innerHTML = "Running"
  // ul.appendChild(li)

  // const li2 = document.createElement("li")
  // li2.innerHTML = "Reading"
  // ul.appendChild(li2)

  // const li3 = document.createElement("li")
  // li3.innerHTML = "Writing"
  // ul.appendChild(li3)
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
