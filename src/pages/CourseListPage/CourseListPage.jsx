import React, { Component } from 'react'
import CourseList from '../../Components/CourseList/CourseList'

//Kết nối redux
import { connect } from 'react-redux';
import { layDanhMucKhoaHocAction, layKhoaHocTheoDanhMucAction } from '../../redux/actions/QuanLyKhoaHocAction';
import { NavLink } from "react-router-dom";

export class CourseListPage extends Component {
	constructor(props) {
		super(props);
	
	}

  componentDidMount() {
    //Gọi action lấy danh mục khoá học
    this.props.layDanhMucKhoaHoc();
    this.props.layKhoaHocTheoDanhMuc();
  }

  

  renderDanhMucKhoaHoc = () => {
    return this.props.mangDanhMucKhoaHoc.map((dmkh, index) => {
      return (
        <li className="nav-item">
          <NavLink to={`/user/courselistpage/courseforlist`} key={index} className="nav-link" onClick={() => this.props.layKhoaHocTheoDanhMuc(dmkh.maDanhMuc)}>{dmkh.tenDanhMuc}</NavLink>
        </li>
      )
    })
  }

  handleSubmit = e => {
		e.preventDefault(); //chặn submit của browser
	};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark  navbar-expand-lg  justify-content-center">
            <ul className="nav nav-pills nav-fill">
            {this.renderDanhMucKhoaHoc()}
            </ul>
        </nav>
        <CourseList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mangDanhMucKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhMucKhoaHoc,
    mangKhoaHocTheoDanhMuc: state.QuanLyKhoaHocReducer.mangKhoaHocTheoDanhMuc,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    layDanhMucKhoaHoc: () => {
      dispatch(layDanhMucKhoaHocAction());
    },
    layKhoaHocTheoDanhMuc:(maDanhMuc)=>{
      dispatch(layKhoaHocTheoDanhMucAction(maDanhMuc));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);