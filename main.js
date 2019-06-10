let form = document.getElementById("form");
let close = document.getElementsByClassName("delete");
let itemList = document.getElementById("taskList");

form.addEventListener("submit", createNewElement);
itemList.addEventListener("click", RemoveElement);
// Create Item

function createNewElement(e) {
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
  listNameArea.className = "labelInfoTaskList";
  listDateArea.className = "labelInfoTaskList";
  listTaskArea.className = "labelInfoTaskList";
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
  let status = document.createElement("button");
  status.className = "status";
  status.appendChild(document.createTextNode("⇓"));
  optionArea.appendChild(status);

  let del = document.createElement("button");
  del.className = "delete";
  del.appendChild(document.createTextNode("X"));
  console.log(del);
  console.log(close);
  optionArea.appendChild(del);
  arr.push(del);
}

//Remove Item

function RemoveElement(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement.parentElement;
    itemList.removeChild(li);
  }
}

/*const rootOfFile = document.querySelector("#root");

interface TodoItem: {
  name: string;
  task: string;
  date: string;
}

const todoItemList = [];

function addTodo(name, task, date) {
  todoItemList.push({ name, task, date });
}

function initialize() {
  addTodo("demo", "fix", "2018-08-08");
}

function renderTodo(todoItem) {
  const div = document.createElement("div");
  const str = `Title: ${todoItem.name}, ${todoItem.task}, ${todoItem.date}`;

  const text = document.createTextNode(str);
  div.appendChild(text);
  div.appendChild(document.createElement("br"));

  return div;
}

function renderAdd() {}

function renderAll() {
  for (let k in todoItemList) {
    const v = todoItemList[k];
    const todo = renderTodo(v);
    root.appendChild(todo);
  }
}

initialize();
renderAll();*/
