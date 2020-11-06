import React, {Component} from 'react';
import PureComp from "./PureComp";
import RegComp from "./RegComp";


class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Simplilife"
        };
    }

    componentDidMount() {
        setInterval(()=> {
            this.setState({
                name: "Simplilife"
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                I am the parent Component
            <PureComp name = {this.state.name}/>
            <RegComp name = {this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;