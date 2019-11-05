import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DoneCard from './DoneCard'
import NormalNav from "../nav/normalNav";

class DoneActive extends Component {
    constructor(props) {
      super(props)
      this.initState = {
        actName: "",
        actSport: "",
        memSid: "",
        actTimeUp: "",
        actTimeEnd: "",
        actAddress: "",
        actGender: "",
        actInfo: "",
        actImg: ""
      }
        this.state = {
            dones : [],
            done: this.initState,
            type:'add'
        }
    }
    
    componentDidMount() {
        this.doneActive();
    }

    doneActive() {
        fetch("http://localhost:3000/api2/active_1")
            .then(res => res.json())
            .then(dones =>{ 
                // console.log(done)
                this.setState({ 
                dones: dones,
                done:this.initState
            })
            // console.log(this.state.Done)
        })
    }


    render() {
        console.log(this.state.dones)
        return (
            <React.Fragment>
                < NormalNav/>
                <div className="">
                   <DoneCard dones={this.state.dones} />
                   {/* modify={this.modify} */}
                </div>
            </React.Fragment>
        )
    }
}    
export default DoneActive;    