import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'antd/dist/antd.css'
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate"; //com AdminTemplate (không đổi tên được vì export)
import { UserTemplate } from "./templates/UserTemplate/UserTemplate"

import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import AddCourse from "./pages/Admin/AddCourse/AddCourse";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import ListUser from "./Components/ListUser/ListUser";

import AdminIndex from "./pages/Admin/AdminIndex"; //admin của page (export default)
import UserPageUpdate from './pages/UserPageUpdate/UserPageUpdate'
import UserInformation from './templates/UserTemplate/UserInformation'
import ListCourse from "./Components/ListCourse/ListCourse";
import UserIndex from "./templates/UserTemplate/UserIndex";
import CourseList from "./Components/CourseList/CourseList";
import AddUser from "./pages/Admin/AddUser/AddUser";
import 'antd/dist/antd.css'

import ListUser from "./Components/ListUser/ListUser";

import AdminIndex from "./pages/Admin/AdminIndex"; //admin của page (export default)
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate"; //com AdminTemplate (không đổi tên được vì export)
import UserPageUpdate from './pages/UserPageUpdate/UserPageUpdate'
import UserInformation from './templates/UserTemplate/UserInformation'
import { UserTemplate } from "./templates/UserTemplate/UserTemplate"
import ListCourse from "./Components/ListCourse/ListCourse";
import UserIndex from "./templates/UserTemplate/UserIndex";
import CourseList from "./Components/CourseList/CourseList";


function App() {
	return (

		<Fragment>

			<BrowserRouter>

				<Switch>
					{/* TrangHome All */}
					<HomeTemplate exact path="/" Component={HomePage} />
					<HomeTemplate exact path="/aboutus" Component={AboutUs} />
					<HomeTemplate exact path="/contact" Component={Contact} />
					<HomeTemplate exact path="/coursedetail/:maKhoaHoc" Component={CourseDetail} />


					{/* TrangHome Admin :  */}
					<AdminTemplate exact path="/admin" Component={AdminIndex} />
					<AdminTemplate exact path="/admin/listuser" Component={ListUser} />
					<AdminTemplate exact path="/admin/adduser" Component={AddUser} />

					<AdminTemplate exact path="/admin/addcourse" Component={AddCourse} />
					<AdminTemplate exact path="/admin/listcourse" Component={ListCourse} />

					{/* TrangHome User :  */}
					<UserTemplate exact path="/user" Component={UserIndex} />
					<UserTemplate exact path='/user/profile' Component={UserInformation} />
					<UserTemplate exact path='/user/update' Component={UserPageUpdate} />
					<UserTemplate exact path='/user/courselist' Component={CourseList} />
					<AdminTemplate exact path="/admin/listcourse" Component={ListCourse} />

					{/* TrangHome User :  */}
					<UserTemplate exact path="/user" Component={UserIndex} />
					<UserTemplate exact path='/user/profile' Component={UserInformation} />
					<UserTemplate exact path='/user/update' Component={UserPageUpdate} />
					<UserTemplate exact path='/user/courselist' Component={CourseList} />
					<UserTemplate exact path="/user/coursedetail/:maKhoaHoc" Component={CourseDetail} />

					{/*Sử dụng route để không kế thừa từ template home hoặc tự định nghĩa ra template riêng cho login */}
					<Route path="/login" exact component={Login} />
					<Route path="/registerpage" exact component={RegisterPage} />
					<Route path="/" exact component={HomePage} />

				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
