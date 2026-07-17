const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

loadTasks();

renderTasks();

console.log(localStorage);

//This function runs when Add button is clicked
addButton.addEventListener("click", function () {
  // prevent empty tasks
  if (taskInput.value === "") return;

  //create a task object
  tasks.push({
    title: taskInput.value,
    done: false,
  });

  //clear inside of ul
  taskList.innerHTML = "";

  saveTasks();
  renderTasks();

  //clear input bar
  taskInput.value = "";
});

//serialization
function saveTasks() {
  console.log("saveTasks");

  let serializedString = "";

  //making objects into a comma separated string
  for (let i = 0; i < tasks.length; i++) {
    serializedString += tasks[i].title + "|" + tasks[i].done;
    if (i < tasks.length - 1) {
      serializedString += ",";
    }
  }

  //save it to localStorage
  localStorage.setItem("tasks", serializedString);
}

//deserialization
function loadTasks() {
  console.log("loadTasks");

  let savedString = localStorage.getItem("tasks");

  //make a string into array of objects
  if (savedString) {
    let taskArray = savedString.split(",");

    for (let i = 0; i < taskArray.length; i++) {
      let parts = taskArray[i].split("|");

      tasks.push({
        title: parts[0],
        done: parts[1] === "true",
      });
    }
  } else {
    tasks = []; //nothing saved yet
  }
}

//rendering CSS
function renderTasks() {
  console.log("renderTasks");

  //clear inside of unordered list;
  taskList.innerHTML = "";

  //create new list items from tasks
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    //check status
    if (tasks[i].done) {
      li.classList.add("done");
    }

    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tasks[i].done;

    checkbox.addEventListener("click", function () {
      tasks[i].done = checkbox.checked;
      saveTasks();
      console.log(tasks[i].done);

      renderTasks();
    });

    li.appendChild(checkbox);

    //add title to list item
    li.appendChild(document.createTextNode(tasks[i].title));

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.className = "deleteButton";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      tasks.splice(i, 1);
      saveTasks();
      renderTasks();
    });

    //add list item to unordered list
    taskList.appendChild(li);
  }
}
