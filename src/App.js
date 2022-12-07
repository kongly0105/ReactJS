import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
class App extends Component {
  render(){
    return (
      <div className='App'>
        <Table />
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
