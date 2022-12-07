import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp';
class App extends Component {
  render(){
    return (
      <div className='App'>
        <ParentComp />
        {/* <PureComp /> */}
      </div>
    );
  }
}

export default App;
