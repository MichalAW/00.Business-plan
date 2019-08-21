import React, { Component } from 'react';
import './Footer.scss';
import cards from '../../../images/cards.png';

export default class Footer extends Component {
	render() {
		return (
			<section className="Home">
				<footer>
				<div className="footer-menu">
					<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
						<div className="menu-wrapper">
							<h6>Information</h6>
							<ul>
							<li><a src="#">About us</a></li>
							<li><a src="#">Policy</a></li>
							<li><a src="#">Conditions</a></li>
							<li><a src="#">Online support</a></li>
							</ul>
						</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
						<div className="menu-wrapper">
							<h6>My account</h6>
							<ul>
							<li><a src="#">Login</a></li>
							<li><a src="#">My cart</a></li>
							<li><a src="#">Wishlist</a></li>
							<li><a src="#">Checkout</a></li>
							</ul>
						</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
						<div className="menu-wrapper">
							<h6>Information</h6>
							<ul>
							<li><a src="#">Specials</a></li>
							<li><a src="#">New products</a></li>
							<li><a src="#">Best Sellers</a></li>
							<li><a src="#">Out Stores</a></li>
							</ul>
						</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
						<div className="menu-wrapper">
							<h6>Orders</h6>
							<ul>
							<li><a src="#">Payment options</a></li>
							<li><a src="#">Shipping and delivery</a></li>
							<li><a src="#">Returns</a></li>
							<li><a src="#">Shipping</a></li>
							</ul>
						</div>
							<img src={cards} alt="cards"/>
						</div>
					</div>
					</div>
				</div>
				<div className="bottom-bar">
					<div className="container">
					<div className="row align-items-center">
						<div className="col copyright text-center">
						<p>©Copyright 2019 Wanta Michał | All Rights Reserved</p>
						</div>
						<div className="col socialmedia text-right">
						<ul>
							<li>
							<a src="#"><i className="fab fa-twitter"></i></a>
							</li>
							<li>
							<a src="#"><i className="fab fa-facebook-f"></i></a>
							</li>
							<li>
							<a src="#"><i className="fab fa-youtube"></i></a>
							</li>
							<li>
							<a src="#"><i className="fab fa-google-plus-g"></i></a>
							</li>
							<li>
							<a src="#"><i className="fab fa-linkedin-in"></i></a>
							</li>
							<li>
							<a src="#"><i className="fab fa-pinterest-p"></i></a>
							</li>
						</ul>
						</div>
					</div>
					</div>
				</div>
				</footer>
			</section>
		)
	}
};

