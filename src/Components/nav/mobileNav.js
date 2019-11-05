import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import Login from "../members/login";
import "../rbFormalStyle/rbBreakpoint.scss";

import $ from "jquery";
class MobileNav extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $(function(){ 
      var navMain = $(".navbar-collapse"); // avoid dependency on #id
      // "a:not([data-toggle])" - to avoid issues caused
      // when you have dropdown inside navbar
      navMain.on("click", "a:not([data-toggle])", null, function () {
          navMain.collapse('hide');
      });
  });
  }

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light rb-mobile-nav position-relative ">
          <a class="navbar-brand rb-mobileLogo" href="#">
            <img src={require("../../img/ininsportlogo.png")} alt="Logo" />
          </a>

          <button
            class="navbar-toggler position-absolute rb-bgIcon"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  首頁 <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  登入
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  當教練
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  找什麼
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    找活動
                  </a>
                  <a class="dropdown-item" href="#">
                    找課程
                  </a>
                  <a class="dropdown-item" href="#">
                    找場地
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  開什麼
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    開活動
                  </a>
                  <a class="dropdown-item" href="#">
                    開課程
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  客服中心
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default MobileNav;
