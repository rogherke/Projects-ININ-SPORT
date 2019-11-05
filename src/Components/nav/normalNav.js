import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import Login from '../members/login';
import "./Nav.scss";
// import Modal from "react-responsive-modal";


class normalNav extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: false,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  login = () => {
    var a = JSON.parse(localStorage.getItem("members"))
    if (!a.isLogin) {
      this.onOpenModal()
    } else {
      window.location.assign("/Disclaimer")
    }
  }

  login2 = () => {
    var a = JSON.parse(localStorage.getItem("members"))
    if (!a.isLogin) {
      this.onOpenModal()
    } else {
      window.location.assign("/Disclaimer2")
    }
  }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid rb-nav sticky-top">
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample08"
              aria-controls="navbarsExample08"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-center  border-top"
              id="navbarsExample08"
            >
              <ul className="navbar-nav rb-nav-menu  d-flex align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="../ListActive">
                    找活動
                  </Link>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="../ListClass">
                    找課程
                  </Link>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="../placeLooking">
                    找場地
                  </Link>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={this.login2}>
                    開活動
                  </Link>
                  <Modal open={open} onClose={this.onCloseModal} center>
                    <Login />
                  </Modal>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <Link className="nav-link " to="#" onClick={this.login}>
                    開課程
                  </Link>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <Link className="nav-link " to="../store">
                    購物中心
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default normalNav;
