const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// REDUCER
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }

        return todo;
      });
    default:
      return state;
  }
};

// STORE CREATION
const store = Redux.createStore(todosReducer);

// FORM EVENT LISTENER
document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();
  
  const { value } = document.querySelector('#input');
  if (value !== '') {
    store.dispatch({
      type: ADD_TODO,
      payload: {
        value, // value: value (onde value é o valor do input)
        id: _.uniqueId(), // um método do lodash para criar um ID único
        completed: false, // explicitando que eu não completei aquela tarefa ainda.
      }
    });
  }
  
  document.querySelector('#input').value = '';
});

// REMOVE TODO EVENT LISTENER
const handleRemoveTodo = id => {
  console.log('Removing TODO with id of ', id);
  store.dispatch({ type: REMOVE_TODO, payload: id.toString() });
};

// TOGGLING TODO EVENT LISTENER
const handleToggleTodo = id => {
  const element = document.querySelector(`input[key="${id}"]`);
  
  store.dispatch({
    type: TOGGLE_TODO,
    payload: {
      id: id.toString(),
      completed: element.checked,
    },
  });
};


// SUBSCRIPTION
const todosContainer = document.querySelector('#todos-container');
const render = () => {
  console.log('Store: ', store.getState());
  todosContainer.innerHTML = store.getState().map(todo =>
    `
    <div class="todo-container">
      <input
        ${todo.completed && `checked`}
        type="checkbox"
        key="${todo.id}"
        onchange="handleToggleTodo(${todo.id})"
      >
        <label ${todo.completed && `style="text-decoration: line-through"`}>${todo.value}</label>
      </input>
      <button id="remove" class="button remove" onclick="handleRemoveTodo(${todo.id})">x</button>
    </div>
    `
  )
};

store.subscribe(render);
