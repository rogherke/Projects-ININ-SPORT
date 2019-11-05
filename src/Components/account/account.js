import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./account.scss";

class Account extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      memEmail: "",
      memPassword: "",
      member: []
    }
    this.state = this.initState;
  }

  handleChange = (evt) => {
    let key = evt.target.id
    let value = evt.target.value
    console.log(value)
    this.setState({
      [key]: value,
    });
  }

  clean = (evt) => {
    evt.preventDefault()
    document.getElementById('memEmail').value = ""
    document.getElementById('memPassword').value = ""
    this.setState({
      memEmail: "",
      memPassword: "",
    });
  }

  addHandler = (evt) => {
    evt.preventDefault();
    var email = this.state.memEmail;
    var password = this.state.memPassword;

    // ------------前台驗證---------------
    var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    var a = document.getElementById("emailWarming");
    var b = document.getElementById("passwordWarming")
    b.innerHTML = ""
    a.innerHTML = ""
    if (!emailRule.test(email)) {
      a.innerHTML = ""
      a.innerHTML = ("請輸入正確格式")
    } else {
      a.innerHTML = ""
    }
    if (password.length < 6) {
      b.innerHTML = ""
      b.innerHTML = "密碼長度不對"
    } else {
      b.innerHTML = ""
    }
    if (emailRule.test(email) && password.length >= 6) {
      b.innerHTML = ""
      a.innerHTML = ""

      // -------------連結登入api------------------
      fetch("http://localhost:3000/mem/login", {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())  //{message:"新增成功"}

        .then(members => {
          console.log(members);
          var a = document.getElementById("emailWarming")
          var b = document.getElementById("passwordWarming")
          switch (members.message.message) {
            case "登入成功":
              alert("登入成功")
              this.setState({ member: members[0] });
              localStorage.setItem('members', JSON.stringify(members));
              var a = localStorage.getItem("members")
              console.log(JSON.parse(a))
              window.location.assign(window.location.href)
              break;

            case "密碼錯誤":
              b.innerHTML = members.message.message
              break;

            case "此帳號未註冊":
              a.innerHTML = members.message.message
              break;

            case "此帳號還未驗證":
              a.innerHTML = members.message.message
              break;
          }
        }
        );

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="rb-account p-5">
          <h3 className="text-center text-light rb-session-title-w">會員登入</h3>

          <div className="wrap">
            <div className="mat-div">
              <label class="mat-label">
                請輸入您的E-mail
              </label>
              <input type="text" class="mat-input" id="memEmail" value={this.state.memEmail} onChange={this.handleChange} />
            </div>
            <span id="emailWarming" className="rb-dangerous "></span>
            <div className="mat-div">
              <label class="mat-label">
                請輸入您的密碼
              </label>
              <input type="password" class="mat-input" id="memPassword" value={this.state.memPassword} onChange={this.handleChange} />
            </div>
            <span id="passwordWarming" className="rb-dangerous"></span>
          </div>

          <div className="row mt-3">
            <div className="col-6">
              <div class="checkbox">
                <input className="mr-1" id="checkbox1" type="checkbox" />
                <label for="checkbox1" className="text-light">
                  保持登入
                </label>
              </div>
            </div>
            <div className="col-6">
              <p className="text-right">
                <Link to="/forget" className="text-light">
                  忘記密碼？
                </Link>
              </p>
            </div>
          </div>

          <div className="row mt-3 d-flex justify-content-between">
            <div className="rb-log-button">
              <button href="#" class="rb-themeBtn" id="resetB" onClick={this.clean}>
                清除資料
              </button>
            </div>
            <div className="rb-log-button">
              <button href="#" class="rb-themeBtn" onClick={this.addHandler}>
                確認登入
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <button
              type="button"
              class="rb-themeBtn-long"
            >
              <i class="fab fa-facebook-f" />
              Facebook 登入
            </button>

            <button
              type="button"
              class="rb-themeBtn-long mt-3" >
              <i class="fab fa-google"></i>
              Google 登入
            </button>
            <div className="mt-2">
              <p className="text-light">還沒有帳號？ <Link to="/signup" className="text-light rb-text-style">註冊</Link></p>

            </div>
          </div>

          {/*
          https://bootsnipp.com/snippets/orXRB
          <p>王小明</p>
                <p> 台北市大安區</p>
           
              <p>我參加的活動：</p>
              <p>
                我的課程清單：
  
              </p>
              <p>
                我的場地清單：
              </p>
              <p>
                我開的活動/課程：
              </p>
              <p>我的購物清單：</p>
              <a class="" href="#" role="button">
                Link</a> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Account;
