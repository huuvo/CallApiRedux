import React, { Component } from 'react';

class ProductActionPage extends Component {
  render() {
    return (
      <div className= "col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <form>
            <div className="form-group">
              <label >Tên Sản Phẩm:</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Giá:</label>
              <input type="number" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Trạng Thái :</label>
            </div>    
            <div className="checkbox">
            <label>
              <input type="checkbox"/>
               Còn Hàng
              </label>
            </div>  
         
            <button type="submit" className="btn btn-default">Lưa Lại</button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
