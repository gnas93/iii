import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
       
            <div className="welcome footer ">
                <div className="container-fluid bg-dark ">
                    <div className="row">
                        <div className="col-md-5 footer-grids " >
                            <h4>NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h4>
                            <p>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>

                            <form>
                                <input type="text" defaultValue="Email" />
                                <input type="submit" defaultValue="Đăng Ký" />
                            </form>
                        </div>
                        <div className="col-md-4 footer-grids ">
                            <h4>ĐĂNG KÍ TƯ VẤN</h4>
                            <input type="text" defaultValue="Họ và tên" />
                            <input type="text" defaultValue="Email liên hệ" />
                            <input type="text" defaultValue="Điện thoại liên hệ" />
                            <input type="submit" defaultValue="Đăng Ký Tư Vấn" />

                        </div>
                        <div className="col-md-3 footer-grids " >
                            <h4>LIÊN HỆ</h4>
                            <div class="item">
                                <div><p><i class="fa fa-map-marker"></i>&nbsp; Cơ sở 1: 376 Võ Văn Tần – Quận 3</p></div>
                                <div><p><i class="fa fa-map-marker"></i>&nbsp; Cơ sở 2: 459 Sư Vạn Hạnh – Quận 10</p></div>
                                <div><p><i class="fa fa-map-marker"></i>&nbsp; Cơ sở 3: 82 Ung Văn Khiêm – Bình Thạnh</p></div>
                                <div><p><i class="fa fa-map-marker"></i>&nbsp; Cơ sở 4: Đà Nẵng – Quận Hải Châu</p></div>
                                <div><p><i class="fa fa-phone"></i>&nbsp; 096.105.1014 – 098.407.5835</p></div>
                            </div>
                        </div>

                    </div>
                    <div className="footer-copy " >
                        <p>© Bản quyền  <a href="#">E.Schools-Nguyễn Chính Luận</a> 2019-2020</p>
                    </div>
                </div>
            </div>
          

        )
    }
}
