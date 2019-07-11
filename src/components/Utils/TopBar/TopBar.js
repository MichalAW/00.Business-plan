import React, { Component } from 'react'

export default class Select extends Component {
	render() {
		return (
      <section class="top-bar">
				<div class="container">
					<div class="row">
						<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 top-bar-mobile-lang text-left">
							<ul>
								<li>
									<a href="#">USD <i class="fas fa-caret-down"></i></a>
								</li>
								<li>
									<a href="#">English <i class="fas fa-caret-down"></i></a>
								</li>
								<li>
									<a href="#">Help <i class="fas fa-caret-down"></i></a>
								</li>
							</ul>
						</div>
						<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 top-bar-mobile-user text-right">
							<ul>
								<li>
									<a href="#"><i class="fas fa-user"></i>
									<p>Login</p></a>
								</li>
								<li>
									<a href="#">
									<i class="fas fa-lock"></i>
									<p>Register</p></a>
								</li>
								<li>
									<a href="#"><i class="fas fa-bars"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
