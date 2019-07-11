import React, { Component } from 'react'

export default class Select extends Component {
	render() {
		return (
      <section class="mid-bar">
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
      </section>
		)
	}
}

