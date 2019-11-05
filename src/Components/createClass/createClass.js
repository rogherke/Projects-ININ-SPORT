import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./createClass.scss";
import NormalNav from "../nav/normalNav";
import $ from "jquery"

class createClass extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      claName: "",
      memSid: "",
      memName:"",
      claSport: "",
      claTimeUp: "",
      claTimeEnd: "",
      claGender: "",
      claCost: "",
      claCutoff: "",
      claPleNum: "",
      claCity: "",
      claArea: "",
      claAddress: "",
      claInfo: "",
      claImg: "",
      claCreate: ""
    };
  }
  handleClick() {
    // console.log(this);
    this.setState({
      now: new Date().toLocaleTimeString()
    });
  }

  handleChange = evt => {
    let key = evt.target.id;
    let data = evt.target.value;
    this.setState({
      [key]: data
    });
  };



  add = evt => {
    evt.preventDefault();
    var claName = this.state.claName;
    var Sport = this.state.claSport;
    var TimeUp = this.state.claTimeUp;
    var TimeEnd = this.state.claTimeEnd;
    var Gender = this.state.claGender;
    var Cost = this.state.claCost;
    var Cutoff = this.state.claCutoff;
    var PleNum = this.state.claPleNum;
    var City = this.state.claCity;
    var Area = this.state.claArea;
    var Address = this.state.claAddress;

    // ------------前台驗證---------------
    var a = document.getElementById("textWarming");
    a.innerHTML = "";
    if (claName === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (Sport === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (TimeUp === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (TimeEnd === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (Gender === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (Cost === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (Cutoff === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (PleNum === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (City === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (Area === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else if (Address === "") {
      a.innerHTML = "";
      a.innerHTML = "必填欄位未填";
    } else {
      a.innerHTML = "";
      const {
        claName,
        claSport,
        claTimeUp,
        claTimeEnd,
        claGender,
        claCost,
        claCutoff,
        claPleNum,
        claCity,
        claArea,
        claAddress,
        claInfo,
        claImg,
      } = this.state;
      var c = JSON.parse(localStorage.getItem("members"))
      var d = new Date()
      let formData = new FormData();
      formData.append("memSid", c.members.memSid);
      formData.append("memName", c.members.memName);
      formData.append("claName", claName);
      formData.append("claSport", claSport);
      formData.append("claTimeUp", claTimeUp);
      formData.append("claTimeEnd", claTimeEnd);
      formData.append("claGender", claGender);
      formData.append("claCost", claCost);
      formData.append("claCutoff", claCutoff);
      formData.append("claPleNum", claPleNum);
      formData.append("claCity", claCity);
      formData.append("claArea", claArea);
      formData.append("claAddress", claAddress);
      formData.append("claInfo", claInfo);
      formData.append("claImg", claImg);
      formData.append("claActive", 1);
      formData.append("claCreate", d);
      console.log(this.state)
      fetch("http://localhost:3000/api/class", {
        method: "POST",
        body: formData
      })
        .then(r => r.json())
        .then(data => {
          alert(data.message);
          this.props.history.replace("/doneClass/");
        });

      evt.preventDefault();

      
    }
  };

  img_onChange = evt => {
    evt.preventDefault();
    switch (evt.target.name) {
      case "claImg":
        this.setState({ claImg: evt.target.files[0] });
        //========================
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#preview_claImg_img").attr('src', e.target.result);
        }
        reader.readAsDataURL(evt.target.files[0]);
        //========================
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
              <h3 className="text-center rb-session-title-w mt-5">開新課程</h3>
              <div className="col-12 mt-3 rb-block-w py-3 px-3">
                <div className="text-center my-2"><i class="fas fa-info-circle mr-1"></i>為確保您的課程品質，請填妥以下所有欄位</div>
                <hr />
                <form className="memberModify">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="claName" className="rb-right-title">
                        <i class="fas fa-dumbbell" />
                        課程名稱：
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="claName"
                        value={this.state.claName}
                        onChange={this.handleChange}
                        name="claName"
                        placeholder="請輸入課程名稱"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="claSport" className="rb-right-title">
                        <i class="fas fa-basketball-ball" />
                        課程項目：球類
                      </label>
                      <select
                        value={this.state.claSport}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claSport"
                        name="claSport"
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
                      <label htmlFor="claSport" className="rb-right-title">
                        <i class="fas fa-swimmer" />
                        課程項目：非球類
                      </label>
                      <select
                        value={this.state.claSport}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claSport"
                        name="claSport"
                      >
                        <option> 選擇非球類項目</option>
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
                    <div className="form-group col-md-3">
                      <label htmlFor="claTimeUp" className="rb-right-title">
                        <i class="fas fa-calendar-alt" />
                        課程開始時間：
                      </label>
                      <input
                        type="datetime-local"
                        value={this.state.claTimeUp}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claTimeUp"
                        name="claTimeUp"
                        placeholder="選擇日期"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="claTimeEnd" className="rb-right-title">
                        <i class="fas fa-calendar-alt" /> 課程結束時間：
                      </label>
                      <input
                        type="datetime-local"
                        value={this.state.claTimeEnd}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claTimeEnd"
                        name="claTimeEnd"
                        placeholder="選擇日期"
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="claCutoff" className="rb-right-title">
                        <i class="fas fa-calendar-alt" /> 報名截止時間：
                      </label>
                      <input
                        type="datetime-local"
                        value={this.state.claCutoff}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claCutoff"
                        name="claCutoff"
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="claGender" className="rb-right-title">
                        <i class="fas fa-male" /> 性別限制：
                      </label>
                      <select
                        value={this.state.claGender}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claGender"
                        name="claGender"
                      >
                        <option value="" selected disabled>
                          請選擇
                        </option>
                        <option>不限</option>
                        <option>男</option>
                        <option>女</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <label htmlFor="claCity" className="rb-right-title">
                        <i class="fas fa-map-marker-alt" />課程地點：
                      </label>
                      <div className="d-flex justify-content-between">
                        <select
                          value={this.state.claCity}
                          onChange={this.handleChange}
                          className="form-control col-3 mr-2"
                          id="claCity"
                          name="claCity"
                        >
                          <option value="" disabled selected>
                            選擇縣市
                          </option>
                          <option>台北市</option>
                          <option>新北市</option>
                          <option>桃園市</option>
                          <option>新竹市</option>
                          <option>新竹縣</option>
                          <option>苗栗縣</option>
                          <option>台中市</option>
                          <option>彰化縣</option>
                          <option>雲林縣</option>
                          <option>嘉義縣</option>
                          <option>嘉義市</option>
                          <option>台南市</option>
                          <option>高雄市</option>
                          <option>南投縣</option>
                          <option>屏東縣</option>
                          <option>台東縣</option>
                          <option>花蓮縣</option>
                          <option>宜蘭縣</option>
                        </select>
                        <input
                          type="text"
                          value={this.state.claArea}
                          onChange={this.handleChange}
                          className="form-control col-3 mr-2"
                          id="claArea"
                          name="claArea"
                          placeholder="請輸入哪一區"
                        />
                        <input
                          type="text"
                          value={this.state.claAddress}
                          onChange={this.handleChange}
                          className="form-control"
                          id="claAddress"
                          name="claAddress"
                          placeholder="請輸入地址"
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="claPleNum" className="rb-right-title">
                        <i class="fas fa-users" />課程人數：
                      </label>
                      <input
                        type="text"
                        value={this.state.claPleNum}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claPleNum"
                        name="claPleNum"
                        placeholder="請輸入人數(數字)"
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="claCost" className="rb-right-title">
                        <i class="fas fa-dollar-sign" />課程價格：
                      </label>

                      <input
                        type="text"
                        value={this.state.claCost}
                        onChange={this.handleChange}
                        className="form-control"
                        id="claCost"
                        name="claCost"
                        placeholder="請輸入價格"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="claInfo" className="rb-right-title">
                        <i class="fas fa-info" />簡介：
                      </label>
                      <textarea
                        value={this.state.claInfo}
                        onChange={this.handleChange}
                        id="claInfo"
                        name="claInfo"
                        className="form-control"
                        cols="100"
                        rows="3"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="claImg" className="rb-right-title">
                        <i class="far fa-images" /> 圖片選擇
                      </label>
                      <div className="ge-classImg">
                        <img
                          style={{ display: this.state.src ? 'none' : '' }}
                          id="preview_claImg_img" src=""
                        />
                      </div>
                      <input
                        type="file"
                        className="form-control"
                        id="claImg"
                        name="claImg"
                        onChange={this.img_onChange}
                        encType="multipart/form-data"
                      />

                    </div>
                  </div>
                  <div>
                    <span id="textWarming" className="rb-dangerous" />
                  </div>

                  <div className="d-flex justify-content-center my-3">
                    <button className="rb-themeBtn-w" onClick={this.add1}>
                      取消
                    </button>

                    <button
                      className="rb-themeBtn-main-w ml-3"
                      onClick={this.add}
                    >
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
export default createClass;
