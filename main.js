const enterBtn = document.getElementById("enter");
const input =document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.querySelectorAll("li");

console.log(item.length);

function inputLength() {
   return input.value.length;
}

function createListElement() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("x"));
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
        setTimeout(function() {
            li.style.display = "none"
        }, 500);
    }
} 
// createListElement();

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Add item on click button
enterBtn.addEventListener("click", addListAfterClick);
// enterBtn.onClick = () => addListAfterClick();


// Add item using enter key 
input.addEventListener("keypress", () => {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
});