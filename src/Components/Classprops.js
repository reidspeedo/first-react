import React, {Component} from 'react';

class Classprops extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the thunderdome {this.props.name} of {this.props.place} </h1>
            <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Classprops
