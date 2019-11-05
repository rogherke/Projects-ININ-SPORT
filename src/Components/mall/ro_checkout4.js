import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_checkout4.scss";
import $ from "jquery";

class Checkout4 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      productInfo: [],
      count: "",
      contactInfo: [],
      checkSid: "",
    }
  }
  gotoStore = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store");
  };

  componentDidMount() {
    this.CheckOrder()
  }

  CheckOrder() {
    fetch("http://localhost:3000/order/last")
      .then(res => res.json())
      .then(info => {
        console.log(info[0])
        this.setState({
          // productInfo: JSON.parse(info[0].productInfo),
          count: info[0].count,
          contactInfo: JSON.parse(info[0].contactInfo),
          checkSid: info[0].checkSid
        })
      })
  }

  render() {
    var a = this.state
    var b = this.state.count
    return (
      <React.Fragment>
        <div className="container">
          <div className="row ro-progress">
            <ol class=" col-8 progress mx-auto my-3">
              <li className="is-active  ro-progress4" data-step="1">
                購物明細
              </li>
              <li className="is-active  ro-progress4" data-step="2">
                運送方式
              </li>
              <li className="is-active ro-progress4" data-step="3">
                結帳方式
              </li>
              <li
                className="is-active ro-progress4 progress-last"
                data-step="4"
              >
                訂單成立
              </li>
            </ol>
          </div>

          <form className="check-form">
            <div className="rb-checkout2">
              <h3 className="text-center rb-session-title my-3">訂單成立</h3>

              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">收件人姓名：</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{a.contactInfo.memName}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">聯絡電話：</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{a.contactInfo.memMobile}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">Email：</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{a.contactInfo.memEmail}</span>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    交易費用：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{b}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    付款方式：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>信用卡</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">運送方式：</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>宅配到府</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    配送資訊：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{a.contactInfo.memCity}{a.contactInfo.memArea}{a.contactInfo.memAddress}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    訂單編號：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{a.checkSid}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    備註事項：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{a.contactInfo.note}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="rb-check-message">發票資訊</div>
              <small>
                本人後續有辦理退貨作業，同意由ININ購物中心代為處理銷售憑證（例如：發票處理或銷貨折讓）
            </small>
            </div>
          </form>

          <div className="d-flex justify-content-center my-5">

            <button
              className="rb-themeBtn-main-w"
              onClick={this.gotoStore}
            >
              回到商城
            </button>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Checkout4;
