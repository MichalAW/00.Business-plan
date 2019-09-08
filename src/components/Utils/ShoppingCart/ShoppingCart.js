// VARIABLES
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import ProductDetails from '../../Layout/Main/Main';
import { Link } from 'react-router-dom';
import './ShoppingCart.scss';

export default class ShoppingCart extends Component {

	constructor(props) {
		super(props);

		let products = JSON.parse(localStorage.getItem('products'));
 		this.toggle = this.toggle.bind(this);
		this.removeSingleProduct = this.removeSingleProduct.bind(this);
		this.addProductToCart = this.addProductToCart.bind(this);
		this.onClickBuy = this.onClickBuy.bind(this);
		this.onChangeDiscount = this.onChangeDiscount.bind(this);

		if (!products) {
			products = []
		};

		this.state = {
			cart: products,
			modal: false,
			discount: 1
		}
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
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

	sumUpProductPrice() {

		if ( this.state.cart.length === 0 ) {
			return 0
		}

		return this.state.discount * this.state.cart.map((product) => product.price).reduce((product1, product2) => product1 + product2)
	}

	getBackButton = () => (
		<Link to='/' className='back-button'>
			&lt; Back to shop
		</Link>
	);

	onClickBuy() {

		this.toggle();
		this.setState({
			cart: []
		})

		localStorage.setItem('products', JSON.stringify([]))
		this.props.refreshProductCart()
	}

	onChangeDiscount(event) {

		if ( event.target.value === "ZXCVBNM" ) {
			this.setState({
				discount: 0.8
			})
		} else {
			this.setState({
				discount: 1
			})
		}
	}

	render () {

		return (
			<div className="section-cart">
				{this.mergeCart(this.state.cart).map((product, index) => {
					return (
						<div>
							<div className="cart-container">
								<ul>
									<li key={index}>
										{ /**<img src= {product.img}></img> */}
										<span className="cartColor">{product.name}</span>
										<span className="cartColorQty"> x{product.count}</span>
										<button onClick={() => this.addProductToCart(product.id)}>
										➕
										</button>
										<button onClick={() => this.removeSingleProduct(product.id)}>
										➖
										</button>
										<span className="cartColorImport"> ${product.price}</span>
										<button onClick={() => this.removeProductFromCart(product.id)}>🗑</button>
									</li>
								</ul>
							</div>
						</div>
					)

				})}
				<div className="total-price">TOTAL PRICE : $ {this.sumUpProductPrice()} </div>
				<div className="contact-background">
					<div className='back-container'>
						<Link to={"/build"}>
							<button className="back-button">back to shop</button>
						</Link>
					</div>
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
											<div className="col-sm-6 col-xs-6">
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
													<input type="text" className="form-control" id="inputDiscount" placeholder="DISCOUNT CODE*" required="" onChange={this.onChangeDiscount} ></input>
												</div>
											</div>
											<div className="col-sm-6 col-xs-6">
												<div className="form-group">
													<label for="message"></label>
													<textarea type="text" form="usrform" className="form-control status-box" rows="6" placeholder="YOUR REQUEST*" required=""></textarea>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</section>
					<div>
						<Button color="danger" onClick={this.toggle}>Submit{this.props.buttonLabel}</Button>
						<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}>Thank you for buy</ModalHeader>
						<ModalBody>
							Lorem ipsum
							<div>TOTAL PRICE : $ {this.sumUpProductPrice()} </div>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={this.onClickBuy}>Buy</Button>{' '}
							<Button color="secondary" onClick={this.toggle}>Quit</Button>
						</ModalFooter>
						</Modal>
					</div>
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
