/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import './Installation.scss';
import gas from '../../../../images/gas.jpg';
import electric from '../../../../images/electric.jpg';
import security from '../../../../images/security.jpg';
import satelite from '../../../../images/satelite.jpg';
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
										<img src={gas} alt="gas"/>
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
									<h5>Gas Installation</h5>
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
									<img src={electric} alt="electric"/>
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
								<h5>Electric Installation</h5>
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
										<img src={security} alt="security"/>
									</a>
									<div className="sale">sale</div>
										<div className="buttons">
											<a src="#" className="btn-main-small box-button">Quick View</a>
											<a src="#" className="btn-main-small box-button">
										<i className="fa fa-shopping-basket"></i> ADD TO CART</a>
									</div>
								</div>
								<div className="content">
									<h5>Security Installation</h5>
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
										<img src={satelite} alt="satelite"/>
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
									<h5>Satelite Installation</h5>
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
					<div className="row items_active" id="dining">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
							<div className="product-box">
							<div className="photo">
								<a src="product-details.html">
									<img
										src="https://urzadzaj24.pl/2919-tm_large_default/%C5%82%C3%B3%C5%BCko-deko.jpg"
										alt="duza sofa"
									/>
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
								<h5>Aenean Ru Bristique</h5>
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
										<img
											src="https://urzadzaj24.pl/3093-tm_large_default/%C5%82%C3%B3%C5%BCko-skandynawskie-borys-2.jpg"
											alt="skandynawskie meble"
										/>
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
									<h5>Aenean Ru Bristique</h5>
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
									<div className="price"><div className="btn-main-small price">$ 30.00</div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
