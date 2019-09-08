import React from "react";

import { PanelBar } from "../PanelBar/PanelBar";

export class MainNavigation extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div className="container">
				<PanelBar/>
				{this.props.children}
			</div>
		);
	}
}
