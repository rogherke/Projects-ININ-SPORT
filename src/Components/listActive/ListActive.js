import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ListCard from "./Listcard";
import NormalNav from "../nav/normalNav";
import Search from "./SearchAct";
import HomeFloatBar from "../nav/homeFloatBar";

class ListActive extends Component {
    constructor(props) {
      super(props)
        this.state = {
            act : [],
            type:'add',
        }
   
    }
   
    componentDidMount() {
        this.getlistActive();
    }

  getlistActive() {
    fetch("http://localhost:3000/api2/active")
      .then(res => res.json())
      .then(act => {
        // console.log(act)
        this.setState({
          act: act
        });
        console.log(this.state.act);
      });

    // .then(listClass => { return listClass })
  }

  getSears = act => {
    console.log(act);
    if (act.city != "" && act.sport != "") {
      fetch("http://localhost:3000/api2/active2/" + act.city + "/" + act.sport)
        .then(res => res.json())
        .then(sears => {
          console.log(sears);
          this.setState({
            act: sears
          });
        });
    }
  };

  render() {
    console.log(this.state.act);
    return (
      <React.Fragment>
        <NormalNav />
        <HomeFloatBar/>
        <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-memberForm">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">活動列表</h3>

              <div className="col-12 mt-3 rb-block-w py-3 px-3">
                <Search getSears={this.getSears} />
                <ListCard act={this.state.act} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ListActive;
