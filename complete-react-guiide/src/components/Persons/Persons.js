import React, {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {

  constructor(props) {
    // Somente num constructor que dentro de um statefull component é possível chamar props sem o this
    // é ncecessário chamr super(props)
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
     
  }

  componentWillMount(){ 
    console.log('[Persons.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked ;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }




  render () {
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
      return <Person
      click={() => this.props.clicked(index)}
      name={person.name}
      key={person.id}
      age={person.age}
      changed={(event) => { this.props.changed(event, person.id) }}/>
    });
  }
} 

export default Persons;