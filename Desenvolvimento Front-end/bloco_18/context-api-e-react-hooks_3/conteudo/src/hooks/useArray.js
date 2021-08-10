import { useState } from "react";

const useArray = () => {
  const [ todos, setNewTodo ] = useState([]);

  const addTodo = (newTodo) => {
    setNewTodo(todos.concat(newTodo))
    // minha lista + a minha nova tarefa
  }

  return {
    todos,
    addTodo,
  }

}

export default useArray;