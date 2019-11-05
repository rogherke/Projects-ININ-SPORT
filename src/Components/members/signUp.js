import React, { Component } from "react";
import "./signUp.scss";
import { BrowserRouter, Router, Link } from "react-router-dom";
import FacebookLogin from "./facebook";
import NormalNav from "../nav/normalNav";

const responseFacebook = response => {
  console.log(response);
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    var a = new Date();

    this.initState = {
      memEmail: "",
      memPassword: "",
      password2: "",
      memCreate: a,
    };
    this.state = this.initState;
  }

  handleChange = (evt) => {
    let key = evt.target.id;
    let value = evt.target.value;
    console.log(value);
    this.setState({
      [key]: value
    });
  };

  clean = (evt) => {
    evt.preventDefault()
    document.getElementById('memEmail').value = ""
    document.getElementById('memPassword').value = ""
    document.getElementById('password2').value = ""
    this.setState({
      memEmail: "",
      memPassword: "",
      password2: "",
    });
  }


  addHandler = (evt) => {
    var email = this.state.memEmail;
    var password = this.state.memPassword;
    var password2 = this.state.password2;
    console.log(this.state.memEmail);
    console.log(password.length);
    console.log(password2);
    console.log(this.state);
    evt.preventDefault();
    // ---------表單驗證-----------------

    var a = document.getElementById("emailWarming");
    var b = document.getElementById("passwordWarming");
    var c = document.getElementById("passwordWarming2");

    var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    b.innerHTML = "";
    a.innerHTML = "";
    c.innerHTML = "";
    if (!emailRule.test(email)) {
      a.innerHTML = "";
      a.innerHTML = "請輸入正確格式";
    } else {
      a.innerHTML = "";
    }
    if (password.length < 6) {
      b.innerHTML = "";
      b.innerHTML = "密碼長度不能少於6碼";
    } else {
      b.innerHTML = "";
    }
    if (password !== password2) {
      c.innerHTML = "";
      c.innerHTML = "與上面密碼不符";
    } else {
      c.innerHTML = "";
    }
    if (emailRule.test(email) && password.length >= 6 && password == password2) {
      c.innerHTML = "";
      a.innerHTML = "";
      b.innerHTML = "";
      console.log("www")
      // ---------------------------------------------

      //將新增的會員資料傳給父元件 memberAdd > function
      // this.props.memberAdd(this.state);
      delete this.state.password2;
      // this.state.memCreate = new Date()
      this.setState(this.initState);
      // ----------------fetch post註冊---------------------
      fetch("http://localhost:3000/mem/signUp", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json()) //{message:"新增成功"}


        .then(sign => {
          var a = document.getElementById("emailWarming");
          console.log(sign.message.message);  
          switch (sign.message.message) {
            case "註冊成功":
              alert("註冊成功");
              this.props.history.replace("/signupsuccess/" + email);
              break;
            case "此帳號已註冊過":
              a.innerHTML = sign.message.message;
              break;
          }
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NormalNav />
        <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-signUp">
          <div className="rb-long-bg pb-5"></div>
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">
                會員註冊
                </h3>

              <div className="container col-7 mt-3 rb-block-w py-3 px-3 rb-logIn">
                <form action="" method="post" id="form">
                  <div className="form-group text-left">
                    <label htmlFor="user">
                      Email Address(此E-mail將成為您的帳號)
                      </label>
                    <input
                      type="email"
                      id="memEmail"
                      value={this.state.memEmail}
                      onChange={this.handleChange}
                      className="form-control"
                      aria-describedby="emailHelp"
                      name="memEmail"
                      placeholder="請填入你的E-mail"
                    />
                    <span id="emailWarming" className="rb-dangerous" />
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="memPassword"
                      value={this.state.memPassword}
                      onChange={this.handleChange}
                      className="form-control"
                      name="memPassword"
                      placeholder="請填入你的密碼"
                    />
                    <span id="passwordWarming" className="rb-dangerous" />
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password2"
                      value={this.state.password2}
                      onChange={this.handleChange}
                      className="form-control"
                      name="password"
                      placeholder="請再次填入你的密碼"
                    />
                    <span id="passwordWarming2" className="rb-dangerous" />
                  </div>

                  <div className="d-flex justify-content-center mt-3 mb-3">
                    <button id="resetB" className="rb-themeBtn-w mr-2" onClick={this.clean}>
                      清除資料
                      </button>
                    <button
                      onClick={this.addHandler}
                      className="rb-themeBtn-w"
                    >
                      確認註冊
                      </button>
                  </div>
                  <div className="d-flex justify-content-center bd-highlight">
                    <p className="mr-3">
                      已有帳號?
                        <Link to="/login" className="ml-1">
                        登入
                        </Link>
                    </p>
                  </div>
                  <div className="text-left mb-5">
                    <small>
                      點擊「註冊」即表示你同意我們的使用條款、資料政策和
                      Cookie
                      政策。你可能會收到我們的簡訊通知，而且可以隨時選擇停止接收。
                      </small>
                  </div>
                  <div className="d-flex justify-content-center my-5">
                    <div className=" ba circle d-flex justify-content-center  align-items-center">
                      <span className="cir align-items-center">
                        <h6 className="mph6">or</h6>
                      </span>
                    </div>
                  </div>
                </form>
                <FacebookLogin
                  appId="290062751613802"
                  autoLoad
                  callback={responseFacebook}
                  render={renderProps => (
                    <button
                      className="rb-themeBtn-long-w mb-2"
                      onClick={renderProps.onClick}
                    >
                      facebook註冊
                      </button>
                  )}
                />
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
  // componentDidMount(){
  //     function form_check() {
  //         console.log(this.state.memEmail.value);
  //         var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([az]{2,6}(?:\.[a-z]{2})?)$/i;
  //         if(! this.state.memEmail.value) {
  //         alert('請填寫 email !');
  //         return false;
  //         }
  //         if(! pattern.test(this.state.memEmail.value) ) {
  //         alert('請填寫正確格式的 email !');
  //         return false;
  //         }
  //         if(! this.state.memPassword.value) {
  //         alert('請填寫密碼 !');
  //         return false;
  //         }
  //         }

  // function a() {
  //     document.getElementById("#resetB").addEventListener('click', function (evt) {
  //         document.getElementById("#user").val('');
  //         document.getElementById("#password").val('');
  //         document.getElementById("#password2").val('');
  //     });
  // }
  // }
}

export default SignUp;
