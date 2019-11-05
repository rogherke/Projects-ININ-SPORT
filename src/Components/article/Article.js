import React, { Component } from "react";
import "./Article.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="rb-article-bg">
          <div className="rb-article mt-4 pb-5"></div>
            <div className="container rb-z">
              <div className="row mb-4">
                <h3 className="text-center rb-session-title-w mt-5 pt-4">推薦文章</h3>
                {/* 推薦選項 */}
                <div class="row my-5">
                  <div class="col-lg-3 col-md-6 col-sm-6" title="投籃的技巧分析">
                    <div class="product-grid6">
                      <div class="product-image6">
                        <a href="#">
                          <img
                            src={require("../../img/act/act1.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">投籃的技巧分析</a>
                        </h3>
                        <div class="price">
                          <i class="fas fa-map-marker-alt" />
                          新北市
                          <span>
                            <i class="fas fa-bookmark" />
                            籃球
                          </span>
                        </div>
                      </div>
                      <ul class="social">
                        <li>
                          <a href="" data-tip="看更多">
                            <i class="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="" data-tip="追蹤">
                            <i class="far fa-eye" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6" title="多日登山重裝備必備清單">
                    <div class="product-grid6">
                      <div class="product-image6">
                        <a href="../article/article">
                          <img
                            src={require("../../img/act/act2.jpg")}
                            alt="多日登山重裝備必備清單"
                            className="pic-1"
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">多日登山重裝備必備清單</a>
                        </h3>
                        <div class="price">
                            <i class="fas fa-map-marker-alt" />
                            台北市
                            <span>
                              <i class="fas fa-bookmark" />
                              登山
                            </span>  
                        </div>
                      </div>
                      <ul class="social">
                        <li>
                          <a href="../article/article" data-tip="看更多">
                            <i class="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="" data-tip="追蹤">
                            <i class="far fa-eye" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6" title="如何規劃自己的跑步訓練課表">
                    <div class="product-grid6">
                      <div class="product-image6">
                        <a href="#">
                          <img
                            src={require("../../img/act/act3.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">如何規劃自己的跑步訓練課表</a>
                        </h3>
                        <div class="price">
                          <i class="fas fa-map-marker-alt" />
                          台北市
                          <span>
                            <i class="fas fa-bookmark" />
                            跑步
                          </span>
                        </div>
                      </div>
                      <ul class="social">
                        <li>
                          <a href="" data-tip="看更多">
                            <i class="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="" data-tip="追蹤">
                            <i class="far fa-eye" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6" title="為何板凳清空時 所有人一定要一起衝出去">
                    <div class="product-grid6">
                      <div class="product-image6">
                        <a href="#">
                          <img
                            src={require("../../img/act/act4.jpg")}
                            alt="Logo"
                            className="pic-1"
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <h3 class="title">
                          <a href="#">為何板凳清空時 所有人一定要一起衝出去</a>
                        </h3>
                        <div class="price">
                          <i class="fas fa-map-marker-alt" />
                          台北市
                          <span>
                            <i class="fas fa-bookmark" />
                            棒球
                          </span>
                        </div>
                      </div>
                      <ul class="social">
                        <li>
                          <a href="" data-tip="看更多">
                            <i class="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="" data-tip="追蹤">
                            <i class="far fa-eye" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 推薦選項 */}
              </div>
            </div>
          
        </div>
      </React.Fragment>
    );
  }
}

export default Article;
