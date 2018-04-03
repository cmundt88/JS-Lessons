// attempt to build a todo list according to watchandcode

var todoList = {
    todos: ['item 1', 'item 2', 'item 3', 'item 4'],
    displayList: function() {
        console.log('List:', this.todos);
    },
    addToList: function(newItem) {
        this.todos.push(newItem);
        console.log('List:', this.todos);
    },
    changeList: function(position, changedItem) {
        position = position - 1;
        this.todos[position] = changedItem;
        console.log('List:', this.todos);
    },
    deleteItem: function(position, items) {
        this.todos.splice(position, items);
        console.log('List:', this.todos);
    }
};