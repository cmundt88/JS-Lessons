// another attempt at todo app

var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('List:');
        if (this.todos.length === 0) {
            cosole.log('There are no todos in your list');
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                console.log(this.todos[i].itemText);
            }
        }
    },
    addTodos: function(newItemText) {
        this.todos.push({
            itemText: 'newItemText',
            complete: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, newItemText) {
        position = position - 1;
        var todo = this.todos[position];
        todo[position].itemText = newItemText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        position = position - 1;
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}