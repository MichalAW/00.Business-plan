import React, { Component } from 'react'

export default class Home extends Component {
  render() {
	return (
	<div>
		<header>
			<div class="top-bar">
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
      </div>
      <div class="mid-bar">
        <div class="company-claim">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 phone-number">
                <p><i class="fas fa-mobile-alt"></i> 2345 - 3560 - 222</p>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center company-claim-logo">
                <a href="#">LOGO</a>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 cart">
                <a href="#" class="cart-box">
                <div class="cart-icon"><i class="fas fa-shopping-basket"></i></div>
                <div class="cart-counter">0</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
			<div class="menu-bar">
				<div class="container">
					<div class="row align-items-center">
						<div class="col products-display">
							<form action="" class="search-form">
								<div class="category">
									<i class="fas fa-list-ul"></i>
									<select class="ddProducts subject">
										<option value="">Select a category</option>
										<option value="Farmer">Farmer</option>
										<option value="Enterpriser">Enterpriser</option>
										<option value="Companies">Companies</option>
										<option value="Communities">Communities</option>
									</select>
								</div>
								<div class="category">
									<i class="fas fa-list-ul"></i>
									<select class="ddProducts form">
										<option value="">Select a category</option>
										<option value="Farmer">DEMAND</option>
										<option value="Enterpriser">PIT</option>
										<option value="Companies">KPiR</option>
										<option value="Communities">ACT</option>
									</select>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
    </header>
    <footer>
      <section class="Home">
        <div class="col-auto menu">
          <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About site</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">How to use it</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
      </section>
    </footer>
	</div>
    )
  }
}
