const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //increase list by 1 then increment item count
  list.innerHTML += `<li class="${classNames.TODO_ITEM}"><input type="checkbox" class="${classNames.TODO_CHECKBOX}"><span class="${classNames.TODO_TEXT}">New Todo</span><button class="${classNames.TODO_DELETE}">Delete</button></li>`
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1
  //add delete function and checkbox function an decreasecount function by 1
  document.getElementsByClassName(classNames.TODO_DELETE)[document.getElementsByClassName(classNames.TODO_DELETE).length - 1].addEventListener('click', function() {
    this.parentNode.remove()
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
  })
  alert('New TODO button clicked!')
}
