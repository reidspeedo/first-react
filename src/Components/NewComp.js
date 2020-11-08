import React, {Component} from 'react';
import frown from "./frown.jpg";
import smile from "./smile.jpg";


class NewComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Subscribe to Simplilearn",
            subscribe: "Subscribe",
            imageURL: frown
        };
    }
    styles = {
        fontStyle: "italic",
        color: "purple"
    };
    UpdateSubscribe=()=>{
        this.setState({subscribe: "Subscribed"});
    };
    ImageChange=()=>{
        this.setState({imageURL: smile});
    }
    render() {
        return (
            <div className = "App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.UpdateSubscribe}>{this.state.subscribe}</button>
                <p>
                    <img
                        style={{width:"150px", height:"150px"}}
                        src={this.state.imageURL} alt=""
                        onClick = {this.ImageChange}
                    />
                </p>

            </div>
        );
    }
}

export default NewComp;