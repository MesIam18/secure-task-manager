const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const loadSamplesBtn = document.getElementById("loadSamplesBtn");
const taskList = document.getElementById("taskList");
const taskMessage = document.getElementById("taskMessage");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

let taskIdCounter = 1;

function updateTaskCounts() {
  const allTasks = taskList.querySelectorAll(".task-item");
  const completedTasks = taskList.querySelectorAll('.task-item[data-state="completed"]');
  const pendingTasks = taskList.querySelectorAll('.task-item[data-state="pending"]');

  totalCount.textContent = allTasks.length;
  completedCount.textContent = completedTasks.length;
  pendingCount.textContent = pendingTasks.length;
}

function createTaskElement(taskText, taskId) {
  const li = document.createElement("li");
  li.className = "task-item";
  li.dataset.taskId = taskId;
  li.dataset.state = "pending";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.textContent = "Complete";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "Remove";

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}

function addTask(taskText) {
  const trimmedText = taskText.trim();

  if (!trimmedText) {
    taskMessage.textContent = "Task cannot be empty";
    return;
  }

  taskMessage.textContent = "";

  const taskId = `task-${taskIdCounter++}`;
  const newTaskItem = createTaskElement(trimmedText, taskId);

  taskList.appendChild(newTaskItem);
  taskInput.value = "";
  updateTaskCounts();
}

addTaskBtn.addEventListener("click", () => {
  addTask(taskInput.value);
});

function loadSampleTasks() {
  const sampleTasks = [
    "Review DOM selectors",
    "Practice createElement",
    "Study event delegation"
  ];

  const fragment = document.createDocumentFragment();

  sampleTasks.forEach((text) => {
    const taskId = `task-${taskIdCounter++}`;
    const taskElement = createTaskElement(text, taskId);
    fragment.appendChild(taskElement);
  });

  taskList.appendChild(fragment);
  updateTaskCounts();
}

loadSamplesBtn.addEventListener("click", loadSampleTasks);