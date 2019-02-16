import React, { useEffect } from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {
  // método que combina o didMount e o didUpdate
  // é invocado toda vez que o componente é renderizado no Virtual DOM
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Saved data to cloud');
      console.log()
    },1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEfect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEfect');
    };
  });

  let assignedClasses = [];
  let btnClass = '';

  if(props.showPersons) {
     btnClass = classes.Red
  }
 
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
  return (
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
      
    </div>

  );
  


};

export default cockpit;