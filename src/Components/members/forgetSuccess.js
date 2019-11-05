import React, {Component} from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';

class ForgetSuccess extends Component {
    constructor(props) {
        super(props)
        this.memEmail = props.match.params.memEmail;
    }

    handleEmail= (evt) =>{
        evt.preventDefault();
        fetch("http://localhost:3000/forget/" +  this.memEmail) 
        .then(res => res.json()) 
        .then(post=> {
            alert(post)
        })
    }


    render() {
        return (
            <div className="container">
                <h4>重新發送認證信至信箱</h4>
                <div className="d-flex d-row  flex-column align-items-center ">
                    <div className="form-group col-6 ">
                        <h5 className="text-center">{this.memEmail}</h5>
                    </div>
                    <div className="form-group col-6 ">
                    <h5 className="mr-3">已重新發送認證信至您剛填寫的email,若還是無發收,有可能被歸類置垃圾郵件,請至垃圾郵件中搜索或再次點擊<Link to=""  onClick={this.handleEmail}>重發認證信</Link></h5>
                    </div>
                </div>    
            </div>    
        );
    }
}
export default ForgetSuccess;