import React, {Component} from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';
import "./signUpSuccess.scss";

class SignUpSuccess extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.memEmail = props.match.params.memEmail;
    }
    handleEmail= (evt) =>{
        evt.preventDefault();
        fetch("http://localhost:3000/email/" +  this.memEmail) 
        .then(res => res.json()) 
        .then(post=> {
            alert(post)
        })
    }

    render() {
        return (
            <React.Fragment>

 <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-signUpSuccess">
          <div className="rb-long-bg pb-5">
            <div className="container">
              <div className="row mb-4">
                <h3 className="text-center rb-session-title-w mt-5">
                感謝您註冊成為會員！
                </h3>

                <div className="container col-7 mt-3 rb-block-w py-3 px-3 text-center">
                <p>已發送認證信至信箱</p>
                        <h4 className="text-center my-3">{this.memEmail}</h4>
                        
                   <p>若無收到則可能被送至垃圾信箱，請再次搜索或點擊重發</p>
                    <Link to="#" onClick={this.handleEmail} className="rb-themeBtn-long-w my-3">重發認證信</Link>
                </div>
              </div>
            </div>
          </div>
        </div> 
            </React.Fragment>
            
        );
    }
}
export default SignUpSuccess;