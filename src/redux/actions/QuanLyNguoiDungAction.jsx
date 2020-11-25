import { actionType } from '../constants/QuanLyNguoiDungConstant';
import { settings } from '../../common/Config/settings';
import axios from 'axios';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';



//GET x3 danh sach, danh sach loai nguoi dung, tim kiem
export const layDanhSachNguoiDungAction = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${settings.groupID}`,
            method: 'GET',
        }).then(result => {
            //Sau khi lấy dữ liệu người dùng về từ api => đưa dữ liệu lên reducer
            dispatch({
                type: actionType.LAY_DANH_SACH_NGUOI_DUNG,
                mangNguoiDung: result.data
                // .filter(nd => nd.maLoaiNguoiDung === 'HV')

            }, localStorage.setItem('mangNguoiDung', JSON.stringify(result.data)))

        }).catch(error => {
            console.log(error.response.data);
        })
    }
}




export const layDanhSachLoaiNguoiDungAction = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
            method: 'GET',
        }).then(result => {
            //Sau khi lấy dữ liệu người dùng về từ api => đưa dữ liệu lên reducer
            dispatch({
                type: actionType.LAY_DANH_SACH_LOAI_NGUOI_DUNG,
                mangLoaiNguoiDung: result.data
                // .filter(nd => nd.maLoaiNguoiDung === 'HV')
            })

        }).catch(error => {
            console.log(error.response.data);
        })
    }
}

export const timKiemNguoiDungAction = (tuKhoa) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP07&tuKhoa=${tuKhoa.tuKhoa}`,
            method: 'GET',
        }).then(result => {
            //Sau khi lấy dữ liệu người dùng về từ api => đưa dữ liệu lên reducer
            dispatch({
                type: actionType.TIM_KIEM_NGUOI_DUNG,
                mangTimKiemNguoiDung: result.data

                // .filter(nd => nd.maLoaiNguoiDung === 'HV')
            })
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}



//POST :dn ,dk, thong tin tai khoan, them nguoi dung
export const dangNhapAction = (thongTinNguoiDung, callBack,) => {
    console.log(thongTinNguoiDung)
    return dispatch => {
        axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: thongTinNguoiDung
            
        }).then(result => {
            localStorage.setItem(settings.userLogin, JSON.stringify(result.data));
            localStorage.setItem(settings.token, result.data.accessToken);
            swal.fire('Chào', thongTinNguoiDung.taiKhoan, 'success');
            dispatch(actFetchLoginUser(result.data));
            callBack();
        }).catch(error => {
            swal.fire('Thông báo đăng nhập', error.response, 'error');
        })
    }
}
export const actFetchLoginUser = user => ({
    type: actionType.FETCH_USER_LOGIN,
    payload: user
  });

export const dangKyAction = (thongTinHocVien) => {
    console.log(thongTinHocVien)
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: { ...thongTinHocVien, maNhom: 'GP07' }
        }).then(result => {
            console.log(result.data)
        }).catch(error => {
            console.log(error.response);
        })
    }
}

export const themNguoiDungAction = (thongTinNguoiDung) => {
<<<<<<< HEAD
=======
    console.log(thongTinNguoiDung);
>>>>>>> 144b160145e9364d1ce2ffa0746f976e8987ad4e
    return dispatch => {
        axios({
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            },
            url: settings.domain+`/QuanLyNguoiDung/ThemNguoiDung`,
            method: 'POST',
            data: { ...thongTinNguoiDung, maNhom: 'GP07' }
            
        }).then(result => {
            console.log(result.data);
            swal.fire('Thêm Người Dùng Thành Công !',result.status, 'success');
        }).catch(error => {
            console.log(error.response);
            swal.fire('Xin Hãy Kiểm Tra Lại !',error.response, 'error');
        })
    }
}

export const thongTinTaiKhoanAction = (TTTK) => {
    return dispatch => {
        axios({
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            },
            url: settings.domain+`/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: 'POST',
            data: TTTK,
        }).then(result => {
            dispatch({
                type: actionType.THONG_TIN_TAI_KHOAN,
                thongTinTaiKhoan: result.data

            })

        }).catch(error => {
           console.log(error.response)
        })
    }
}

//DELETE

export const xoaNguoiDungAction = (taiKhoan) => {
    return dispatch => {
        axios({
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            },
            url: settings.domain + `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: `DELETE`,
            data: taiKhoan
        }).then(result => {
            dispatch(layDanhSachNguoiDungAction())
            console.log(result.data)
        }).catch(error => {
            console.log(error.response);
        })
    }
}


//PUT

export const capNhatNguoiDungAction = (thongTinNguoiDung) => {
    console.log(thongTinNguoiDung)
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: 'PUT',
            data: thongTinNguoiDung,

            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            },
           
        }).then(result => {
            // console.log(result.data);   
                Swal.fire({
                    icon: 'success',
                    title: 'Thông báo',
                    text: 'Cập nhật thông tin tài khoản thành công.',
                }).then(result => {
                    window.location.reload()
                });
                }).catch(errors => {
                // console.log(errors.response.data)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errors.response.data,
                })
            })
        }
}



export const loadMangNguoiDungAction = (mangNguoiDung) => ({
    type: 'LOAD_MANG_NGUOI_DUNG',
    mangNguoiDung
});

export const chinhSuaNguoiDungAction = (nguoiDungSua) => ({
    type: 'CHINH_SUA_NGUOI_DUNG',
    nguoiDungSua
});

export const nguoiDangNhapAction = () => ({
    type: 'NGUOI_DANG_NHAP',
})