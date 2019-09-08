/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

import { Route,  Link} from 'react-router-dom';

import './Midbar.scss';

import logo from '../../../images/logo.jpg';

import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Midbar extends Component {
	constructor(props) {
		super(props);
		this.addProductToCart = this.addProductToCart.bind(this);
		this.refreshProductCart=this.refreshProductCart.bind(this);

		let products = JSON.parse(localStorage.getItem('products'));

		if (!products) {
			products = []
		};

		this.state = {
			cartCount: products.length
		}
	}

	refreshProductCart() {
		let products = JSON.parse(localStorage.getItem('products'));

		if (!products) {
			products = []
		};

		this.setState({
			cartCount: products.length
		})
	}

	addProductToCart(product) {
		let products = JSON.parse(localStorage.getItem('products'));

		if (!products) {
			products = []
		};

		localStorage.setItem('products', JSON.stringify([...products, product]))
		this.setState({
			cartCount: this.state.cartCount + 1
		})
	}

	render() {
		return (
			<section className="mid-bar">
				<div className="company-claim">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 phone-number">
								<p>
									<i className="fas fa-mobile-alt"></i>
									+48 665 631 399
								</p>
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center company-claim-logo">
								<img src={logo} alt="Logo" />
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 cart">
								<a href={"/cart/"}>
									<div className="cart-box">

										<div className="cart-icon">
											<i className="fas fa-shopping-basket"></i>
										</div>
										<div className="cart-counter">
											{this.state.cartCount}
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
