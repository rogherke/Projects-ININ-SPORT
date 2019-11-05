import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./cla_checkout3.scss";
import $ from "jquery";

class ClaCheckout4 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state= {
      join:[]
    }
  }
  gotoCla = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/ListClass");
  };

  componentDidMount() {
    this.CheckOrder()
  }

  CheckOrder() {
    fetch("http://localhost:3000/join/last")
      .then(res => res.json())
      .then(info => {
        console.log(info[0])
        this.setState({
          join: info[0]
        })
      })
  }

  render() {
    var a = JSON.parse(localStorage.getItem("members"))
    var b = this.state.join
    var c = JSON.parse(localStorage.getItem("coaName"))

    return (
      <React.Fragment>
        <div className="container">
          <div className="row ro-progress">
            <ol class=" col-8 progress mx-auto my-3">
              <li className="is-active  ro-progress4" data-step="1">
                購物明細
              </li>

              <li className="is-active ro-progress4" data-step="2">
                結帳方式
              </li>
              <li
                className="is-active ro-progress4 progress-last"
                data-step="3"
              >
                訂單成立
              </li>
            </ol>
          </div>

          <form className="check-form">
            <div className="rb-checkout2">
              <h3 className="text-center rb-session-title my-3">課程訂單成立</h3>

              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">學員姓名：</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{a.members.memName}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">課程名字：</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{b.claName}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">教練名字:</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{c}</span>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    開課時間：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{b.claTimeUp}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">學費：</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{b.claCost}</span>
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
                  <legend class="col-form-label col-sm-2 pt-0">
                    課程項目：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{b.claSport}</span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    課程地點：
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <span>{b.plaName}</span>
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
              onClick={this.gotoCla}
            >
              回到課程列表
            </button>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default ClaCheckout4;
