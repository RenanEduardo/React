import React, { PureComponent } from 'react';
import classes from './App.css'
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {

  constructor(props) {
    // Somente num constructor que dentro de um statefull component é possível chamar props sem o this
    // é ncecessário chamr super(props)
    super(props);
    console.log('[App.js] Inside Constructor', props);
     
  }


  componentWillMount(){ 
    console.log('[App.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }



  state = {
    persons: [
      { id: 'asd1', name: "Renan", age: 30 },
      { id: 'ghg2', name: "Katharine", age: 22 },
      { id: 'asds55', name: "Alice", age: 2 }
    ],
    otherState: 'some other state',
    showPersons: false,
    showCockpit: true
  }


  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }; //faz uma cópia do objeto


    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  render() {
    console.log('[App.js] Inside render()')

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />

      );

    }

    return (
      <div className={classes.App}>
        <h1>{this.props.title}</h1>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <button onClick={() => {this.setState({showCockpit: false})}}>
        Remove Cockpit
        </button>
        {this.state.showCockpit ? (<Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonsHandler} />) : null}
        {persons}
      </div> 

    );


    // Equivalente
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
