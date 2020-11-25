import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Input, Dropdown, Icon, Avatar } from 'antd';

const { Search } = Input;

const normalUser = (
  <Menu>
    <Menu.Item key="0">
      <NavLink exact to='/user/profile'>
        <Icon type="user" />&nbsp;&nbsp;Trang cá nhân
      </NavLink>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="#"
        onClick={() => RightMenu.logout()}>
        <Icon type="logout" />&nbsp;&nbsp;Thoát tài khoản
      </a>
    </Menu.Item>
  </Menu>
);

const adminUser = (
  <Menu>
    <Menu.Item key="0">
      <NavLink exact to='/admin/profile'>
        <Icon type="user" />&nbsp;&nbsp;Trang quản lý
      </NavLink>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="#"
        onClick={() => RightMenu.logout()}>
        <Icon type="logout" />&nbsp;&nbsp;Thoát tài khoản
      </a>
    </Menu.Item>
  </Menu>
);

class RightMenu extends Component {

  constructor(props) {
    super(props);
  }

  static logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {

    let userInfo = JSON.parse(localStorage.getItem('userLogin'));
    return (
      <div>
        <div className="right-menu">
          <Menu mode="horizontal">
            <Menu.Item>
              <Search
                placeholder="Tìm kiếm khóa học"
                // onSearch={value => console.log(value)}
                onSearch={keySearch => this.props.history.push('/search-result/' + keySearch)}
                style={{ width: 200 }}
              />
            </Menu.Item>
            <Menu.Item>
              <a href="">
                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
              </a>
            </Menu.Item>
            {
              localStorage.getItem('token') ?
                <Menu.Item>
                  {userInfo.maLoaiNguoiDung === "GV" ?
                    <Dropdown overlay={adminUser}>
                      <a className="ant-dropdown-link" href="#">
                        <Avatar>U</Avatar>&nbsp;&nbsp;Chào {userInfo.hoTen}
                      </a>
                    </Dropdown> :
                    <Dropdown overlay={normalUser}>
                      <a className="ant-dropdown-link" href="#">
                        <Avatar>U</Avatar>&nbsp;&nbsp;Chào {userInfo.hoTen}
                      </a>
                    </Dropdown>}
                </Menu.Item> :
                <Menu.Item>
                  <NavLink exact to='/login' className="nav-link" href="#">Đăng nhập</NavLink>
                </Menu.Item>
            }
          </Menu>
        </div>
      </div>
    );
  }
}
export default withRouter(RightMenu);
