import React from "react";

import { PanelBar } from "../PanelBar/PanelBar";

export class MainNavigation extends React.Component {
	render() {
		return (
			<div className="container">
				<PanelBar/>
				{this.props.children}
			</div>
		);
	}
}
