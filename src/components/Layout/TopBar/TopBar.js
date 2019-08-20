import React, { Component } from 'react'

export default class Topbar extends Component {
	render() {
		return (
			<section className="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 top-bar-mobile-lang text-left">
							<ul>
								<li>
									PLN<i className="fas fa-caret-down"></i>
								</li>
								<li>
									English<i className="fas fa-caret-down"></i>
								</li>
								<li>
									Help<i className="fas fa-caret-down"></i>
								</li>
							</ul>
						</div>
						<div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 top-bar-mobile-user text-right">
							<ul>
								<li>
								<i className="fas fa-user"></i>
									<p>Login</p>
								</li>
								<li>
									<i className="fas fa-lock"></i>
									<p>Register</p>
								</li>
								<li>
									<i className="fas fa-bars"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
