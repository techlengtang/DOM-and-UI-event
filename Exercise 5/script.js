// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
const description = document.getElementById("description");
const priority = document.getElementById("priority");
function addItem() {
  // 1- Create a new task
  // TODO
  if (description.value != ""){
    const descriptionEnter = description.value;
    // 3- Set the priority from select field
    // TODO
    const priorityEnter = priority.value;
    // 4- Add the new object to the array
    // TODO
    tasks.push({"description": descriptionEnter, "priority": priorityEnter})
  }
  defaultDisplay();
  displayTask(tasks);
}

function defaultDisplay(){
  const node = document.getElementById('list');
  if (node) {
    node.remove(); // Remove the existing list if it exists
  }
}
function displayTask(tasks) {

  const taskListElement = document.createElement('ul');
  taskListElement.id = "list";

  tasks.forEach(task => {
      const item = document.createElement('div');
      item.className = "item";
      item.textContent = task.description;
      item.style.backgroundColor = task.priority === 'High' ? 'red' : 'gray';
      taskListElement.appendChild(item);
  });

  const container = document.getElementsByClassName('container')[0];
  container.appendChild(taskListElement);
}
// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
let showIm = document.getElementById("showIm");
showIm.addEventListener("click", () => {
  let important = tasks.filter(task => task.priority === "High");
  console.log(important);
  defaultDisplay();
  displayTask(important);
});
let showNotIm = document.getElementById("showNotIm");
showNotIm.addEventListener("click", () => {
  let notImportant = tasks.filter(task => task.priority === "Low");
  console.log(notImportant);
  defaultDisplay();
  displayTask(notImportant);
});
let showAll = document.getElementById("showAll");
showAll.addEventListener("click", () => {
  defaultDisplay();
  displayTask(tasks);
});
