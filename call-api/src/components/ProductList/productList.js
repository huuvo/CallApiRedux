import React, { Component } from 'react';
import ProductItem from './../ProductItem/productItem'
class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
          </div>
          <div className="panel-body">
          <table class="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Trạng Thái </th>
                  <th>Hành Động</th>

                </tr>
              </thead>
              <tbody>
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default ProductList;
