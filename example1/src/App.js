import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Max' , age: 28},
      {name: 'Manu', age:20},
      {name: 'Anu', age:28}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
      // console.log('was clicked!');
      this.setState({
        persons: [
          {name: 'Max' , age: 28},
          {name: 'Manu', age:20},
          {name: 'Anundhara', age:28}
        ]
      })
  }

  render() {
    return (
      <div className="App">
          <h1>Hi! I am a React App</h1>
          <p>This is really working</p>
          <button onClick={this.switchNameHandler}>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
