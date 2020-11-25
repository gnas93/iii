import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { timKiemKhoaHocAction, layDanhSachKhoaHocAction,dangKyKhoaHocAction, layKhoaHocTheoDanhMucAction } from "../../redux/actions/QuanLyKhoaHocAction";
import { settings } from "../../common/Config/settings";

export class CourseForList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tenKhoaHoc: ""
		};
		console.log("state", this.state);
	}
	componentDidMount() {
		//Gọi action lấy danh mục khoá học
        this.props.layDanhSachKhoaHoc();

	}

	handleChange = e => {
		let { value, name } = e.target;
		const stateTam = { ...this.state, [name]: value };

		this.setState({ [name]: value });

		if (name === "tenKhoaHoc") {
			this.props.timKiemKhoaHoc(stateTam);
		}
	};

	handleSubmit = e => {
		e.preventDefault(); //chặn submit của browser
		this.props.timKiemKhoaHoc(this.state); // đưa dữ liệu lên action
	};

	authDangKy = (khoaHoc) => {
        let isLogin = JSON.parse(localStorage.getItem(settings.userLogin));
        let userLogin= isLogin.taiKhoan;

        let thongTinDangKy = {maKhoaHoc:khoaHoc.maKhoaHoc,taiKhoan:userLogin}

		if (isLogin !== null) {
			return (
				<div>
					<NavLink to={`/user/coursedetail/${khoaHoc.maKhoaHoc}`} className="btn btn-danger">
						Chi Tiết
					</NavLink>
					<button className="btn btn-success" title="Delete" onClick={() => this.props.dangKyKhoaHoc(thongTinDangKy)}>
						Đăng Ký
					</button>
				</div>
			);
		} else {
			return (
				<div>
					<NavLink to={`/coursedetail/${khoaHoc.maKhoaHoc}`} className="btn btn-success">
						Chi Tiết
					</NavLink>
					<button className="btn btn-success" title="Delete" onClick={() => this.props.dangKyKhoaHoc(thongTinDangKy)}>
						Đăng Ký
					</button>
				</div>
			);
		}
	};

	
	renderKhoaHocTheoDanhMuc = () => {
		//đầu vào là mảng khoá học
		return this.props.mangKhoaHocTheoDanhMuc.map((khoaHoc, index) => {
			return (
				<div className="col-md-3">
					<div className="card text-white bg-primary">
						<img className="card-img-top" src={khoaHoc.hinhAnh} />
						<div className="card-body">
							<h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
							{this.authDangKy(khoaHoc)}
						</div>
					</div>
				</div>
			);
		});
	};

	renderTimKiemKhoaHoc = () => {
		return this.props.mangTimKiemKhoaHoc.map((khoaHoc, index) => {
			return (
				<div className="col-md-3">
					<div className="card text-white bg-primary">
						<img className="card-img-top" src={khoaHoc.hinhAnh} />
						<div className="card-body">
							<h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
							{this.authDangKy(khoaHoc)}
						</div>
					</div>
				</div>
			);
		});
	};



	render() {
		return (
			<div className="container">
				<div className="row">
					<form className="col" onSubmit={this.handleSubmit}>
						<div className="input-group">
							<input className="form-control" type="text" name="tenKhoaHoc" onChange={this.handleChange} placeholder="Search" />
							<div className="input-group-append">
								<button className="btn btn-warning" type="button">
									<i className="fa fa-search" />
								</button>
							</div>
						</div>
					</form>
				</div>

				<div className="row justify-content-md-left">
					{this.props.mangTimKiemKhoaHoc.length === 0 && this.renderKhoaHocTheoDanhMuc()}
					{this.renderTimKiemKhoaHoc()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		// mangKhoaHoc: state.QuanLyKhoaHocReducer.mangKhoaHoc,
		mangKhoaHocTheoDanhMuc: state.QuanLyKhoaHocReducer.mangKhoaHocTheoDanhMuc,
		mangDanhMucKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhMucKhoaHoc,
		mangTimKiemKhoaHoc: state.QuanLyKhoaHocReducer.mangTimKiemKhoaHoc
	};
};

const mapDispatchToProps = dispatch => {
	return {
		layDanhSachKhoaHoc: () => {
			dispatch(layDanhSachKhoaHocAction());
		},
		timKiemKhoaHoc: tenKhoaHoc => {
			dispatch(timKiemKhoaHocAction(tenKhoaHoc));
			console.log("ten Khoa Hoc Dispatch", tenKhoaHoc);
		},
		dangKyKhoaHoc: thongTinDangKy => {
			dispatch(dangKyKhoaHocAction(thongTinDangKy));
		},
	
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CourseForList);
