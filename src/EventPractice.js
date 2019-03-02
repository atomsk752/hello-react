import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }
    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="anything u want"
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>Check</button>
            </div>
        );
    }
}

export default EventPractice;