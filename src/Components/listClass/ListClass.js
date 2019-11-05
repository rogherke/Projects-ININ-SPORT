import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import ListCard from './Listcard'
import NormalNav from "../nav/normalNav";
import Search from "./Search";
import HomeFloatBar from "../nav/homeFloatBar";
window.React = React;

class ListClass extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      Cla: [],
      type: 'add',
      offset: 0,
    }
  }

  componentDidMount() {
    this.getListClass();
  }

  handlePageClick = (cla) => {
    let selected = cla.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {
      this.getListClass();
    });
  };

  getListClass() {
    fetch("http://localhost:3000/api/class")
      .then(res => res.json())
      .then(cla => {
        this.setState({
          Cla: cla,
        })
      })
  }

  getSears = cla => {
    console.log(cla);
    if (cla.city !== "" && cla.sport !== "") {
      fetch("http://localhost:3000/api/class2/" + cla.city + "/" + cla.sport)
        .then(res => res.json())
        .then(sears => {
          console.log(sears);
          this.setState({
            Cla: sears
          });
        });
    }
  };

  render() {
    console.log(this.state.cla);
    return (
      <React.Fragment>
        <NormalNav />
        <HomeFloatBar/>
        <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-memberForm">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">課程列表</h3>
              <div className="col-12 mt-3 rb-block-w py-3 px-3">
                <Search getSears={this.getSears} />
                <ListCard Cla={this.state.Cla} />
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
export default ListClass;
