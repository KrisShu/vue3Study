export function saveTodos(todos){
    localStorage.setItem('todos_key',JSON.stringify(todos))
}

export function readTodos(){
  return  JSON.parse(localStorage.getItem('todos_key') || '[]')
}