import React, { Component } from 'react'

export default class Select extends Component {
	render() {
		return (
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
								<div class="category form">
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
		)
	}
}

