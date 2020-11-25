import React, { Component } from "react";
import "./SidebarAdmin.css";
import { NavLink } from "react-router-dom";

import AddUser from "../../pages/Admin/AddUser/AddUser.jsx";

{
	/* <a href="#sidebar" data-toggle="collapse">
					<i class="fa fa-navicon fa-lg"></i>
				</a> */
}

export default class SidebarAdmin extends Component {
	render() {
		// collapse in
		return (
			<div className="col-md-10 col-xs-1 p-l-0 p-r-0 " id="sidebar">
				<div className="list-group panel">
					
					{/* Khoá Học */}
					<a href="#menu2" className="list-group-item collapsed" data-parent="#sidebar" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-book" />
						<span className="hidden-sm-down"> Quản Lý Khoá Học</span>
					</a>

					<div className="collapse" id="menu2">
						<NavLink to="/admin/addcourse" className="list-group-item" data-parent="#menu2">
							<span>
								<i className="fa fa-plus" /> <i className="fa fa-book" />
							</span>
							<span className="hidden-sm-down"> Thêm Khoá Học</span>
						</NavLink>

						<NavLink to="/admin/listcourse" className="list-group-item " data-parent="#menu1">
							<i className="fa fa-th" />
							<span className="hidden-sm-down"> Danh Sách Khoá Học</span>
						</NavLink>
					</div>

					<a href="#menu3" className="list-group-item collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
						<i className="fa fa-tasks" />
						<span className="hidden-sm-down"> Ghi Danh Khoá Học </span>
					</a>
					<div className="collapse" id="menu3">
						<a href="#" className="list-group-item" data-parent="#menu3">
							3.1
						</a>
						<a href="#menu3sub2" className="list-group-item" aria-expanded="false">
							3.2
						</a>

						<a href="#" className="list-group-item" data-parent="#menu3">
							3.3
						</a>
					</div>




				{/* Người Dùng */}
				<a href="#menu1" className="list-group-item collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
						<i className="fa fa-users" />
						<span className="hidden-sm-down"> Quản Lý Người Dùng </span>
					</a>

					<div className="collapse" id="menu1">

						<NavLink to="/admin/adduser" className="list-group-item " data-parent="#menu1">
								<span>
								<i className="fa fa-user-plus" />
								</span>
								<span className="hidden-sm-down"> Thêm Người Dùng</span>
						</NavLink>
					

					
						<NavLink to="/admin/listuser" className="list-group-item " data-parent="#menu1">
							<i className="fa fa-list" />
							<span className="hidden-sm-down"> Danh Sách Người Dùng</span>
						</NavLink>
					</div>





					<a href="#menu4" className="list-group-item collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
						<i className="fa fa-tasks" />
						<span className="hidden-sm-down"> Ghi Danh Người Dùng  </span>
					</a>
					<div className="collapse" id="menu4">
						<a href="#" className="list-group-item" data-parent="#menu3">
							3.1
						</a>
						<a href="#menu4sub2" className="list-group-item" aria-expanded="false">
							3.2
						</a>

						<a href="#" className="list-group-item" data-parent="#menu4">
							3.3
						</a>
					</div>
				</div>
			</div>
		);
	}
}
