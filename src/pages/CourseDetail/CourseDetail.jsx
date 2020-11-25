import React, { Component } from 'react';
import {connect} from 'react-redux';
import {layChiTietKhoaHocAction , dangKyKhoaHocAction, huyDangKyKhoaHocAction} from '../../redux/actions/QuanLyKhoaHocAction';
import Swal from 'sweetalert2';
import {  Tabs, Button } from 'antd';
import {settings} from '../../common/Config/settings'

const { TabPane } = Tabs;
function callback() {
  
}
class CourseDetail extends Component {


    componentDidMount(){
        //lấy giá trị tham số từ url this.props.match.params.tenThamSo
        let {maKhoaHoc} = this.props.match.params;
        this.props.layChiTietKhoaHoc(maKhoaHoc);
    }


    handleOnSubmit = (e) => {
        e.preventDefault();

        //Dang ky khoa hoc
        if (localStorage.getItem(settings.token)) {
            let TTDK = {
                maKhoaHoc: this.props.match.params.maKhoaHoc,
                taiKhoan: JSON.parse(localStorage.getItem(settings.userLogin)).taiKhoan
            }
            this.props. dangKyKhoaHoc(TTDK);
        }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng đăng nhập. ',
          })
        }


    };

    handleDelete=(e)=>{
        e.preventDefault();
        if (localStorage.getItem(settings.token)) {
            let TTDK = {
                maKhoaHoc: this.props.match.params.maKhoaHoc,
                taiKhoan: JSON.parse(localStorage.getItem(settings.userLogin)).taiKhoan
            }
            this.props.huyDangKyKhoaHoc(TTDK);
        }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng đăng nhập.',
          })
        }
    }



    render() {
        console.log('thongtin khoa hoc ',this.props.thongTinKhoaHoc)
        let {thongTinKhoaHoc} = this.props;

           
        return (
           
             <div className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="course-info">
                                <img src={thongTinKhoaHoc.hinhAnh} alt="" style={{ width: 200, height: 200 }} />
                              
                                <h4>{thongTinKhoaHoc.tenKhoaHoc}</h4>
                                <p>Lượt xem: {thongTinKhoaHoc.luotXem}</p>
                                <p>Ngày tạo: {thongTinKhoaHoc.ngayTao}</p>
                                <p>Số lượng học viên: {thongTinKhoaHoc.soLuongHocVien}</p>
                                <p>Thời gian: Liên hệ</p>
                                <Button type="primary" size='large'
                                    block onClick={this.handleOnSubmit}>
                                    Đăng Ký
                                </Button>
                                <Button type="danger" size='large'
                                    block onClick={this.handleDelete}>
                                    Hủy Đăng Ký
                                </Button>
                            </div>
                        </div>
                        <div className="col-8">
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Nội dung khóa học" key="1">
                                    {thongTinKhoaHoc.moTa}
                                </TabPane>
                                <TabPane tab="Hình ảnh khóa học" key="2">
                                    <img src={thongTinKhoaHoc.hinhAnh} alt="" 
                                    style={{ width: '100%', height: '100%' }} />
                                </TabPane>
                                <TabPane tab="Cảm nhận học viên" key="3">
                                    Đang cập nhật...
                                </TabPane>
                            </Tabs>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapState = state => (
    {
        thongTinKhoaHoc: state.QuanLyKhoaHocReducer.thongTinKhoaHoc
    }
)
const mapDispatch = dispatch => (
    {
        layChiTietKhoaHoc: (maKhoaHoc) => {
            dispatch(layChiTietKhoaHocAction(maKhoaHoc))
        },
        dangKyKhoaHoc:(TTDK)=>{
            dispatch(dangKyKhoaHocAction(TTDK))
            console.log('TTDK',TTDK)
        },
        huyDangKyKhoaHoc:(TTDK)=>{
            dispatch(huyDangKyKhoaHocAction(TTDK))
            console.log('huy TTDK',TTDK)
        },
    }
)

export default connect (mapState,mapDispatch)(CourseDetail)


