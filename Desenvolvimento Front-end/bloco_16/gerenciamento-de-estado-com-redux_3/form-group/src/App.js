import { Provider } from 'react-redux';
import './App.css';
import Consolidar from './components/Consolidar';
import Form from './components/Form';

import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <Form />
      <Consolidar/>
    </Provider>
  );
}

export default App;
