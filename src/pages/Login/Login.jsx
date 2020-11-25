import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction ,nguoiDangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction'
import {settings} from '../../common/Config/settings'

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
        }
    }

    //Check Login
    callBack = () => {
       let userLogin  = (JSON.parse(localStorage.getItem(settings.userLogin)))
       let maLoaiNguoiDung = userLogin?userLogin.maLoaiNguoiDung:'';
        if (maLoaiNguoiDung==='GV') {
        this.props.history.push("/admin")
        }else   
        this.props.history.push("/user")
    }

  
   

    
    handleChange = (e) => {
        let { value, name } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();//chặn submit của browser
        this.props.dangNhap(this.state, this.callBack); // đưa dữ liệu lên action 
        this.props.nguoiDangNhap();
    }

    


    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <h3>Đăng nhập</h3>
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input className="form-control" name="taiKhoan" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input className="form-control" name="matKhau" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-success my-2 my-sm-0" >Đăng nhập</button>
                    <NavLink to='/RegisterPage'><button className="btn btn-outline-success my-2 my-sm-0">Đăng Ký</button></NavLink>

                </div>
            </form>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        dangNhap: (thongTinNguoiDung, callBack) => {
            dispatch(dangNhapAction(thongTinNguoiDung, callBack))
        },
        nguoiDangNhap:() => {
            dispatch(nguoiDangNhapAction());
        },

    }
}
export default connect(null, mapDispatchToProps)(Login)