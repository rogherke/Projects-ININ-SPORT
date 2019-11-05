import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import Login from "../members/login";
import "./Nav.scss";

class NavLogout extends Component {
  constructor(props) {
    super(props);
  }

  logout = (evt) => {
    evt.preventDefault();
    fetch("http://localhost:3000/mem/logout")
      .then(res => res.json())
      .then(a => {
        // alert(a)
      });
    var a = { "isLogin": false }
    localStorage.setItem("members", JSON.stringify(a))
    window.location.href = '/'
  }

  render() {
    return (
      <React.Fragment>
        <div className="container rb-nav mt-3">
          <nav className="d-flex align-items-center justify-content-between">
            <Link className="navbar-brand" to="/">
              <img
                src={require("../../img/ininsportlogo.png")}
                alt="Logo"
                className="logobrand"
              />
            </Link>
            <div className="">
              <div class="magnifier-search d-flex justify-content-end">
                <form class="search">
                  <div class="search__wrapper">
                    <input
                      type="text"
                      name=""
                      placeholder="Search for..."
                      class="search__field"
                    />
                    <button type="submit" class="fa fa-search search__icon  search__icon_search " />
                  </div>
                </form>
                <Link to="/allshoppingcar">
                  <button type="submit" class="fas fa-bell search__icon  search__icon_cart ml-2" />
                </Link>
              </div>
              <div>
                <ul className="rb-nav-menu d-flex align-items-center list-unstyled">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#"
                      onClick={this.logout}
                    >
                      登出
                    </Link>
                  </li>
                  <span>|</span>
                  <li className="nav-item">
                    <Link to="/coach/application" className="nav-link">
                      當教練
                    </Link>
                  </li>
                  <span>|</span>
                  <li className="nav-item">
                    <Link className="nav-link" to="/memcenter">
                      會員中心
                    </Link>
                  </li>
                  <span>|</span>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      客服中心
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavLogout;
