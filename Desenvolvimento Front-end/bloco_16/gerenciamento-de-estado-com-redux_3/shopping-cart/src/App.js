import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import BookList from './components/BookList';
import Cart from './components/Cart';


function App() {
  return (
   <>
   <Provider store={ store }>
      <BookList />
      <Cart />
   </Provider>
   </>
  );
}

export default App;
