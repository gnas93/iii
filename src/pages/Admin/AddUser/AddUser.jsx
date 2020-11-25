import React, { Component } from 'react'
import { connect } from 'react-redux'
import {themNguoiDungAction} from '../../../redux/actions/QuanLyNguoiDungAction'

export class AddUser extends Component {

    //Ham change, submit , errors
    constructor(props) {
        super(props);
        this.state = {
            nguoiDung: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "",
                email: ""
            },
            errors: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "",
                email: ""
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
        this.props.themNguoiDung(this.state.values); // đưa dữ liệu lên action 
    }



    //Phương thức kiểm tra lỗi
    handleErrors = (event) => {
        let { name, value } = event.target;
        //Check rỗng
        let loi = value === '' ? 'Không được để trống !' : '';
        //Kiểm tra email hợp lệ
        if (name === 'email') {
            let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!regex.test(value)) {
                loi = 'Email không đúng định dạng!';
            }
        }
        //Kiểm tra lỗi
        this.setState.valid = loi === '' ? true : false;
        this.setState({
            errors: { ...this.state.errors, [name]: loi }
        })
    }



    render() {
        console.log(this.props);
        return (
            <form className="container">
                <h3 className="display-4">Thêm người dùng </h3>
                
                <form name="form" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group" >
                            <h3>Tài Khoản</h3>
                            <input type="text" className="form-control" name="taiKhoan"
                                value={this.state.taiKhoan}
                                onChange={this.handleChange}
                                onKeyUp={this.handleErrors}
                                onBlur={this.handleErrors}
                            />
                            {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}
                        </div>

                        <div className="form-group">
                            <h3>Mật Khẩu</h3>
                            <input type="text" className="form-control" name="matKhau"
                              value={this.state.matKhau}
                              onChange={this.handleChange}
                              onKeyUp={this.handleErrors}
                              onBlur={this.handleErrors}
                          />
                           {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}
      
                        </div>


                        <div className="form-group">
                            <h3>Họ Và Tên</h3>
                            <input type="text" className="form-control" name="hoTen"
                              value={this.state.hoTen}
                              onChange={this.handleChange}
                              onKeyUp={this.handleErrors}
                              onBlur={this.handleErrors}
                          />
      
                          {this.state.errors.hoTen !== '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div>:''}
                      </div>

                    </div>
                 

                    <div className="col-md-6">

                        <div className="form-group">
                            <h3>Số Điện Thoại</h3>
                            <input className="form-control" name="soDT" value={this.state.soDT} onChange={this.handleChange} />
                        </div>
      

                        <div className="form-group">
                            <h3>Mã Loại</h3>
                            <select className="form-control" name="maLoaiNguoiDung" type="text"  onChange={this.handleChange}>
                                <option value={this.state.maLoaiNguoiDung}>GV</option>
                                <option value={this.state.maLoaiNguoiDung}>HV</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <h3>Email</h3>
                            <input className="form-control" name="email" value={this.state.email}
                                onChange={this.handleChange}
                                onKeyUp={this.handleErrors}
                                onBlur={this.handleErrors} />
      
                            {this.state.errors.email !== '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''}
                        </div>
      
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Thêm</button>
                        </div>
                    </div>
                </div>
            </form>
         </form >
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        themNguoiDung: (thongTinNguoiDung) => {
            dispatch(themNguoiDungAction(thongTinNguoiDung))
        }
    }
}


export default connect(null, mapDispatchToProps)(AddUser)
