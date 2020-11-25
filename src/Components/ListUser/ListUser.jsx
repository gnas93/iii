import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layDanhSachNguoiDungAction, xoaNguoiDungAction, timKiemNguoiDungAction, chinhSuaNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'
import './ListUser.css'
import UpdateUserModal from '../UpdateUserModal/UpdateUserModal'
//USE CSS MODULE DE TRANH XUNG DOT CSS

export class ListUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tuKhoa: '',
        }
    }


    componentDidMount() {
        //Gọi action lấy danh mục khoá học
        this.props.layDanhSachNguoiDung();

    }

    handleChange = (e) => {
        let { value, name } = e.target;
        const stateTam = { ...this.state, [name]: value };

        this.setState({ [name]: value })

        if (name === 'tuKhoa') {
            this.props.timKiemNguoiDung(stateTam)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();//chặn submit của browser
        this.props.timKiemNguoiDung(this.state); // đưa dữ liệu lên action 
    }

    renderTimKiemNguoiDung = () => {
        console.log('mang tim kiem dau vao:  ', this.props.mangTimKiemNguoiDung)

        return this.props.mangTimKiemNguoiDung.map((nguoiDung, index) => {
            return (
                <tr key={index}>
                    <td> {index + 1} </td>
                    <td> {nguoiDung.hoTen} </td>
                    <td> {nguoiDung.taiKhoan} </td>
                    <td> {nguoiDung.email} </td>
                    <td> {nguoiDung.soDt} </td>
                    <td> {nguoiDung.maLoaiNguoiDung} </td>
                    <td>
                        <button type="button" className="settings btn btn-primary" title="Update" data-toggle="modal" data-target="#ModalUpdate"
                            onClick={() => this.props.chinhSuaNguoiDung(nguoiDung)}>
                            <i className="material-icons"></i>
                        </button>
                        <UpdateUserModal />
                        <button className="delete btn btn-danger" title="Delete" ><i class="material-icons"
                            onClick={() => this.props.xoaNguoiDung(nguoiDung.taiKhoan)}
                        >delete</i></button>
                    </td>
                </tr >
            )
        })

    }

  


    renderDanhSachNguoiDung = () => {
        return this.props.mangNguoiDung.map((nguoiDung, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td> {nguoiDung.hoTen} </td>
                    <td> {nguoiDung.taiKhoan} </td>
                    <td> {nguoiDung.email} </td>
                    <td> {nguoiDung.soDt} </td>
                    <td> {nguoiDung.maLoaiNguoiDung} </td>
                    <td>
                        <button type="button" className="settings btn btn-primary" title="Update" data-toggle="modal" data-target="#ModalUpdate"
                            onClick={() => this.props.chinhSuaNguoiDung(nguoiDung)}>
                            <i className="material-icons" />
                        </button>
                        <UpdateUserModal />
                        <button className="delete btn btn-danger" title="Delete" ><i class="material-icons"
                            onClick={() => this.props.xoaNguoiDung(nguoiDung.taiKhoan)}
                        >delete</i></button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-5">
                                <h2>Quản Lý <b>Người Dùng</b></h2>
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
                                    <th>Họ Tên</th>
                                    <th>Tài Khoản</th>
                                    <th>Email</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Mã Loại </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.mangTimKiemNguoiDung.length === 0 && this.renderDanhSachNguoiDung()}
                                {this.renderTimKiemNguoiDung()}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
        mangTimKiemNguoiDung: state.QuanLyNguoiDungReducer.mangTimKiemNguoiDung
    }

}

const mapDispatchToProps = (dispatch) => {
    return {

      
        layDanhSachNguoiDung: () => {
            dispatch(layDanhSachNguoiDungAction())
        },
        xoaNguoiDung: (taiKhoan) => {
            dispatch(xoaNguoiDungAction(taiKhoan))
        },
        timKiemNguoiDung: (tuKhoa) => {
            dispatch(timKiemNguoiDungAction(tuKhoa))
            console.log('taiKhoan dispatch', tuKhoa)
        },
        chinhSuaNguoiDung: (nguoiDungSua) => {
            dispatch(chinhSuaNguoiDungAction(nguoiDungSua))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
