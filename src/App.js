import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Massage from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ChildComponent from './components/ChildComponent'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
// import Person from './components/Person';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'

class App extends Component {
  render(){
    return (
      <div className='App'>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        {/* <Stylesheet primary={true} /> */}
        <Inline />
        {/* <NameList /> */}
        {/* <Person /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind />
        <ChildComponent /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Greet name="Bruce" heroName="Batman" >
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Womar" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Womar" /> */}
        {/* <Greet name="Diana" heroName="Wonder Womar" />
        <Welcome name="Bruce" heroName="Batman" /> */}
      </div>
    );
  }
}

export default App;
