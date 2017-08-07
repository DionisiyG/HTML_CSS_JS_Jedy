window.Todo = {
    addTaskButton: document.getElementById("add-task-button"),
    newTaskInput: document.getElementById("new-task-input"),
    container: document.getElementById("todolist-container"),
    template: document.getElementById("list-item-template").innerText,
    templateCompleted: document.getElementById("list-item-template-completed").innerText,

    setup: function() {
        Todo.addTaskButton.addEventListener('click', Todo.onAddTaskClicked);
        Todo.container.addEventListener('click', Todo.onTodolistClicked);
        Todo.renderTasks();
    },

    onAddTaskClicked: function() {
        var taskName = Todo.newTaskInput.value;
        Todo.newTaskInput.value = "";
        var taskHTML = Todo.template.replace("<!-- TODO -->", taskName);
        Todo.container.insertAdjacentHTML('afterbegin', taskHTML);
        Todo.saveTask(taskName, false);
    },

    onTodolistClicked: function(event) {
        var targetElement = event.toElement;
        if(targetElement.className !== "delete-btn"){
            while (!targetElement.classList.contains("task")) {
                targetElement = targetElement.parentElement;
            }

            var checkbox = targetElement.querySelector(".checkbox");
            var toLineThrough = targetElement.querySelector(".task-name");
            if (checkbox.checked) {
                toLineThrough.classList.add("completed");
            } else {
                toLineThrough.classList.remove("completed");
            }

            var taskNameElement = targetElement.querySelector(".task-name");
            var taskName = taskNameElement.innerText;


            Todo.saveTask(taskName, checkbox.checked);
        }
        else{
            while (!targetElement.classList.contains("task")) {
                targetElement = targetElement.parentElement;
            }

            var taskNameElement = targetElement.querySelector(".task-name");
            var taskName = taskNameElement.innerText;
            localStorage.removeItem(taskName);
            window.location.reload(true);
        }
    },

    saveTask: function(name, isCompleted) {
        window.localStorage.setItem(name, JSON.stringify(isCompleted));
    },

    renderTasks: function() {
        for (var i = 0; i < window.localStorage.length; i++) {
            var taskName = window.localStorage.key(i);
            var isCompleted = JSON.parse(window.localStorage.getItem(taskName)) === "true";
            var taskHTML = Todo.template.replace("<!-- TODO -->", taskName);

            if (!isCompleted) {
                Todo.container.insertAdjacentHTML('afterbegin', taskHTML);
            }
            else {
                var taskName1 = window.localStorage.key(i);
                var taskHTML1 = Todo.templateCompleted.replace("<!-- TODO -->", taskName1);
                Todo.container.insertAdjacentHTML('afterbegin', taskHTML1);
            }
        }
    }
}

Todo.setup();

function wantDelete() {
    localStorage.clear();
    window.location.reload(true);
}

function testNewElem() {
    var inputCheck = document.createElement('input');
    inputCheck.setAttribute('type', 'checkbox');
    inputCheck.className = "checkbox";

    var label = document.createElement('label');//label
    label.appendChild(document.createTextNode('text for label'));

    var spanCustom = document.createElement('span');
    spanCustom.className = "checkbox-custom";

    var spanTaskName = document.createElement("task-name");
    spanTaskName.className = "task-name label";

    var test = document.querySelector(".task");
    test.appendChild(label);
    label.appendChild(inputCheck);
    label.appendChild(spanCustom);
    label.appendChild(spanTaskName);
}