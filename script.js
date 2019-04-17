function toDoList()
{
    var item=document.getElementById('input1').value
    var text=document.createTextNode(item)
    var newItem=document.createElement('li')
    newItem.appendChild(text)
    document.getElementById('todoList').appendChild(newItem)

}