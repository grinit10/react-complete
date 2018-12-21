import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract(5)}  />
                <hr></hr>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.rslts.map(rslt => <li key={rslt} onClick={() => this.props.onRemoveResult(rslt)}>{rslt}</li>) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        rslts: state.results.results
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDecrementCounter: () => dispatch(actions.decrement()),
        onAdd: val => dispatch(actions.add(val)),
        onSubtract: val => dispatch(actions.sub(val)),
        onStoreResult: val => dispatch(actions.storeResults(val)),
        onRemoveResult: val => dispatch(actions.removeResults(val))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);