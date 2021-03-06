import React from 'react'
import Person from './Person/Person'

const persons = (props) => 
  props.persons.map((person, index) => {
    return <Person
      changed={(event) => { props.changed(event, person.id) }}
      click={() => props.clicked(index)}
      name={person.name}
      key={person.id}
      age={person.age}
      />
  });

  export default persons;