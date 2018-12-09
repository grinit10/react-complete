import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Arnab', age: 30, id: 1 },
      { name: 'Arpita', age: 29, id: 2 },
      { name: 'Xxx', age: 0, id: 3 }
    ],
    showPeople: true
  }
  render() {

    const peopleElement = this.state.people
      .map(person => this.state.showPeople ?
        (<Person
          key={person.id}
          name={person.name}
          age={person.age}
          personClicked={this.switchnamehandler}
          deletePerson = {() => this.deletepersonHandler(person)}
          setName={(e) => this.changenameHandler(person, e)} />
        ) : null);

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
        <button onClick={this.togglepeoplehandler} style={style}>{this.state.showPeople ? 'hide': 'show'} people</button>
        {peopleElement}
      </div>
    );
  }

  togglepeoplehandler = () => {
    const showpeople = this.state.showPeople;
    this.setState({
      showPeople: !showpeople
    }
    )
  }

  changenameHandler = (person, e) => {
    const newpeople = [...this.state.people]
    newpeople.forEach(prsn => prsn.name = prsn.id === person.id ? e.target.value : prsn.name)
    this.setState({
      people: newpeople
    })

  }

  deletepersonHandler = person => this.setState({
    people: [...this.state.people],
    people: this.state.people.filter(prsn => prsn.id !== person.id)
  })
}

export default App;
