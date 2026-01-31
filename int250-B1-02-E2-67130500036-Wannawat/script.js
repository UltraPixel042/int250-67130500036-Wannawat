const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const taskStats = document.getElementById("taskStats");
const searchInput = document.getElementById("searchInput");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
let currentFilter = 'all';

function saveAndRender() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";
    
    const activeTasksCount = tasks.filter(t => !t.completed).length;
    taskStats.innerText = `${tasks.length} total, ${activeTasksCount} active`;

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true; 
    });

    filteredTasks.forEach((task) => {
        const realIndex = tasks.indexOf(task);
        
        const isDone = task.completed ? 'text-decoration-line-through text-muted' : '';
        const checkIcon = task.completed ? 'bi-check-circle-fill text-success' : 'bi-circle text-primary';

        taskList.innerHTML += `
            <div class="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded">
                <div onclick="toggleTask(${realIndex})" style="cursor:pointer" class="${isDone}">
                    <i class="bi ${checkIcon} me-2"></i>
                    <span>${task.text}</span>
                    <small class="badge bg-secondary ms-2">${task.priority}</small>
                </div>
                <div>
                    <button onclick="editTask(${realIndex})" class="btn btn-sm btn-outline-warning me-1"><i class="bi bi-pencil"></i></button>
                    <button onclick="deleteTask(${realIndex})" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        `;
    });
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRender();
}

function deleteTask(index) {
    if(confirm("ลบรายการนี้ใช่ไหม?")) {
        tasks.splice(index, 1);
        saveAndRender();
    }
}

function editTask(index) {
    const newText = prompt("แก้ไขงาน:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText;
        saveAndRender();
    }
}

function renderTasks() {
    taskList.innerHTML = "";
    
    const searchText = searchInput.value.toLowerCase();

    const activeTasksCount = tasks.filter(t => !t.completed).length;
    taskStats.innerText = `${tasks.length} total, ${activeTasksCount} active`;

    const filteredTasks = tasks.filter(task => {
        const matchesFilter = 
            currentFilter === 'all' || 
            (currentFilter === 'active' && !task.completed) || 
            (currentFilter === 'completed' && task.completed);

        const matchesSearch = task.text.toLowerCase().includes(searchText);

        return matchesFilter && matchesSearch;
    });

    filteredTasks.forEach((task) => {
        const realIndex = tasks.indexOf(task);
        const isDone = task.completed ? 'text-decoration-line-through text-muted' : '';
        const checkIcon = task.completed ? 'bi-check-circle-fill text-success' : 'bi-circle text-primary';

        taskList.innerHTML += `
            <div class="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded border-start border-4 ${task.priority === 'High' ? 'border-danger' : 'border-info'}">
                <div onclick="toggleTask(${realIndex})" style="cursor:pointer" class="${isDone}">
                    <i class="bi ${checkIcon} me-2"></i>
                    <span>${task.text}</span>
                    <small class="badge bg-secondary ms-2">${task.priority}</small>
                </div>
                <div>
                    <button onclick="editTask(${realIndex})" class="btn btn-sm btn-outline-warning me-1"><i class="bi bi-pencil"></i></button>
                    <button onclick="deleteTask(${realIndex})" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        `;
    });
}

document.querySelectorAll('.btn-group button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-group button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        currentFilter = e.target.getAttribute('data-filter');
        renderTasks();
    });
});

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== "") {
        if(priorityInput.value == "Priority") {
            alert("Choose Priority");
            return;
        }
        tasks.push({
            text: taskInput.value,
            priority: priorityInput.value,
            completed: false
        });
        taskInput.value = "";
        saveAndRender();
    }
});


clearCompletedBtn.addEventListener('click', () => {
    if(confirm("ล้างรายการที่ทำเสร็จแล้วทั้งหมดใช่ไหม?")) {
        tasks = tasks.filter(task => !task.completed);
        saveAndRender();
    }
});

searchInput.addEventListener('input', () => {
    renderTasks(); 
});


renderTasks();