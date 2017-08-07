/*
function saveText() {
    let text = document.querySelector(".textarea1").value;
    let divArray = document.querySelectorAll(".content-text");
    for (let i = 0; i < divArray.length; i++) {
         if(divArray[i].innerHTML == '') {
            divArray[i].innerHTML = text;
            break;
        }
    }
}

function init() {
}
init();
function saveToStorage(key, value) {
    localStorage.setItem("key", JSON.stringify(value));
}
function deleteAllFromStorage() {
    window.localStorage.clear();
};
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[type=checkbox]');
    _selector.addEventListener('change', function (event) {
        let divArray = document.querySelectorAll(".content-text");
        for (let i = 0; i < divArray.length; i++) {
            if (_selector.checked) {
                /!*document.querySelector(".content-text").style.textDecoration="line-through";*!/
                /!*divArray.style.textDecoration="line-through";*!/
                divArray[i].style.textDecoration="line-through";
                break;
            } else {
                document.querySelector(".content-text").style.textDecoration="none";
            }
        }
    });
});
var check = document.querySelector('.checkboxer');
var text = document.querySelector('.text');
check.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'DIV') {
        ev.target.classList.toggle('checked');
    }
}, false);
text.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'DIV') {
        ev.target.classList.toggle('checked');
    }
}, false);
function getTodos() {
    var todos = new Array;
    var todosStr = localStorage.getItem('todo');
    if (todosStr != null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}
function add() {
    var task = document.getElementById('task').value;

    var todos = getTodos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function show() {
    var todos = getTodos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
document.getElementById('add').addEventListener('click', add);
show();


 var addTaskButton = document.getElementById("add-task-button");
 var newTaskInput = document.getElementById("new-task-input");
 var todolistContainer = document.getElementById("todolist-container");
 var templateElement = document.getElementById("list-item-template");
 var template = templateElement.innerHTML;

 window.onload = function () {
 for (var i = 0; i < window.localStorage.length; i++) {
 var taskName = window.localStorage.key(i);
 var isCompleted = window.localStorage.getItem(taskName) == "true";
 var taskHTML = templateElement.replace("<!-- TODO -->", taskName);

 if (!isCompleted) {
 todolistContainer.insertAdjacentHTML('afterbegin', taskHTML);
 }
 }
 };
 function showFromStorage() {
 for (var i = 0; i < window.localStorage.length; i++) {
 var taskName = window.localStorage.key(i);
 var isCompleted = window.localStorage.getItem(taskName) == "true";
 var taskHTML = Todo.template.replace("<!-- TODO -->", taskName);

 if (!isCompleted) {
 todolistContainer.insertAdjacentHTML('afterbegin', taskHTML);
 }
 }
 }

 addTaskButton.addEventListener('click', function(event) {
 var taskName = newTaskInput.value;
 newTaskInput.value = "";

 var taskHTML = template.replace("<!-- TODO -->", taskName);
 todolistContainer.insertAdjacentHTML('afterbegin', taskHTML);
 saveToDo(taskName, false);
 });
 todolistContainer.addEventListener('click', function(event) {
 var targetElement = event.toElement;

 while (!targetElement.classList.contains("task")) {
 targetElement = targetElement.parentElement;
 }

 var checkbox = targetElement.querySelector(".checkbox");

 if (checkbox.checked) {
 targetElement.classList.add("completed");
 } else {
 targetElement.classList.remove("completed");
 }

 /!*var taskNameElement = targetElement.querySelector(".task-name");
 var taskName = taskNameElement.innerText;

 saveTask(taskName, checkbox.checked);*!/
 });

 function saveToDo(name, isCompleted) {
 window.localStorage.setItem(name, isCompleted);
 };
*/

window.Todo = {
    addTaskButton: document.getElementById("add-task-button"),
    newTaskInput: document.getElementById("new-task-input"),
    container: document.getElementById("todolist-container"),
    template: document.getElementById("list-item-template").innerText,

    setup: function() {
        Todo.addTaskButton.addEventListener('click', Todo.onAddTaskClicked);
        Todo.container.addEventListener('click', Todo.onTodolistClicked);

        Todo.renderTasks();
    },

    onAddTaskClicked: function(event) {
        var taskName = Todo.newTaskInput.value;
        Todo.newTaskInput.value = "";

        var taskHTML = Todo.template.replace("<!-- TODO -->", taskName);
        Todo.container.insertAdjacentHTML('afterbegin', taskHTML);

        Todo.saveTask(taskName, taskName);
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

            Todo.saveTask(taskName, taskName);
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

    saveTask: function(name, name1) {
        window.localStorage.setItem(name, name1);
    },

    renderTasks: function() {
        for (var i = 0; i < window.localStorage.length; i++) {
            var taskName = window.localStorage.key(i);
            var isCompleted = window.localStorage.getItem(taskName) == "true";
            var taskHTML = Todo.template.replace("<!-- TODO -->", taskName);

            if (!isCompleted) {
                Todo.container.insertAdjacentHTML('afterbegin', taskHTML);
            }
        }
    }
}

Todo.setup();

function wantDelete() {
    localStorage.clear();
    window.location.reload(true);
}

