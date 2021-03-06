import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import calllApi from './../../api/Api';
import {Link } from 'react-router-dom';
class ProductListPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
}
componentDidMount() {
  calllApi('products', 'GET', null).then(res =>{
    this.setState({
      products : res.data
    });
  });
}

  render() {
    
    var {products} = this.state;

    return (
      <div className= "col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to = "/product/add" className="btn btn-info mb-10">
          Add List
        </Link>
        <ProductList>
        {this.showProducts (products)}
        </ProductList>
       
      </div>
    );
  }
  showProducts = (products) => {
    if (products.length > 0) {
      return products.map ((product, index) => {
        return (
          <ProductItem 
            key = {index}
            product={product}
            index= {index}
          />
        );
      });
    }
  }
}
const mapStateToProps = state => {
  return{
    products : state.products
  }
};

const mapDispatchToProps = ()=> {
  return {

  }
}

export default connect(mapStateToProps, null)(ProductListPage);
