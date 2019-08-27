import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import Build from './Products/Build/Build';
import Furnishings from './Products/Furnishings/Furnishings';
import Installation from './Products/Installation/Installation';
import Machine from './Products/Machine/Machine';
export default class Main extends Component {
  	render() {
		return (
			<div>
				<BrowserRouter>
					<MainNavigation>
						<Switch>
							<Route exact path={"/build"} component={Build}/>
							<Route exact path={"/furnishings"} component={Furnishings}/>
							<Route exact path={"/installation"} component={Installation}/>
							<Route exact path={"/machine"} component={Machine}/>
						</Switch>
					</MainNavigation>
				</BrowserRouter>
			</div>
		)
	}
}
