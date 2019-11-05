import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./favShoppingcar.scss";
import $ from "jquery";
import Moment from "react-moment";
import "moment-timezone";

class FavCla extends Component {

  delete = evt => {
    evt.preventDefault()
    this.props.delete(evt.target.dataset.fav)
  }
  goto = evt => {
    window.location.href = "/ListClass/";
    evt.preventDefault()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.claFav.length === 0 ? (
          <div class="rb-noItemCart border-top my-3">
            <i class="fas fa-dumbbell rb-bigIcon my-4" />
            <h6 className="mb-3">您尚未追蹤任何課程</h6>
            <button className="rb-themeBtn-w" onClick={this.goto}>
              <i class="fas fa-running" />
              去上課
                  </button>
          </div>
        ) : (
            <div className="mt-5">
              <h5 className="text-center my-3 rb-memberCenterIcon">
                <i class="fas  fa-dumbbell d-block my-3" />課程追蹤
              </h5>
              {this.props.claFav.map(claFav => (
                <div className="row rb-allshoppingcart">
                  <div className="col-2">
                    <img
                      className="shopping-pic"
                      src={`http://localhost:3000/images/${claFav.claImg}`}
                      alt="pic"
                    />
                  </div>
                  <div className="col-3">
                    <small className="text-black-50">課程名稱：</small>
                    <div>
                      <Link className="rb-hoverLink" to={`/DetailedClass/${claFav.claSid}`}> {claFav.claName}</Link>
                    </div>
                    <small className="text-black-50"> 地址：</small>
                    <div>
                      {claFav.claCity}
                      {claFav.claArea}
                      {claFav.claAddress}
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <small className="text-black-50">教練：</small>
                      {claFav.memName}
                    </div>
                    <div>
                      <small className="text-black-50">課程項目：</small>
                      {claFav.claSport}
                    </div>
                    <div>
                      <small className="text-black-50">開課時間：</small>
                      <Moment format="YYYY/MM/DD HH:mm">
                        {claFav.claTimeUp}
                      </Moment>
                    </div>
                    <div>
                      <small className="text-black-50"> 結束時間：</small>
                      <Moment format="YYYY/MM/DD HH:mm">
                        {claFav.claTimeEnd}
                      </Moment>
                    </div>
                  </div>
                  <div className="col-2">
                    <div>
                      <small className="text-black-50">課程費用：</small>$
              {claFav.claCost}
                    </div>
                  </div>
                  <div className="col-2 rb-roundButton">
                    <div class="buttons">
                      <a href="#" class="button delete" data-fav={claFav.favSid} onClick={this.delete}>
                        <span>刪除</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </React.Fragment>
    );
  }
}
export default FavCla;
