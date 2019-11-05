import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import Login from "../members/login";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
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
            <button 
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

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
                      onClick={this.onOpenModal}
                    >
                      登入/註冊
                    </Link>
                    <Modal open={open} onClose={this.onCloseModal} center>
                      <Login />
                    </Modal>
                  </li>
                  <span>|</span>
                  <li className="nav-item">
                    <a className="nav-link" href="./coach/application">
                      當教練
                    </a>
                  </li>
                  <span>|</span>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" onClick={this.onOpenModal}>
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

export default Nav;
