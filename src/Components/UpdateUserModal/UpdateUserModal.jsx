import React, { Component } from 'react'
import { connect } from 'react-redux';
import { capNhatNguoiDungAction, loadMangNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'

export class UpdateUserModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nguoiDung: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "",
                maNhom: "",
                email: ""
            },
            errors: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "",
                maNhom: "",
                email: ""
            },
        };
    }

    componentDidMount() {

        //Dispatch lên store giá trị lấy từ localstorage
        if (localStorage.getItem('mangNguoiDung')) {
            let mangNguoiDung = JSON.parse(localStorage.getItem('mangNguoiDung'));
            //dispatch lên reducer
            this.props.loadMangNguoiDung(mangNguoiDung)
        }
    }

    handleChange = (e) => {
        let { value, name } = e.target;
        this.setState({
            nguoiDung: { ...this.state.nguoiDung, [name]: value }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.capNhatNguoiDung(this.state.nguoiDung)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            nguoiDung: nextProps.nguoiDungSua
        })
    }


    render() {
        return (
            <div className="modal" id="ModalUpdate">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Cập Nhật Thông Tin Người Dùng</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>

                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="col-md-6 col-md-offset-3">
                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Tài Khoản</label>
                                            <input type="text" className="form-control" name="taiKhoan"
                                                value={this.state.nguoiDung.taiKhoan}
                                                onChange={this.handleChange}
                                                onKeyUp={this.handleErrors}
                                                onBlur={this.handleErrors}
                                            />
                                            {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}

                                        </div>
                                        <div className="form-group">
                                            <label >Mật Khẩu</label>
                                            <input type="text" className="form-control" name="matKhau"
                                                value={this.state.nguoiDung.matKhau}
                                                onChange={this.handleChange}
                                                onKeyUp={this.handleErrors}
                                                onBlur={this.handleErrors}
                                            />

                                            {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}

                                        </div>
                                        <div className="form-group">
                                            <label >Họ Và Tên</label>
                                            <input type="text" className="form-control" name="hoTen"
                                                value={this.state.nguoiDung.hoTen}
                                                onChange={this.handleChange}
                                                onKeyUp={this.handleErrors}
                                                onBlur={this.handleErrors}
                                            />

                                            {this.state.errors.hoTen !== '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''}

                                        </div>
                                        <div className="form-group">
                                            <label >Số Điện Thoại</label>
                                            <input className="form-control" name="soDT" value={this.state.soDT} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Mã Loại Người Dùng</label>
                                            <input className="form-control" name="maLoaiNguoiDung" type="text"
                                                value={this.state.nguoiDung.maLoaiNguoiDung}
                                                onChange={this.handleChange}
                                                onKeyUp={this.handleErrors}
                                                onBlur={this.handleErrors}
                                            />

                                            {this.state.errors.maLoaiNguoiDung !== '' ? <div className="alert alert-danger">{this.state.errors.maLoaiNguoiDung}</div> : ''}
                                        </div>
                                        <div className="form-group">
                                            <label >Mã Nhóm</label>
                                            <input className="form-control" name="maNhom"
                                                value={this.state.maNhom}
                                                onChange={this.handleChange}
                                                onKeyUp={this.handleErrors}
                                                onBlur={this.handleErrors}
                                            />

                                            {this.state.errors.maNhom !== '' ? <div className="alert alert-danger">{this.state.errors.maNhom}</div> : ''}

                                        </div>
                                        <div className="form-group">
                                            <label >Email</label>
                                            <input className="form-control" name="email" value={this.state.email}
                                                onChange={this.handleChange}
                                                onKeyUp={this.handleErrors}
                                                onBlur={this.handleErrors} />

                                            {this.state.errors.email !== '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''}

                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit" onClick={() => this.props.capNhatNguoiDung(this.state.nguoiDung)}>Cập Nhật</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
        nguoiDungSua: state.QuanLyNguoiDungReducer.nguoiDungSua,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        capNhatNguoiDung: (nguoiDung) => {
            dispatch(capNhatNguoiDungAction(nguoiDung))
        },
        loadMangNguoiDung: (mangNguoiDung) => {
            dispatch(loadMangNguoiDungAction(mangNguoiDung))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserModal)