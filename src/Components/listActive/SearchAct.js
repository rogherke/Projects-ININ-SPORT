import React, { Component } from "react";

class SearchAct extends Component{
    constructor(props) {
        super(props)
        this.state={
            city: "",
            sport: "",
        }
    }
    componentDidMount(){
       // this.getSears();
      }


    handleChange1 = (evt) => {
        this.setState({
            city: evt.target.value
        },function(){
            console.log(this.state)
           this.props.getSears(this.state)
        })
        
    }
    handleChange2 = (evt) => {
        this.setState({
            sport: evt.target.value
        },function(){
            console.log(this.state)
            this.props.getSears(this.state)
        })
    }
    render() {
        return (
            <React.Fragment>
                  <div className="form-group d-flex justify-content-center align-items-center rb-claSearch">
                    <i class="fas fa-search rb-Icon-search"></i>
                    <select value={this.state.city} onChange={this.handleChange1} className="form-control" id="city" name="actSport">
                        <option>* 選擇城市 </option>
                        <option value="台北市">台北市</option>
                        <option value="新北市">新北市</option>
                        <option value="桃園市">桃園市</option>
                        <option value="新竹市">新竹市</option>
                        <option value="新竹縣">新竹縣</option>
                        <option value="苗栗縣">苗栗縣</option>
                        <option value="台中市">台中市</option>
                        <option value="高雄市">高雄市</option>
                        <option value="南投縣">南投縣</option>
                    </select>
                    <select value={this.state.sport} onChange={this.handleChange2} className="form-control" id="sport" name="actSport">
                        <option>* 選擇課程項目</option>
                        <option value="跑步">跑步</option>
                        <option value="游泳">游泳</option>
                        <option value="瑜珈">瑜珈</option>
                        <option value="爬山">爬山</option>
                        <option value="健身">健身</option>
                        <option value="有氧拳擊">有氧拳擊</option>
                        <option value="國標舞">國標舞</option>
                        <option value="街舞">街舞</option>
                        <option value="攀岩">攀岩</option>
                        <option value="籃球">籃球</option>
                        <option value="排球">排球</option>
                        <option value="棒球">棒球</option>
                        <option value="羽球">羽球</option>
                        <option value="桌球">桌球</option>
                        <option value="撞球">撞球</option>
                        <option value="保齡球">保齡球</option>
                        <option value="足球">足球</option>
                    </select>
                </div>
            </React.Fragment>
        )
    }
}
export default SearchAct;