import React, { Component } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import "./Nav.scss";

import Login from '../members/login';
import SignUp from '../members/signUp'; 
import MemberForm from '../members/memberForm';
import Forget from "../members/forget";
import ForgetSuccess from '../members/forgetSuccess';
import PasswordReset from '../members/passwordReset';

class LogInModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
         <div className="App">
   
          {/* 登入 */}
          <Route  path="/" component={Login} />
          <Route  path="/login" component={Login} />

          {/* 填寫詳細資料 */}
          <Route path="/memberform/:memSid" component={MemberForm} />
          {/* 忘記密碼
          <Route exact path="/forget" component={Forget} /> */}
          {/* 驗證信送出 */}
          <Route path="/forget/:memEmail" component={ForgetSuccess} />
          {/* 重設密碼 */}
          <Route path="/passwordreset/:memSid" component={PasswordReset} />
      </div>
        
      </React.Fragment>
    );
  }
}

export default LogInModal;
