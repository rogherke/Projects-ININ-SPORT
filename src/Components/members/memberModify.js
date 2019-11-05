import React, { Component } from "react";
import { BrowserRouter, Router, Link } from "react-router-dom";
import "./memberForm.scss";
var memSport = [];

class MemberModify extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.state);
    this.initState = {
      memName: "",
      memGender: "",
      memBirthday: "",
      memNickname: "",
      memMobile: "",
      memEachSport: "",
      memFavCity: "",
      memFavArea: "",
      memCity: "",
      memArea: "",
      memAddress: "",
      memImage: "",
      memActive: 1
    };
    this.state = this.initState;
  }

  handleChange = evt => {
    let key = evt.target.id;
    let value = evt.target.value;
    this.setState({
      [key]: value
    });
  };

  handleChange2 = evt => {
    let value = evt.target.value;
    let a = memSport.indexOf(value);
    if (a == -1) {
      memSport.push(value);
    } else {
      memSport.splice(a, 1);
    }
    var b = JSON.stringify(memSport);
    this.setState({
      memSport: b
    });
  };

  putHandler = evt => {
    this.setState(this.initState);
    evt.preventDefault();

    fetch("http://localhost:3000/mem/members/" + this.props.memEmail, {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(setState => {
        alert(setState.message);
        window.location.assign("http://localhost:3001/");
      });
  };

  componentDidMount() {
    this.getMembers();

    // var a = this.state.memSport
    // document.getElementsByName('memSport')
  }
  componentDidUpdate() {
    if (this.state.memEachSport != "") {
      document.getElementById("EachSport").setAttribute("checked", "checked")
    }
    if (this.state.memSport != "") {
      var sports = JSON.parse(this.state.memSport);
      for (var i = 0, max = sports.length; i < max; i++) {
        // console.log(sports[i]);
        document
          .querySelector('.form-check-input[value="' + sports[i] + '"]')
          .setAttribute("checked", "checked");
      }
    }
  }

  getMembers() {
    console.log(this.props.memEmail);
    fetch("http://localhost:3000/mem/members/" + this.props.memEmail)
      .then(res => res.json())
      .then(members => {
        console.log(members);
        this.setState({
          memName: members[0].memName,
          memGender: members[0].memGender,
          memBirthday: members[0].memBirthday,
          memNickname: members[0].memNickname,
          memMobile: members[0].memMobile,
          memEachSport: members[0].memEachSport,
          memFavCity: members[0].memFavCity,
          memFavArea: members[0].memFavArea,
          memCity: members[0].memCity,
          memArea: members[0].memArea,
          memAddress: members[0].memAddress,
          memImage: members[0].memImage,
          memSport: members[0].memSport
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <form className="memberModify">
          <p>您好{this.props.memSid} </p>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="memName" className="rb-right-title">
                <i class="fas fa-user-circle" />姓名
              </label>
              <input
                type="text"
                className="form-control"
                id="memName"
                value={this.state.memName}
                onChange={this.handleChange}
                name="memName"
                placeholder="請填入真實姓名"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="memGender" className="rb-right-title">
                <i class="fas fa-male" />性別
              </label>
              <select
                className="custom-select "
                id="memGender"
                name="memGender"
                value={this.state.memGender}
                onChange={this.handleChange}
              >
                <option selected>請選擇性別...</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="memBirthday" className="rb-right-title">
                <i class="fas fa-birthday-cake" />生日
              </label>
              <input
                type="date"
                className="form-control"
                id="memBirthday"
                value={this.state.memBirthday}
                onChange={this.handleChange}
                name="memBirthday"
                placeholder="選擇日期"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="memNickname" className="rb-right-title">
                <i class="fas fa-address-book" />暱稱
              </label>
              <input
                type="text"
                className="form-control"
                id="memNickname"
                value={this.state.memNickname}
                onChange={this.handleChange}
                name="memNickname"
                placeholder="請填入你的暱稱"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="memMobile" className="rb-right-title">
                <i class="fas fa-phone" />手機號碼
              </label>
              <input
                type="mobile"
                className="form-control"
                id="memMobile"
                value={this.state.memMobile}
                onChange={this.handleChange}
                name="memMobile"
                placeholder="請填入手機號碼"
              />
            </div>
          </div>
          <label className="rb-right-title">
            <i class="fas fa-heart" />偏好項目
          </label>
          <div className="form-row">
            <div className="form-group col-md-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport1"
                  value="跑步"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport1">
                  跑步
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport2"
                  value="游泳"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport2">
                  游泳
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport3"
                  value="瑜珈"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport3">
                  瑜珈
                </label>
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport4"
                  value="爬山"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport4">
                  爬山
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport5"
                  value="健身"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport5">
                  健身
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport6"
                  value="有氧拳擊"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport6">
                  有氧拳擊
                </label>
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport7"
                  value="國標舞"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport7">
                  國標舞
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport8"
                  value="街舞"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport8">
                  街舞
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport9"
                  value="攀岩"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport9">
                  攀岩
                </label>
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport10"
                  value="籃球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport10">
                  籃球
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport11"
                  value="排球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport11">
                  排球
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport12"
                  value="棒球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport12">
                  棒球
                </label>
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport13"
                  value="羽球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport13">
                  羽球
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport14"
                  value="桌球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport14">
                  桌球
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport15"
                  value="撞球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport15">
                  撞球
                </label>
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport16"
                  value="保齡球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport16">
                  保齡球
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="memSport"
                  id="memSport17"
                  value="足球"
                  onChange={this.handleChange2}
                />
                <label className="form-check-label" htmlFor="memSport17">
                  足球
                </label>
              </div>
            </div>
            <div className="form-group col-md-2">
              <div className="form-check d-flex justify-content-between align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  id="EachSport"
                />
                {/* <label className="form-check-label mr-1" htmlFor="memEachSport">其他</label> */}
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with checkbox"
                  name="memEachSport"
                  id="memEachSport"
                  value={this.state.memEachSport}
                  onChange={this.handleChange}
                  placeholder="其他"
                />
              </div>
            </div>
          </div>
          <label className="rb-right-title">
            <i class="fas fa-map-marker-alt" />偏好地點
          </label>
          <div className="form-row mb-2">
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="選擇縣市"
                id="memFavCity"
                value={this.state.memFavCity}
                onChange={this.handleChange}
                name="memFavCity"
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="選擇區域"
                id="memFavArea"
                value={this.state.memFavArea}
                onChange={this.handleChange}
                name="memFavArea"
              />
            </div>
          </div>
          <label className="rb-right-title">
            <i class="fas fa-home" />聯絡地點
          </label>
          <div className="form-row mb-2">
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="選擇縣市"
                id="memCity"
                value={this.state.memCity}
                onChange={this.handleChange}
                name="memCity"
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="選擇區域"
                id="memArea"
                value={this.state.memArea}
                onChange={this.handleChange}
                name="memArea"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="填寫地址"
                id="memAddress"
                value={this.state.memAddress}
                onChange={this.handleChange}
                name="memAddress"
              />
            </div>
          </div>
          {/* <label className="rb-right-title">
            <i class="far fa-images" />頭像上傳
          </label>
          <div className="form-row mb-2">
            <div className="col-3">
               <label htmlFor="memImage">選擇檔案</label> 
              <input type="file" className="form-control-file" id="memImage" />
            </div>
          </div> */}
        </form>
        <div className="d-flex justify-content-center">
          <button id="resetB" className="rb-themeBtn-w mr-3">
            清除資料
          </button>
          <button onClick={this.putHandler} className="rb-themeBtn-w">
            送出表單
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MemberModify;
