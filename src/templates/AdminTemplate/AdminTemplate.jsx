import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import SidebarAdmin from "../../Components/SidebarAdmin/SidebarAdmin"
import HeaderAdmin from "../../Components/HeaderAdmin/HeaderAdmin"
import FooterAdmin from "../../Components/FooterAdmin/FooterAdmin"

const AdminLayout = props => {
	return (
		<Fragment>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col">
						<HeaderAdmin />
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<SidebarAdmin />
					</div>
					<div className="col-9">{props.children}</div>
				</div>
				<div className="row">
					<div className="col">
						<FooterAdmin />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export const AdminTemplate = ({ Component, ...props }) => (
	<Route
		{...props}
		render={propComponent => (
			<AdminLayout>
				<Component {...propComponent} />
			</AdminLayout>
		)}
	/>
)
