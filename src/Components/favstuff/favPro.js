import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./favShoppingcar.scss";
import $ from "jquery";

class FavPro extends Component {

  delete = (evt) => {
    evt.preventDefault()
    this.props.delete(evt.target.dataset.fav)
  }

  goto = evt => {
    window.location.assign("http://localhost:3001/store");
    evt.preventDefault()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.proFav.length === 0 ? (
          <div class="rb-noItemCart">
              <i class="fas fa-shopping-cart rb-bigIcon my-4" />
            <h6 className="mb-3">您尚未追蹤任何商品</h6>
            <button className="rb-themeBtn-w" onClick={this.goto}>
              <i class="fas fa-running" />去購物
            </button>
          </div>
        ) : (
          <div>
            <h5 className="text-center my-3 rb-memberCenterIcon">
              <i class="fas fa-shopping-bag d-block my-3" />商品追蹤
            </h5>
        {this.props.proFav.map(proFav => (
          <div className="row rb-favShoppingCar">
            <div className="col-2">
              <div className="rb-favStuffImg">
                <img src={`../../images/${proFav.proName}.jpg`} alt="pic" />
              </div>
            </div>
            <div className="col-6">
              <div className="rb-bk1 d-flex justify-content-center align-items-center ">
              <Link className="rb-hoverLink" to={`/store/productdetail/${proFav.proSid}`}>{proFav.proName}</Link>
              </div>
            </div>
            <div className="col-2">
              <div
                className="rb-bk1 text-center
              d-flex justify-content-center align-items-center flex-column"
              >
                <div>會員價：${proFav.proPrice}</div>
                <small className="rb-lightWord">
                  原價：${proFav.proOPrice}
                </small>
              </div>
            </div>
            <div className="col-2 ">
              <div className="rb-roundButton mt-4">
                <div class="buttons">
                  <a
                    href="/"
                    class="button delete"
                    onClick={this.delete} data-fav={proFav.favSid}
                  >
                    <span>刪除</span>
                  </a>
                </div>
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
export default FavPro;
