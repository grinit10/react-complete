import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux';
import classes from './Person.css';
import WithClass from '../../../hoc/modulecreatorWithClass';
import proptype from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputbox = React.createRef();
        console.log('[Person.js] Inside Constructor for: ' + props.name);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount() for: ' + this.props.name);
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount() for: ' + this.props.name);
        if (this.props.index === 0) {
            this.inputbox.current.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render() for: ' + this.props.name);
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth? 'I am logged in' : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputbox}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
        // return [
        //     <p key='1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key='2'>{this.props.children}</p>,
        //     <input key='3' type='text' onChange={this.props.changed} value={this.props.name} />
        // ]
    }
}

Person.proptype = {
    click: proptype.func,
    name: proptype.string,
    age: proptype.number,
    changed: proptype.func
}

export default WithClass(Person, classes.Person);