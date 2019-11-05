import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./favShoppingcar.scss";
import $ from "jquery";
import Moment from "react-moment";
import "moment-timezone";


class FavAct extends Component {

  delete = evt => {
    evt.preventDefault()
    this.props.delete(evt.target.dataset.fav)
  }

  goto = evt => {
    evt.preventDefault()
    window.location.href = "/ListActive/";
  }

  render() {
    return (
      <React.Fragment>

        {this.props.actFav.length === 0 ? (
          <div class="rb-noItemCart my-3 border-top">
       
            <i class="fas fa-grin-beam rb-bigIcon my-4" />
            <h6 className="mb-3">您尚未追蹤任何活動</h6>
            <button className="rb-themeBtn-w" onClick={this.goto}>
              <i class="fas fa-running" />
              去活動
                  </button>
          </div>
        ) : (
            <div className="mt-5">
              <h5 className="text-center my-3 rb-memberCenterIcon">
                <i class="far fa-grin-beam d-block my-3"></i>活動追蹤
              </h5>
              {this.props.actFav.map(actFav => (
                <div className="row rb-allshoppingcart">
                  <div className="col-2">
                    <img
                      className="shopping-pic"
                      src={`http://localhost:3000/images/${actFav.actImg}`}
                      alt="pic"
                    />
                  </div>
                  <div className="col-3">
                    <small className="text-black-50">課程名稱：</small>
                    <div>
                      <Link className="rb-hoverLink" to={`/DetailedActive/${actFav.actSid}`}>{actFav.actName}</Link>

                    </div>
                    <small className="text-black-50"> 地址：</small>
                    <div>
                      {actFav.actCity}
                      {actFav.actArea}
                      {actFav.actAddress}
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <small className="text-black-50">教練：</small>
                      {actFav.memName}
                    </div>
                    <div>
                      <small className="text-black-50">課程項目：</small>
                      {actFav.actSport}
                    </div>
                    <div>
                      <small className="text-black-50">開課時間：</small>
                      <Moment format="YYYY/MM/DD HH:mm">
                        {actFav.actTimeUp}
                      </Moment>
                    </div>
                    <div>
                      <small className="text-black-50"> 結束時間：</small>
                      <Moment format="YYYY/MM/DD HH:mm">
                        {actFav.actTimeEnd}
                      </Moment>
                    </div>
                  </div>
                  <div className="col-2">

                  </div>
                  <div className="col-2 rb-roundButton">
                    <div class="buttons">
                      <a href="#" class="button delete" data-fav={actFav.favSid} onClick={this.delete}>
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
export default FavAct;
