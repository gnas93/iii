import React, { Component } from "react";
import { connect } from "react-redux";
import { capNhatKhoaHocAction, loadMangKhoaHocAction } from "../../redux/actions/QuanLyKhoaHocAction";
import { loadMangNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

export class UpdateCourseModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			khoaHoc: {
				maKhoaHoc: "",
				biDanh: "",
				tenKhoaHoc: "",
				moTa: "",
				luotXem: "",
				hinhAnh: "",
				maNhom: "",
				ngayTao: "",
				soLuongHocVien: "",
				nguoiTao: {
					taiKhoan: "",
					hoTen: "",
					maLoaiNguoiDung: "",
					tenLoaiNguoiDung: ""
				},
				danhMucKhoaHoc: {
					maDanhMucKhoaHoc: "",
					tenDanhMucKhoaHoc: ""
				}
			},
			errors: {
				maKhoaHoc: "",
				biDanh: "",
				tenKhoaHoc: "",
				moTa: "",
				luotXem: "",
				hinhAnh: "",
				maNhom: "",
				ngayTao: "",
				soLuongHocVien: "",
				nguoiTao: {
					taiKhoan: "",
					hoTen: "",
					maLoaiNguoiDung: "",
					tenLoaiNguoiDung: ""
				},
				danhMucKhoaHoc: {
					maDanhMucKhoaHoc: "",
					tenDanhMucKhoaHoc: ""
				}
			}
		};
	}

	componentDidMount() {
		//Dispatch lên store giá trị lấy từ localstorage
		if (localStorage.getItem("mangKhoaHoc")) {
			let mangKhoaHoc = JSON.parse(localStorage.getItem("mangKhoaHoc"));
			//dispatch lên reducer
			this.props.loadMangKhoaHoc(mangKhoaHoc);
		}

		if (localStorage.getItem("mangNguoiDung")) {
			let mangNguoiDung = JSON.parse(localStorage.getItem("mangNguoiDung"));
			//dispatch lên reducer
			this.props.loadMangNguoiDung(mangNguoiDung);
		}
	}

	handleChange = e => {
		let { value, name } = e.target;
		this.setState({
			khoaHoc: { ...this.state.khoaHoc, [name]: value }
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.capNhatKhoaHoc(this.state.khoaHoc);
	};

	componentWillReceiveProps(nextProps) {
		this.setState({
			khoaHoc: nextProps.khoaHocSua,
			nguoiDung: nextProps.nguoiDungSua
		});
	}
	renderNguoiDung = () => {
		return this.props.mangNguoiDung.map((nguoiDung, index) => {
			return (
				<option key={index} value={nguoiDung.taiKhoan}>
					{nguoiDung.hoTen}
				</option>
			);
		});
	};

	render() {
		return (
			<div className="modal" id="ModalUpdate">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Cập Nhật Thông Tin Khoá Học</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>

						<div className="modal-body">
							<div className="container-fluid">
								<div className="col-md-6 col-md-offset-3">
									<form name="form" onSubmit={this.handleSubmit}>
										<div className="form-group">
											<label>Tên Khoá Học</label>
											<input
												type="text"
												className="form-control"
												name="tenKhoaHoc"
												value={this.state.khoaHoc.tenKhoaHoc}
												onChange={this.handleChange}
											/>
											{/* {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''} */}
										</div>
										<div className="form-group">
											<label>Mã Khoá Học</label>
											<input
												type="text"
												className="form-control"
												name="maKhoaHoc"
												value={this.state.khoaHoc.maKhoaHoc}
												onChange={this.handleChange}
											/>

											{/* {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''} */}
										</div>
										<div className="form-group">
											<label>Mô tả</label>
											<input
												type="text"
												className="form-control"
												name="moTa"
												value={this.state.khoaHoc.moTa}
												onChange={this.handleChange}
											/>

											{/* {this.state.errors.hoTen !== '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''} */}
										</div>

										<div className="form-group">
											<label>Mã Danh Mục Khoá Học</label>
											<input
												className="form-control"
												name="maDanhMucKhoaHoc"
												type="text"
												value={this.state.khoaHoc.danhMucKhoaHoc.maDanhMucKhoaHoc}
												onChange={this.handleChange}
											/>
										</div>

										<div className="form-group">
											<label>Tên Danh Mục Khoá Học</label>
											<input
												className="form-control"
												name="maDanhMucKhoaHoc"
												type="text"
												value={this.state.khoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc}
												onChange={this.handleChange}
											/>
										</div>

										<div className="form-group">
											<h3>Người tạo</h3>
											<select className="form-control" name="taiKhoanNguoiTao" onChange={this.handleChange}>
												{this.renderNguoiDung()}
											</select>
										</div>

										<div className="form-group">
											<button className="btn btn-success" type="submit" onClick={() => this.props.capNhatKhoaHoc(this.state.khoaHoc)}>
												Cập Nhật
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
		mangKhoaHoc: state.QuanLyKhoaHocReducer.mangKhoaHoc,
		khoaHocSua: state.QuanLyKhoaHocReducer.khoaHocSua,
		nguoiDungSua: state.QuanLyNguoiDungReducer.nguoiDungSua
	};
};

const mapDispatchToProps = dispatch => {
	return {
		capNhatKhoaHoc: khoaHoc => {
			dispatch(capNhatKhoaHocAction(khoaHoc));
		},
		loadMangKhoaHoc: mangKhoaHoc => {
			dispatch(loadMangKhoaHocAction(mangKhoaHoc));
		},
		loadMangNguoiDung: mangNguoiDung => {
			dispatch(loadMangNguoiDungAction(mangNguoiDung));
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UpdateCourseModal);
