import React, {Component} from 'react';

class PureComp extends Component {
    render() {
        return (
            <div>
              <p>I'm the pure component {this.props.name}</p>
            </div>
        );
    }
}

export default PureComp;