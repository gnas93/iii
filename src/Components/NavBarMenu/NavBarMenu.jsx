import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';

class NavBarMenu extends Component {
	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<nav className="menuBar">
				<div className="logo">
					<NavLink exact to='/' className="nav-link" href="#">
						<img src={require('../../assets/images/imagesFooter/a.jpg')} 
						style={{ width: "100%" }} 
						alt={require('../../assets/images/imagesFooter/img6.jpg')}/>
					</NavLink>
				</div>
				<div className="menuCon">
					<div className="leftMenu">
						<LeftMenu />
					</div>
					<div className="rightMenu">
						<RightMenu />
					</div>
					<Button className="barsMenu" type="primary" onClick={this.showDrawer}>
						<span className="barsBtn"></span>
					</Button>
					<Drawer
						title="Basic Drawer"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						<LeftMenu />
						<RightMenu />
					</Drawer>
				</div>
			</nav>
		);
	}
}

export default NavBarMenu;
