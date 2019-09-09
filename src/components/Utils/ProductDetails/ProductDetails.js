import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ProductDetails.scss'



export default class ProductDetails extends Component {
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
									this.props.products.filter((product) => product.id.toString() === this.props.match.params.productId).map(product => {
										return (
											<div className="flex-container">
												<div className="col-xs-12 col-sm-6 col-md-6">
													<div className="product-box">
														<div className="photo">
															<a src="product-details.html">
																<img src={product.img} alt={product.alt}/>
															</a>
															<div className="sale">Select</div>
															<div className="buttons">
																<a className="btn-main-small box-button">
																	<Link className="box-button" to={product.previousPage}>CLOSE</Link>
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
															<div className="price">
																<div className="btn-main-small price">$ {product.price}</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xs-12 col-sm-6 col-md-6">
													<label className="trigger">
														<input type="checkbox" class="checkbox checkbox--red"/> Show additional information
														<span className="msg">
															<h4>We'll provide help for:</h4>
															<ul>
																<li>Preparing income for last and currentt year</li>
																<li>Preparing depreciation write-offs</li>
																<li>Contact between accounting and notary</li>
																<li>Fast documents transfering</li>
																<li>Support for specific measures</li>
																<li>You can use a discount code: "ZXCVBNM"</li>
															</ul>
														</span>
													</label>
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
