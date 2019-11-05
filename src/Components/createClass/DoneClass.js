import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DoneCard from './DoneCard'
import NormalNav from "../nav/normalNav";

class DoneClass extends Component {
    constructor(props) {
      super(props)
      this.initState = {
        claName: "",
        claSport: "",
        claCost: "",
        memSid: "",
        claTimeUp: "",
        claTimeEnd: "",
        claAddress: "",
        claGender: "",
        claInfo: "",
        claImg: ""
      }
        this.state = {
            dones : [],
            done: this.initState,
            type:'add'
        }
    }
    
    componentDidMount() {
        this.doneClass();
    }

    doneClass() {
        fetch("http://localhost:3000/api/class_1")
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
export default DoneClass;    