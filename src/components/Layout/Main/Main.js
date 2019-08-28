import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import DetailsProduct from '../../../../src/containers/RouteTransition/DetailsProduct/DetailsProduct';
import Build from './Products/Build/Build';
import Furnishings from './Products/Furnishings/Furnishings';
import Installation from './Products/Installation/Installation';
import Machine from './Products/Machine/Machine';
export default class Main extends Component {
	constructor(props) {
		super(props);
		this.onClickAddProductToCart= this.onClickAddProductToCart.bind(this);
	}

	onClickAddProductToCart(product) {
		this.props.onClickAddProductToCart(product);
	}
  	render() {
		return (
			<div>
				<BrowserRouter>
					<MainNavigation>
						<Switch>
							<Route exact path={"/build"} render={()=><Build onClickAddProductToCart={this.onClickAddProductToCart}/>}/>
							<Route exact path="/product" component={DetailsProduct}/>
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
