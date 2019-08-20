import React, { Component } from 'react'

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
									2345 - 3560 - 222
								</p>
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center company-claim-logo">
								LOGO
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
