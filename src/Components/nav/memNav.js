import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./memNav.scss";

class memNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
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
              <ul
                className="navbar-nav ro-nav-menu  d-flex align-items-center
              "
              >
                <li className="nav-item">
                  <Link to="/memcenter/member" className="nav-link">
                    會員個人資料
                  </Link>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    教練個人資料
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <Link to="/memcenter/sport" className="nav-link">
                    我的活動 / 課程
                  </Link>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    個人成就
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    隱私權資訊
                  </a>
                </li>
                <span>|</span>
                <li className="nav-item">
                <Link to="/memcenter/order" className="nav-link">
                    商城訂單查詢
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

export default memNav;
