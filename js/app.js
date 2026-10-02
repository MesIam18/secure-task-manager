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