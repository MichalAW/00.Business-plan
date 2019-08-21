/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import './Products.scss';
import './ProductBox.scss';

export default class Select extends Component {
	render() {
		return (
			<section className="section--products">
				<div className="container">
					<div className="panel-bar">
						<div className="row no-gutters align-items-end">
							<div className="col-auto heading"><h3>New furniture</h3></div>
							<div className="col menu">
								<ul>
									<li className="active accordion"><a src="#chair">Bed</a></li>
									<li className="accordion"><a src="#dining">Chair</a></li>
									<li className="accordion"><a src="#chair">Sofa</a></li>
									<li className="accordion"><a src="#chair">Table</a></li>
									<li className="accordion"><a src="#dining">Dining</a></li>
								</ul>
							</div>
							<div className="col-auto dots">
								<ul>
									<li><a src="#" className="active"></a></li>
									<li><a src="#"></a></li>
									<li><a src="#"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row items_active show" id="chair">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
							<div className="product-box">
								<div className="photo">
									<a src="product-details.html">
										<img
											src="https://urzadzaj24.pl/3227-large_default/kanapa-pikowana-doria-.jpg"
											alt="kanapa1"/>
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
									<div className="old-price">$ 35.00</div>
									<div className="price"><div className="btn-main-small price">$ 30.00</div></div>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
							<div className="product-box">
							<div className="photo">
								<a src="product-details.html">
								<img
									src="https://urzadzaj24.pl/1770-tm_large_default/cesar-vip-2-sofa-z-funkcja-spania.jpg"
									alt="sofa do spania"
								/></a>
								<div className="sale">sale</div>
								<div className="buttons">
									<a src="#" className="btn-main-small box-button">Quick View</a>
									<a src="#" className="btn-main-small box-button">
										<i className="fa fa-shopping-basket"></i> ADD TO CART
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
										<img
											src="https://urzadzaj24.pl/1936-tm_large_default/deram-2-wspania%C5%82a-sofa-z-funkcj%C4%85-spania.jpg"
											alt="soda czarna"
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
										<img
											src="https://urzadzaj24.pl/1321-tm_large_default/%C5%82%C3%B3%C5%BCko-drewniane-bursztyn.jpg"
											alt="lozko drewniane"
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
