import React, { Component } from "react";
import RoDomo from "./mall/ro_domo";
import RoDomo2 from "./mall/ro_domo2";
import SimpleSlider from "./mall/ro_SimpleSlider";
import SimpleSlider2 from "./mall/ro_SimpleSlider2";
import MallFloatBar from "./nav/mallFloatBar";

class Store extends Component {
  constructor(props) {
    super(props);
    this.category = props.match.params.category;
    this.state = {
      products: [],
      products2: [],
      products3: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch("http://localhost:3000/pro/productsPage/1")
      .then(res => res.json())
      .then(pro => {
        console.log(pro);
        this.setState({ products: pro.datas });
      });

    fetch("http://localhost:3000/pro/productsPage/3")
      .then(res => res.json())
      .then(pro2 => {
        console.log(pro2);
        this.setState({ products2: pro2.datas });
      });
      
    fetch("http://localhost:3000/pro/productsPage/7")
      .then(res => res.json())
      .then(pro3 => {
        console.log(pro3);
        this.setState({ products3: pro3.datas });
      });
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
       <MallFloatBar/>
        <SimpleSlider />

        <RoDomo products={this.state.products} />

        <SimpleSlider2 products={this.state.products3} />

        <RoDomo2 products={this.state.products2} />
      </React.Fragment>
    );
  }
}

export default Store;
