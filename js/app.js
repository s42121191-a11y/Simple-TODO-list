document.getElementById("add-btn").addEventListener("click", addTask);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

function addTask() {
    const input = document.getElementById("task-input");
    const text = input.value.trim();

    if (!text) return;

    const tasks = getTasks();
    tasks.push({ text: text, done: false });

    saveTasks(tasks);
    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);

    saveTasks(tasks);
    renderTasks();
}

function toggleTask(index) {
    const tasks = getTasks();
    tasks[index].done = !tasks[index].done;

    saveTasks(tasks);
    renderTasks();
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

renderTasks();