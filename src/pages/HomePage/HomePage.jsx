
//Home page the hien trang chu cua app
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid" >

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-align">
                        <li className="btn btn-sm nav-item active">
                            <NavLink exact to='/' >Trang Chủ</NavLink>
                        </li>
                        <li className="btn btn-sm nav-item">
                            <NavLink exact to='/CourseListPage'>Khóa Học</NavLink>
                        </li>
                        <li className="btn btn-sm nav-item">
                            <NavLink exact to='/AboutUs'>Về Chúng Tôi</NavLink>
                        </li>
                        <li className="btn btn-sm nav-item">
                            <NavLink exact to='/Contact'>Liên Hệ</NavLink>
                        </li>
                    </ul>

                </nav>
                <Carousel />
           
            </div>
        )
    }
}



  