function createTaskElement(task, index) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(${index})" class="${task.done ? 'completed' : ''}">
            ${task.text}
        </span>
        <button onclick="deleteTask(${index})">❌</button>
    `;

    return li;
}

function renderTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    const tasks = getTasks();

    tasks.forEach((task, index) => {
        list.appendChild(createTaskElement(task, index));
    });
}