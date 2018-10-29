import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>01</td>
        <td>021</td>
        <td>Sam Sum</td>
        <td>
          <span className="label label-warning">
            Còn Hàng
          </span>
        </td>
        <td>
          <button type="button" className="btn btn-info">Còn Hàng</button>
        </td>
        <td>
          <button type="button" className="btn btn-danger">Hết Hàng</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
