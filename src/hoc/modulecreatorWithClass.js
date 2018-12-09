import React, { Component } from 'react';


// const withClass = (Childcomponent, className) => {
//     return props => {
//         return (<div className={className}><Childcomponent {...props}/></div>);
//     };
// };

const withClass = (Childcomponent, className) => {
    return class extends Component {
        render = () => <div className={className}><Childcomponent {...this.props}/></div>
    };
};

export default withClass;
