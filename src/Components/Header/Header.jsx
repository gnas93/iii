import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';



export default class Header extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light container-fluid" >

          <NavLink to='/' className="navbar-brand col-md-6"><img src={require("../../assets/images/logo.png")} alt="" /><span>E.School</span></NavLink>

          <form className="my-2 my-lg-0 text-right col-md-6">
            <Link to='/Login'><button className="btn btn-success my-4 my-sm-0" >Login</button></Link>
            <Link to='/RegisterPage'><button className="btn btn-success my-4 my-sm-0" >Register</button></Link>
          </form>

        </nav>

      </div>
    )
  }
}



