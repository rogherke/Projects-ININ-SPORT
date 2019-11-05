import React, { Component } from "react";
import "./CreateActive.scss";
import NormalNav from "../nav/normalNav";
import $ from "jquery";

class createActive extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      actName: "",
      memSid: "",
      actSport: "",
      actTimeUp: "",
      actTimeEnd: "",
      actGender: "",
      // actCost: "",
      actCutoff: "",
      actPleNum: "",
      actCity: "",
      actArea: "",
      actAddress: "",
      actInfo: "",
      actImg: "",
      actCreate: ""
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
    console.log(this.state);
    evt.preventDefault();
    var actName = this.state.actName;
    var Sport = this.state.actSport;
    var TimeUp = this.state.actTimeUp;
    var TimeEnd = this.state.actTimeEnd;
    var Gender = this.state.actGender;
    // var Cost = this.state.actCost;
    var Cutoff = this.state.actCutoff;
    var PleNum = this.state.actPleNum;
    var City = this.state.actCity;
    var Area = this.state.actArea;
    var Address = this.state.actAddress;

    var a = document.getElementById("textWarming") ;
    a.innerHTML = ""
    if(actName === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(Sport === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(TimeUp === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(TimeEnd === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(Gender === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(Cutoff === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(PleNum === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(City === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(Area === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }else if(Address === ""){
        a.innerHTML =""
        a.innerHTML = ("必填欄位未填")
    }
    else {
        a.innerHTML =""
    const {
      actName,
      // coaName,
      actSport,
      actTimeUp,
      actTimeEnd,
      actGender,
      // actCost,
      actCutoff,
      actPleNum,
      actCity,
      actArea,
      actAddress,
      actInfo,
      actImg,
    } = this.state;
    var d = new Date()
    let formData = new FormData();
    var c = JSON.parse(localStorage.getItem("members"))
    formData.append("memSid", c.members.memSid);
    formData.append("memName", c.members.memName);
    formData.append("actName", actName);
    formData.append("actSport", actSport);
    formData.append("actTimeUp", actTimeUp);
    formData.append("actTimeEnd", actTimeEnd);
    formData.append("actGender", actGender);
    // formData.append('actCost', actCost);
    formData.append("actCutoff", actCutoff);
    formData.append("actPleNum", actPleNum);
    formData.append("actCity", actCity);
    formData.append("actArea", actArea);
    formData.append("actAddress", actAddress);
    formData.append("actInfo", actInfo);
    formData.append("actImg", actImg);
    formData.append("actCreate", d);
    formData.append("actActive",1)

    fetch("http://localhost:3000/api2/active", {
      method: "POST",
      body: formData
    })
      .then(r => r.json())
      .then(data => {
        alert(data.message);
        this.props.history.replace("/DoneActive/");
      });
    evt.preventDefault();

    
    }
  };

  img_onChange = evt => {
    evt.preventDefault();
    switch (evt.target.name) {
      case "actImg":
        this.setState({ actImg: evt.target.files[0] });
        //========================
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#preview_actImg_img").attr('src', e.target.result);
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
              <h3 className="text-center rb-session-title-w mt-5">開新活動</h3>

              <div className="col-12 mt-3 rb-block-w py-3 px-3">
              <div className="text-center my-2"><i class="fas fa-info-circle mr-1"></i>為確保您的活動品質，請填妥以下所有欄位</div>
                <hr/>
                <form className="memberModify">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="actName" className="rb-right-title">
                        <i class="far fa-grin-beam" />
                        活動名稱：
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="actName"
                        value={this.state.actName}
                        onChange={this.handleChange}
                        name="actName"
                        placeholder="請輸入活動名稱"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="actSport" className="rb-right-title">
                        <i class="fas fa-basketball-ball" />
                        課程項目：球類
                      </label>
                      <select
                        value={this.state.actSport}
                        onChange={this.handleChange}
                        className="form-control"
                        id="actSport"
                        name="actSport"
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
                        value={this.state.actSport}
                        onChange={this.handleChange}
                        className="form-control"
                        id="actSport"
                        name="actSport"
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
                      <label htmlFor="actTimeUp" className="rb-right-title">
                        <i class="fas fa-calendar-alt" />
                        活動開始時間：
                      </label>
                      <input
                        type="datetime-local"
                        value={this.state.actTimeUp}
                        onChange={this.handleChange}
                        className="form-control"
                        id="actTimeUp"
                        name="actTimeUp"
                        placeholder="選擇日期"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="actTimeEnd" className="rb-right-title">
                        <i class="fas fa-calendar-alt" /> 課程結束時間：
                      </label>
                      <input
                        type="datetime-local"
                        value={this.state.actTimeEnd}
                        onChange={this.handleChange}
                        className="form-control"
                        id="actTimeEnd"
                        name="actTimeEnd"
                        placeholder="選擇日期"
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="actCutoff" className="rb-right-title">
                        <i class="fas fa-calendar-alt" /> 報名截止時間：
                      </label>

                      <input
                        type="datetime-local"
                        value={this.state.actCutoff}
                        onChange={this.handleChange}
                        className="form-control"
                        id="actCutoff"
                        name="actCutoff"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="actGender" className="rb-right-title">
                        <i class="fas fa-male" /> 性別限制：
                      </label>

                      <select
                        value={this.state.actGender}
                        onChange={this.handleChange}
                        className="form-control"
                        id="actGender"
                        name="actGender"
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
                      <label htmlFor="actCity" className="rb-right-title">
                        <i class="fas fa-map-marker-alt" />課程地點：
                      </label>
                      <div className="d-flex justify-content-between">
                        <select
                          value={this.state.actCity}
                          onChange={this.handleChange}
                          className="form-control col-3 mr-2"
                          id="actCity"
                          name="actCity"
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
                          <option>高雄市</option>
                          <option>南投縣</option>
                        </select>

                        <input
                          type="text"
                          value={this.state.actArea}
                          onChange={this.handleChange}
                          className="form-control col-3 mr-2"
                          id="actArea"
                          name="actArea"
                          placeholder="請輸入哪一區"
                        />
                        <input
                          type="text"
                          value={this.state.actAddress}
                          onChange={this.handleChange}
                          className="form-control"
                          id="actAddress"
                          name="actAddress"
                          placeholder="請輸入地址"
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="actPleNum" className="rb-right-title">
                        <i class="fas fa-users" />活動人數：
                      </label>

                      <input
                        type="text"
                        value={this.state.actPleNum}
                        onChange={this.handleChange}
                        className="form-control"
                        id="actPleNum"
                        name="actPleNum"
                        placeholder="請輸入人數(數字)"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <label htmlFor="actInfo" className="rb-right-title">
                        <i class="fas fa-info" />簡介：
                      </label>
                      <textarea
                        value={this.state.actInfo}
                        onChange={this.handleChange}
                        id="actInfo"
                        name="actInfo"
                        className="form-control"
                        cols="100"
                        rows="3"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="actImg" className="rb-right-title">
                        <i class="far fa-images" /> 圖片選擇
                      </label>
                      <div className="ge-classImg">
                        <img
                          style={{ display: this.state.src ? 'none' : '' }}
                          id="preview_actImg_img" src=""
                        />
                      </div>
                      <input
                        type="file"
                        className="form-control"
                        id="actImg"
                        name="actImg"
                        onChange={this.img_onChange}
                        encType="multipart/form-data"
                      />
                    </div>
                  </div>
                  <div><span id="textWarming" className="rb-dangerous"></span></div>

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
export default createActive;
