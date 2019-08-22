/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import './Build.scss';
import house from '../../../../images/house.jpg';
import werehouse from '../../../../images/werehouse.jpg';
import hotel from '../../../../images/hotel.jpg';
import cowshed from '../../../../images/cowshed.jpg';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Select extends Component {
	render() {
		return (
			<section className="section--product">
				<div className="container">
					<div className="row items_active show" id="chair">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
							<div className="product-box">
								<div className="photo">
									<a src="product-details.html">
										<img src={house} alt="cards"/>
									</a>
									<div className="sale">sale</div>
									<div className="buttons">
										<a src="#" className="btn-main-small box-button">Quick View</a>
										<a src="#" className="btn-main-small box-button">
											<i className="fa fa-shopping-basket"></i>
											ADD TO CART
										</a>
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
									<div className="old-price">$ 35.00</div>
									<div className="price"><div className="btn-main-small price">$ 30.00</div></div>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
							<div className="product-box">
							<div className="photo">
								<a src="product-details.html">
									<img src={werehouse} alt="werehouse"/>
								</a>
								<div className="sale">sale</div>
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
									<div className="old-price">$ 35.00</div>
									<div className="price"><div className="btn-main-small price">$ 30.00</div></div>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
							<div className="product-box">
								<div className="photo">
									<a src="product-details.html">
										<img src={hotel} alt="hotel"/>
									</a>
									<div className="sale">sale</div>
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
										<div className="btn-main-small price">$ 30.00</div>
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
									<div className="sale">sale</div>
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
		)
	}
}
