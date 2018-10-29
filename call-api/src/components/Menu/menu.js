import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">All Call API</a>
            </div>
            <ul className="nav navbar-nav">
              <li className=""><a href="#">Trang Chủ</a></li>
              <li><a href="#">Thêm Sản Phẩm</a></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Menu;
