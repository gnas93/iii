import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink ,Link} from "react-router-dom";
import { layDanhMucKhoaHocAction, layKhoaHocTheoDanhMucAction } from '../../redux/actions/QuanLyKhoaHocAction';
import { settings } from "../../common/Config/settings";
import { Navbar, Nav, } from "react-bootstrap";

export class HeaderUser extends Component {

	componentDidMount() {
		//Gọi action lấy danh mục khoá học
		this.props.layDanhMucKhoaHoc();
		this.props.layKhoaHocTheoDanhMuc();
	  }
	
	renderDanhMucKhoaHoc = () => {
		return this.props.mangDanhMucKhoaHoc.map((dmkh, index) => {
		  return (
			  <NavLink to={`/user/courseforlist`} key={index} className="dropdown-item" onClick={() => this.props.layKhoaHocTheoDanhMuc(dmkh.maDanhMuc)}>{dmkh.tenDanhMuc}</NavLink>
		  )
		})
	}

	  handleSubmit = e => {
		e.preventDefault(); //chặn submit của browser
	};


	logout=()=>{
		localStorage.removeItem(settings.token);
		localStorage.removeItem(settings.userLogin);
		
	}


	render() {
		let userLogin = JSON.parse(localStorage.getItem(settings.userLogin));
		let userName = userLogin.hoTen
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img alt="" src={require("../../assets/images/logo.png")} width="30" height="30" className="d-inline-block align-top" />
					<NavLink to="/">E.Schools</NavLink>
				</Navbar.Brand>
				<Nav>
						<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
									Danh Mục Khóa Học
								</a>
								<div className="dropdown-menu">
									{this.renderDanhMucKhoaHoc()}
								</div>
						</li>
				</Nav>
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
		nguoiDangNhap: state.QuanLyNguoiDungReducer.nguoiDangNhap,
		mangDanhMucKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhMucKhoaHoc,
		mangKhoaHocTheoDanhMuc: state.QuanLyKhoaHocReducer.mangKhoaHocTheoDanhMuc,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	  layDanhMucKhoaHoc: () => {
		dispatch(layDanhMucKhoaHocAction());
	  },
	  layKhoaHocTheoDanhMuc:(maDanhMuc)=>{
		dispatch(layKhoaHocTheoDanhMucAction(maDanhMuc));
	  }
	}
  }



export default connect(mapStateToProps,mapDispatchToProps)(HeaderUser);
