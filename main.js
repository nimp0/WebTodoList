let form = document.getElementById("form");
let close = document.getElementsByClassName("delete");
let itemList = document.getElementById("taskList");
let button = document.getElementsByClassName("button");
let item = document.getElementsByClassName("item");

// Click on a close button to hide the current list item
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function(e) {
    let currentElement = this.parentElement.parentElement;
    itemList.removeChild(currentElement);
  });
}

// Create a new list item when clicking on the "Submit" button
form.addEventListener("submit", createNewElement);
function createNewElement(e) {
  e.preventDefault();

  let name = document.querySelector(".input.name").value;
  let date = document.querySelector(".input.date").value;
  let task = document.querySelector(".input.task").value;
  console.log(task);

  let li = document.createElement("li");
  li.className = "items";

  let nameField = document.createElement("div");
  nameField.className = "labelInfoTaskList name";
  nameField.value = name;
  console.log(nameField.value);
  nameField.appendChild(document.createTextNode(name));
  //item.appendChild(document.createTextNode(name));

  li.appendChild(document.createTextNode(name));
  itemList.appendChild(li);
}
