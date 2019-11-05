import React, { Component } from 'react';
import MemberModify from './memberModify'
import "./memberForm.scss";
import MallFloatBar from "../nav/mallFloatBar";
import MemNav from "../nav/memNav";

class MemberChange extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        var a = JSON.parse(localStorage.getItem("members"))
        return (
            <React.Fragment>
                <MallFloatBar />
                <MemNav />
                <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-memberForm">
                    <div className="rb-long-bg pb-5"></div>
                    <div className="container rb-z">
                        <div className="row mb-4">
                            <h3 className="text-center rb-session-title-w mt-5">
                                會員個人資料
                            </h3>

                            <div className="col-12 mt-3 rb-block-w py-3 px-3">
                                <p className="text-center">在此可直接觀看及修改個人資料並送出更新</p>
                                <MemberModify memEmail={a.members.memEmail} />
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment >
        );
    }
}
export default MemberChange;