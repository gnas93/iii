import React, { Component } from "react";
import { connect } from "react-redux";
import { layDanhSachKhoaHocAction, xoaKhoaHocAction, timKiemKhoaHocAction, chinhSuaKhoaHocAction } from "../../redux/actions/QuanLyKhoaHocAction";
import "./ListCourse.css";
import UpdateCourseModal from "../UpdateCourseModal/UpdateCourseModal";

export class ListCourse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tuKhoa: ""
		};
	}

	componentDidMount() {
		//Gọi action lấy danh mục khoá học
		this.props.layDanhSachKhoaHoc();
		this.renderTimKiemKhoaHoc();
	}

	handleChange = e => {
		let { value, name } = e.target;
		const stateTam = { ...this.state, [name]: value };

		this.setState({ [name]: value });

		if (name === "tuKhoa") {
			this.props.timKiemKhoaHoc(stateTam);
		}
	};

	handleSubmit = e => {
		e.preventDefault(); //chặn submit của browser
		this.props.timKiemKhoaHoc(this.state); // đưa dữ liệu lên action
	};

	renderTimKiemKhoaHoc = () => {
		return this.props.mangTimKiemKhoaHoc.map((khoaHoc, index) => {
			return (
				<tr key={index}>
					<td> {index + 1} </td>
					<td> {khoaHoc.tenKhoaHoc} </td>
					<td> {khoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc} </td>
					<td> {khoaHoc.maKhoaHoc} </td>
					<td>
						<button
							type="button"
							className="settings btn btn-primary"
							title="Update"
							data-toggle="modal"
							data-target="#ModalUpdateCourse"
							onClick={() => this.props.chinhSuaKhoaHoc(khoaHoc)}>
							<i className="material-icons"></i>
						</button>
						<UpdateCourseModal />
						<button className="delete btn btn-danger" title="Delete">
							<i class="material-icons" onClick={() => this.props.xoaKhoaHoc(khoaHoc.maKhoaHoc)}>
								delete
							</i>
						</button>
					</td>
				</tr>
			);
		});
	};

	renderDanhSachKhoaHoc = () => {
		return this.props.mangKhoaHoc.map((khoaHoc, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td> {khoaHoc.tenKhoaHoc} </td>
					<td> {khoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc} </td>
					<td>{khoaHoc.maKhoaHoc}</td>
					<td>
						<button
							type="button"
							className="settings btn btn-primary"
							title="Update"
							data-toggle="modal"
							data-target="#ModalUpdate"
							onClick={() => this.props.chinhSuaKhoaHoc(khoaHoc)}>
							<i className="material-icons" />
						</button>
						<UpdateCourseModal />
						<button className="delete btn btn-danger" title="Delete">
							<i class="material-icons" onClick={() => this.props.xoaKhoaHoc(khoaHoc.maKhoaHoc)}>
								delete
							</i>
						</button>
					</td>
				</tr>
			);
		});
	};

	render() {
		console.log('mang tim kiem khoa hoc', this.props.mangTimKiemKhoaHoc)
		return (
			<div>
				<div className="container">
					<div className="table-wrapper">
						<div className="table-title">
							<div className="row">
								<div className="col-sm-5">
									<h2>Quản Lý Khoá Học</h2>
								</div>

								<form className="col-sm-7 " onSubmit={this.handleSubmit}>
									<div className="search">
										<input className="form-control " name="tuKhoa" onChange={this.handleChange} />
										<button className="btn btn-primary btn-sm btn-searchUser">Search</button>
									</div>
								</form>
							</div>
							<table className="table table-striped table-hover">
								<thead>
									<tr>
										<th>#</th>
										<th>Tên Khóa Học</th>
										<th>Danh Mục Khoá Học</th>
										<th>Mã Khoá Học</th>
									</tr>
								</thead>
								<tbody>
									{this.props.mangTimKiemKhoaHoc.length === 0 && this.renderDanhSachKhoaHoc()}
									{this.renderTimKiemKhoaHoc()}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		mangKhoaHoc: state.QuanLyKhoaHocReducer.mangKhoaHoc,
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
		xoaKhoaHoc: maKhoaHoc => {
			dispatch(xoaKhoaHocAction(maKhoaHoc));
		},
		chinhSuaKhoaHoc: khoaHocSua => {
			dispatch(chinhSuaKhoaHocAction(khoaHocSua));
			console.log("khoaHocSua", khoaHocSua);
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListCourse);
