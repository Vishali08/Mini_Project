const input = document.getElementById('input');
const add = document.getElementById('add');
const list = document.getElementById('list');

function addTask() {
    console.log("Clicked")
  const taskText = input.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  } else if(taskText !== " "){

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const delButton = document.createElement('button');
  delButton.textContent = 'Delete';
  delButton.className = "btn btn-danger"
  delButton.addEventListener('click', function() {
    taskItem.remove();
  });

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.className = "btn btn-success"
  completeButton.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  taskItem.appendChild(delButton);
  taskItem.appendChild(completeButton);
  list.appendChild(taskItem);

  input.value = '';
}
}

// Event listener for adding a new task
add.addEventListener('click', addTask);

// Event listener for adding a new task when Enter is pressed
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
