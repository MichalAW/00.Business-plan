/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import './Midbar.scss';
import logo from '../../../images/logo.jpg';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Select extends Component {
	render() {
		return (
			<section className="mid-bar">
				<div className="company-claim">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 phone-number">
								<p>
									<i className="fas fa-mobile-alt"></i>
									+48 665 631 399
								</p>
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center company-claim-logo">
								<img src={logo} alt="Logo" />
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 cart">
								<div className="cart-box">
									<div className="cart-icon">
										<i className="fas fa-shopping-basket"></i>
									</div>
									<div className="cart-counter">
										0
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
