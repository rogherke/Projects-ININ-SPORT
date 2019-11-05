import React, { Component } from "react";
import "./RecommendAct.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";


class RecommendAct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cla: [],
      act: []
    };
  }
  componentDidMount() {
    this.getclass();
    this.getactive();
  }

  getclass() {
    fetch("http://localhost:3000/api/headerclass")
      .then(res => res.json())
      .then(cla => {
        this.setState({ cla: cla })
      })
  }

  getactive() {
    fetch("http://localhost:3000/api2/headeractive")
      .then(res => res.json())
      .then(act => {
        this.setState({ act: act })
      })
  }

  scroll = () => {
    window.scroll({ top: 0 })
  }

  render() {
    return (
      <React.Fragment>


        <div className="rb-recommendAct mt-4 pb-5">
          <div className="container">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w my-5">
                推薦活動 / 課程
              </h3>
              {/* 推薦選項 */}
              {this.state.cla.map(cla => (
                <div class="col-lg-3 col-md-6 col-sm-6" title={cla.claName}>
                  <div class="product-grid6">
                    <div class="product-image6">
                      <Link className="rb-hoverLink" to={`/DetailedClass/${cla.claSid}`} onClick={this.scroll}>
                        <img
                          src={`http://localhost:3000/images/${cla.claImg}`}
                          alt="Logo"
                          className="pic-1"
                        />
                      </Link>
                    </div>
                    <div class="product-content">
                      <h3 class="title">
                        <a href="#">{cla.claName}</a>
                      </h3>
                      <div class="price">
                        <i class="fas fa-map-marker-alt" /> {cla.claCity}
                        <span>
                          <i class="fas fa-bookmark" />  {cla.claSport}
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
                      <li>
                        <a href="" data-tip="加入">
                          <i class="fas fa-plus-circle" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
              {this.state.act.map(act => (
                <div class=" col-lg-3 col-md-6 col-sm-6" title={act.actName}>
                  <div class="product-grid6">
                    <div class="product-image6">
                      <Link className="rb-hoverLink" to={`/DetailedActive/${act.actSid}`} onClick={this.scroll} >
                        <img
                          src={`http://localhost:3000/images/${act.actImg}`}
                          alt="Logo"
                          className="pic-1"
                        />
                      </Link>
                    </div>
                    <div class="product-content">
                      <h3 class="title">
                        <a href="#">{act.actName}</a>
                      </h3>
                      <div class="price">
                        <i class="fas fa-map-marker-alt" /> {act.actCity}
                        <span>
                          <i class="fas fa-bookmark" /> {act.actSport}
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
                      <li>
                        <a href="" data-tip="加入">
                          <i class="fas fa-plus-circle" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default RecommendAct;
