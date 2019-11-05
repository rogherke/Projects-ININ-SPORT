import React, { Component } from 'react';
import { BrowserRouter, Router, Link } from 'react-router-dom';

class PasswordReset extends Component {
    constructor(props) {
        super(props)
        this.memSid = props.match.params.memSid;

        this.initState = {
            memPassword: ""
        }
        this.state = this.initState;
    }

    handleChange = (evt) => {
        let key = evt.target.id
        let value = evt.target.value
        this.setState({
            [key]: value,
        })
    }

    putHandler = (evt) => {
        evt.preventDefault();
        var a = document.getElementById("password1")
        var b = document.getElementById("password2")
        if (this.state.memPassword != this.state.memPassword2) {
            b.innerHTML = "密碼與上面不相符"
        } else {
            delete this.state.memPassword2;
            fetch("http://localhost:3000/mem/members/" + this.props.memEmail, {
                method: "PUT",
                body: JSON.stringify(this.state),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
                .then(res => res.json())
                .then(setState => {
                    alert("密碼修改完成");
                    window.location.assign("http://localhost:3001/");
                });
        };
    }

    render() {
        return (
            <div className="container">
                <h4>重新設定密碼</h4>
                <form className="d-flex d-row  flex-column align-items-center ">
                    <div className="form-group col-6">
                        <input type="password" id="memPassword" value={this.state.memPassword} onChange={this.handleChange}
                            className="form-control" name="memEmail" placeholder="輸入你的新密碼" />
                        <span id="password1"></span>
                    </div>
                    <div className="form-group col-6">
                        <input type="password" id="memPassword2" value={this.state.memPassword2} onChange={this.handleChange}
                            className="form-control" name="memEmail" placeholder="再次填入確認新密碼" />
                        <span id="password2"></span>
                    </div>
                    <div className="form-group col-6">
                        <button onClick={this.putHandler} className="btn btn-primary col">變更密碼</button>
                    </div>
                    <Link to="/login">或返回到登入頁面??</Link>

                </form>
            </div>
        );
    }
}
export default PasswordReset;