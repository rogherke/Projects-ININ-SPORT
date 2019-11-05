import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample08"
            >
              <ul className="navbar-nav ro-nav-menu  d-flex align-items-center border-top
              ">
                <li className="nav-item">
                  <Link className="nav-link" to="/store/">
                    商城首頁
                  </Link>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="/store/pagination">
                    折扣優惠
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="/store/pagination">
                    品牌旗艦
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Woman
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    man
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="/store/pagination/1">
                    一般衣著
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="/store/pagination/1">
                   機能衣著
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="/store/pagination/3">
                   包袋
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="/store/pagination/2">
                   鞋子
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="/store/pagination/1">
                   外套
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          </div>
      </React.Fragment>
    );
  }
}

export default header;
