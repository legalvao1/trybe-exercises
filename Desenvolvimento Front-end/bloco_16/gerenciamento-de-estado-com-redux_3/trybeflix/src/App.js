import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

import store from './store';

import './index.css';

class App extends React.Component {
  render() {

    return (
      <Provider store={ store }>
        <Header />
        <main>
          <Player />
          <Sidebar />
        </main>
      </Provider>
    );
  }
}

export default App;
