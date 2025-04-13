const form = document.getElementById('todo-form');
const input = document.getElementById('new-task');
const list = document.getElementById('todo-list');

// Array to store tasks
const tasks = [];

// Function to render tasks
function renderTasks() {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1); // remove task from array
      renderTasks(); // re-render the list
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// Form submit event listener
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTask = input.value.trim();

  // Simple validation
  if (newTask !== '') {
    tasks.push(newTask); // add task to array
    input.value = ''; // clear input
    renderTasks(); // update list
  }
});