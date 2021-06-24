import './App.css';
import useTimer from './hooks/useTimer';
import TodoInput from './hooks/TodoInput';

function App() {
  const { timer, randomNumber, isMultiple } = useTimer();
  
  return (
    <div>
      <div>
        { timer }
      <br/>
        { randomNumber }
      <br/>
        {isMultiple ? 'Acerto' : null}

      </div>

      <div>
        <TodoInput/>
      </div>
    </div>
  );
}

export default App;
