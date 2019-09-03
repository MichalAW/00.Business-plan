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
											<div>
												<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
													<div className="product-box">
														<div className="photo">
															<a src="product-details.html">
																<img src={product.img} alt={product.alt}/>
															</a>
															<div className="sale">Select</div>
															<div className="buttons">
																<a src="#" className="btn-main-small box-button">
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
															<div className="post-summary">
																<h2>More Details</h2>
																<p>We'll provide support for...</p>
																<ul>
																	<li>Preparing income for last and currentt year</li>
																	<li>Preparing depreciation write-offs</li>
																	<li>Contact between accounting and notary</li>
																</ul>
															</div>
														</div>
														<div className="line"></div>
														<div className="actions">
															<div className="outlines">
																<a src="#" className="btn-outline active"><i className="far fa-heart"></i></a>
																<a src="#" className="btn-outline"><i className="fas fa-exchange-alt"></i></a>
															</div>
															<div className="price">
																<div className="btn-main-small price">$ {product.price}</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
