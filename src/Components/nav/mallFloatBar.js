import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class MallFloatBar extends Component {
  constructor(props) {
    super(props);
  }

  gotoHome = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/");
  };

  gotoAct = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/ListActive");
  };

  gotoCla= evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/ListClass");
  };

  gotoMember = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/memcenter");
  };

  gotoInfo = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/allshoppingcar");
  };

  render() {
    return (
      <React.Fragment>
         <div className="rb-float-icon">
          <nav class="social">
            <ul>
              <li onClick={this.gotoHome}>
                <a href="ref">
                <i class="fas fa-home"></i>
                  <b>首頁</b>
                </a>
              </li>
              <li onClick={this.gotoAct}>
                <a href="ref">
                <i class="far fa-grin-beam"></i>
                  <b>找活動</b>
                </a>
              </li>
              <li onClick={this.gotoCla}>
                <a href="ref">
                <i class="fas fa-dumbbell"></i>
                  <b>找課程</b>
                </a>
              </li>
              <li onClick={this.gotoMember}>
                <a href="ref">
                  <i class="far fa-user-circle" />
                  <b>會員中心</b>
                </a>
              </li>
              <li onClick={this.gotoInfo}>
                <a href="ref">
                  <i class="far fa-bell" />
                  <b>訊息中心</b>
                </a>
              </li>
             
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default MallFloatBar;
