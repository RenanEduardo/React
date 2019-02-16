import React, {Component} from 'react';

import classes from'./Person.css';


class Person extends Component {

  constructor(props) {
    // Somente num constructor que dentro de um statefull component é possível chamar props sem o this
    // é ncecessário chamr super(props)
    super(props);
    console.log('[Person.js] Inside Constructor', props);
     
  }

  componentWillMount(){ 
    console.log('[Person.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }
  render () {
    console.log('[Person.js] Inside render()');
    return (
    <div className={classes.Person}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
} 


export default Person;