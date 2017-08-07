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
    addNewTaskRow: function (text) {

            var liTask = document.createElement("li");
            liTask.className = "task";
            var inputCheck = document.createElement('input');
            inputCheck.setAttribute('type', 'checkbox');
            inputCheck.className = "checkbox";

            var deleteBtn = document.createElement('input');
            deleteBtn.setAttribute('type', 'button');
            deleteBtn.className = "delete-btn";
            deleteBtn.setAttribute('value', 'x');

            var label = document.createElement('label');//label
            /*label.appendChild(document.createTextNode('text for label'));*/

            var spanCustom = document.createElement('span');
            spanCustom.className = "checkbox-custom";

            var spanTaskName = document.createElement("span");
            spanTaskName.className = "task-name label";
            spanTaskName.appendChild(document.createTextNode(text));

            var test = document.querySelector(".task");

            /*liTask.appendChild(test);*/
            liTask.appendChild(label);

            label.appendChild(inputCheck);
            label.appendChild(spanCustom);
            label.appendChild(spanTaskName);
            label.appendChild(deleteBtn);

            return liTask.outerHTML;
    },

    onAddTaskClicked: function() {
        var taskName = Todo.newTaskInput.value;
        Todo.newTaskInput.value = "";
        /*var taskHTML = Todo.template.replace("<!-- TODO -->", taskName);
        Todo.container.insertAdjacentHTML('afterbegin', taskHTML);*/

        var taskProp = Todo.addNewTaskRow(taskName);
        window.location.reload(true);

        Todo.saveTask(taskName, taskProp);
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
            var targetHTML = targetElement.outerHTML;

            Todo.saveTask(taskName,targetHTML);
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

    saveTask: function(name, taskProp) {
        window.localStorage.setItem(name, JSON.stringify(taskProp));
    },

    renderTasks: function() {
        for (var i = 0; i < window.localStorage.length; i++) {
            var taskName = window.localStorage.key(i);
            var taskProp = JSON.parse(window.localStorage.getItem(taskName));
            if(taskProp.indexOf('completed') + 1){
                taskProp = taskProp.replace(`<input type="checkbox" class="checkbox">`, '<input type="checkbox" class="checkbox" checked>');
            }
            Todo.container.insertAdjacentHTML('afterbegin', taskProp);

        }
        /*for (var i = 0; i < window.localStorage.length; i++) {
            var taskName = window.localStorage.key(i);
            var isCompleted = JSON.parse(window.localStorage.getItem(taskName));
            var taskHTML = Todo.template.replace("<!-- TODO -->", taskName);

            if (!isCompleted) {
                Todo.container.insertAdjacentHTML('afterbegin', taskHTML);
            }
            else {
                var taskName1 = window.localStorage.key(i);
                var taskHTML1 = Todo.templateCompleted.replace("<!-- TODO -->", taskName1);
                Todo.container.insertAdjacentHTML('afterbegin', taskHTML1);
            }
        }*/
    }
}

Todo.setup();

function wantDelete() {
    localStorage.clear();
    window.location.reload(true);
}