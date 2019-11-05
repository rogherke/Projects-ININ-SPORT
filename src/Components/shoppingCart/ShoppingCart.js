import React, { Component } from "react";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="rb-shoppingCart-bg">
          <div className="rb-shoppingCart pb-5">
            <div className="container">
              <div className="row mb-4">
                <h3 className="text-center rb-session-title-w mt-5">精選商品</h3>
                {/* 推薦選項 */}
                <div class="row mt-5">
                  <div class="col-md-3 col-sm-6" title="商品標題">
                    <div class="product-grid3">
                      <div class="product-image3">
                        <a href="#">
                          <img
                            src={require("../../img/products/northfacejacket.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={require("../../img/products/northfacejacket1.jpg")}
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
                          <a href="#">商品標題商商品標題品商品標題商品標題標商品標題商品標題商品標題題</a>
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
                            src={require("../../img/products/northfacejacket.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={require("../../img/products/northfacejacket1.jpg")}
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
                            src={require("../../img/products/northfacejacket.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={require("../../img/products/northfacejacket1.jpg")}
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
                            src={require("../../img/products/northfacejacket.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                          <img
                            src={require("../../img/products/northfacejacket1.jpg")}
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

export default ShoppingCart;
