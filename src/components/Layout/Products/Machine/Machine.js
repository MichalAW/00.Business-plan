/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import './Machine.scss';
import car from '../../../../images/car.jpg';
import tractor from '../../../../images/tractor.jpg';
import factory from '../../../../images/factory.jpg';
import forklift from '../../../../images/forklift.jpg';
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
										<img src={car} alt="car"/>
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
									<h5>Car</h5>
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
									<img src={tractor} alt="tractor"/>
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
								<h5>Tractor</h5>
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
										<img src={factory} alt="factory"/>
									</a>
									<div className="sale">sale</div>
										<div className="buttons">
											<a src="#" className="btn-main-small box-button">Quick View</a>
											<a src="#" className="btn-main-small box-button">
										<i className="fa fa-shopping-basket"></i> ADD TO CART</a>
									</div>
								</div>
								<div className="content">
									<h5>For Factory</h5>
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
										<img src={forklift} alt="forklift"/>
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
									<h5>Forklift</h5>
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
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
						<div className="product-box">
							<div className="photo">
								<a src="product-details.html">
									<img
										src="https://urzadzaj24.pl/3103-tm_large_default/klasyczne-%C5%82%C3%B3%C5%BCko-tapicerowane-king.jpg"
										alt="tapicerowane"
									/>
								</a>
								<div className="sale">sale</div>
								<div className="buttons">
									<a src="#" className="btn-main-small box-button">Quick View</a>
									<a src="#" className="btn-main-small box-button">
										<i className="fa fa-shopping-basket"></i> ADD TO CART</a>
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
									src="https://urzadzaj24.pl/3128-tm_large_default/%C5%82%C3%B3%C5%BCko-w-stylu-w%C5%82oskim-amon.jpg"
									alt="lozko w stylu wloskim"
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
					</div>
				</div>
			</section>
		)
	}
}
