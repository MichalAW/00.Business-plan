// VARIABLES
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProductDetails from '../../Layout/Main/Main';

import './ShoppingCart.scss';



export default class ShoppingCart extends Component {

	constructor(props) {
		super(props);
		let products = JSON.parse(localStorage.getItem('products'));

		this.removeSingleProduct = this.removeSingleProduct.bind(this);
		this.addProductToCart = this.addProductToCart.bind(this)

		if (!products) {
			products = []
		};

		this.state = {
			cart: products
		}
	}

	mergeCart(cart) {
		let newMergeCart = [];
		cart.map(product => {
			const productNewMergeCartIndex = newMergeCart.findIndex(p => p.id === product.id);
			const productCount = cart.filter(p => p.id === product.id).length;
			if ( productNewMergeCartIndex === -1 ) {
				newMergeCart.push({
					...product, count: productCount
				})
			};
		});
		return newMergeCart
	}

	removeProductFromCart(id) {
		const newCart = this.state.cart.filter(p => p.id !== id)

		localStorage.setItem('products', JSON.stringify(newCart))

		this.props.refreshProductCart()
		this.setState({
			cart: newCart
		})
	}

	addProductToCart(id) {
		const newProduct = this.state.cart.find(p => p.id === id)
		const newCart = [...this.state.cart, newProduct]

		localStorage.setItem('products', JSON.stringify(newCart))

		this.props.refreshProductCart()
		this.setState({
			cart: newCart
		})
	}

	removeSingleProduct(id) {
		const productToRemoveIndex = this.state.cart.findIndex(p => p.id === id);
		const newCart = this.state.cart;
		newCart.splice(productToRemoveIndex, 1);

		localStorage.setItem('products', JSON.stringify(newCart))

		this.props.refreshProductCart()
		this.setState({
			cart: newCart
		})
	}

	render () {
		console.log(this.state.cart)
		let name = '';
		let currentImport = '';
		let hex = '';

		return (
			<div>
				{this.mergeCart(this.state.cart).map((product, index) => {
					return (
						<div>
							<div className="cart-container">
								<li key={index}>
									<span className="cartColor" style={{ background: hex }}>{product.name}</span>
									<span className="cartColorQty"> x{product.count}</span>
									<button onClick={() => this.addProductToCart(product.id)}>
									➕
									</button>
									<button onClick={() => this.removeSingleProduct(product.id)}>
									➖
									</button>
									<span className="cartColorImport"> ${currentImport}</span>
									<button onClick={() => this.removeProductFromCart(product.id)}>🗑</button>
								</li>
							</div>
						</div>
					)

				})}
				<div className="contact-background">
					<section className="container">
						<div className="contact">
							<div className="row">
								<div className="col-12">
									<h6>Fill all gaps</h6>
									<p>Write your name, e-mail adress, specifed subject and special request if it's needed,
									then select "Buy"</p>
								</div>
							</div>
							<div className="container">
								<form>
									<div className="input">
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="name">
													<label for="inputYourName"></label>
													<input type="text" className="form-control" id="inputYourName" placeholder="YOUR NAME*" required=""></input>
												</div>
												<div className="email">
													<label for="exampleInputEmail1"></label>
													<input type="email" className="form-control" id="inputEmail" placeholder="YOUR E-MAIL*" required=""></input>
												</div>
												<div className="subject">
													<label for="inputSubject"></label>
													<input type="text" className="form-control" id="inputSubject" placeholder="SUBJECT" required=""></input>
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<label for="message"></label>
													<textarea type="text" form="usrform" className="form-control status-box" rows="6" placeholder="YOUR REQUEST*" required=""></textarea>
												</div>
											</div>
										</div>
									</div>
									<div className="input btn-background">
										<div className="row">
											<div className="col-sm-12 col-xs-12">
												<div className="form-group">
													<input className="btn btn-send" type="submit" value="BUY"></input>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</section>
				</div>
			</div>

				);

				// return (
				// 	<div className="Cart">
				// 	<ul>{purchases.length === 0 ? "empty (:" : purchases}</ul>
				// 	<div className="cartTotal">$ {total}</div>
				// 	</div>
				// );

	}
}
