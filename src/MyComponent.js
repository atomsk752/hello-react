import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                Hi, my name is {this.props.name}.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: 'guest'
}

export default MyComponent;