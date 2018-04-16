// another attempt at todo app

var todoList = {
    todos: [],

    addTodos: function(newItemText) {
        this.todos.push({
            itemText: newItemText,
            complete: false
        });
    },

    changeTodo: function(position, newItemText) {
        var todo = this.todos[position];
        todo.itemText = newItemText;
    },

    changeCompleteFlag: function(position) {
        var todoState = this.todos[position];
        todoState.complete = !todoState.complete;
    },

    toggleAll: function() {
        var allComplete = true;
        this.todos.forEach(function(todo) {
            if (todo.complete === false) {
                todo.complete = true;
                allComplete = false;
            }
        });
        if (allComplete === true) {
            this.todos.forEach(function(todo) {
                todo.complete = false;
            });
        }
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    }
}

var handlers = {

    addTodos: function() {
        var addText = document.getElementById('addTextbox');
        todoList.addTodos(addText.value);
        addText.value = '';
        view.displayTodos();
    },

    // toggleTodo: function() {
    //     var positionToggle = document.getElementById('toggleTodoPosition');
    //     todoList.changeCompleteFlag(positionToggle.valueAsNumber);
    //     positionToggle.value = '';
    //     view.displayTodos();
    // },

    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
}

var view = {

    displayTodos: function() {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';
        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement('li');
            var textbox = this.createTextbox();
            textbox.value = todo.itemText;
            var checkbox = this.createCheckbox();
            if (todo.complete === false) {
                checkbox.checked = false;
            } else {
                checkbox.checked = true;
            }
            todoLi.id = position;
            todoLi.appendChild(checkbox);
            todoLi.appendChild(textbox);
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        }, this);
    },

    createCheckbox: function() {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = 'checkbox';
        return checkbox;
    },

    createTextbox: function() {
        var textbox = document.createElement('input');
        textbox.type = "text";
        textbox.className = 'textbox';
        return textbox;
    },

    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },

    setupEventListeners: function() {
        var addTodo = document.getElementById('addTextbox');
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
            var clicked = event.target;
            if (clicked.className === 'deleteButton') {
                todoList.deleteTodo(parseInt(clicked.parentNode.id));
                view.displayTodos();
            } else if (clicked.className === 'checkbox') {
                todoList.changeCompleteFlag(parseInt(clicked.parentNode.id));
                view.displayTodos();
            }
        })

        todosUl.addEventListener('focusout', function(event) {
            var left = event.target;
            if (left.className === 'textbox') {
                todoList.changeTodo(parseInt(left.parentNode.id), left.value)
            }
        })

        addTodo.addEventListener('keydown', function(event) {
            if (event.keyCode == 13) {
                todoList.addTodos(addTodo.value);
                view.displayTodos();
                addTodo.value = '';
            }
        })
    }
}

view.setupEventListeners();