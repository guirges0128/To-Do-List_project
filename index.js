document.addEventListener('DOMContentLoaded', function() {

    var todoList = document.getElementById('todo-list');
    var todoInput = document.getElementById('todo-input');
    var addButton = document.getElementById('add-button');
    var todoCount = 0;

    var addToDo = function() {
        //create an element and assign it to the todoCol variable
        var todoCol = document.createElement('div');
        // create a class of col-xs-12 and todo
        todoCol.setAttribute('class', 'col-xs-12 todo');

        var todorow = document.createElement('div');
        todorow.setAttribute('class', 'row');

        var removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'btn btn-danger remove-button');
        removeButton.innerHTML = 'REMOVE';

        removeButton.onclick = function() {
            var child = this.parentNode.parentNode;
            todoList.removeChild(child);
            todoCount--;
        }

        var h5 = document.createElement('h5');
        h5.setAttribute('class', 'col-xs-8');

        // Assign the value of todoInput, which is the text the user typed
        // into the input element, to the innerHTML property of h5.
        h5.innerHTML = todoInput.value;

         // Add h5 as the last child element to the todoRow element.
        todorow.appendChild(h5);
        todorow.appendChild(removeButton);

        // Add todoRow as the last child element to the todoCol element.
        todoCol.appendChild(todorow);

        // Append todoCol as the last child element to the todoList div.
        todoList.appendChild(todoCol);

    }

    addButton.addEventListener('click', function() {
        if (todoCount < 10 && todoInput !== '') {
            addToDo();
            todoCount ++;
            todoInput.value = '';
        }
    })

        todoInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                addToDo();
                todoCount++;
                todoInput.value = '';
            }
        })

})