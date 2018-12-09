import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Arnab', age: 30, id:1 },
      { name: 'Arpita', age: 29, id: 2 },
      { name: 'Xxx', age: 0, id: 3 }
    ]
  }
  render() {

    const peopleElement = this.state.people
      .map(person => <Person key={person.id} name={person.name} age={person.age} personClicked={this.switchnamehandler} setName={(e) => this.changenameHandler(person,e)}/>
      );
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
      

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchnamehandler} style={style}>Rotate people</button>
        {peopleElement}
      </div>
    );
  }

  switchnamehandler = () => {
    const newpeople = [...this.state.people];
    newpeople.push(newpeople.shift());
    this.setState({
      people: newpeople
    }
    )
  }

  changenameHandler = (person,e) => {
    const newpeople = [...this.state.people]
    newpeople.forEach(prsn => prsn.name = prsn.id === person.id ? e.target.value: prsn.name)
    this.setState({
      people: newpeople
    })

  }
}

export default App;
