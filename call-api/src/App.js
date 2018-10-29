import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/menu'
import ProductList from './components/ProductList/productList'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <div className= "col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <buttom type="buttom" className="btn btn-info mb-10">
                Add List
              </buttom>
              <ProductList />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
