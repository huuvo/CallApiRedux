import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

class ProductListPage extends Component {
  render() {
    var products = [];
    return (
      <div className= "col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <buttom type="buttom" className="btn btn-info mb-10">
          Add List
        </buttom>
        <ProductList />
        {this.showProducts(products)}
      </div>
    );
  }
  showProducts = (products) => {
    if (products.length > 0) {
      return products.map ((product, index) => {
        return (
          <ProductItem 
            key = {index}
            product= {product}
            index= {index}
          />
        )
      })
    }

  }
}

export default ProductListPage;
