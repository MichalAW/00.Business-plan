/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import DetailsProduct from '../../../../../containers/RouteTransition/DetailsProduct/DetailsProduct';
import './Build.scss';
import house from '../../../../../images/house.jpg';
import werehouse from '../../../../../images/werehouse.jpg';
import hotel from '../../../../../images/hotel.jpg';
import cowshed from '../../../../../images/cowshed.jpg';
import '../../../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const RouteContainer = posed.div({
	enter: { opacity: 1, delay: 300, beforeChildren: true },
	exit: { opacity: 0 }
});

const products = [
	{
		name: "House",
		price: "10.00",
		img: house,
	},
	{
		name: "Werehouse",
		price: "20.00",
		img: werehouse,
	},
	{
		name: "Hotel",
		price: "40.00",
		img: house,
	},
	{
		name: "Cowshed",
		price: "30.00",
		img: cowshed,
	}
]

export default class Build extends Component {
	render() {
		return (
			<Route
				render={({ location }) => (
					<section className="section--product">
						<div className="container">
							<div className="row items_active show" id="chair">
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
									<div className="product-box">
										<div className="photo">
											<a src="product-details.html">
												<img src={house} alt="house"/>
											</a>
											<div className="sale">Select</div>
											<div className="buttons">
												<a src="#" className="btn-main-small box-button">
													<Link className="box-button" to="/DetailPageComponent">Quick View</Link>
												</a>
												<a src="#" className="btn-main-small box-button">
													<i className="fa fa-shopping-basket"></i>
													ADD TO CART
												</a>
												<PoseGroup>
													<RouteContainer key={location.key}>
														<Switch location={location}>
															<Route exact path="/DetailsProduct" component={DetailsProduct}/>
														</Switch>
													</RouteContainer>
												</PoseGroup>
											</div>
										</div>
										<div className="content">
											<h5>House</h5>
											<div className="stars">
												<span className="full star"></span> <span className="full star"></span>
												<span className="star"></span> <span className="star"></span>
												<span className="star"></span>
											</div>
										</div>
										<div className="line"></div>
										<div className="actions">
											<div className="outlines">
												<a src="#" className="btn-outline active"><i className="far fa-heart"></i></a>
												<a src="#" className="btn-outline"><i className="fas fa-exchange-alt"></i></a>
											</div>
											<div className="price"><div className="btn-main-small price">$ 10.00</div></div>
										</div>
									</div>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
									<div className="product-box">
									<div className="photo">
										<a src="product-details.html">
											<img src={werehouse} alt="werehouse"/>
										</a>
										<div className="sale">Select</div>
										<div className="buttons">
											<a src="#" className="btn-main-small box-button">Quick View</a>
											<a src="#" className="btn-main-small box-button">
												<i className="fa fa-shopping-basket"></i> ADD TO CART
											</a>
										</div>
									</div>
									<div className="content">
										<h5>Werehouse</h5>
										<div className="stars">
											<span className="full star"></span> <span className="full star"></span>
											<span className="star"></span> <span className="star"></span>
											<span className="star"></span>
										</div>
									</div>
									<div className="line"></div>
										<div className="actions">
											<div className="outlines">
												<a src="#" className="btn-outline">
													<i className="far fa-heart"></i>
												</a>
												<a src="#" className="btn-outline active">
													<i className="fas fa-exchange-alt"></i>
												</a>
											</div>
											<div className="price"><div className="btn-main-small price">$ 20.00</div></div>
										</div>
									</div>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
									<div className="product-box">
										<div className="photo">
											<a src="product-details.html">
												<img src={hotel} alt="hotel"/>
											</a>
											<div className="sale">Select</div>
												<div className="buttons">
													<a src="#" className="btn-main-small box-button">Quick View</a>
													<a src="#" className="btn-main-small box-button">
												<i className="fa fa-shopping-basket"></i> ADD TO CART</a>
											</div>
										</div>
										<div className="content">
											<h5>Hotel</h5>
											<div className="stars">
												<span className="full star"></span> <span className="full star"></span>
												<span className="star"></span> <span className="star"></span>
												<span className="star"></span>
											</div>
										</div>
										<div className="line"></div>
										<div className="actions">
											<div className="outlines">
												<a src="#" className="btn-outline active">
													<i className="far fa-heart"></i>
												</a>
												<a src="#" className="btn-outline">
													<i className="fas fa-exchange-alt"></i>
												</a>
											</div>
											<div className="price">
												<div className="btn-main-small price">$ 40.00</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
									<div className="product-box">
										<div className="photo">
											<a src="product-details.html">
												<img src={cowshed} alt="cowshed"/>
											</a>
											<div className="sale">salect</div>
											<div className="buttons">
												<a src="#" className="btn-main-small box-button">Quick View</a>
												<a src="#" className="btn-main-small box-button">
													<i className="fa fa-shopping-basket"></i>
													ADD TO CART
												</a>
											</div>
										</div>
										<div className="content">
											<h5>Cowshed</h5>
											<div className="stars">
												<span className="full star"></span> <span className="full star"></span>
												<span className="star"></span> <span className="star"></span>
												<span className="star"></span>
											</div>
										</div>
									<div className="line"></div>
										<div className="actions">
											<div className="outlines">
												<a src="#" className="btn-outline active">
													<i className="far fa-heart"></i>
												</a>
												<a src="#" className="btn-outline">
													<i className="fas fa-exchange-alt"></i>
												</a>
											</div>
											<div className="price">
												<div className="btn-main-small price">$ 30.00</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
			/>
		)
	}
}
