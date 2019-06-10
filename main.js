let form = document.getElementById("form");
let close = document.getElementsByClassName("delete");
let itemList = document.getElementById("taskList");
let filter = document.getElementById("filter");
let status = document.getElementById("status");
let edit = document.getElementById("edit");

form.addEventListener("submit", CreateNewTask);
itemList.addEventListener("click", RemoveTask);
filter.addEventListener("keyup", FilterTasksByName);
status.addEventListener("click", ChooseStatus);
itemList.addEventListener("click", EditTask);

// Create Element
function CreateNewTask(e) {
  e.preventDefault();

  let name = document.querySelector(".input.name").value;
  let date = document.querySelector(".input.date").value;
  let task = document.querySelector(".input.task").value;

  let items = document.createElement("li");
  items.className = "items";
  itemList.appendChild(items);

  let infoArea = document.createElement("div");
  infoArea.className = "infoArea";
  items.appendChild(infoArea);

  let optionArea = document.createElement("div");
  optionArea.className = "optionArea";
  items.appendChild(optionArea);

  //InfoArea
  let listName = document.createElement("div");
  let listDate = document.createElement("div");
  let listTask = document.createElement("div");
  listName.className = "labelTaskList";
  listDate.className = "labelTaskList";
  listTask.className = "labelTaskList";
  listName.appendChild(document.createTextNode("Name"));
  listDate.appendChild(document.createTextNode("Date"));
  listTask.appendChild(document.createTextNode("Task"));

  let listNameArea = document.createElement("div");
  let listDateArea = document.createElement("div");
  let listTaskArea = document.createElement("div");
  listNameArea.className = "labelInfoTaskList name";
  listDateArea.className = "labelInfoTaskList date";
  listTaskArea.className = "labelInfoTaskList task";
  listNameArea.appendChild(document.createTextNode(name));
  listDateArea.appendChild(document.createTextNode(date));
  listTaskArea.appendChild(document.createTextNode(task));

  let infoItems = [];
  for (let i = 0; i < 3; i++) {
    infoItems[i] = document.createElement("div");
    infoItems[i].className = "item";
    infoArea.appendChild(infoItems[i]);

    if (i == 0) {
      infoItems[i].appendChild(listName);
      infoItems[i].appendChild(listNameArea);
    }
    if (i == 1) {
      infoItems[1].appendChild(listDate);
      infoItems[1].appendChild(listDateArea);
    }
    if (i == 2) {
      infoItems[2].appendChild(listTask);
      infoItems[2].appendChild(listTaskArea);
    }
  }

  //Option Area
  let edit = document.createElement("button");
  edit.className = "edit";
  edit.id = "edit";
  edit.appendChild(document.createTextNode("*"));
  optionArea.appendChild(edit);

  let status = document.createElement("button");
  status.className = "status";
  status.id = "status";
  status.appendChild(document.createTextNode("⇓"));
  optionArea.appendChild(status);

  let del = document.createElement("button");
  del.className = "delete";
  del.appendChild(document.createTextNode("X"));
  optionArea.appendChild(del);
}

//Remove Element
function RemoveTask(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement.parentElement;
    itemList.removeChild(li);
  }
}

//Filter Elements
function FilterTasksByName(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function(item) {
    //Get name
    let itemName = item.querySelector(".labelInfoTaskList.name").firstChild
      .textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

//Edit Task
function EditTask(e) {
  if (e.target.className === "edit") {
    let elements = this.parentElement.parentElement.querySelectorAll(
      ".labelInfoTaskList"
    );
    let namesOfElements = this.parentElement.parentElement.querySelectorAll(
      ".labelTaskList"
    );
    Array.from(elements).forEach(function(element) {
      console.log(element);
      if (element.className == "labelInfoTaskList name") {
        document.querySelector(".input.name").value = element.innerHTML;
      }
      if (element.className == "labelInfoTaskList date") {
        document.querySelector(".input.date").value = element.innerHTML;
      }
      if (element.className == "labelInfoTaskList task") {
        document.querySelector(".input.task").value = element.innerHTML;
      }
    });
  }
}
//Choose Status
function ChooseStatus(e) {}
