import React, { Component } from "react";
import "./ro_contact.scss";
import "./products_header2.scss"
import { BrowserRouter, Route, Link } from "react-router-dom";


class Ro_contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="ro-product-bg">
          <div className="ro-product mt-4 pb-5">
            <div className="container">
              <div className="row mb-4">
                <h3 className="text-center ro-session-title mt-5">精選商品</h3>
                {/* 推薦選項 */}
                <div class="row mt-5">
                  <div class="col-md-3 col-sm-6">
                    <div class="product-grid3">
                      <div class="product-image3">
                        <a href="#">
                          <img
                            src={("../../images/The North Face北面藍色滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={("../../images/The North Face北面紫色舒適滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-2"
                          />
                        </a>
                        <ul class="social">
                          <li>
                            <a href="#" title="追蹤">
                              <i class="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="購買">
                              <i class="fa fa-shopping-cart" />
                            </a>
                          </li>
                        </ul>
                        <span class="product-new-label">New</span>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">商品標題商品標題</a>
                        </h3>
                        <div class="price">
                          $1500
                          <span>$2200</span>
                        </div>
                        <ul class="rating">
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star disable" />
                          <li class="fa fa-star disable" />
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="product-grid3">
                      <div class="product-image3">
                        <a href="#">
                          <img
                            src={require("../../images/The North Face北面藍色滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={require("../../images/The North Face北面紫色舒適滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-2"
                          />
                        </a>
                        <ul class="social">
                          <li>
                            <a href="#" title="追蹤">
                              <i class="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="購買">
                              <i class="fa fa-shopping-cart" />
                            </a>
                          </li>
                        </ul>
                        <span class="product-new-label">New</span>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">商品標題商品標題</a>
                        </h3>
                        <div class="price">
                          $1500
                          <span>$2200</span>
                        </div>
                        <ul class="rating">
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star disable" />
                          <li class="fa fa-star disable" />
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="product-grid3">
                      <div class="product-image3">
                        <a href="#">
                          <img
                            src={("../../images/The North Face北面藍色滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={("../../images/The North Face北面紫色舒適滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-2"
                          />
                        </a>
                        <ul class="social">
                          <li>
                            <a href="#" title="追蹤">
                              <i class="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="購買">
                              <i class="fa fa-shopping-cart" />
                            </a>
                          </li>
                        </ul>
                        <span class="product-new-label">New</span>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">商品標題商品標題</a>
                        </h3>
                        <div class="price">
                          $1500
                          <span>$2200</span>
                        </div>
                        <ul class="rating">
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star disable" />
                          <li class="fa fa-star disable" />
                        </ul>
                      </div>
                    </div>
                  </div>
               
                  <div class="col-md-3 col-sm-6">
                    <div class="product-grid3">
                      <div class="product-image3">
                        <a href="#">
                          <img
                            src={("../../images/The North Face北面藍色滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={("../../images/The North Face北面紫色舒適滑雪雙肩後背包.jpg")}
                            alt="Logo"
                            className="pic-2"
                          />
                        </a>
                        <ul class="social">
                          <li>
                            <a href="#" title="追蹤">
                              <i class="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="購買">
                              <i class="fa fa-shopping-cart" />
                            </a>
                          </li>
                        </ul>
                        <span class="product-new-label">New</span>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">商品標題商品標題</a>
                        </h3>
                        <div class="price">
                          $1500
                          <span>$2200</span>
                        </div>
                        <ul class="rating">
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star" />
                          <li class="fa fa-star disable" />
                          <li class="fa fa-star disable" />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 推薦選項 */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Ro_contact;
