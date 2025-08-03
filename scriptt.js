let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = createTaskElement(taskText);
  taskList.appendChild(li);
  saveTask(taskText);
  taskInput.value = "";
}

function createTaskElement(taskText, isCompleted = false) {
  const li = document.createElement("li");
  li.textContent = taskText;

  if (isCompleted) li.classList.add("completed");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTasks();
  });

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  delBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
    updateTasks();
  };

  li.appendChild(delBtn);
  return li;
}

function saveTask(text) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTasks() {
  const allTasks = [];
  document.querySelectorAll("li").forEach(li => {
    allTasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const li = createTaskElement(task.text, task.completed);
    taskList.appendChild(li);
  });
}