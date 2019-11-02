import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

export default class SideBar extends Component {
   
    // To set values in the history tab.
    // History sidebar value changes when the user select different inputs
    setValues() {
        this.setState({valueAmount: localStorage.getItem("valueAmount")});
        this.setState({valueDuration: localStorage.getItem("valueDuration")});
        this.setState({values: true});
    }
    constructor(props) {
        super(props);
        this.state = {

            valueAmount: localStorage.getItem("valueAmount"),
            valueDuration: localStorage.getItem("valueDuration"),
            values: true,

        }
        if(this.state.valueAmount===null){
            this.state.values = false;
        }
    }
        render() {
        return (
            <Menu>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item">
                History
            </a>
            { this.state.values
                ? <a className="menu-item" onClick={this.props.onClick}>
                &nbsp;- Loan Amount:&nbsp;{this.state.valueAmount}<br/>
                &nbsp;&nbsp;&nbsp;Loan Duration:&nbsp;{this.state.valueDuration}
                </a>
                : <a className="menu-item">
                    Please select a value to create history.
                </a>
            }
            <div className="row">Note: The most recent values will be updated in the history even if a refresh happens or window closed.</div>
            </Menu>
        );
        };
}