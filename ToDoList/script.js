function addTask() {
    var taskInput = document.getElementById("task-input");
    var deadlineInput = document.getElementById("deadline-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var task = document.createElement("li");
    task.className = "task";

    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    var taskDeadline = document.createElement("span");
    taskDeadline.textContent = deadlineInput.value;
    taskDeadline.style.marginRight = "10px"; // Add some spacing between task text and deadline

    var taskActions = document.createElement("div");
    taskActions.className = "task-actions";

    var completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.addEventListener("change", function() {
        if (completeCheckbox.checked) {
            task.classList.add("completed-task");
        } else {
            task.classList.remove("completed-task");
        }
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        task.parentNode.removeChild(task);
    };

    taskActions.appendChild(completeCheckbox);
    taskActions.appendChild(deleteButton);

    task.appendChild(taskText);
    task.appendChild(taskDeadline);
    task.appendChild(taskActions);

    taskList.appendChild(task);

    taskInput.value = "";
    deadlineInput.value = ""; // Clear the deadline input after adding a task
}