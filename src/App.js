import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PortalDemo from './components/PortalDemo';


class App extends Component {
  render(){
    return (
      <div className='App'>
        <PortalDemo />
      </div>
    );
  }
}

export default App;
