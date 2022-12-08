import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User'
import Counter from './components/Counter';
class App extends Component {
  render(){
    return (
      <div className='App'>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        {/*<User render={ (isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'} />*/}
      </div>
    );
  }
}

export default App;
