import React from 'react';

const withClass = (Childcomponent, className) => {
    return props => {
        return (<div className={className}><Childcomponent {...props}/></div>);
    };
};

export default withClass;
