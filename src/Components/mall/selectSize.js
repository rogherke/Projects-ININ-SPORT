import React, { Component } from 'react';
import $ from "jquery";

class SelectSize extends Component {
    constructor(props) {
        super(props)
        this.state = {
            proSize: this.props.proSize
        }
    }

    handleChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            proSize: evt.target.value
        })
        var a = JSON.parse(localStorage.getItem("buyCart"));
        var b = parseInt(evt.target.dataset.all);
        var result = $.map(a, function (item, index) {
            return item.proNum;
        }).indexOf(b);
        console.log(b)
        console.log(result)
        a.splice(result, 1, {
            qty: a[result].qty,
            proActive: a[result].proActive,
            proColor: a[result].proColor,
            proCreate: a[result].proCreate,
            proFormat: a[result].proFormat,
            proImg: a[result].proImg,
            proInfo: a[result].proInfo,
            proName: a[result].proName,
            proNum: a[result].proNum,
            proOPrice: a[result].proOPrice,
            proPrice: a[result].proPrice,
            proSid: a[result].proSid,
            proSize: evt.target.value,
            proSpec: a[result].proSpec,
            proStorage: a[result].proStorage,
            proTag: a[result].proTag,
            proType: a[result].proType
        });
        localStorage.setItem("buyCart", JSON.stringify(a));
    }
    render() {
        return (
            <select
                className="custom-select "
                id="clothesSize"
                data-all={this.props.proNum}
                value={this.state.proSize}
                onChange={this.handleChange}
            >
                <option selected disabled>請選擇尺寸</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>

            </select>
        )
    }

} export default SelectSize;
