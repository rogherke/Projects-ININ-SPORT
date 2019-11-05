import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_checkout3.scss";
import $ from "jquery";
import { O_NOFOLLOW } from "constants";

class Checkout3 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  handleNextPage = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store/checkout2");
  };
  handleprop = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("members"))
    var b = localStorage.getItem("buyCart")
    var c = JSON.parse(localStorage.getItem("total"))
    var d = localStorage.getItem("checkout")
    var e  = new Date()
    console.log(c)
    fetch("http://localhost:3000/order/order", {
      method: "POST",
      body: JSON.stringify({
        memSid: a.members.memSid,
        productInfo:b,
        count: c ,
        contactInfo: d,
        checkCreate: e,
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    localStorage.removeItem("total")
    localStorage.removeItem("buyCart")
    localStorage.removeItem("checkout")
    window.location.assign("http://localhost:3001/store/checkout4");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row ro-progress">
            <ol class=" col-8 progress mx-auto my-3">
              <li class="is-active ro-progress3" data-step="1">
                購物明細
              </li>
              <li className="is-active ro-progress3" data-step="2">
                運送方式
              </li>
              <li className="is-active" data-step="3">
                結帳方式
              </li>
              <li data-step="4" class="progress-last">
                訂單成立
              </li>
            </ol>
          </div>

          <form className="check-form">
            <div className="rb-checkout2">
              <h3 className="text-center rb-session-title my-3">結帳方式</h3>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    付款方式：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check rb-checkout-cardIcon">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="pickup"
                        id="gridRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label rb-gray" name="payment">
                        信用卡線上刷卡一次付清（可接受VISA,Master,JCB,聯合信用卡）
                        <i class="fab fa-cc-visa" />
                        <i class="fab fa-cc-mastercard" />
                        <i class="fab fa-cc-jcb" />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="pickup"
                        id="gridRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label rb-gray"
                        name="payment"
                      >
                        ININ PAY（可使用ININ Points 折抵消費）
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="pickup"
                        id="gridRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label rb-gray"
                        name="payment"
                      >
                        超商繳付
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="rb-checkout2">
              <h3 className="text-center rb-session-title my-3">信用卡資訊</h3>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    持卡人姓名：
                  </legend>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="memName"
                      maxlength="25"
                      className="form-control"
                      placeholder="姓名"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    信用卡卡號：
                  </legend>
                  <div className="col-sm-10 rb-form-row ">
                    <div className="form-row">
                      <div className="col-2">
                        <input
                          type="text"
                          id="memCity"
                          maxlength="4"
                          className="form-control"
                          placeholder="0000"
                        />
                      </div>
                      <span>-</span>
                      <div className="col-2">
                        <input
                          type="text"
                          id="memArea"
                          maxlength="4"
                          className="form-control"
                          placeholder="0000"
                        />
                      </div>
                      <span>-</span>
                      <div className="col-2">
                        <input
                          type="text"
                          id="memArea"
                          maxlength="4"
                          className="form-control"
                          placeholder="0000"
                        />
                      </div>
                      <span>-</span>
                      <div className="col-2">
                        <input
                          type="text"
                          id="memArea"
                          maxlength="4"
                          className="form-control"
                          placeholder="0000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    有效日期：
                  </legend>
                  <div className="col-sm-10 rb-form-row ">
                    <div className="form-row">
                      <div className="col-3">
                        <select className="form-control">
                          <option selected value="datetime">
                            月
                          </option>
                          <option value="datetime">1</option>
                          <option value="datetime">2</option>
                          <option value="datetime">3</option>
                          <option value="datetime">4</option>
                          <option value="datetime">5</option>
                          <option value="datetime">6</option>
                          <option value="datetime">7</option>
                          <option value="datetime">8</option>
                          <option value="datetime">9</option>
                          <option value="datetime">10</option>
                          <option value="datetime">11</option>
                          <option value="datetime">12</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <select className="form-control">
                          <option selected value="datetime">
                            年
                          </option>
                          <option value="datetime">2019</option>
                          <option value="datetime">2020</option>
                          <option value="datetime">2021</option>
                          <option value="datetime">2022</option>
                          <option value="datetime">2023</option>
                          <option value="datetime">2024</option>
                          <option value="datetime">2025</option>
                          <option value="datetime">2026</option>
                          <option value="datetime">2027</option>
                          <option value="datetime">2028</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    三碼檢查碼：
                  </legend>
                  <div className="col-sm-10 rb-form-row ">
                    <div className="form-row">
                      <div className="col-3">
                        <input
                          type="text"
                          id="memArea"
                          maxlength="3"
                          className="form-control"
                          placeholder="000"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
          <div className="d-flex justify-content-center my-5">
            <button className="rb-themeBtn-w" onClick={this.handleNextPage}>
              上一頁
            </button>

            <button
              className="rb-themeBtn-main-w ml-3"
              onClick={this.handleprop}
            >
              下一頁
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout3;
