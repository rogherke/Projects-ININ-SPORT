import React, { Component } from 'react';
import '../rbFormalStyle/rbFormalStyle.scss';
import './login.scss';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import FacebookLogin from './facebook';

const responseFacebook = (response) => {
    console.log(response);
};

// // setter
// sessionStorage.setItem('myData', data);

// // getter
// sessionStorage.getItem('myData');

class Login extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.initState = {
            memEmail: "",
            memPassword: "",
            member: []
        }
        this.state = this.initState;
    }

    forget = (e) => {
        e.preventDefault();
        window.location.replace('/forget');
    }
    signup = (e) => {
        e.preventDefault();
        window.location.replace('/signup');
    }

    handleChange = (evt) => {
        let key = evt.target.id
        let value = evt.target.value
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

        var a = document.getElementById("semailWarming");
        var b = document.getElementById("spasswordWarming")
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
                    var a = document.getElementById("semailWarming")
                    var b = document.getElementById("spasswordWarming")
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
                });
        }
    }

    render() {
        localStorage.setItem('myData', JSON.stringify(this.state.member));
        return (
            <div className="container rb-logIn">
                <h3 className="rb-session-title text-center">會員登入</h3>
                <form action="http://localhost:3000/mem/login" method="post" id="form">
                    <div className="form-group text-left">
                        <label htmlFor="user">電子郵件</label>
                        <input type="email" id="memEmail" value={this.state.memEmail} onChange={this.handleChange} className="form-control" aria-describedby="emailHelp"
                            name="memEmail" placeholder="請輸入您的E-mail" />
                        <span id="semailWarming" className="rb-dangerous"></span>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="password">密碼</label>
                        <input type="password" id="memPassword" value={this.state.memPassword} onChange={this.handleChange} className="form-control" name="memPassword"
                            placeholder="請輸入您的密碼" />
                        <span id="spasswordWarming" className="rb-dangerous"></span>
                    </div >
                    <div className="d-flex justify-content-around mt-3 mb-3">
                        <button id="resetB" className=" rb-themeBtn-w mr-2" onClick={this.clean}>清除資料</button>
                        <button onClick={this.addHandler} className=" rb-themeBtn-w">確認登入</button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="">還沒有帳號？<span onClick={this.signup} className="rb-p-btn rb-gray">註冊</span></p>
                        <p onClick={this.forget} className="rb-p-btn rb-gray">忘記密碼?</p>
                    </div>
                    <div className="text-left">
                        <small>您的登入狀態將保留14天（或直到您登出）</small>
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <div className=" ba circle d-flex justify-content-center  align-items-center">
                            <span className="cir align-items-center"><h6 className="mph6">or</h6></span>
                        </div>
                    </div>
                </form>
                <FacebookLogin appId="290062751613802" autoLoad callback={responseFacebook}
                    render={renderProps => (<button className=" rb-themeBtn-long-w" onClick={renderProps.onClick}>facebook註冊</button>)}
                />
            </div>
        );
    }
}

export default Login;