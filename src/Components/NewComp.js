import React, {Component} from 'react';

class NewComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Subscribe to Simplilearn",
            subscribe: "Subscribe"
        };
    }
    styles = {
        fontStyle: "italic",
        color: "purple"
    };
    UpdateSubscribe=()=>{
        this.setState({subscribe: "Subscribed"});
    };
    render() {
        return (
            <div className = "App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.UpdateSubscribe}>{this.state.subscribe}</button>

            </div>
        );
    }
}

export default NewComp;