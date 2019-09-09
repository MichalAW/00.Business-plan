import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

export default class Build extends Component {
	constructor(props) {
		super(props);
		this.onClickAddToCart = this.onClickAddToCart.bind(this);
	}

	onClickAddToCart(product) {
		this.props.onClickAddProductToCart(product);
	}

	render() {

		return (
			<Route
				render={({ location }) => (
					<section className="section--product">
						<div className="container">
							<div className="row items_active show" id="chair">
								{
									this.props.products.map(product => {
										return (
											<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
												<div className="product-box">
													<div className="photo">
														<a src="product-details.html">
															<img src={product.img} alt={product.alt}/>
														</a>
														<div className="sale">Select</div>
														<div className="buttons">
															<a className="btn-main-small box-button">
																<Link className="box-button" to={"/product/" + product.id}>Quick View</Link>
															</a>
															<a onClick={() => this.onClickAddToCart(product)} className="btn-main-small box-button">
																<i className="fa fa-shopping-basket"></i>
																ADD TO CART
															</a>
														</div>
													</div>
													<div className="content">
														<h5>{product.name}</h5>
													</div>
													<div className="line"></div>
													<div className="actions">
														<div className="outlines">
															<div className="btn-outline active"><i className="far fa-heart"></i></div>
															<div className="btn-outline"><i className="fas fa-exchange-alt"></i></div>
														</div>
														<div className="price"><div className="btn-main-small price">$ {product.price}</div></div>
													</div>
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
					</section>
				)}
			/>
		)
	}
}
