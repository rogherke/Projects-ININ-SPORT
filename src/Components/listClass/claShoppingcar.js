import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./claShoppingcar.scss";
import $ from "jquery";
import Moment from "react-moment";
import "moment-timezone";
import Modal from "react-responsive-modal";
import Login from '../members/login';

if (localStorage.getItem("cla") == null) {
  localStorage.setItem("cla", JSON.stringify([]));
}
localStorage.removeItem("coaName")

class claShoppingcar extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem("cla") != null) {
      var a = JSON.parse(localStorage.getItem("cla"));
      this.state = {
        value: "",
        products: a
      };
    }
  }

  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  gotoClaCheckout = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("members"))
    if (!a.isLogin) {
      this.onOpenModal()
    } else {
      window.location.assign("http://localhost:3001/store/cla_checkout");
    }
  };

  //追蹤
  collect = evt => {
    evt.preventDefault();
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("cla"));
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"];
      var num = a[0]["claSid"];
      console.log(sid, num);
      fetch("http://localhost:3000/track/check2", {
        method: "POST",
        body: JSON.stringify({
          memSid: sid,
          claSid: num
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json()) //{message:"新增成功"}
        .then(track => {
          console.log(track.message.message);
          alert(track.message.message);
        });
    } else {
      alert("請先登入");
    }
  };

  //   清除
  delete = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("cla"));
    a.splice(0, 1);
    localStorage.setItem("cla", JSON.stringify(a));
    this.setState({
      products: a
    });
  };

  gotoCla = evt => {
    window.location.href = "/ListClass/";
  };

  render() {
    const { open } = this.state;
    return (
      <div className="container">
        {JSON.parse(localStorage.getItem("cla")) == "" ? (
          <div class="rb-noItemCart">
            <i class="fas fa-dumbbell rb-bigIcon my-4" />
            <h6 className="mb-3">您尚未報名課程</h6>
            <button className="rb-themeBtn-w" onClick={this.gotoCla}>
              <i class="fas fa-running" />
              去上課
            </button>
          </div>
        ) : (
            <div>
              {this.state.products.map(products => (
                <div className="row rb-allshoppingcart">
                  <div className="col-2">
                    <img
                      className="shopping-pic"
                      src={`http://localhost:3000/images/${products.claImg}`}
                      alt="pic"
                    />
                  </div>
                  <div className="col-3">
                    <small className="text-black-50">課程名稱：</small>
                    <div>
                      {products.claName}
                    </div>
                    <small className="text-black-50"> 地址：</small>
                    <div>
                      {products.claCity}
                      {products.claArea}
                      {products.claAddress}
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <small className="text-black-50">教練：</small>
                      {products.memName}
                    </div>
                    <div>
                      <small className="text-black-50">課程項目：</small>
                      {products.claSport}
                    </div>
                    <div>
                      <small className="text-black-50">開課時間：</small>
                      <Moment format="YYYY/MM/DD HH:mm">
                        {products.claTimeUp}
                      </Moment>
                    </div>
                    <div>
                      <small className="text-black-50"> 結束時間：</small>
                      <Moment format="YYYY/MM/DD HH:mm">
                        {products.claTimeEnd}
                      </Moment>
                    </div>
                  </div>
                  <div className="col-2">
                    <div>
                      <small className="text-black-50">課程費用：</small>$
                    {products.claCost}
                    </div>
                  </div>
                  <div className="col-2 rb-roundButton">
                    <div class="buttons">
                      <a href="#" class="button collect" onClick={this.collect}>
                        <span>追蹤</span>
                      </a>
                    </div>
                    <div class="buttons">
                      <a href="#" class="button delete" onClick={this.delete}>
                        <span>刪除</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex align-items-end flex-column my-3">
                <small className="rb-dangerous">課程購物車無法保留紀錄，若需追蹤課程，請選擇追蹤紐</small>
              </div>
              <div className="d-flex justify-content-end">
                <button className="rb-themeBtn-w" onClick={this.gotoCla}>
                  <i class="fas fa-shopping-bag" />
                  回課程列表
              </button>
                <button className="rb-themeBtn-main-w ml-3" onClick={this.gotoClaCheckout}>
                  <i className="fas fa-cart-plus pr-2" />
                  結帳
              </button>
              </div>
              <Modal open={open} onClose={this.onCloseModal} center>
                <Login />
              </Modal>
            </div>
          )}
      </div>
    );
  }
}

export default claShoppingcar;
