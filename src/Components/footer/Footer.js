import React, { Component } from "react";
import "./Footer.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";


class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <footer className="rb-footer">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-2 col-md-2 rb-mobile-logo">
              <img
                src={require("../../img/logoWhite.png")}
                alt="Logo"
                className="rb-footer-logobrand"
              />
              </div>
              <div className="col-lg-2 col-md-2">
                <h5>關於我們</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="#">
                      品牌故事
                    </a>
                  </li>
                  <li>
                    <Link className="text-muted" to="/teammates">
                      團隊成員
                    </Link>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      隱私權政策
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      服務條款
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      人才募集
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2">
                <h5>會員服務</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="#">
                      會員中心
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      加入會員
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      新手上路
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      會員分級說明
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2">
                <h5>合作提案</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="#">
                      企業開課
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      福利平台
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      加入供應商
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      AP策略聯盟
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      異業合作
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2">
                <h5>聯絡我們</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="#">
                      客服中心
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      查詢帳號密碼
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      客服信箱
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      客服中心Q&A
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      線上客服
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2">
              <a href="#"><i class="far fa-envelope rb-social-icon" /></a>
              <a href="#"><i class="fab fa-line rb-social-icon" /></a>
              <a href="#"><i class="fab fa-facebook-square rb-social-icon" /></a>
              </div>
            </div>
          </div>
        </footer>
        <div className="rb-foot-bottom">
        <div className="container">
          <div className="row">
            <p className="text-center">
              Copyright © since 2018 inin-sport.com.tw All Rights Reserved.
            </p>
          </div>
        </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default Footer;
