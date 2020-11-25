import { actionTypes } from '../constants/QuanLyKhoaHocConstant';
import { settings } from '../../common/Config/settings';
import axios from 'axios';


//GET
export const layDanhMucKhoaHocAction = () => {
  return dispatch => {
    axios({
      url: settings.domain + '/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
      method: 'GET'
    }).then(result => {
      //Đưa mangDanhMucKhoaHoc => Reducer
      dispatch({
        type: actionTypes.LAY_DANH_MUC_KHOA_HOC,
        mangDanhMucKhoaHoc: result.data
      });
    }).catch(error => {
      console.log(error.response.data);
    })
  }
}

export const layKhoaHocTheoDanhMucAction = (maDanhMuc) => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${settings.groupID}`,
      method: 'GET'
    }).then(result => {
      dispatch({
        type: actionTypes.LAY_KHOA_HOC_THEO_DANH_MUC,
        mangKhoaHocTheoDanhMuc: result.data
      });
      console.log('action',result.data)
    }).catch(error => {
      console.log(error.response.data);
    })
  }
}

export const timKiemKhoaHocAction = (tenKhoaHoc) => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc.tenKhoaHoc}&MaNhom=${settings.groupID}`,
      method: 'GET'
    }).then(result => {
      dispatch({
        type: actionTypes.TIM_KIEM_KHOA_HOC,
        mangTimKiemKhoaHoc: result.data
      });
    }).catch(error => {
      console.log(error.response.data);
      console.log(error.response.status)
    })
  }
}



//định nghĩa action lấy danh sách các khoá học từ api


export const layDanhSachKhoaHocAction = () => {
  return dispatch => {
      axios({
          url: settings.domain + `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${settings.groupID}`,
          method: 'GET',
      }).then(result => {
          //Sau khi lấy dữ liệu người dùng về từ api => đưa dữ liệu lên reducer
          dispatch({
              type: actionTypes.LAY_DANH_SACH_KHOA_HOC,
              mangKhoaHoc: result.data

          })

      }).catch((function (error) {
        console.log(error);
      }))
  }
}

export const layChiTietKhoaHocAction = (maKhoaHoc) => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      type: 'GET'
    }).then(result => {
      dispatch({
        type: actionTypes.LAY_CHI_TIET_KHOA_HOC,
        thongTinKhoaHoc: result.data
      });
    }).catch(error => {
      console.log(error.response.data);
    })
  }
}


//POST
export const themKhoaHocAction = (khoaHoc) => {
  //Lay doi tuong file tu thuoc tinh hinh anh
  let file = khoaHoc.hinhAnh;
  khoaHoc.hinhAnh = file.name;
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: 'POST',
      data: { ...khoaHoc, maNhom: settings.groupID, ngayTao: '10/10/2019' },
      headers: {
        "Authorization": "Bearer " + localStorage.getItem(settings.token)
      }
    }).then(result => {
      console.log(result.data);
      //Sau khi them nguoi dung thanh cong
      //Goi api upload hinh anh
      let frm = new FormData();
      frm.append('file', file);
      frm.append('tenKhoaHoc', khoaHoc.tenKhoaHoc);
      axios({
        url: settings.domain + `/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
        method: 'post',
        data: frm
      }).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error.response.data);
      })
    }).catch(error => {
      console.log(error.response.data);
    })
  }
}


export const dangKyKhoaHocAction = (thongTinDangKy) => {

  console.log('dk khoa hoc ',thongTinDangKy)
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: 'POST',
      data: thongTinDangKy,
      headers: {
        "Authorization": "Bearer " + localStorage.getItem(settings.token)
      }
      
    }).then(result => {
      console.log(result.data);
    }).catch(error => {
      console.log(error.response.data);
    })
  }
}


export const huyDangKyKhoaHocAction = (thongTinDangKy) => {
  console.log('thong tin huy dk action',thongTinDangKy);

  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/HuyGhiDanh`,
      method: 'POST',
      data: thongTinDangKy,
      headers: {
        "Authorization": "Bearer " + localStorage.getItem(settings.token)
      }
      
    }).then(result => {
      console.log(result.data);
    }).catch(error => {
      console.log(error.response.data);
    })
  }
}

export const ghiDanhKhoaHocAction = (thongTinDangKy) => {
  //Lay doi tuong file tu thuoc tinh hinh anh

  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
      method: 'POST',
      data: thongTinDangKy,
      headers: {
        "Authorization": "Bearer " + localStorage.getItem(settings.token)
      }
      
    }).then(result => {
      console.log(result.data);
    }).catch(error => {
      console.log(error.response.data);
    })
  }
}

//PUT
export const capNhatKhoaHocAction = (thongTinKhoaHoc) => {
  console.log(thongTinKhoaHoc)
  return dispatch => {
      axios({
          headers: {
              "Authorization": "Bearer " + localStorage.getItem(settings.token)
          },
          url: settings.domain + `/QuanLyKhoaHoc/CapNhatKhoaHoc`,
          method: 'PUT',
          data: thongTinKhoaHoc,

      }).then(result => {
          dispatch(layDanhSachKhoaHocAction())
          console.log(result.data)
      }).catch(error => {
          console.log(error.response);
      })
  }
}
//DELETE

export const xoaKhoaHocAction = (maKhoaHoc) => {
  console.log('maKhoaHoc',maKhoaHoc)
  return dispatch => {
      axios({
          headers: {
              "Authorization": "Bearer " + localStorage.getItem(settings.token)
          },
          url: settings.domain + `/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
          method: `DELETE`,
          data: maKhoaHoc
      }).then(result => {
          dispatch(xoaKhoaHocAction())
          dispatch(layDanhSachKhoaHocAction())
          console.log(result.data)

      }).catch(error => {
          console.log(error.response);
      })
  }
}


export const loadMangKhoaHocAction = (mangKhoaHoc) => ({
  type: 'LOAD_MANG_KHOA_HOC',
  mangKhoaHoc
});

export const chinhSuaKhoaHocAction = (khoaHocSua) => ({
  type: 'CHINH_SUA_KHOA_HOC',
  khoaHocSua,

  
});
