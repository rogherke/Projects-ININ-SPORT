import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class HomeFloatBar extends Component {
  constructor(props) {
    super(props);
  }

  gotoStore = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store");
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
              <li onClick={this.gotoStore}>
                <a href="ref">
                <i class="fas fa-shopping-bag"></i>
                  <b>購物中心</b>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeFloatBar;
