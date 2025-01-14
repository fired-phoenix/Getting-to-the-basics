//This is the HTML Tutorial at 11:43:14 in Video

const btn = document.querySelector("#btn-1");

function addParagraph() {
    const randNum = Math.floor(Math.random() * 100);
    const pContent = `The random number is: ${randNum}`;
    //let newElement = "<p>This is just in case</p>";
     const newElement = document.createElement("p");
    newElement.textContent = pContent;
    document.body.append(newElement);
   // document.body.appendChild(newElement);
}

//btn.addEventListener("click", addParagraph);

//btn.onClick = addParagraph();
//Can also be done in the HTML On Click event section "onClick = "addParagraph()"