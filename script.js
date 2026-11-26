
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let message = document.getElementById("message");
let addBtn = document.getElementById("addBtn");
let resetBtn = document.getElementById("resetBtn");
let tasks = [];
function addTask() {
    let task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    tasks.push(task);
    taskInput.value = "";
    showTasks();
}
function showTasks() {
    taskList.innerHTML = "";
    if (tasks.length === 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.className = "task-text";
        span.textContent = tasks[i];
        let actions = document.createElement("div");
        actions.className = "actions";
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.addEventListener("click", function() {
            editTask(i);
        });
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", function() {
            deleteTask(i);
        });
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
    }
}
function editTask(index) {
    let newTask = prompt(
        "Enter your updated task:",
        tasks[index]
    );
    if (newTask === null) {
        return;
    }
    newTask = newTask.trim();
    if (newTask === "") {
        alert("Task cannot be empty!");
        return;
    }
    tasks[index] = newTask;
    showTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}
function resetList() {
    let confirmReset = confirm(
        "Are you sure you want to clear all tasks?"
    );
    if (confirmReset) {
        tasks = [];
        showTasks();
    }
}

addBtn.addEventListener("click", addTask);
resetBtn.addEventListener("click", resetList);
showTasks();
