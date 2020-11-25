import React, { Component } from "react";
import { connect } from "react-redux";
import { settings } from "../../common/Config/settings";
import { NavLink } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

export class HeaderAdmin extends Component {
	logout=()=>{
		localStorage.removeItem(settings.token);
		localStorage.removeItem(settings.userLogin);
		
	}

	render() {
		let userLogin = JSON.parse(localStorage.getItem(settings.userLogin));
		let userName = userLogin.hoTen;
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img alt="" src={require("../../assets/images/logo.png")} width="30" height="30" className="d-inline-block align-top" />
					<span> E.School</span>
				</Navbar.Brand>

				<Nav variant="tabs" className="ml-auto justify-content-end">
					<img alt="" src={require("../../assets/images/banner3.jpg")} width="30" height="30" className="d-inline-block align-top" />
					<Nav.Item>
						<Nav.Link>{userName}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link onClick={()=>this.logout()}><NavLink exact to='/'>Logout</NavLink></Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = state => {
	return {
		nguoiDangNhap: state.QuanLyNguoiDungReducer.nguoiDangNhap
	};
};

export default connect(
	mapStateToProps,
	null
)(HeaderAdmin);
