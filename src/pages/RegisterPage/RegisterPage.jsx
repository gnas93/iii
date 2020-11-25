import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction'

export class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nguoiDung: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDT: '',
                email: ''
            },
            errors: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDT: '',
                email: ''
            },
        };
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ values: { ...this.state.values, [name]: value } })
    }

    handleSubmit = (event) => {
        event.preventDefault();//chặn submit của browser
        this.props.dangKy(this.state.values); // đưa dữ liệu lên action 
    }

    //Phương thức kiểm tra lỗi
    handleErrors = (event) => {
        let { name, value } = event.target;
        //Check rỗng
        let loi = value === '' ? name + 'Không được để trống !' : '';
        //Kiểm tra email hợp lệ
        if (name = 'email') {
            let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!regex.test(value)) {
                loi = 'Email không đúng định dạng!';
            }
        }
        //Kiểm tra lỗi
        this.state.valid = loi === '' ? true : false;
        this.setState({
            errors: { ...this.state.error, [name]: loi }
        })
    }

    render() {
        return (
            <div className="container">

                <div className="col-md-6 col-md-offset-3">
                    <h3>Đăng Ký</h3>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Tài Khoản</label>
                            <input type="text" className="form-control" name="taiKhoan"
                                value={this.state.taiKhoan}
                                onChange={this.handleChange}
                                onKeyUp={this.handleErrors}
                                onBlur={this.handleErrors}
                            />
                            {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}

                        </div>
                        <div className="form-group">
                            <label >Mật Khẩu</label>
                            <input type="text" className="form-control" name="matKhau"
                                value={this.state.matKhau}
                                onChange={this.handleChange}
                                onKeyUp={this.handleErrors}
                                onBlur={this.handleErrors}
                            />

                            {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}

                        </div>
                        <div className="form-group">
                            <label >Họ Và Tên</label>
                            <input type="text" className="form-control" name="hoTen"
                                value={this.state.hoTen}
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
                            <label >Email</label>
                            <input className="form-control" name="email" value={this.state.email}
                                onChange={this.handleChange}
                            // onKeyUp={this.handleErrors}
                            // onBlur={this.handleErrors} 
                            />

                            {/* {this.state.errors.email !== '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''} */}

                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="submit" >Đăng Ký</button>
                            {/* disabled={!this.state.valid} */}
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}



const mapDispatchToProps = (dispatch) => {
    return {
        dangKy: (thongTinHocVien) => {
            dispatch(dangKyAction(thongTinHocVien))
        }
    }
}
export default connect(null, mapDispatchToProps)(RegisterPage)
