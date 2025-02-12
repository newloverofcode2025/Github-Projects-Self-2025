// Select DOM elements
const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDateInput');
const priorityInput = document.getElementById('priorityInput');
const categoryInput = document.getElementById('categoryInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const darkModeToggle = document.getElementById('darkModeToggle');
const searchInput = document.getElementById('searchInput');
const filterPriority = document.getElementById('filterPriority');
const filterStatus = document.getElementById('filterStatus');
const progressFill = document.getElementById('progressFill');
const exportTasksBtn = document.getElementById('exportTasksBtn');
const importTasksBtn = document.getElementById('importTasksBtn');
const enableNotificationsBtn = document.getElementById('enableNotificationsBtn');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');

let tasks = [];

// Load tasks from local storage
document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTask(task.text, task.dueDate, task.priority, task.category, task.completed));
    updateProgress();
});

// Add Task Functionality
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value;

    if (taskText !== '' && dueDate !== '') {
        addTask(taskText, dueDate, priority, category);
        saveTasksToLocalStorage();
        taskInput.value = '';
        dueDateInput.value = '';
    }
});

// Function to Add a Task
function addTask(text, dueDate, priority, category, completed = false) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text} <small>(Due: ${dueDate}, Category: ${category})</small></span>
        <div>
            <span class="priority ${priority}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
            <button>&times;</button>
        </div>
    `;

    if (completed) {
        li.classList.add('completed');
    }

    // Mark Task as Complete
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasksToLocalStorage();
        updateProgress();
    });

    // Delete Task
    const deleteBtn = li.querySelector('button');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.style.animation = 'fadeOut 0.5s ease-in-out forwards';
        setTimeout(() => li.remove(), 500); // Remove after animation
        saveTasksToLocalStorage();
        updateProgress();
    });

    taskList.appendChild(li);
    li.style.animation = 'fadeIn 0.5s ease-in-out forwards'; // Add animation

    // Enable Drag-and-Drop
    li.draggable = true;
    li.addEventListener('dragstart', () => {
        li.classList.add('dragging');
    });
    li.addEventListener('dragend', () => {
        li.classList.remove('dragging');
        saveTasksToLocalStorage();
    });

    updateProgress();
}

// Save Tasks to Local Storage
function saveTasksToLocalStorage() {
    tasks = Array.from(taskList.children).map(li => ({
        text: li.querySelector('span').childNodes[0].textContent,
        dueDate: li.querySelector('small').textContent.split(',')[0].replace('Due: ', ''),
        priority: li.querySelector('.priority').textContent.toLowerCase(),
        category: li.querySelector('small').textContent.split(',')[1].replace('Category: ', '').trim(),
        completed: li.classList.contains('completed')
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Drag-and-Drop Reordering
taskList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    const siblings = [...taskList.querySelectorAll('li:not(.dragging)')];
    const nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    taskList.insertBefore(dragging, nextSibling);
    saveTasksToLocalStorage();
});

// Dark Mode Toggle
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    } else {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
    }
});

// Search and Filter
searchInput.addEventListener('input', filterTasks);
filterPriority.addEventListener('change', filterTasks);
filterStatus.addEventListener('change', filterTasks);

function filterTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    const priorityFilter = filterPriority.value;
    const statusFilter = filterStatus.value;

    Array.from(taskList.children).forEach(li => {
        const taskText = li.querySelector('span').childNodes[0].textContent.toLowerCase();
        const priority = li.querySelector('.priority').textContent.toLowerCase();
        const completed = li.classList.contains('completed');

        const matchesSearch = taskText.includes(searchTerm);
        const matchesPriority = priorityFilter === 'all' || priority === priorityFilter;
        const matchesStatus = statusFilter === 'all' || (statusFilter === 'completed' && completed) || (statusFilter === 'pending' && !completed);

        li.style.display = matchesSearch && matchesPriority && matchesStatus ? 'flex' : 'none';
    });
}

// Progress Tracker
function updateProgress() {
    const totalTasks = taskList.children.length;
    const completedTasks = Array.from(taskList.children).filter(li => li.classList.contains('completed')).length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    progressFill.style.width = `${progress}%`;
}

// Export/Import Tasks
exportTasksBtn.addEventListener('click', () => {
    const dataStr = JSON.stringify(tasks);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'tasks.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
});

importTasksBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const importedTasks = JSON.parse(reader.result);
            taskList.innerHTML = '';
            importedTasks.forEach(task => addTask(task.text, task.dueDate, task.priority, task.category, task.completed));
            saveTasksToLocalStorage();
            updateProgress();
        };
        reader.readAsText(file);
    };
    input.click();
});

// Notifications
enableNotificationsBtn.addEventListener('click', () => {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                alert('Notifications enabled!');
            }
        });
    }
});

setInterval(() => {
    Array.from(taskList.children).forEach(li => {
        const dueDate = li.querySelector('small').textContent.split(',')[0].replace('Due: ', '');
        const today = new Date().toISOString().split('T')[0];
        if (dueDate === today && !li.classList.contains('notified')) {
            new Notification('Task Due Today!', {
                body: li.querySelector('span').childNodes[0].textContent
            });
            li.classList.add('notified');
        }
    });
}, 60000); // Check every minute

// User Authentication (Mock)
loginBtn.addEventListener('click', () => {
    alert('Logged in successfully!');
    loginBtn.style.display = 'none';
    signupBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
});

logoutBtn.addEventListener('click', () => {
    alert('Logged out successfully!');
    logoutBtn.style.display = 'none';
    loginBtn.style.display = 'block';
    signupBtn.style.display = 'block';
});