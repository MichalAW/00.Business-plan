import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import ProductDetails from '../../Utils/ProductDetails/ProductDetails';
import ShoppingCart from '../../../components/Utils/ShoppingCart/ShoppingCart';
import Build from './Products/Build/Build';
import Furnishings from './Products/Furnishings/Furnishings';
import Installation from './Products/Installation/Installation';
import Machine from './Products/Machine/Machine';

import house from '../../../images/house.jpg';
import werehouse from '../../../images/werehouse.jpg';
import hotel from '../../../images/hotel.jpg';
import cowshed from '../../../images/cowshed.jpg';
import car from '../../../images/car.jpg';
import tractor from '../../../images/tractor.jpg';
import factory from '../../../images/factory.jpg';
import forklift from '../../../images/forklift.jpg';
import gas from '../../../images/gas.jpg';
import electric from '../../../images/electric.jpg';
import security from '../../../images/security.jpg';
import satelite from '../../../images/satelite.jpg';
import forHouse from '../../../images/forHouse.jpg';
import forOffice from '../../../images/forOffice.jpg';
import forPublic from '../../../images/forPublic.jpg';
import forShop from '../../../images/forShop.jpg';

const products = [{
		id: 1,
		name: "House",
		price: 10.00,
		img: house,
		alt: house,
		previousPage: "/build",
	},
	{
		id: 2,
		name: "Werehouse",
		price: 20.00,
		img: werehouse,
		alt: werehouse,
		previousPage: "/build",
	},
	{
		id: 3,
		name: "Hotel",
		price: 40.00,
		img: hotel,
		alt: hotel,
		previousPage: "/build",
	},
	{
		id: 4,
		name: "Cowshed",
		price: 30.00,
		img: cowshed,
		alt: cowshed,
		previousPage: "/build",
	},
	{
		id: 5,
		name: "ForHouse",
		price: 10.00,
		img: forHouse,
		alt: forHouse,
		previousPage: "/furnishings",
	},
	{
		id: 6,
		name: "ForOffice",
		price: 30.00,
		img: forOffice,
		alt: forOffice,
		previousPage: "/furnishings",
	},
	{
		id: 7,
		name: "ForPublic",
		price: 40.00,
		img: forPublic,
		alt: forPublic,
		previousPage: "/furnishings",
	},
	{
		id: 8,
		name: "ForShop",
		price: 20.00,
		img: forShop,
		alt: forShop,
		previousPage: "/furnishings",
	},
	{
		id: 9,
		name: "Gas",
		price: 20.00,
		img: gas,
		alt: gas,
		previousPage: "/installation",
	},
	{
		id: 10,
		name: "Electric",
		price: 10.00,
		img: electric,
		alt: electric,
		previousPage: "/installation",
	},
	{
		id: 11,
		name: "Security",
		price: 40.00,
		img: security,
		alt: security,
		previousPage: "/installation",
	},
	{
		id: 12,
		name: "Satelite",
		price: 30.00,
		img: satelite,
		alt: satelite,
		previousPage: "/installation",
	},
	{
		id: 13,
		name: "Car",
		price: 10.00,
		img: car,
		alt: car,
		previousPage: "/machine",
	},
	{
		id: 14,
		name: "Tractor",
		price: 20.00,
		img: tractor,
		alt: tractor,
		previousPage: "/machine",
	},
	{
		id: 15,
		name: "Factory",
		price: 40.00,
		img: factory,
		alt: factory,
		previousPage: "/machine",
	},
	{
		id: 16,
		name: "Forklift",
		price: 30.00,
		img: forklift,
		alt: forklift,
		previousPage: "/machine",
	}
]

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.onClickAddProductToCart= this.onClickAddProductToCart.bind(this);
		this.state = {
			sort: 'sort',

		}
	}

	onClickAddProductToCart(product) {
		this.props.onClickAddProductToCart(product);
	}

	onChangeSort(sortName) {
		this.setState({sort: sortName})
	}

	getSortedProducts() {
		switch (this.state.sort) {
			case 'sort':
				return products
			case 'lowest':
				return products.sort((product1, product2) => {
					if (product1.price < product2.price)
						return -1;
					return 1
				})
			case 'highest':
				return products.sort((product1, product2) => {
					if (product1.price > product2.price)
						return -1;
					return 1
				})
			case 'a-z':
				return products.sort((product1, product2) => {
					if (product1.name[0] < product2.name[0])
						return -1;
					return 1
				})
			case 'z-a':
				return products.sort((product1, product2) => {
					if (product1.name[0] > product2.name[0])
						return -1;
					return 1
				})
			default:
				return products;
		}
	}

  	render() {

		return (
			<div>
				<BrowserRouter>
					<MainNavigation>
						<Switch>
							<Route exact path="/" render={()=><Build products={this.getSortedProducts().filter((product) => product.previousPage === "/build" )} onClickAddProductToCart={this.onClickAddProductToCart}/>}/>
							<Route exact path="/build" render={()=><Build products={this.getSortedProducts().filter((product) => product.previousPage === "/build" )} onClickAddProductToCart={this.onClickAddProductToCart}/>}/>
							<Route exact path="/product/:productId" render={(props)=><ProductDetails {...props}products={products} onClickAddProductToCart={this.onClickAddProductToCart}/>}/>
							<Route exact path="/furnishings" render={()=><Furnishings products={this.getSortedProducts().filter((product) => product.previousPage === "/furnishings" )} onClickAddProductToCart={this.onClickAddProductToCart}/>}/>
							<Route exact path="/installation" render={()=><Installation products={this.getSortedProducts().filter((product) => product.previousPage === "/installation" )} onClickAddProductToCart={this.onClickAddProductToCart}/>}/>
							<Route exact path="/machine" render={()=><Machine products={this.getSortedProducts().filter((product) => product.previousPage === "/machine" )} onClickAddProductToCart={this.onClickAddProductToCart}/>}/>
							<Route exact path="/cart" render={()=><ShoppingCart products={this.getSortedProducts().filter((product) => product.previousPage === "/cart" )} onClickAddProductToCart={this.onClickAddProductToCart}  refreshProductCart={this.props.refreshProductCart}/>}/>
						</Switch>
					</MainNavigation>
				</BrowserRouter>
			</div>
		)
	}
}
