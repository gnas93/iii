<<<<<<< HEAD
import React, { Component } from "react";
import { Descriptions, Badge } from "antd";
import { connect } from "react-redux";
import { thongTinTaiKhoanAction } from "../../redux/actions/QuanLyNguoiDungAction";

import Swal from "sweetalert2";
import { settings } from "../../common/Config/settings";


export class UserInformation extends Component {
	componentDidMount() {
		//lấy giá trị tham số từ url this.props.match.params.tenThamSo
        // let {maKhoaHoc} = this.props.match.params;
        setTimeout(()=>{
            this.props.getThongTinTaiKhoan();
            this.handleSubmitInformation();
        }, 100);
		
	}

	handleSubmitInformation = e => {
		//Lay thong tin tai khoan
		if (localStorage.getItem(settings.token)) {
			let TTTK = {
				taiKhoan: JSON.parse(localStorage.getItem(settings.userLogin)).taiKhoan
			};
			this.props.getThongTinTaiKhoan(TTTK);
		} else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Vui lòng đăng nhập. "
			});
		}
	};

	layChiTietKhoaHocDaGhiDanh = () => {
		console.log("Function", this.props.thongTinTaiKhoan.chiTietKhoaHocGhiDanh);
		return this.props.thongTinTaiKhoan.chiTietKhoaHocGhiDanh.map((khoaHoc, index) => {
			return (
				<li>
					<p>{khoaHoc.tenKhoaHoc}</p>
                </li>
			);
		});
	};

	render() {
		console.log("thong tin tai khoan", this.props.thongTinTaiKhoan);
		return (this.props.thongTinTaiKhoan.chiTietKhoaHocGhiDanh?
			<div>
				<Descriptions title="Thông Tin Tài Khoản" bordered>
					<Descriptions.Item label="Trạng Thái" span={3}>
						<Badge status="processing" text="Online" />
					</Descriptions.Item>

					<Descriptions.Item label="Họ Và Tên">{this.props.thongTinTaiKhoan.hoTen}</Descriptions.Item>
					<Descriptions.Item label="Tài Khoản">{this.props.thongTinTaiKhoan.taiKhoan}</Descriptions.Item>
					<Descriptions.Item label="Mật Khẩu">{this.props.thongTinTaiKhoan.matKhau}</Descriptions.Item>
					<Descriptions.Item label="Số Điện Thoại" span={1}>
						{this.props.thongTinTaiKhoan.soDT}
					</Descriptions.Item>
					<Descriptions.Item label="Mã Nhóm">{this.props.thongTinTaiKhoan.maNhom}</Descriptions.Item>
					<Descriptions.Item label="Email">{this.props.thongTinTaiKhoan.email}</Descriptions.Item>
					<Descriptions.Item label="Mã Loại">{this.props.thongTinTaiKhoan.maLoaiNguoiDung}</Descriptions.Item>
					<Descriptions.Item label="Khoá Học Đã Ghi Danh">
                        <ul>
                            {this.layChiTietKhoaHocDaGhiDanh()}
                        </ul>
                        </Descriptions.Item>
				</Descriptions>
			</div>:"Loading"
		);
	}
}

const mapStateToProps = state => ({
	thongTinTaiKhoan: state.QuanLyNguoiDungReducer.thongTinTaiKhoan
});
const mapDispatchToProps = dispatch => ({
	getThongTinTaiKhoan: TTTK => {
		dispatch(thongTinTaiKhoanAction(TTTK));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserInformation);
=======
import React, { Component } from "react";
import { Descriptions, Badge } from 'antd';
import { connect } from "react-redux";
import {thongTinTaiKhoanAction} from '../../redux/actions/QuanLyNguoiDungAction';

import Swal from 'sweetalert2';
import {settings} from '../../common/Config/settings';



 

export class UserInformation extends Component {


    componentDidMount(){
        //lấy giá trị tham số từ url this.props.match.params.tenThamSo
        // let {maKhoaHoc} = this.props.match.params;
        this.props.getThongTinTaiKhoan();
        this.handleSubmitInformation();
    }


    handleSubmitInformation = (e) => {
        //Lay thong tin tai khoan
        if (localStorage.getItem(settings.token)) {
            let TTTK = {
                taiKhoan: JSON.parse(localStorage.getItem(settings.userLogin)).taiKhoan,
            
            }
            this.props.getThongTinTaiKhoan(TTTK);

        } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng đăng nhập. ',
          })
        }
    };

   
    

    layChiTietKhoaHocGhiDanh=()=>{
       console.log('...hello nhi ngu', this.props.thongTinTaiKhoan)
        // return this.props.thongTinTaiKhoan.chiTietKhoaHocGhiDanh.map((info,index)=>{
        //     return (
        //         <div>
        //             <p>{info.tenKhoaHoc}</p>
        //         </div>
        //     )
        // })
     
    };
    


render (){ 
   
    return (
        <div>
           
                <Descriptions title="Thông Tin Tài Khoản" bordered>

                <Descriptions.Item label="Trạng Thái" span={3}> 
                <Badge status="processing" text="Online" />
                </Descriptions.Item>

                <Descriptions.Item label="Họ Và Tên">{this.props.thongTinTaiKhoan.hoTen}</Descriptions.Item>
                <Descriptions.Item label="Tài Khoản">{this.props.thongTinTaiKhoan.taiKhoan}</Descriptions.Item>
                <Descriptions.Item label="Mật Khẩu">{this.props.thongTinTaiKhoan.matKhau}</Descriptions.Item>
                <Descriptions.Item label="Số Điện Thoại" span={1}>
                {this.props.thongTinTaiKhoan.soDT}
                </Descriptions.Item>
                <Descriptions.Item label="Mã Nhóm">{this.props.thongTinTaiKhoan.maNhom}</Descriptions.Item>
                <Descriptions.Item label="Email">{this.props.thongTinTaiKhoan.email}</Descriptions.Item>
                <Descriptions.Item label="Mã Loại">{this.props.thongTinTaiKhoan.maLoaiNguoiDung}</Descriptions.Item>
                <Descriptions.Item label="Khoá Học Đã Ghi Danh">
                    {this.layChiTietKhoaHocGhiDanh()}
                </Descriptions.Item>
            </Descriptions>
            
        </div>
    )
}
}


const mapStateToProps = state => (
    {
        thongTinTaiKhoan: state.QuanLyNguoiDungReducer.thongTinTaiKhoan,
        
    }
)
const mapDispatchToProps = dispatch => (
    {
        getThongTinTaiKhoan: (TTTK) => {
            dispatch(thongTinTaiKhoanAction(TTTK));
        }
       
    }
    
)

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
>>>>>>> 144b160145e9364d1ce2ffa0746f976e8987ad4e
