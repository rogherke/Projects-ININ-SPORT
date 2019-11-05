import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_checkout2.scss";
import $ from "jquery";

class Checkout2 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.initState = {
      memName: "",
      memMobile: "",
      memEmail: "",
      memCity: "",
      memArea: "",
      memAddress: "",
      memSid: "",
      getTime:"9-13",
      note:""
      // selectedOption: null
    };
    this.state = this.initState;
  }

  handleChange = evt => {
    let key = evt.target.id;
    let value = evt.target.value;
    console.log(value);
    this.setState({
      [key]: value
    });
  };

  handleNextPage = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store/checkout");
  };
  handleProp = evt => {
    evt.preventDefault();
    var a = document.getElementById("nameWarming");
    var b = document.getElementById("emailWarming");
    var c = document.getElementById("mobileWarming");
    var d = document.getElementById("cityWarming");
    var e = document.getElementById("areaWarming");
    var f = document.getElementById("addressWarming");
    var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    var name = this.state.memName;
    var email = this.state.memEmail;
    var mobile = this.state.memMobile;
    var city = this.state.memCity;
    var area = this.state.memArea;
    var address = this.state.memAddress;

    a.innerHTML = "";
    b.innerHTML = "";
    c.innerHTML = "";
    d.innerHTML = "";
    e.innerHTML = "";
    f.innerHTML = "";

    if (name === "") {
      a.innerHTML = "";
      a.innerHTML = "請輸入姓名";
    }
    if (!emailRule.test(email)) {
      b.innerHTML = "";
      b.innerHTML = "請輸入正確email";
    }
    if (mobile.length < 10) {
      c.innerHTML = "";
      c.innerHTML = "請輸入手機號碼";
    }
    if (city === "") {
      d.innerHTML = "";
      d.innerHTML = "請輸入縣市名";
    }
    if (area === "") {
      e.innerHTML = "";
      e.innerHTML = "請輸入地區";
    }
    if (address === "") {
      f.innerHTML = "";
      f.innerHTML = "請輸入路段";
    }
    if (name !== "" && emailRule.test(email) && mobile.length >= 10 && city !== "" && area !== "" && address !== "") {
      a.innerHTML = "";
      b.innerHTML = "";
      c.innerHTML = "";
      d.innerHTML = "";
      e.innerHTML = "";
      f.innerHTML = "";
      localStorage.setItem("checkout", JSON.stringify(this.state))
      window.location.replace("/store/checkout3");
    }
  };

  getMember = (evt) => {
    var a = JSON.parse(localStorage.getItem("members"))
    console.log(a)
    this.setState({
      memName: a.members.memName,
      memMobile: a.members.memMobile,
      memEmail: a.members.memEmail,
      memCity: a.members.memCity,
      memArea: a.members.memArea,
      memAddress: a.members.memAddress,
      memSid : a.members.memSid
    });
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row ro-progress">
            <ol class=" col-8 progress mx-auto my-3">
              <li class="is-active ro-progress2" data-step="1">
                購物明細
              </li>
              <li className="is-active" data-step="2">
                運送方式
              </li>
              <li data-step="3">結帳方式</li>
              <li data-step="4" class="progress-last">
                訂單成立
              </li>
            </ol>
          </div>

          <form className="check-form">
            <div className="rb-checkout2">
              <h3 className="text-center rb-session-title my-3">運送方式</h3>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    配送方法：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="pickup"
                        id="gridRadios1"
                        value="option1"
                      />
                      <label class="form-check-label rb-gray" htmlFor="pickup">
                        超商取貨
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="pickup"
                        id="gridRadios2"
                        value="option2"
                        checked
                      />
                      <label className="form-check-label rb-gray" htmlFor="pickup">
                        宅配到府
                      </label>
                    </div>
                    <small>試營運期間，宅配免運</small>
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    配送時間：
                  </legend>
                  <div className="col-sm-10 rb-form-row ">
                    <div className="form-row">
                      <div className="col-3">
                        <select className="form-control" id="getTime" value={this.state.getTime} onChange={this.handleChange}>
                          配送時間
                          <option selected value="9-13">早上 9:00~13:00</option>
                          <option value="14-18">下午 14:00~18:00</option>
                          <option value="19-22">晚上 19:00~22:00</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    備註事項：
                  </legend>
                  <div className="col-sm-10">
                    <textarea rows="3" cols="50" className="form-control" id="note" value={this.state.note} onChange={this.handleChange}>
                    </textarea>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="rb-checkout2">
              <h3 className="text-center rb-session-title my-3">配送資訊</h3>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    與會員資料相同
                  </legend>

                  <div className="col-sm-10">
                    <input
                      className="form-check-input ml-1"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      onClick={this.getMember}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    * 收件人姓名：
                  </legend>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="memName"
                      value={this.state.memName}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="姓名"
                    />
                    <span className="rb-dangerous" id="nameWarming" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    * 聯絡電話：
                  </legend>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="memMobile"
                      value={this.state.memMobile}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="手機號碼"
                    />
                    <span className="rb-dangerous" id="mobileWarming" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">* Email：</legend>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="memEmail"
                      value={this.state.memEmail}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                    <span className="rb-dangerous" id="emailWarming" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    * 寄件地址：
                  </legend>
                  <div className="col-sm-10 rb-form-row ">
                    <div className="form-row">
                      <div className="col-3">
                        <input
                          type="text"
                          id="memCity"
                          value={this.state.memCity}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="縣市"
                        />
                        <span className="rb-dangerous" id="cityWarming" />
                      </div>
                      <div className="col-3">
                        <input
                          type="text"
                          id="memArea"
                          value={this.state.memArea}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="地區"
                        />
                        <span className="rb-dangerous" id="areaWarming" />
                      </div>
                      <div className="col-6  mr-0">
                        <input
                          type="text"
                          id="memAddress"
                          value={this.state.memAddress}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="路段"
                        />
                        <span className="rb-dangerous" id="addressWarming" />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>

          {/* <div className="d-flex align-items-end flex-column my-3">
            <div>
              小計：
              <span id="subtotal" />
            </div>
            <div>
              運費：
              <span id="freight" />
            </div>
            <div>
              總計：
              <span id="count" />
            </div>
          </div> */}

          <div className="d-flex justify-content-center my-5">
            <button className="rb-themeBtn-w" onClick={this.handleNextPage}>
              上一頁
            </button>

            <button
              className="rb-themeBtn-main-w ml-3"
              onClick={this.handleProp}
            >
              下一頁
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Checkout2;
