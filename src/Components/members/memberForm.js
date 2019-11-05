import React, { Component } from 'react';
import MemberModify from './memberModify'
import "./memberForm.scss";

class MemberForm extends Component {
    constructor(props) {
        super(props)
        this.memEmail = props.match.params.memEmail;
        console.log(props)
    }
    render() {
        return (
              <React.Fragment>
               
                <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-memberForm">
          <div className="rb-long-bg pb-5"></div>
            <div className="container rb-z">
              <div className="row mb-4">
                <h3 className="text-center rb-session-title-w mt-5">
                恭喜成為ININ SPORT會員
                </h3>

                <div className="col-12 mt-3 rb-block-w py-3 px-3">
             <p className="text-center">認證成功！完成基本資料即可享有各種優惠！</p>
                    <MemberModify memEmail = {this.memEmail} />
                </div>
              </div>
            </div>
         
        </div> 
  </React.Fragment >
        );
    }
}
export default MemberForm;