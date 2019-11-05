import React, { Component } from "react";
import { BrowserRouter, Router, Link } from "react-router-dom";
import NormalNav from "../nav/normalNav";
import './forgot.scss';

class Forget extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      memEmail: ""
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

  putHandler = evt => {
    console.log(this.state);
    evt.preventDefault();
    fetch("http://localhost:3000/mem/forget", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: new Headers({
          "Content-Type": "application/json"
        })   
      })
        .then(res => res.json())
        .then(forget =>  {
          console.log(forget);    
          var a = document.getElementById("emailWarming") 
          if(forget.message.message == "此帳號未註冊" ){
                  a.innerHTML = forget.message.message
          } else {
            this.props.history.replace("/forgetSuccess/" + this.state.memEmail);
          }
      }  
      );
       
  };

  render() {
    return (
      <React.Fragment>
          < NormalNav/>
        <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-forgot ">
          <div className="rb-long-bg pb-5"> </div>
            <div className="container rb-z">
              <div className="row mb-4">
                <h3 className="text-center rb-session-title-w mt-5">
                  忘記密碼
                </h3>

                <div className="container col-7 mt-3 rb-block-w py-3 px-3 rb-logIn">
                  <form className="d-flex d-row  flex-column ">
                      <p className="text-left">
                        請在下面輸入您的信箱。我們會寄一封信給您，裡面含有可以重新設定您的密碼的連結。
                      </p>
                      <input
                        type="email"
                        id="memEmail"
                        value={this.state.memEmail}
                        onChange={this.handleChange}
                        className="form-control mb-3"
                        aria-describedby="emailHelp"
                        name="memEmail"
                        placeholder="請填入你的E-mail"
                      />
                      <span id="emailWarming" ></span>
                      <p className="mr-3">
                        沒有帳號?<Link to="/signUp" className="ml-1 rb-gray">註冊</Link>
                      </p>
                    
                    <button
                      onClick={this.putHandler}
                      className="rb-themeBtn-long-w mb-2"
                    >
                      確認送出
                    </button>
                    <h6 className="text-left">
                      已發送認證信至您剛填寫的email,請點擊內容連結進行認證,認證完即重新設定密碼
                    </h6>
                    <Link to="#" className="rb-gray">沒收到認證信?</Link>
                  </form>
                </div>
              </div>
            </div>
         
        </div>
      </React.Fragment>
    );
  }
}
export default Forget;
