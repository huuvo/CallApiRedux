import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';

const menus = [
  {
    name : 'Trang Chủ',
    to :'/',
    exact : true
  },
  {
    name :'Quản Lý Sản Phẩm',
    to : '/product-list',
    exact : false
  }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path ={to}
      exact= {activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
              <Link to={to}>
                {label}
              </Link>
          </li>
        );
        }}
    />
  );
};
class Menu extends Component {

  showMenu = (menus) => {
    var result = null;
    console.log(menus, menus.lenght);
      return menus.map ((menu,index) => {
        return (
          <MenuLink 
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact= {menu.exact}
          />
        )
      })
  }
  render() {
    return (
      <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">All Call API</a>
            </div>
            <ul className="nav navbar-nav">
               {this.showMenu(menus)}
            </ul>
          </div>
      </div>
    );
  }
  

  
}

export default Menu;
