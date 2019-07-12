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
									<a href="#">USD <i className="fas fa-caret-down"></i></a>
								</li>
								<li>
									<a href="#">English <i className="fas fa-caret-down"></i></a>
								</li>
								<li>
									<a href="#">Help <i className="fas fa-caret-down"></i></a>
								</li>
							</ul>
						</div>
						<div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 top-bar-mobile-user text-right">
							<ul>
								<li>
									<a href="#"><i className="fas fa-user"></i>
									<p>Login</p></a>
								</li>
								<li>
									<a href="#">
									<i className="fas fa-lock"></i>
									<p>Register</p></a>
								</li>
								<li>
									<a href="#"><i className="fas fa-bars"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
