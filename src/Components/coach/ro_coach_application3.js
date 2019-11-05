import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_coach_application3.scss";
import NormalNav from "../nav/normalNav";
import $ from "jquery"

class Application3 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    var a = JSON.parse(localStorage.getItem("members"))
    var b = parseInt(a.members.memSid)
    this.state = {
      memSid: b,
      memName: a.members.memName,
      coaSport: "",
      coaIdNum: "",
      coaEdu: "",
      coaMaj: "",
      // coaLicense: "",
      coaInfo: "",
      coaImg: "",
      coaCreated: "",
    }
  }
  
  add1 = evt => {
    evt.preventDefault();
    window.location.href = "/Home/";
  };

  handleChange = evt => {
    let key = evt.target.id;
    let data = evt.target.value;
    this.setState({
      [key]: data,
    });
  };

  add = evt => {
    console.log(this.state);
    evt.preventDefault();
    var Sport = this.state.coaSport;
    var IdNum = this.state.coaIdNum;
    var coaEdu = this.state.coaEdu;
    var coaMaj = this.state.coaMaj;
    var Info = this.state.coaInfo;
    var d = new Date()
    // ------------前台驗證---------------
    var a = document.getElementById("textWarming");
    a.innerHTML = "";
    if (IdNum === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (Sport === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (coaEdu === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (coaMaj === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    }
    else if (Info === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else {
      a.innerHTML = "";
      const {
        memSid,
        memName,  
        coaSport,
        coaIdNum,
        coaEdu,
        coaMaj,
        coaInfo,
        coaImg
      } = this.state;

      let formData = new FormData();
      formData.append("coaIdNum", coaIdNum);
      formData.append("memSid", memSid);
      formData.append("memName", memName);
      formData.append("coaEdu", coaEdu);
      formData.append("coaMaj", coaMaj);
      formData.append("coaSport", coaSport);
      // formData.append("coaLicense", coaLicense);
      formData.append("coaInfo", coaInfo);
      formData.append("coaImg", coaImg);
      formData.append("coaCreated", d);

      fetch("http://localhost:3000/coach/coach", {
        method: "POST",
        body: formData
      })
        .then(r => r.json())
        .then(data => {
          alert(data.message);
        });

      this.props.history.replace("/coach/application4/");
    }
  };

  img_onChange = evt => {
    evt.preventDefault();
    switch (evt.target.name) {
      case "coaImg":
        this.setState({ coaImg: evt.target.files[0] });
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#preview_claImg_img").attr('src', e.target.result);
        }
        reader.readAsDataURL(evt.target.files[0]);
        break;
      default:
        this.setState({ [evt.target.name]: evt.target.value });
    }
  };
  // ...............................................................................................
  render() {
    return (
      <React.Fragment>
        <NormalNav />
        <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-memberForm">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">教練申請</h3>
              <div className="col-12 mt-3 rb-block-w py-3 px-3">

                <div className="text-center my-2"><i class="fas fa-info-circle mr-1"></i>為確保您申請資格，請填妥以下所有欄位</div>
                <hr />
                <form className="memberModify">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="coaIdNum" className="rb-right-title">
                        <i class="fas fa-id-card" />
                        身份證字號：
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="coaIdNum"
                        value={this.state.coaIdNum}
                        onChange={this.handleChange}
                        name="coaIdNum"
                        placeholder="請輸入身份證字號"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="coaSport" className="rb-right-title">
                        <i class="fas fa-basketball-ball" />
                        擅長項目：球類
                      </label>
                      <select
                        value={this.state.coaSport}
                        onChange={this.handleChange}
                        className="form-control"
                        id="coaSport"
                        name="coaSport"
                      >
                        <option>選擇球類項目 </option>
                        <option>籃球</option>
                        <option>排球</option>
                        <option>棒球</option>
                        <option>羽球</option>
                        <option>桌球</option>
                        <option>撞球</option>
                        <option>保齡球</option>
                        <option>足球</option>
                      </select>
                      <small>請球類與非球類二選一填寫</small>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="coaSport" className="rb-right-title">
                        <i class="fas fa-swimmer" />
                        擅長項目：非球類
                      </label>
                      <select
                        value={this.state.coaSport}
                        onChange={this.handleChange}
                        className="form-control"
                        id="coaSport"
                        name="coaSport"
                      >
                        <option>選擇非球類項目</option>
                        <option>跑步</option>
                        <option>游泳</option>
                        <option>瑜珈</option>
                        <option>爬山</option>
                        <option>健身</option>
                        <option>有氧拳擊</option>
                        <option>國標舞</option>
                        <option>街舞</option>
                        <option>攀岩</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <label htmlFor="coaEdu" className="rb-right-title">
                        <i class="fas fa-user-graduate" />學歷：
                      </label>
                      <div className="d-flex justify-content-start">
                        <input
                          type="text"
                          value={this.state.coaEdu}
                          onChange={this.handleChange}
                          className="form-control col-4 mr-2"
                          id="coaEdu"
                          name="coaEdu"
                          placeholder="請輸入學校名稱"
                        />
                        <input
                          type="text"
                          value={this.state.coaMaj}
                          onChange={this.handleChange}
                          className="form-control col-md-3 mr-2"
                          id="coaMaj"
                          name="coaMaj"
                          placeholder="請輸入科系名稱"
                        />
                        <select
                          className="form-control col-md-3"
                          id="coachGraduation"
                          name="coachGraduation"
                        >
                          <option>選擇學業狀況</option>
                          <option>畢業</option>
                          <option>肄畢</option>
                          <option>在學</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label htmlFor="coaInfo" className="rb-right-title">
                        <i class="fas fa-info" />簡介：
                      </label>
                      <textarea
                        value={this.state.coaInfo}
                        onChange={this.handleChange}
                        id="coaInfo"
                        name="coaInfo"
                        className="form-control"
                        cols="100"
                        rows="3"
                      />
                    </div>

                    <div className="form-group col-md-7 ">
                      <label htmlFor="coaImg" className="rb-right-title">
                        <i class="far fa-images" /> 大頭照上傳
                      </label>
                      <img className="ge-classImg"
                          style={{ display: this.state.src ? 'none' : '' }}
                          id="preview_claImg_img" src=""
                        />
                      <input
                        type="file"
                        className="form-control"
                        id="coaImg"
                        name="coaImg"
                        onChange={this.img_onChange}
                      />
                    </div>
                  </div>
                  <span>相關證明之附件 (相關、證照、經歷及運動成就之證明，將之掃描後，請傳至 ininSport.tw@gmail.com )</span>
                  <div>
                    <span id="textWarming" className="rb-dangerous" />
                  </div>


                  <div className="d-flex justify-content-center my-3">
                    <button className="rb-themeBtn-w" onClick={this.add1}>
                      取消
                    </button>

                    <button
                      className="rb-themeBtn-main-w ml-3"
                      onClick={this.add}>
                      確定
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Application3;
