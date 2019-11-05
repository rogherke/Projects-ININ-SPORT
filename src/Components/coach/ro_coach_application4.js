import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_coach_application4.scss";
import $ from "jquery";

class Application4 extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            coa: []
        }
    }
    gotoIndex = evt => {
        evt.preventDefault();
        window.location.assign("http://localhost:3001/");
    };

    componentDidMount() {
        this.getCoach()
    }

    getCoach() {
        fetch("http://localhost:3000/coach/get")
            .then(res => res.json())
            .then(coa => {
                this.setState({ coa: coa[0] });
            });
    }

    render() {
        console.log(this.state.coa)
        var a = this.state.coa
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <form className="check-form">
                            <div className="rb-checkout2">
                                <h3 className="text-center rb-session-title my-3">教練申請資料</h3>

                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">身份證字號：</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <span>{a.coaIdNum}</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">擅長的運動：</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <span>{a.coaSport}</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">學歷</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <span>{a.coaEdu}</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">系所：</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <span>{a.coaMaj}</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">學業狀況：</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <span>555</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">簡介：</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <span>{a.coaInfo}</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">大頭照：</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <img src={`http://localhost:3000/images/${a.coaImg}`} alt="" title="" />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            {/* ))} */}
                            <div className="d-flex justify-content-center my-5">
                                <button className="rb-themeBtn-main-w" onClick={this.gotoIndex}>
                                    確認
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Application4;