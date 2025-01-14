
//Adding a list item to the components

//const btn = document.querySelector("#btnAddListItem");

function addListItem(){
    const list = document.querySelector("ul");

    //Node Type allows you to look up the element type you are working with
    //list.children.item(1); //this will select the second item
    const newItem = document.createElement("li");
    newItem.textContent = "some content";
    list.appendChild(newItem);

}


function addInbetween(){
    // remember the query selector method only gets the first instance, we want to insert between to P tags

    //hence we use querySelectorAll

    const paragraphbefore = document.querySelectorAll('p').item(1);

   // const paragraphafter = document.querySelectorAll('p').item(1);

    //Now we need the parent which in our case is the parent Div

    const parent = document.querySelector(".main-body");

    const newP = document.createElement("p");
    newP.textContent = "This text has been added using the HTML DOM model with Inbetween";

    parent.insertBefore(newP, paragraphbefore);
}