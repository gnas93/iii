import React, { Component } from 'react'
import { Nav, Navbar } from "react-bootstrap";

// import './FooterAdmin.css'

export default class FooterAdmin extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-end " fixed="bottom">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Company</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              &copy; {new Date().getFullYear()}{" "} Design By E.School
              </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}
